import {useState} from 'react';
import type {Locale} from './content';
import './ux-study.css';

const study = {
  cn: {
    title:'一张海报，三个值得验证的时刻', intro:'把 Poster Lab 当作一个设计练习：从完成任务的过程出发，区分界面事实、使用假设和下一步验证。',
    badge:'设计分析草案 · 尚未开展用户测试',audience:'目标使用场景（假设）',audienceBody:'偶尔需要制作活动或分享海报，希望快速调整文字和样式，并在之后继续修改的人。',
    scope:'当前材料',scopeBody:'已有可操作原型与代码；以下为 AI 辅助的案头分析，没有访谈、试用结果或效率提升数据。',
    labels:['当前实现','待验证的问题','可比较的方案','怎样验证'],
    scenarios:[
      {tab:'01 / 带走作品',task:'做完海报后，选择正确的导出方式',existing:'工具提供“导出 PNG”和“导出配置 JSON”。PNG 用于分享图片，JSON 用于导入后继续编辑。',hypothesis:'第一次使用的人是否知道两种文件的用途？是否会把图片当成可恢复的草稿？',proposal:'保留“下载图片”为主要操作；把配置操作组织为“保存可编辑文件”，补充用途说明。比较命名与分组，不预设哪个更好。',validation:'请试用者分别完成“发给朋友”和“明天继续修改”两个任务，记录首次选择、犹豫点和能否恢复。',flow:['编辑海报','选择输出','分享 / 继续编辑'],choice:['方案 A · 文件格式','方案 B · 任务用途'],a:['导出 PNG','导出配置 JSON'],b:['下载图片','保存可编辑文件']},
      {tab:'02 / 找回草稿',task:'刷新之后，确认作品还在',existing:'配置自动保存在当前浏览器，重新打开工具可恢复；不会跨设备同步，也不会恢复撤销历史。',hypothesis:'“已保存”是否会被理解为云同步？用户能否区分草稿保存成功与文件下载成功？',proposal:'对比简短状态与带范围说明的状态；保留存储失败提示，并提供导出配置的替代操作。',validation:'让试用者修改、关闭并重新打开，再询问换一台设备是否能继续。记录其理解，避免提前解释答案。',flow:['修改内容','本机保存','重新打开'],choice:['方案 A · 简短状态','方案 B · 明确范围'],a:['已保存','稍后继续'],b:['已保存在此浏览器','换设备请导出配置']},
      {tab:'03 / 切换样例',task:'探索新样式时，不丢失刚才的修改',existing:'点击样例会替换整份配置，包括文字。界面说明可撤销，当前会话也支持恢复上一步。',hypothesis:'用户是否把样例理解为“只换样式”？替换文字后，是否能及时发现并找到撤销？',proposal:'对比“载入整张样例”和“保留文字，仅应用样式”的入口。额外选项可能增加理解成本，需要验证。',validation:'先让试用者写自己的标题，再探索另一种样式。观察预期、实际结果和恢复路径，不预先提示撤销。',flow:['编辑自己的文字','选择样例','检查 / 撤销'],choice:['方案 A · 完整替换','方案 B · 区分意图'],a:['载入样例','可撤销'],b:['仅应用样式','载入完整样例']},
    ],
    illustration:'方案对照示意 · 尚未应用到工具',testTitle:'下一步：用真实任务补齐证据',
    protocol:[['招募','邀请 3–5 位自愿试用的同学做探索性测试，不据此推断所有用户。'],['观察','记录能否独立完成、在哪里停顿、选择了什么，以及原话。'],['迭代','选择一个反复出现的问题，画出修改稿，再用相同任务复测。']],
    pending:'待补充的个人实践：任务记录、线框稿、方案选择依据、试用观察与修改前后对比。',open:'打开当前原型',
  },
  en: {
    title:'One poster. Three moments to investigate.',intro:'Use Poster Lab as a design exercise: start from a task and separate interface facts, hypotheses and validation.',
    badge:'Design study draft · User testing pending',audience:'Intended context · Hypothesis',audienceBody:'Someone who occasionally makes a poster for an event or a post, wants to edit text and style quickly, and may return to it later.',
    scope:'Available material',scopeBody:'A working prototype and code. This is AI-assisted desk analysis, without interviews, usability results or measured improvements.',
    labels:['Current implementation','Question to validate','Alternatives to compare','Validation task'],
    scenarios:[
      {tab:'01 / Export',task:'Choose the right output after making a poster',existing:'PNG export produces a shareable image. Configuration JSON can be imported to continue editing.',hypothesis:'Do first-time users understand both file types? Will they mistake an image for a recoverable draft?',proposal:'Compare format labels with task-based labels and grouping. Keep image download prominent and explain what an editable file preserves.',validation:'Ask people to send a poster to a friend, then prepare it for editing tomorrow. Observe first choices, hesitation and successful recovery.',flow:['Edit','Choose output','Share / edit later'],choice:['A · File formats','B · User tasks'],a:['Export PNG','Export configuration JSON'],b:['Download image','Save editable file']},
      {tab:'02 / Recovery',task:'Confirm that the work survived a reload',existing:'Configuration is saved in this browser and restored when reopened. It does not sync across devices or restore undo history.',hypothesis:'Does “saved” imply cloud sync? Can people distinguish a saved draft from a downloaded file?',proposal:'Compare a short status with an explicit storage scope. Keep failure feedback and offer configuration export as an alternative.',validation:'Ask people to edit, close and reopen the tool, then ask whether they can continue on another device. Record their understanding without explaining first.',flow:['Edit','Save locally','Reopen'],choice:['A · Short status','B · Explicit scope'],a:['Saved','Continue later'],b:['Saved in this browser','Export to change devices']},
      {tab:'03 / Samples',task:'Explore a style without losing recent edits',existing:'Loading a sample replaces the entire configuration, including text. A note explains replacement and the session supports undo.',hypothesis:'Do people expect a sample to change only the style? Can they notice changed text and recover?',proposal:'Compare a single sample action with separate “style only” and “full sample” actions. Additional choices may also increase complexity.',validation:'Ask people to write their own title and explore another style. Observe expectations, results and recovery without prompting undo.',flow:['Write a title','Choose a sample','Check / undo'],choice:['A · Replace all','B · Separate intentions'],a:['Load sample','Undo available'],b:['Apply style only','Load full sample']},
    ],
    illustration:'Concept comparison · Not applied to the tool',testTitle:'Next: add evidence from real tasks',
    protocol:[['Recruit','Invite 3–5 willing classmates for exploratory sessions, without generalising to all users.'],['Observe','Record independent completion, pauses, choices and actual quotes.'],['Iterate','Select a recurring problem, sketch a revision and repeat the same task.']],
    pending:'Personal work to add: task notes, wireframes, reasoning, observations and before/after comparisons.',open:'Open the current prototype',
  },
};

