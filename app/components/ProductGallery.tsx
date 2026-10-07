'use client';

import {useState} from 'react';
import {responsiveImageSet} from './Common';

const containerViews = [
  {key:'full',label:'Full view',detail:'full container view'},
  {key:'closure',label:'Closure detail',detail:'cap and shoulder detail'},
  {key:'body',label:'Body detail',detail:'container body and label area detail'},
  {key:'application',label:'In use',detail:'honey packaging application'}
];

const closureViews = [
  {key:'full',label:'Product family',detail:'closure family view'},
  {key:'closure',label:'Top & side',detail:'top and side detail'},
  {key:'body',label:'Thread & liner',detail:'thread, liner or valve detail'},
  {key:'application',label:'Compatible pack',detail:'compatible honey packaging application'}
];

const closureProducts = new Set([
  'flip-top-honey-bottle-caps','pointed-nozzle-honey-caps','inverted-honey-bottle-valve-caps',
  'plastic-screw-caps-for-honey-jars','metal-twist-off-honey-jar-lids','aluminum-screw-caps-for-honey-jars'
]);

export default function ProductGallery({slug,title}:{slug:string;title:string}) {
  const isClosure=closureProducts.has(slug);
  const views=isClosure?closureViews:containerViews;
  const [selected,setSelected]=useState(0);
  const active=views[selected];
  const source=(key:string)=>`/assets/honey-gallery/${slug}/${key}.webp`;
  return <div className="honey-gallery" aria-label={`${title} image gallery`}>
    <figure className="honey-gallery-stage">
      <img src={source(active.key)} srcSet={responsiveImageSet(source(active.key))} sizes="(max-width: 700px) 92vw, (max-width: 1000px) 52vw, 600px" alt={`${title} — ${active.detail}`} width={1536} height={1024} fetchPriority="high" decoding="async"/>
      <figcaption aria-live="polite">{active.label}</figcaption>
    </figure>
    <div className="honey-gallery-thumbnails" role="group" aria-label="Choose a product view">
      {views.map((view,i)=><button type="button" key={view.key} aria-label={`Show ${view.label.toLowerCase()}`} aria-pressed={selected===i} onClick={()=>setSelected(i)}>
        <img src={source(view.key).replace('.webp','-480.webp')} alt="" width={480} height={320} loading="lazy" decoding="async"/>
        <span>{view.label}</span>
      </button>)}
    </div>
    <p className="note product-image-caption">{isClosure?'Exact dimensions, finish, liner or valve and container compatibility are matched to the selected assembly.':'The selected shape, dimensions and closure are documented in the product drawing and physical sample.'}</p>
  </div>;
}
