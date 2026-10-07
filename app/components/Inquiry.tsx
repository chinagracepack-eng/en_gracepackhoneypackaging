'use client';
import {useEffect,useId,useRef,useState} from 'react';
const FORM_HASH='s405s6l1e20v0p';
const ORIGIN='https://egracepack.wufoo.com';
export default function Inquiry({product,source,compact=false,id='inquiry',lazy=false}:{product?:string;source?:string;compact?:boolean;id?:string;lazy?:boolean}){
 const frame=useRef<HTMLIFrameElement>(null);
 const instance=useId();
 const [src,setSrc]=useState('');
 const [height,setHeight]=useState(760);
 useEffect(()=>{
  const query=new URLSearchParams(window.location.search);
  const selected=product||query.get('product')||'';
  const pageSource=[`https://gracepackhoneypackaging.com${window.location.pathname}`,selected&&`Product: ${selected}`,source,query.get('request')==='sample'?'Sample request':''].filter(Boolean).join(' | ');
  const params=new URLSearchParams({embedKey:FORM_HASH+instance.replace(/[^a-zA-Z0-9]/g,''),header:'hide',field13:pageSource,field7:''});
  setSrc(`${ORIGIN}/embed/${FORM_HASH}?${params}`);
  function resize(){frame.current?.contentWindow?.postMessage('resize',ORIGIN)}
  function receive(event:MessageEvent){
   if(event.origin!==ORIGIN||event.source!==frame.current?.contentWindow||typeof event.data!=='string')return;
   const [value,key]=event.data.split('|');const next=Number(value);
   if(key?.startsWith(FORM_HASH)&&Number.isFinite(next)&&next>0&&next<10000)setHeight(next);
   if(event.data==='formSubmitted')frame.current?.scrollIntoView({block:'center',behavior:'smooth'});
  }
  window.addEventListener('message',receive);window.addEventListener('resize',resize);
  return()=>{window.removeEventListener('message',receive);window.removeEventListener('resize',resize)};
 },[product,source,instance]);
 return <section id={id} className={`honey-inquiry${compact?' honey-inquiry-compact':''}`} aria-label="Honey packaging inquiry"><div className="honey-wufoo-container">{src&&<iframe ref={frame} src={src} title="Gracepack Honey Packaging Inquiry" height={height} loading={lazy?'lazy':'eager'} onLoad={()=>frame.current?.contentWindow?.postMessage('resize',ORIGIN)} sandbox="allow-top-navigation allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox"/>}</div></section>;
}
