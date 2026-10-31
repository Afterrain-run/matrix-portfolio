import {copy,type Locale} from './content';
import {profile} from './profile';

const resume = {
  cn: {
    heading:'UX/UI 学习作品集', goal:'大一 · 目标：争取大二加入 Matrix',
    intro:'关注用户流程、视觉层级、界面状态与操作反馈。目前借助 AI 制作可操作原型，计划通过线框稿、真实试用与迭代积累设计经验。',
    work:'作品与设计练习',
    projects:[
      ['Poster Lab / 海报生成实验室','主项目：编辑文字与构图、实时预览、撤销、本机草稿恢复、JSON 配置导入导出及 PNG 导出。新增设计分析：图片与可编辑文件的区分、保存范围、样例替换预期；列出方案与试用任务，尚未开展用户测试。'],
      ['Wayfinder / 命令菜单','可搜索中英文命令，支持方向键与 Enter；展示无结果、禁用原因和中文输入法处理。用于练习键盘交互与状态反馈。'],
      ['Margin 与 Cutroom / 交互练习','受限 Markdown 即时预览、逐步展示；片段时间点与评审意见同步、示例隐私遮罩。均使用本地内容，Cutroom 不处理真实视频。'],
    ],
    learning:'从现在到大二',
    phases:[['寒假前','练习用户流程、信息架构、视觉层级和线框稿，做出可点击原型。'],['寒假','入门 DNS、TCP、HTTPS、HTTP 与缓存；用 Network 面板观察请求，并梳理加载、超时、离线与重试状态。'],['大一下学期与暑假','开展小规模试用并记录真实观察，迭代海报工具；积累两个能讲清过程的设计案例和协作交付练习。'],['大二招新前','核对当期方向与要求，补齐个人信息、实际贡献和可投入时间，再准备申请。']],
    tools:'作品采用的技术', stack:'React · TypeScript · CSS · Canvas · Vite · Vitest。现有技术栈与测试描述项目实现，不等同于个人独立掌握。',
    contribution:'AI 辅助与个人实践', ai:'项目主要借助 AI 完成，本次设计分析与文案修改也由 AI 辅助。独立完成的访谈、设计、修改与验证将在实际完成后补充，不将计划写成成果。',
    contact:'个人邮箱待补充', footer:'学习阶段作品集 · 2026-10-31 更新 · 学院、专业与可投入时间待本人确认',
  },
  en: {
    heading:'UX/UI learning portfolio',goal:'First-year student · Goal: apply to Matrix in year two',
    intro:'Interested in user flows, visual hierarchy, interface states and feedback. I currently use AI to build interactive prototypes, with wireframes, real usability sessions and iterations planned to develop design judgement.',
    work:'Projects & design exercises',
    projects:[
      ['Poster Lab / Main project','Text and composition editing, live preview, undo, local draft recovery, JSON import/export and PNG export. A design study explores output choices, storage scope and sample replacement. Alternatives and tasks are documented; user testing is pending.'],
      ['Wayfinder / Command menu','Chinese and English search, arrow keys and Enter, empty results, disabled reasons and input-method handling. A practical exercise in keyboard interaction and state feedback.'],
      ['Margin & Cutroom / Interaction exercises','Restricted Markdown preview and step-by-step presentation; synchronised review timestamps and sample privacy masks. Local content only; Cutroom does not process real video.'],
    ],
    learning:'From now to year two',
    phases:[['Before winter break','Practise user flows, information architecture, visual hierarchy and wireframes; make a clickable prototype.'],['Winter break','Study DNS, TCP basics, HTTPS, HTTP and caching. Inspect requests in Network tools and explore loading, timeout, offline and retry states.'],['Following term & summer','Conduct small usability sessions, record observations and iterate. Build two explainable design cases and practise handoff with a developer.'],['Before year-two recruitment','Check current roles and requirements; confirm personal details, actual contributions and availability before applying.']],
    tools:'Technology in the implementation',stack:'React · TypeScript · CSS · Canvas · Vite · Vitest. The technology and tests describe the implementation, not independent mastery.',
    contribution:'AI assistance & personal practice',ai:'Projects, this design study and the content update are primarily AI-assisted. Independently completed interviews, design decisions, changes and validation will be documented as they happen.',
    contact:'Personal email to be added',footer:'Learning portfolio · Updated 2026-10-31 · Department, major and availability to be confirmed',
  },
};

export function PrintResume({locale}:{locale:Locale}) {
  const c=resume[locale];
  return <section className="print-resume" aria-label={copy[locale].printable}>
    <header><p className="print-eyebrow">{c.heading}</p><h1>{profile.name}</h1><p>{c.goal}</p><p>{profile.email || c.contact} · <a href={profile.github}>{profile.github}</a></p></header>
    <p>{c.intro}</p><h2>{c.work}</h2>
    {c.projects.map(([title,body])=><article key={title}><h3>{title}</h3><p>{body}</p></article>)}
    <h2>{c.learning}</h2>{c.phases.map(([title,body])=><article className="print-phase" key={title}><h3>{title}</h3><p>{body}</p></article>)}
    <h2>{c.tools}</h2><p>{c.stack}</p><h2>{c.contribution}</h2><p>{c.ai}</p><footer>{c.footer}</footer>
  </section>;
}
