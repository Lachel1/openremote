#!/usr/bin/env python3

import os
from datetime import datetime, timezone

import pandas as pd
from supabase import create_client, Client

INPUT_CSV = "global_jobs.csv"

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_SECRET_KEY = os.environ.get("SUPABASE_SECRET_KEY")


def build_job_key(row):
    return f"{row['ats_source']}:{row['company']}:{row['job_id']}"


def clean_value(value):
    if pd.isna(value):
        return None

    if isinstance(value, str):
        value = value.strip()
        return value if value else None

    return value


def run():
    if not SUPABASE_URL or not SUPABASE_SECRET_KEY:
        raise RuntimeError(
            "Missing SUPABASE_URL or SUPABASE_SECRET_KEY environment variables."
        )

    if not os.path.exists(INPUT_CSV):
        raise FileNotFoundError(f"{INPUT_CSV} not found.")

    df = pd.read_csv(INPUT_CSV).fillna("")

    print(f"Jobs in {INPUT_CSV}: {len(df)}")

    # Do not publish jobs that still require manual review.
    if "needs_review" in df.columns:
        review_mask = (
            df["needs_review"]
            .astype(str)
            .str.strip()
            .str.lower()
            .isin(["true", "1", "yes"])
        )

        n_review = int(review_mask.sum())
        if n_review:
            print(f"Skipping {n_review} job(s) flagged needs_review.")

        df = df[~review_mask].copy()

    print(f"Jobs eligible for Supabase sync: {len(df)}")

    supabase: Client = create_client(
        SUPABASE_URL,
        SUPABASE_SECRET_KEY,
    )

    now = datetime.now(timezone.utc).isoformat()

    records = []

    for _, row in df.iterrows():
        record = {
            "job_key": build_job_key(row),
            "source_job_id": str(row["job_id"]),
            "company": clean_value(row["company"]),
            "source": clean_value(row["ats_source"]),
            "title": clean_value(row["title"]),
            "location_raw": clean_value(row.get("location_raw")),
            "department": clean_value(row.get("department")),
            "remote_flag": clean_value(row.get("remote_flag")),
            "published_at": clean_value(row.get("posted_date")),
            "apply_url": clean_value(row["apply_url"]),
            "description": clean_value(row.get("description")),
            "global_verified": True,
            "needs_review": False,
            "active": True,
            "last_seen_at": now,
            "updated_at": now,
        }

        records.append(record)

    if not records:
        print("No jobs to sync.")
        return

    # Mark previously synced jobs inactive first.
    # Jobs seen in this run will immediately be restored to active=True by the upsert.
    supabase.table("jobs").update(
        {
            "active": False,
            "updated_at": now,
        }
    ).eq("active", True).execute()

    # Batch the upserts so a large dataset does not become one huge request.
    batch_size = 100

    for start in range(0, len(records), batch_size):
        batch = records[start:start + batch_size]

        supabase.table("jobs").upsert(
            batch,
            on_conflict="job_key",
        ).execute()

        print(
            f"Synced jobs {start + 1}"
            f"–{min(start + batch_size, len(records))}"
        )

    print(f"✓ Supabase sync complete: {len(records)} active verified jobs.")


if __name__ == "__main__":
    run()
