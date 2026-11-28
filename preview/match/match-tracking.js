/* Match public-page measurement. No vendor requests before explicit permission. */
(function(){
 'use strict';
 const ID='1127164330210426',NAME='or_match_ads_v1';
 const DOMAIN=location.hostname==='openremote.net'||location.hostname.endsWith('.openremote.net')?'; Domain=openremote.net':'';
 const gpc=()=>navigator.globalPrivacyControl===true;
 function read(n){try{return decodeURIComponent(document.cookie.split('; ').find(v=>v.startsWith(n+'='))?.slice(n.length+1)||'');}catch{return '';}}
 function write(n,v,age){document.cookie=n+'='+encodeURIComponent(v)+'; Path=/; Max-Age='+age+'; SameSite=Lax; Secure'+DOMAIN;}
 function choice(){try{const v=JSON.parse(read(NAME));return !gpc()&&v.at<=Date.now()+60000&&Date.now()-v.at<180*86400000&&['granted','denied'].includes(v.choice)?v.choice:'denied';}catch{return 'denied';}}
 let started=false,viewed=false;
 const safe=raw=>{try{if(!raw)return true;const u=new URL(raw);return !u.username&&!u.password&&!/@|%40/i.test(u.href)&&!u.hash&&Array.from(u.searchParams).every(([k,v])=>/^(utm_(source|medium|campaign|content|term)|fbclid)$/.test(k)&&/^[a-zA-Z0-9 _.-]{0,250}$/.test(v));}catch{return false;}};
 function start(){
  if(choice()!=='granted'||!safe(location.href)||!safe(document.referrer))return;
  if(!started){
   if(!window.fbq){const q=function(){q.callMethod?q.callMethod.apply(q,arguments):q.queue.push(arguments);};q.queue=[];q.push=q;q.loaded=true;q.version='2.0';q.disablePushState=true;window.fbq=q;window._fbq=q;const s=document.createElement('script');s.async=true;s.src='https://connect.facebook.net/en_US/fbevents.js';document.head.appendChild(s);}
   fbq('set','autoConfig',false,ID);fbq('init',ID);started=true;
  }
  fbq('consent','grant');
  const params=new URL(location.href).searchParams;
  if(!read('or_match_attribution_v1')){const tags={};for(const k of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term']){const v=params.get(k);if(v&&/^[a-zA-Z0-9 _.-]{1,80}$/.test(v))tags[k]=v;}write('or_match_attribution_v1',JSON.stringify(tags),2592000);}
  const click=params.get('fbclid');if(click&&/^[a-zA-Z0-9_-]{1,250}$/.test(click))write('_fbc','fb.1.'+Date.now()+'.'+click,7776000);
  if(!viewed){fbq('track','PageView');fbq('track','ViewContent',{content_name:'OpenRemote Match',content_type:'product',content_ids:['openremote-match']});viewed=true;}
 }
 const panel=document.createElement('aside');panel.setAttribute('aria-label','Cookie preferences');panel.style.cssText='position:fixed;bottom:12px;left:12px;right:12px;max-width:640px;margin:auto;z-index:1000;background:#fff;color:#15253a;border:1px solid #ccd7e0;border-radius:12px;padding:20px;box-shadow:0 4px 30px #0003;font:14px/1.5 system-ui';
 const title=document.createElement('strong');title.textContent='Cookie preferences';panel.appendChild(title);
 const text=document.createElement('p');text.style.marginTop='8px';text.textContent='We use advertising cookies to measure how our ads perform. If you allow them, Meta receives page activity and, after payment, purchase details and a securely hashed payment email. Your CV, profile and matches are never shared.';panel.appendChild(text);
 for(const [label,value] of [['Allow','granted'],['Decline','denied']]){const b=document.createElement('button');b.textContent=label;b.style.cssText='margin:12px 16px 0 0;padding:8px 18px;border:1px solid #9caec0;border-radius:5px;background:white';b.onclick=()=>{const c=gpc()?'denied':value;write(NAME,JSON.stringify({choice:c,at:Date.now()}),15552000);panel.hidden=true;if(c==='granted')start();else{window.fbq?.('consent','revoke');for(const n of ['_fbp','_fbc','or_match_attribution_v1']){write(n,'',0);document.cookie=n+'=; Path=/; Max-Age=0; SameSite=Lax; Secure';}}};panel.appendChild(b);}
 // Keep the consent panel above the mobile offer shortcut, including after rotation.
 const shortcut=document.querySelector('.sticky-mobile');
 function placePreferences(){const h=shortcut?.getBoundingClientRect().height||0;panel.style.bottom=(h+12)+'px';panel.style.maxHeight='calc(100dvh - '+(h+24)+'px)';panel.style.overflowY='auto';}
 placePreferences();window.addEventListener('resize',placePreferences);
 if(shortcut&&typeof ResizeObserver!=='undefined')new ResizeObserver(placePreferences).observe(shortcut);
 document.body.appendChild(panel);let known=false;try{const v=JSON.parse(read(NAME));known=['granted','denied'].includes(v.choice)&&v.at<=Date.now()+60000&&Date.now()-v.at<180*86400000;}catch{}panel.hidden=known||gpc();
 const prefs=document.createElement('button');prefs.textContent='Cookie preferences';prefs.style.cssText='display:block;margin:16px auto;padding:8px 16px;background:transparent;border:0;text-decoration:underline';prefs.onclick=()=>panel.hidden=false;document.querySelector('footer')?.appendChild(prefs);
 document.querySelectorAll('a.checkout').forEach(a=>a.addEventListener('click',()=>{if(choice()!=='granted'||!viewed)return;let u;try{u=new URL(a.href);}catch{return;}if(u.origin!=='https://paystack.com'||u.pathname!=='/buy/openremote-match-iyywft')return;fbq('track','InitiateCheckout',{currency:'NGN',value:25000,content_name:'OpenRemote Match',content_ids:['openremote-match'],content_type:'product',num_items:1});}));
 start();
})();
