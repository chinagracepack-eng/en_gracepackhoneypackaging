'use client';
export function ModelDetailsLink({id,model}:{id:string;model:string}) {
  return <a className="text-link" href={`#model-${id}`} aria-label={`View ${model} specifications`} onClick={()=>{
    const panel=document.getElementById(`model-${id}`);
    if(panel instanceof HTMLDetailsElement)panel.open=true;
  }}>View details ↓</a>;
}
