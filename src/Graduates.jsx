import React,{useState} from 'react';
import cohorts from './graduate-cohorts.json';

export function Graduates(){
 const [year,setYear]=useState('2025');
 const cohort=cohorts.find(c=>c.id===year);
 return <section className="section graduates" id="graduates" aria-labelledby="graduates-title">
  <div className="section-heading"><div><span className="eyebrow">WAXBARASHADA</span><h2 id="graduates-title">Ardayda qalinjabisay</h2></div><p>Laba dufcadood. Afartan arday oo qalinjabisay.</p></div>
  <p className="graduate-intro">Guulaha ardaydeenna waxaa suurageliyey taageerada deeq-bixiyeyaasha.</p>
  <div className="cohort-filters" aria-label="Dooro dufcadda qalinjabisay">{cohorts.map(c=><button key={c.id} className={year===c.id?'selected':''} aria-pressed={year===c.id} aria-controls="cohort-students" onClick={()=>setYear(c.id)}><span>{c.label}</span><strong>{c.year}</strong><small>{c.students.length} arday oo qalinjabisay</small></button>)}</div>
  <div className="cohort-panel" id="cohort-students"><div className="cohort-heading"><div><span className="eyebrow">{cohort.label} · {cohort.year}</span><h3 lang="so">{cohort.heading}</h3></div><span className="cohort-count">{cohort.students.length} arday oo qalinjabisay</span></div><ol className="graduate-list" lang="so" aria-label={cohort.year+' ardayda qalinjabisay'}>{cohort.students.map(name=><li key={name}>{name}</li>)}</ol></div>
 </section>;
}
