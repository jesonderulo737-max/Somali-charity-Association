import React,{useState} from 'react';
import {Campaigns,VideoDialog} from './Campaigns.jsx';
import {HeroSlideshow} from './HeroSlideshow.jsx';
import {Graduates} from './Graduates.jsx';
import {Scholarships} from './Scholarships.jsx';
import {ActivitySummary} from './ActivitySummary.jsx';
import {Contact,SocialLinks} from './SocialStories.jsx';
import {zakatEstimate} from './calculations.js';
import {DonationDialog} from './Donations.jsx';
import {givingPrograms,selectedProgram,amountText} from './donations.js';
const causes=givingPrograms.map(p=>p.name);
export function App(){
 const [menu,setMenu]=useState(false),[cause,setCause]=useState(causes[0]),[monthly,setMonthly]=useState(false),[amount,setAmount]=useState('0.5'),[video,setVideo]=useState(null),[donation,setDonation]=useState(false);
 const [assets,setAssets]=useState(''),[debts,setDebts]=useState(''),[threshold,setThreshold]=useState('');
 const estimate=zakatEstimate(assets,debts,threshold);
 function changeCause(name){setCause(name);const program=selectedProgram(name);setAmount(program.minimumUSD===null?'':String(program.minimumUSD));}
 function supportProgram(category){const map={'Water':'Water relief','Eid':'Eid support','Ramadan iftar':'Ramadan iftar','Zakat al-Fitr':'Zakat al-Fitr'};changeCause(map[category]||'Where most needed');setDonation(true);}
 return <><a className="skip" href="#main">Skip to content</a><header><a className="brand" href="#home" aria-label="SCO home"><img src="/sco-logo.jpeg" alt="SCO logo"/><span>SCO<small>Somali Charity Organization</small></span></a><button className="menu" aria-expanded={menu} aria-controls="main-nav" onClick={()=>setMenu(!menu)}>Menu</button><nav id="main-nav" className={menu?'open':''} aria-label="Main navigation">{[['Programs','#programs'],['Photos','#scholarships'],['Graduated students','#graduates'],['Activities','#activities'],['Zakat','#zakat'],['Contact','#contact']].map(([name,href])=><a key={href} href={href} onClick={()=>setMenu(false)}>{name}</a>)}</nav><button className="primary header-donate" onClick={()=>setDonation(true)}>Donate</button></header>
 <main id="main"><HeroSlideshow/>
 <section className="giving giving-direct" id="giving" aria-label="Choose your donation"><div><h2>Support a program</h2><p>Choose a program to see donation options.</p></div><label className="sr-only" htmlFor="cause">Choose a program to support</label><select id="cause" value="" onChange={e=>{changeCause(e.target.value);setDonation(true);}}><option value="" disabled>Choose a program</option>{causes.map(c=><option key={c} value={c}>{c}{selectedProgram(c).minimumUSD===null?' — confirm rate':' — from $'+amountText(selectedProgram(c).minimumUSD)}</option>)}</select><button className="give-button" onClick={()=>setDonation(true)}>Donate now →</button></section>
 <Campaigns onWatch={setVideo} onSupport={supportProgram}/><Scholarships/><Graduates/><ActivitySummary/>
 <section className="zakat section" id="zakat"><div><span className="eyebrow">ZAKAT</span><h2>Zakat estimate</h2><p>Enter eligible assets, deductible liabilities and a current Nisab threshold in USD.</p><small>This 2.5% estimate assumes the required lunar holding period has been met. Check eligibility and the current Nisab with a qualified adviser. Zakat al-Fitr is a separate obligation.</small></div><form onSubmit={e=>e.preventDefault()}><label>Eligible assets ($)<input type="number" min="0" step="0.01" value={assets} onChange={e=>setAssets(e.target.value)} placeholder="0.00"/></label><label>Deductible liabilities ($)<input type="number" min="0" step="0.01" value={debts} onChange={e=>setDebts(e.target.value)} placeholder="0.00"/></label><label>Current Nisab threshold ($)<input type="number" min="0.01" step="0.01" value={threshold} onChange={e=>setThreshold(e.target.value)} placeholder="Enter the current threshold"/></label><div className="estimate" aria-live="polite"><span>Estimated Zakat</span><strong>{estimate===null?'—':estimate.toLocaleString('en-US',{style:'currency',currency:'USD'})}</strong></div></form></section>
 <Contact/></main><footer><a className="brand" href="#home"><img src="/sco-logo.jpeg" alt=""/><span>SCO<small>Somali Charity Organization</small></span></a><p>Taleh, Mogadishu, Somalia</p><div><SocialLinks/></div><small>© {new Date().getFullYear()} Somali Charity Organization · Donate through your mobile-money service.</small></footer>
 <VideoDialog program={video} onClose={()=>setVideo(null)}/>
 <DonationDialog open={donation} onClose={()=>setDonation(false)} cause={cause} amount={amount} monthly={monthly} onMonthlyChange={setMonthly} onProgramChange={changeCause} onAmountChange={setAmount}/></>;
}
