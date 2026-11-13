import React,{useEffect,useState} from 'react';

export const slides=[
 {id:'eid',image:'/slides/eid-support.jpg',label:'Eid support',title:'Helping children celebrate Eid.',description:'We provide money for children to buy clothes and shoes for Eid.',figure:'148,000+',unit:'people supported',scope:'Through our education and Eid programs',alt:'Children holding envelopes containing their Eid support.'},
 {id:'education',image:'/slides/graduates.jpg',label:'Education',title:'Our 2026 graduates.',description:'Your donations help students continue their education and reach graduation.',figure:'148,000+',unit:'people supported',scope:'Through our education and Eid programs',alt:'Students at an SCO graduation ceremony holding graduation signs.'},
 {id:'food-packages',image:'/slides/food-packages.jpg',label:'Feeding program',title:'Food support for families.',description:'Your donations provide food packages for families who need support.',figure:'544,000+',unit:'families fed',scope:'Through our feeding program',alt:'Rows of food packages prepared for distribution.'},
 {id:'food-distribution',image:'/slides/food-distribution.jpg',label:'Feeding program',title:'Reaching families with food.',description:'We distribute food to families with support from our donors.',figure:'544,000+',unit:'families fed',scope:'Through our feeding program',alt:'Families seated beside their food packages at a distribution.'}
];

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
 useEffect(()=>{if(reducedMotion||!visible)return;const timer=setInterval(()=>setIndex(i=>(i+1)%slides.length),1000);return ()=>clearInterval(timer);},[reducedMotion,visible]);
 const current=slides[index];
 return <section className="hero hero-slideshow" id="home" aria-label="SCO programs" aria-roledescription="carousel">
  <div className="hero-copy"><div className="hero-slide-copy" key={current.id} aria-live="off"><span className="eyebrow orange">{current.label}</span><h1>{current.title}</h1><p>{current.description}</p><div className="hero-reach"><strong>{current.figure}</strong><span>{current.unit}</span><small>{current.scope}</small></div></div><div className="hero-actions"><a className="primary" href="#programs">View our programs →</a></div></div>
  <div className="hero-visual"><div className="hero-slides" aria-live="off">{slides.map((slide,i)=><img key={slide.id} src={slide.image} alt={slide.alt} aria-hidden={i!==index} className={i===index?'active':''} fetchPriority={i===0?'high':'auto'}/>)}</div></div>
 </section>;
}
