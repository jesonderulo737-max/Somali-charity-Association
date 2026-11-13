import React,{useState} from 'react';
import cohorts from './graduate-cohorts.json';

export function Graduates(){
 const [year,setYear]=useState('2025');
 const cohort=cohorts.find(c=>c.id===year);
 return <section className="section graduates" id="graduates" aria-labelledby="graduates-title">
  <div className="section-heading"><div><span className="eyebrow">EDUCATION</span><h2 id="graduates-title">Graduated students</h2></div><p>Two cohorts. Forty graduates.</p></div>
  <p className="graduate-intro">Our students’ achievements, made possible with support from our donors.</p>
  <div className="cohort-filters" aria-label="Choose graduating cohort">{cohorts.map(c=><button key={c.id} className={year===c.id?'selected':''} aria-pressed={year===c.id} aria-controls="cohort-students" onClick={()=>setYear(c.id)}><span>{c.label}</span><strong>{c.year}</strong><small>{c.students.length} graduates</small></button>)}</div>
  <div className="cohort-panel" id="cohort-students"><div className="cohort-heading"><div><span className="eyebrow">{cohort.label} · {cohort.year}</span><h3 lang="so">{cohort.heading}</h3></div><span className="cohort-count">{cohort.students.length} graduates</span></div><ol className="graduate-list" lang="so" aria-label={cohort.year+' graduating students'}>{cohort.students.map(name=><li key={name}>{name}</li>)}</ol></div>
 </section>;
}
