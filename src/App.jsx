import React,{useState} from 'react';
import {Campaigns,VideoDialog} from './Campaigns.jsx';
import {HeroSlideshow} from './HeroSlideshow.jsx';
import {Graduates} from './Graduates.jsx';
import {Scholarships} from './Scholarships.jsx';
import {ActivitySummary} from './ActivitySummary.jsx';
import {Contact,SocialLinks} from './SocialStories.jsx';
import {zakatEstimate} from './calculations.js';
import {DonationDialog} from './Donations.jsx';
import {givingPrograms,selectedProgram,amountText,programLabel} from './donations.js';
import {campaignProgram,somaliValidation,clearValidation} from './localization.js';
const causes=givingPrograms.map(p=>p.name);
export function App(){
 const [menu,setMenu]=useState(false),[cause,setCause]=useState(causes[0]),[monthly,setMonthly]=useState(false),[amount,setAmount]=useState('0.5'),[video,setVideo]=useState(null),[donation,setDonation]=useState(false);
 const [assets,setAssets]=useState(''),[debts,setDebts]=useState(''),[threshold,setThreshold]=useState('');
 const estimate=zakatEstimate(assets,debts,threshold);
 function changeCause(name){setCause(name);const program=selectedProgram(name);setAmount(program.minimumUSD===null?'':String(program.minimumUSD));}
 function supportProgram(category){changeCause(campaignProgram(category));setDonation(true);}
 return <><a className="skip" href="#main">U gudub nuxurka</a><header><a className="brand" href="#home" aria-label="Bogga hore ee SCO"><img src="/sco-logo.jpeg" alt="Astaanta SCO"/><span>SCO<small>Ururka Samafalka Soomaaliyeed</small></span></a><button className="menu" aria-expanded={menu} aria-controls="main-nav" onClick={()=>setMenu(!menu)}>Liiska</button><nav id="main-nav" className={menu?'open':''} aria-label="Liiska bogagga">{[['Barnaamijyada','#programs'],['Sawirrada','#scholarships'],['Ardayda qalinjabisay','#graduates'],['Hawlaha','#activities'],['Sakada','#zakat'],['Nala soo xiriir','#contact']].map(([name,href])=><a key={href} href={href} onClick={()=>setMenu(false)}>{name}</a>)}</nav><button className="primary header-donate" onClick={()=>setDonation(true)}>Deeq bixi</button></header>
 <main id="main"><HeroSlideshow/>
 <section className="giving giving-direct" id="giving" aria-label="Dooro deeqdaada"><div><h2>Taageer barnaamij</h2><p>Dooro barnaamij si aad u aragto hababka deeq-bixinta.</p></div><label className="sr-only" htmlFor="cause">Dooro barnaamij aad taageerayso</label><select id="cause" value="" onChange={e=>{changeCause(e.target.value);setDonation(true);}}><option value="" disabled>Dooro barnaamij</option>{causes.map(c=><option key={c} value={c}>{programLabel(c)}{selectedProgram(c).minimumUSD===null?' — xaqiiji cadadka':' — laga bilaabo $'+amountText(selectedProgram(c).minimumUSD)}</option>)}</select><button className="give-button" onClick={()=>setDonation(true)}>Hadda deeq bixi →</button></section>
 <Campaigns onWatch={setVideo} onSupport={supportProgram}/><Scholarships/><Graduates/><ActivitySummary/>
 <section className="zakat section" id="zakat"><div><span className="eyebrow">SAKADA</span><h2>Qiyaasta sakada</h2><p>Geli hantida sakadu ku waajibayso, deynta laga jarayo iyo xadka nisaabka ee hadda, oo doollar ah.</p><small>Qiyaastan 2.5% waxay ku salaysan tahay in hantida uu ka soo wareegay sannad dayaxeed. Shuruudaha sakada iyo nisaabka hadda jira ka xaqiiji qof aqoon u leh. Sakada Fidrigu waa waajib gaar ah.</small></div><form onSubmit={e=>e.preventDefault()} onInvalid={somaliValidation} onInput={clearValidation}><label>Hantida sakadu ku waajibayso ($)<input type="number" min="0" step="0.01" value={assets} onChange={e=>setAssets(e.target.value)} placeholder="0.00"/></label><label>Deynta laga jarayo ($)<input type="number" min="0" step="0.01" value={debts} onChange={e=>setDebts(e.target.value)} placeholder="0.00"/></label><label>Xadka nisaabka hadda ($)<input type="number" min="0.01" step="0.01" value={threshold} onChange={e=>setThreshold(e.target.value)} placeholder="Geli xadka nisaabka hadda"/></label><div className="estimate" aria-live="polite"><span>Sakada la qiyaasay</span><strong>{estimate===null?'—':estimate.toLocaleString('en-US',{style:'currency',currency:'USD'})}</strong></div></form></section>
 <Contact/></main><footer><a className="brand" href="#home"><img src="/sco-logo.jpeg" alt=""/><span>SCO<small>Ururka Samafalka Soomaaliyeed</small></span></a><p>Taleex, Muqdisho, Soomaaliya</p><div><SocialLinks/></div><small>© {new Date().getFullYear()} Ururka Samafalka Soomaaliyeed · Deeq ku bixi adeegga lacagta moobilka.</small></footer>
 <VideoDialog program={video} onClose={()=>setVideo(null)}/>
 <DonationDialog open={donation} onClose={()=>setDonation(false)} cause={cause} amount={amount} monthly={monthly} onMonthlyChange={setMonthly} onProgramChange={changeCause} onAmountChange={setAmount}/></>;
}
