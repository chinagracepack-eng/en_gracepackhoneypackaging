'use client';
import Link from 'next/link';
import {useId,useRef,useState,type ReactNode} from 'react';

export default function NavigationDetails({className,label,href,children}:{className:string;label:string;href:string;children:ReactNode}){
 const [open,setOpen]=useState(false);
 const toggle=useRef<HTMLButtonElement>(null);
 const id=useId();
 const desktopHover=()=>window.matchMedia('(min-width:1001px) and (hover:hover) and (pointer:fine)').matches;
 return <div className={className} data-open={open}
  onPointerEnter={event=>{if(event.pointerType==='mouse'&&desktopHover())setOpen(true)}}
  onPointerLeave={event=>{if(event.pointerType==='mouse'&&desktopHover())setOpen(false)}}
  onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node|null))setOpen(false)}}
  onClick={event=>{if((event.target as HTMLElement).closest('a'))setOpen(false)}}
  onKeyDown={event=>{if(event.key==='Escape'&&open){event.preventDefault();event.stopPropagation();setOpen(false);toggle.current?.focus()}}}>
  <div className="nav-group-heading"><Link href={href}>{label}</Link><button ref={toggle} type="button" className="nav-submenu-toggle" aria-label={`${open?'Close':'Open'} ${label.toLowerCase()} submenu`} aria-expanded={open} aria-controls={id} onClick={()=>setOpen(value=>!value)}><span aria-hidden="true"/></button></div>
  <div id={id} className="nav-submenu dropdown" hidden={!open}>{children}</div>
 </div>;
}
