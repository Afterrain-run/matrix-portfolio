import type {Locale} from './content';

export function JournalImage({name,className='',eager=false}:{name:string;className?:string;eager?:boolean}) {
  return <img className={className} src={`./images/journal/${name}-1200.webp`} srcSet={`./images/journal/${name}-640.webp 640w, ./images/journal/${name}-1200.webp 1200w`} sizes={eager?'(max-width: 700px) 92vw, 48vw':'(max-width: 700px) 90vw, 33vw'} width={1200} height={1200} alt="" loading={eager?'eager':'lazy'} fetchPriority={eager?'high':'auto'} decoding="async"/>;
}

export function JournalHero({locale}:{locale:Locale}) {
  const cn=locale==='cn';
  return <figure className="journal-hero">
    <div className="journal-hero-art"><JournalImage name="01-collage" eager/>
      <div className="journal-hero-note"><span>AFTER RAIN, IDEAS TAKE FLIGHT.</span><p>{cn?<>在细节里，<br/>安放好奇心。</>:<>A little curiosity.<br/>A world of details.</>}</p><small>{cn?'观察 · 尝试 · 慢慢生长':'OBSERVE · EXPLORE · GROW'}</small></div>
    </div>
    <figcaption><span>01 / A LITTLE DESIGN JOURNAL</span><span>{cn?'纸飞机与蝴蝶 · AI 视觉素材':'Paper planes & butterflies · AI imagery'}</span></figcaption>
  </figure>;
}

export function JournalMoodboard({locale}:{locale:Locale}) {
  const cn=locale==='cn';
  const cards=cn?[
    ['03-notebook','01 / OBSERVE','留一点空白，认真观察','从一个具体任务开始，记录每一步的想法。'],
    ['04-stickers','02 / EXPLORE','把想法放在一起','比较不同的层次、状态与表达方式。'],
    ['02-flight','03 / GROW','让灵感慢慢起飞','把尝试做成原型，再用反馈修正。'],
  ]:[
    ['03-notebook','01 / OBSERVE','Leave room to notice','Start with a task. Make space for questions.'],
    ['04-stickers','02 / EXPLORE','Bring ideas together','Explore layers, states and ways to express an idea.'],
    ['02-flight','03 / GROW','Give ideas their wings','Make a prototype, then learn from the feedback.'],
  ];
  return <section className="journal-moodboard section-shell" aria-labelledby="journal-title">
    <div className="journal-heading"><div><p className="section-kicker">IN THE MARGINS / VISUAL NOTES</p><h2 id="journal-title">{cn?'一页灵感，一点生长。':'Room for ideas to grow.'}</h2></div><p>{cn?'蓝白之间，记录设计的好奇心。':'A quiet space for design curiosity.'}<br/><span>{cn?'AI 生成的视觉练习':'AI-generated visual studies'}</span></p></div>
    <div className="journal-cards">{cards.map(([name,label,title,body])=><figure key={name}><div className="journal-card-art"><JournalImage name={name}/></div><figcaption><span>{label}</span><h3>{title}</h3><p>{body}</p></figcaption></figure>)}</div>
  </section>;
}
