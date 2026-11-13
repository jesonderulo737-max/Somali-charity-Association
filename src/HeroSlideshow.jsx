import React,{useEffect,useState} from 'react';

export const slides = [
  {id:'eid',image:'/slides/eid-support.jpg',label:'Eid support',caption:'Helping children celebrate Eid',alt:'Children holding envelopes containing their Eid support.',position:'64% 48%'},
  {id:'education',image:'/slides/graduates.jpg',label:'Education · Supported by donations',caption:'Our 2026 graduates',alt:'Students at an SCO graduation ceremony holding graduation signs.',position:'62% 42%'},
  {id:'food-packages',image:'/slides/food-packages.jpg',label:'Feeding program',caption:'Food packages for families',alt:'Rows of food packages prepared for distribution.',position:'55% 50%'},
  {id:'food-distribution',image:'/slides/food-distribution.jpg',label:'Feeding program',caption:'Supporting families with food',alt:'Families seated beside their food packages at a distribution.',position:'60% 48%'}
];

export function HeroSlideshow({onWatchWater}){
  const [index,setIndex]=useState(0),[paused,setPaused]=useState(false),[hovered,setHovered]=useState(false),[focused,setFocused]=useState(false);
  const [reducedMotion,setReducedMotion]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [visible,setVisible]=useState(()=>!document.hidden);
  useEffect(()=>{
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    function motionChanged(){setReducedMotion(media.matches);}
    function visibilityChanged(){setVisible(!document.hidden);}
    media.addEventListener('change',motionChanged);
    document.addEventListener('visibilitychange',visibilityChanged);
    return ()=>{media.removeEventListener('change',motionChanged);document.removeEventListener('visibilitychange',visibilityChanged);};
  },[]);
  useEffect(()=>{
    if(paused||hovered||focused||reducedMotion||!visible)return;
    const timer=setInterval(()=>setIndex(i=>(i+1)%slides.length),7000);
    return ()=>clearInterval(timer);
  },[paused,hovered,focused,reducedMotion,visible]);
  function choose(next){setPaused(true);setIndex((next+slides.length)%slides.length);}
  const current=slides[index];
  return <section className="hero hero-slideshow" id="home" aria-label="SCO program photographs" aria-roledescription="carousel" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} onFocusCapture={()=>setFocused(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))setFocused(false);}}>
    <div className="hero-slides" aria-live="off">{slides.map((slide,i)=><img key={slide.id} src={slide.image} alt={slide.alt} aria-hidden={i!==index} className={i===index?'active':''} style={{objectPosition:slide.position}} fetchPriority={i===0?'high':'auto'}/>)}</div>
    <div className="hero-shade" aria-hidden="true"/>
    <div className="hero-copy"><span className="eyebrow orange">SOMALI CHARITY ORGANIZATION</span><h1>Water, education<br/>and care.</h1><p>Supporting communities in Somalia through water relief, orphan care, education and food distribution.</p><div className="hero-actions"><a className="primary" href="#programs">View our programs →</a><button className="hero-water-link" onClick={onWatchWater}>Watch our water project ↗</button></div></div>
    <div className="slideshow-footer"><div className="slide-caption" aria-live="off"><span>{current.label}</span><strong>{current.caption}</strong></div><div className="slideshow-controls"><button aria-label="Previous photograph" onClick={()=>choose(index-1)}>←</button><div className="slide-dots" aria-label="Choose a photograph">{slides.map((slide,i)=><button key={slide.id} aria-label={'Show photograph '+(i+1)+': '+slide.caption} aria-pressed={index===i} onClick={()=>choose(i)}><span/></button>)}</div><button aria-label="Next photograph" onClick={()=>choose(index+1)}>→</button>{!reducedMotion&&<button className="slide-pause" aria-label={paused?'Play slideshow':'Pause slideshow'} onClick={()=>{setPaused(p=>!p);if(paused){setHovered(false);setFocused(false);}}}>{paused?'Play':'Pause'}</button>}</div></div>
  </section>;
}

export function ProgramReach(){return <section className="program-reach" aria-label="SCO program reach"><div><strong>148,000+</strong><p>people supported</p><span>Education and Eid programs</span></div><div><strong>544,000+</strong><p>families fed</p><span>Feeding program</span></div></section>;}