export function UXStudy({locale,onOpenPoster}:{locale:Locale;onOpenPoster:()=>void}) {
  const [selected,setSelected]=useState(0),c=study[locale],s=c.scenarios[selected];
  return <section id="design-study" className="ux-study section-shell" aria-labelledby="ux-title">
    <p className="section-kicker">02 / DESIGN STUDY — POSTER LAB</p>
    <div className="ux-intro"><h2 id="ux-title">{c.title}</h2><p>{c.intro}</p></div>
    <span className="ux-badge">◌ {c.badge}</span>
    <div className="ux-context"><div><h3>{c.audience}</h3><p>{c.audienceBody}</p></div><div><h3>{c.scope}</h3><p>{c.scopeBody}</p></div></div>
    <div className="ux-selector" role="group" aria-label={locale==='cn'?'选择设计场景':'Choose a design scenario'}>{c.scenarios.map((item,i)=><button key={i} aria-pressed={i===selected} aria-controls="ux-scenario" onClick={()=>setSelected(i)}>{item.tab}</button>)}</div>
    <div id="ux-scenario" className="ux-scenario"><h3>{s.task}</h3><ol className="ux-flow">{s.flow.map((step,i)=><li key={step}><span>0{i+1}</span>{step}</li>)}</ol>
      <div className="ux-analysis">{[s.existing,s.hypothesis,s.proposal,s.validation].map((body,i)=><article key={i}><span>{c.labels[i]}</span><p>{body}</p></article>)}</div>
      <div className="ux-comparison"><p>{c.illustration}</p><div>{[s.a,s.b].map((labels,i)=><div key={i} className="ux-concept"><span>{s.choice[i]}</span><div>{labels.map(label=><span key={label}>{label}</span>)}</div></div>)}</div></div>
    </div>
    <div className="ux-validation"><h3>{c.testTitle}</h3><div>{c.protocol.map(([title,body])=><article key={title}><h4>{title}</h4><p>{body}</p></article>)}</div><p className="ux-pending">{c.pending}</p><button className="text-action" onClick={onOpenPoster}>{c.open} ↗</button></div>
  </section>;
}
