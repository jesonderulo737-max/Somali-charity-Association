import React,{useEffect,useState} from 'react';
import {slides,SLIDE_INTERVAL_MS} from './hero-content.js';



export function HeroSlideshow(){
 const [index,setIndex]=useState(0);
 const [reducedMotion,setReducedMotion]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches);
 const [visible,setVisible]=useState(()=>!document.hidden);
 useEffect(()=>{
  const media=window.matchMedia('(prefers-reduced-motion: reduce)');
  function motionChanged(){setReducedMotion(media.matches);}
  function visibilityChanged(){setVisible(!document.hidden);}
  media.addEventListener('change',motionChanged);document.addEventListener('visibilitychange',visibilityChanged);
  return ()=>{media.removeEventListener('change',motionChanged);document.removeEventListener('visibilitychange',visibilityChanged);};
 },[]);
 useEffect(()=>{if(reducedMotion||!visible)return;const timer=setInterval(()=>setIndex(i=>(i+1)%slides.length),SLIDE_INTERVAL_MS);return ()=>clearInterval(timer);},[reducedMotion,visible]);
 const current=slides[index];
 return <section className="hero hero-slideshow" id="home" aria-label="Mashaariicda SCO" aria-roledescription="sawirro is-beddelaya">
  <div className="hero-motion" aria-hidden="true"><span className="hero-glow hero-glow-blue"/><span className="hero-glow hero-glow-orange"/><svg viewBox="0 0 800 500" focusable="false"><ellipse className="hero-orbit" cx="420" cy="250" rx="310" ry="170"/><ellipse className="hero-orbit hero-orbit-second" cx="420" cy="250" rx="255" ry="210"/><circle cx="730" cy="250" r="5"/></svg></div>
  <div className="hero-copy"><div className="hero-slide-copy" key={current.id} aria-live="off"><span className="eyebrow orange">{current.label}</span><h1>{current.title}</h1><p>{current.description}</p><div className={'hero-reach'+(current.figure?'':' hero-detail')}><strong>{current.figure??current.detail}</strong>{current.unit&&<span>{current.unit}</span>}<small>{current.scope}</small></div><span className="hero-cycle-line" aria-hidden="true"/></div><div className="hero-actions"><a className="primary" href="#programs">Daawo mashaariicdeenna →</a></div></div>
  <div className="hero-visual"><div className="hero-slides" aria-live="off">{slides.map((slide,i)=><img key={slide.id} src={slide.image} alt={slide.alt} aria-hidden={i!==index} className={i===index?'active':''} fetchPriority={i===0?'high':'auto'}/>)}</div></div>
 </section>;
}
