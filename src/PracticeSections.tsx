import type {Locale} from './content';
import {practiceCopy} from './practice-content';
import {profile} from './profile';
import './practice.css';

export function PracticeSections({locale, onOpenPoster}: {locale: Locale; onOpenPoster: () => void}) {
  const c = practiceCopy[locale];
  return <>
    <section className="technical-section section-shell" id="implementation" aria-labelledby="implementation-title">
      <div className="section-heading"><div><p className="section-kicker">03 / UNDER THE HOOD</p><h2 id="implementation-title">{c.title}</h2></div><p>{c.subtitle}</p></div>
      <div className="implementation-flow">{c.steps.map(([number,title,body]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></div>)}</div>
      <div className="implementation-notes">{c.notes.map((note,i) => <details key={note.title} open={i===0}><summary><span>0{i+1}</span>{note.title}<span className="details-plus" aria-hidden="true">+</span></summary><div className="implementation-body"><p>{note.body}</p><pre><code>{note.code}</code></pre><p className="note-question">{note.question}</p></div></details>)}</div>
      <div className="implementation-end"><p>{c.noteFooter}</p><button className="text-action" onClick={onOpenPoster}>{c.open} ↗</button></div>
    </section>
    <section className="development-section section-shell" id="development" aria-labelledby="development-title">
      <div className="section-heading"><div><p className="section-kicker">04 / BUILD LOG</p><h2 id="development-title">{c.logTitle}</h2></div><p>{c.logSubtitle}</p></div>
      <div className="development-log">{c.log.map((entry,i) => <article key={entry.title}><div className="log-date"><span>{entry.date}</span><span className={'log-tag '+(i===2?'is-planned':'')}>{entry.tag}</span></div><div><h3>{entry.title}</h3><p>{entry.body}</p><p className="log-evidence">↳ {entry.evidence}</p></div></article>)}</div>
    </section>
    <section className="matrix-section section-shell" id="matrix" aria-labelledby="matrix-title">
      <div className="matrix-heading"><div><p className="section-kicker">05 / TOWARD MATRIX</p><h2 id="matrix-title">{c.applicationTitle}</h2></div><p>{c.applicationIntro}</p></div>
      <dl className="matrix-facts">{c.facts.map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <h3 className="roadmap-title">{c.observationsTitle}</h3>
      <div className="matrix-observations">{c.observations.map(o => <article key={o.tag}><span>{o.tag}</span><h4>{o.title}</h4><p>{o.body}</p></article>)}</div>
      <h3 className="roadmap-title">{c.planTitle}</h3>
      <div className="learning-roadmap plan-four">{c.plan.map(([phase,title,body],i) => <div key={title}><span className={i===0?'current-phase':''}>{phase}</span><h4>{title}</h4><p>{body}</p></div>)}</div>
      <div className="contribution-note"><span>AI ASSISTED / HUMAN LEARNING</span><div><h3>{c.contributionTitle}</h3><p>{c.contribution}</p></div></div>
      <div className="submit-box"><div><span>PREPARATION / 准备阶段</span><p>{c.info}</p></div><a className="primary-action" href={profile.matrixSite} target="_blank" rel="noreferrer">{locale==='cn'?'Matrix 官网':'Matrix website'}<span aria-hidden="true">↗</span></a></div>
    </section>
  </>;
}
