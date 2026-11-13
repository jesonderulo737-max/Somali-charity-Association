import React,{useEffect,useRef} from 'react';
export const primaryLinks=[['Mashaariicda','#programs'],['Wararka','#news'],['Nagu saabsan','#about'],['Sawirrada','#scholarships'],['Ardayda qalinjabisay','#graduates']];
export const moreLinks=[['Hawlaha','#activities'],['Sakada','#zakat'],['Nala soo xiriir','#contact']];
export function SiteNavigation({open,onNavigate}){
 const more=useRef(null);
 useEffect(()=>{function close(event){if(event.type==='keydown'&&event.key==='Escape'){if(more.current?.open){more.current.open=false;more.current.querySelector('summary').focus();}}else if(event.type==='pointerdown'&&!more.current?.contains(event.target)){if(more.current)more.current.open=false;}}document.addEventListener('pointerdown',close);document.addEventListener('keydown',close);return()=>{document.removeEventListener('pointerdown',close);document.removeEventListener('keydown',close);};},[]);
 function navigate(){if(more.current)more.current.open=false;onNavigate();}
 return <nav id="main-nav" className={open?'open':''} aria-label="Liiska bogagga">{primaryLinks.map(([name,href])=><a key={href} href={href} onClick={navigate}>{name}</a>)}<details className="nav-more" ref={more}><summary>Wax dheeraad ah<img className="nav-chevron" src="/icons/chevron-right.svg" alt="" aria-hidden="true"/></summary><div>{moreLinks.map(([name,href])=><a key={href} href={href} onClick={navigate}>{name}</a>)}</div></details></nav>;
}
