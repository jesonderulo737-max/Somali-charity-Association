import React from 'react';
export const organizationPurpose={
 mission:'Inaan isku xirno dadka sadaqaysta iyo bulshada u baahan taageerada, annagoo gaarsiinayna biyo, waxbarasho, cunto iyo daryeelka agoonta.',
 vision:'Bulsho Soomaaliyeed oo carruurteedu helaan waxbarasho iyo daryeel, qoysaskeeduna helaan biyo iyo cunto ku filan.'
};
export function About(){return <section className="section about-sco" id="about" aria-labelledby="about-title"><div className="about-intro"><span className="eyebrow">NAGU SAABSAN</span><h2 id="about-title">Himiladeenna iyo aragtideenna</h2><p>Somali Charity Organization (SCO) waxay isu keentaa sadaqada bulshada iyo mashaariicda caawiya carruurta iyo qoysaska Soomaaliyeed.</p><a className="text-button" href="#activities">Eeg waxqabadkeenna →</a></div><div className="purpose-grid"><article><span className="purpose-label">HIMILADEENNA</span><h3>Taageero gaarta dadka u baahan.</h3><p>{organizationPurpose.mission}</p></article><article><span className="purpose-label">ARAGTIDEENNA</span><h3>Bulsho wadajir u horumarta.</h3><p>{organizationPurpose.vision}</p></article></div></section>}
