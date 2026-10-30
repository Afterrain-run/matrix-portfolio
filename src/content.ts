import {posterProjects} from './practice-content';
export type Locale = 'cn' | 'en';
export type Category = 'all' | 'product' | 'system' | 'experiment';
export interface Project {
 id: string; number: string; category: Exclude<Category,'all'>; name: string; year: string; headline: string;
 summary: string; role: string; tags: string[]; problem: string; decision: string; architecture: string[];
 result: string; next: string; context: string; demoHint: string;
 reference: {label: string; url: string; note: string};
}
export const copy = {
 cn: {
  name:'Afterrain', roman:'PERSONAL PORTFOLIO', role:'中山大学计算机学院 · 2026 级 · 申请前端方向', resumeLabel:'个人作品集 / 2026',
  location:'广州 · 中山大学', available:'申请 Matrix 2026 秋招 · 前端方向', statusNote:'真实仓库 · 可运行 · 可核对',
  nav:['作品','能力证据','Matrix','联系'], eyebrow:'BUILD FIRST. EXPLAIN SECOND.',
  statement:['先让它跑起来','再讲清楚为什么'],
  intro:'我是中山大学计算机学院 2026 级本科生。过去两个月，我用 React、TypeScript 和 Canvas 做完了 4 个能跑起来的交互项目，也在写 C 和 MPI / Pthreads 的并行程序。我每天用 Matrix 的课程系统交作业，知道它哪里顺手、哪里卡手。我希望加入前端方向：从修一个真实的页面问题开始，把事做完，也讲得清楚。',
  viewWork:'查看我的项目', download:'下载文本简历', downloaded:'文本简历已准备下载', downloadFailed:'下载未完成，请使用页面下方的打印简历',
  selected:'项目与实验', selectedSub:'每个项目都能打开操作，也能在仓库里核对代码',
  projectHint:'本地可运行 · 点击案例即可亲自操作', all:'全部', product:'产品原型', system:'交互组件', experiment:'创作工具',
  resultCount:'个项目', caseStudy:'查看案例', close:'关闭案例', challenge:'想解决的问题', approach:'实现时的取舍',
  architecture:'当前实现结构', outcome:'可以现场验证的部分', next:'下一步迭代', responsibility:'实践范围',
  demoLabel:'交互演示 / 本地示例数据', referenceLabel:'实现参考 / 项目来源',
  aboutLabel:'关于我', aboutTitle:['先把事情做完','再把道理讲清楚'],
  aboutBody:'我习惯先把东西做出来，再回头弄懂它。AI 是我的加速器：它写第一版，我负责拆解、验证、修改和解释。这个网站上的每个演示都能现场打开，每段说明都能对应到具体代码；做不到的地方我会直接说做不到。',
  principles:[['01','从问题开始','先弄清楚谁在什么场景下使用，再决定界面和技术。课程系统的改进想法，来自我自己交作业时的卡点。'],['02','让作品可以被操作','比截图更有说服力的是真实交互：能搜索、能导出、能恢复，也知道边界在哪里。'],['03','用测试和仓库说话','40 项单元测试、TypeScript 检查、自动构建和提交记录，是“完成”的证据，不是形容词。']],
  experience:'实践轨迹', experienceNote:'只记录真实完成的内容；练习会标明是练习',
  history:[
   {date:'2026 — 现在',company:'个人作品集与 Matrix 申请',role:'前端 / 全栈方向',body:'完成响应式双语页面、Canvas 动态雕塑、项目筛选与案例弹窗、文本简历与打印排版；补齐 40 项单元测试、GitHub Actions 构建与 Pages 部署，让作品有可核对的仓库和地址。'},
   {date:'2026 秋',company:'并行计算练习（超算队招新题）',role:'C / MPI / Pthreads',body:'用 MPI 实现梯形积分、奇偶交换排序、向量乘法与广播，用 Pthreads 实现互斥锁加和；在 Linux 上编译运行，并与串行结果对拍检查误差。'},
   {date:'2026 秋',company:'C 语言期中复习答案册',role:'整理 / 校对 / 分发',body:'把程设课的易错题型按考点整理成答案册，标注易错点和验证方式，发给同班同学；也是我理解课程系统使用场景的起点。'},
   {date:'下一步',company:'Matrix 课程系统 / 考试系统',role:'前端开发 / 团队协作',body:'希望从真实 issue 开始：复现 bug、写清步骤、提交小 PR，在 code review 里补齐工程规范，把“会用”变成“做得对”。'}
  ],
  toolkit:'技术与学习地图', toolNote:'标注的是“用过并能解释”的部分；不确定的会直说',
  skillGroups:[['页面与交互','React · TypeScript · CSS · Canvas · 响应式 · 打印'],['系统与底层','C · MPI · Pthreads · Linux 基础 · 算法'],['工程与协作','Git · Vite · Vitest · GitHub Actions · PR 流程']],
  education:'当前学习路线', educationText:'C 语言 → 数据结构与算法 → 计算机系统与并行计算 → React 工程化 → 接口与部署', educationExtra:'用小项目验证理解：每个知识点都要能跑出结果，也能被别人复现。',
  contactTitle:['用作品说话','也接受现场检验'],
  contactBody:'这组作品是我交给 Matrix 的证据：4 个能操作的项目、40 项通过的测试、一个能构建的仓库，以及一份看得懂的说明。如果团队需要一个愿意从小事做起的前端，欢迎约一次现场演示。',
  copyLink:'复制网站链接', copied:'网站链接已复制', copyFailed:'无法访问剪贴板，请手动复制浏览器地址',
  contact:'AFTERRAIN / MATRIX 2026', contactNote:'投递 recruit@matrix.moe，邮件标题「Matrix招新简历-前端-2026级-计算机学院-姓名」；招新交流群 878822270。',
  print:'打印简历 / 另存 PDF', footer:'先把事情做完，再把道理讲清楚',
  sculpture:'交互线框雕塑', specimen:'形态研究 001', sculptureHint:'点击雕塑切换形态 · 聚焦后用 ← → 旋转',
  pause:'暂停动效', play:'继续动效', reset:'重置形态', reduced:'减少动态已开启', paused:'已暂停', running:'动态中',
  skip:'跳至作品', language:'切换语言', concept:'个人实践项目', printable:'实践摘要',
 },
 en: {
  name:'Afterrain', roman:'PERSONAL PORTFOLIO', role:'SYSU · Computer Science · Class of 2026 · Applying for frontend', resumeLabel:'Portfolio / 2026',
  location:'Guangzhou · SYSU', available:'Applying to Matrix 2026 · Frontend track', statusNote:'Real repository · Runnable · Verifiable',
  nav:['Work','Evidence','Matrix','Contact'], eyebrow:'BUILD FIRST. EXPLAIN SECOND.',
  statement:['Make it run first','Then explain why'],
  intro:'I am a first-year Computer Science student at Sun Yat-sen University, Class of 2026. Over the past two months I built four runnable interaction projects with React, TypeScript and Canvas, and I am writing parallel C with MPI and Pthreads. I use the Matrix course system for coursework every week, so I know where it feels smooth and where it feels stuck. I would like to join the frontend track: start from a real page problem, finish the work, and explain it clearly.',
  viewWork:'Explore my projects', download:'Download text resume', downloaded:'Your text resume is ready to download', downloadFailed:'Download failed. Please use Print resume below.',
  selected:'Projects & experiments', selectedSub:'Every project opens and runs, and the code can be checked in the repository',
  projectHint:'Runs locally · Open a case and try it yourself', all:'All work', product:'Product prototype', system:'Interaction', experiment:'Creative tool',
  resultCount:'projects', caseStudy:'View case study', close:'Close case study', challenge:'The problem', approach:'Implementation decisions',
  architecture:'Current implementation', outcome:'What you can verify here', next:'Next iteration', responsibility:'Practice scope',
  demoLabel:'WORKING DEMO / LOCAL SAMPLE DATA', referenceLabel:'Implementation reference / Project origin',
  aboutLabel:'About me', aboutTitle:['Finish the work first','Then explain the reasoning'],
  aboutBody:'I prefer to build something first, then go back and understand it. AI is my accelerator: it writes the first version, and I take apart, verify, change and explain it. Every demo on this site can be opened live, and every claim maps to specific code. Where I cannot do something, I say so.',
  principles:[['01','Start with the problem','Understand who uses something and in what situation before choosing the interface or stack. My course-system ideas come from problems I hit while submitting homework.'],['02','Make work operable','Real interactions say more than screenshots: searchable, exportable, recoverable, and honest about their limits.'],['03','Let tests and the repository speak','40 unit tests, a TypeScript check, automated builds and commit history are evidence of completion, not adjectives.']],
  experience:'Practice log', experienceNote:'Only completed work is recorded; exercises are labelled as exercises',
  history:[
   {date:'2026 — Present',company:'Personal portfolio & Matrix application',role:'Frontend / full-stack direction',body:'Built a responsive bilingual site with a Canvas sculpture, project filters, case dialogs, text resume and print layout; added 40 unit tests, a GitHub Actions build and Pages deployment so the work has a repository and URL anyone can check.'},
   {date:'Autumn 2026',company:'Parallel computing exercises (supercomputing team tryouts)',role:'C / MPI / Pthreads',body:'Implemented trapezoid integration, odd-even transposition sort, vector multiplication and broadcast with MPI, plus mutex-guarded summation with Pthreads; compiled and ran on Linux, comparing results against serial versions.'},
   {date:'Autumn 2026',company:'C language midterm review booklet',role:'Organise / proofread / distribute',body:'Turned error-prone C exercises into a booklet indexed by topic, with common mistakes and ways to verify answers, then shared it with classmates. It is where I started understanding course-system users.'},
   {date:'Next',company:'Matrix course & exam systems',role:'Frontend development / teamwork',body:'Start from real issues: reproduce bugs, write clear steps, send small pull requests, and absorb engineering standards through code review.'}
  ],
  toolkit:'Technology & learning map', toolNote:'What I have used and can explain; where I am unsure, I say so',
  skillGroups:[['Interface & interaction','React · TypeScript · CSS · Canvas · Responsive · Print'],['Systems & fundamentals','C · MPI · Pthreads · Linux basics · Algorithms'],['Engineering & collaboration','Git · Vite · Vitest · GitHub Actions · Pull requests']],
  education:'Current learning path', educationText:'C → data structures & algorithms → computer systems & parallel computing → React engineering → APIs & deployment', educationExtra:'Small projects validate understanding: every concept should produce a result someone else can reproduce.',
  contactTitle:['Let the work speak','and test it live'],
  contactBody:'This site is the evidence I hand to Matrix: four operable projects, 40 passing tests, a repository that builds, and notes that explain them. If the team needs a frontend developer who starts with small tasks, I would welcome a live walkthrough.',
  copyLink:'Copy website link', copied:'Website link copied', copyFailed:'Clipboard unavailable. Please copy the browser address manually.',
  contact:'AFTERRAIN / MATRIX 2026', contactNote:'Apply to recruit@matrix.moe with the subject "Matrix招新简历-前端-2026级-计算机学院-姓名"; recruitment group 878822270.',
  print:'Print resume / Save PDF', footer:'Finish the work. Then explain the reasoning.',
  sculpture:'Interactive wire sculpture', specimen:'FORM STUDY 001', sculptureHint:'Click to change form · Focus and use ← → to rotate',
  pause:'Pause motion', play:'Resume motion', reset:'Reset form', reduced:'Reduced motion enabled', paused:'Paused', running:'In motion',
  skip:'Skip to work', language:'Switch language', concept:'Personal practice project', printable:'Practice summary',
 }
};
export const projects: Record<Locale, Project[]> = {
 cn: [
  posterProjects.cn,
  {id:'cutroom',number:'01',category:'product',name:'Cutroom',year:'2026',headline:'给 32 秒的录屏，留一条准确的反馈',summary:'一个可以切换时间点、同步评审意见并预览隐私遮罩的片段审阅界面。',context:'个人交互实验 / React / 本地示例数据',role:'界面结构 / 时间轴状态 / 响应式实现',tags:['VIDEO REVIEW','REACT','UI STATES'],problem:'产品评审里的“这里有问题”经常缺少准确时间点，录屏还可能暴露邮箱等隐私信息。这个原型把问题收敛为短演示的片段审阅，而不是尝试做完整的视频剪辑器。',decision:'用当前片段驱动预览画面、时间码与评审意见，避免三套状态彼此不同步。隐私遮罩只改变当前示例帧，明确标注它是预览而不是真实的视频脱敏。',architecture:['React 片段与遮罩状态','本地绘制示例画面','时间点与评审备注数据模型','CSS 响应式工作台'],result:'可以切换三个时间点、同步画面与评审意见，并开关示例邮箱遮罩。所有内容均在浏览器本地运行，没有伪装成已经接入录制、转码或上传服务。',next:'下一步可以接入真实视频帧与本地文件导入，再研究非破坏性 edit list、可变帧率时间对齐和导出时的隐私检查。',demoHint:'点击时间轴切换片段；关闭或开启遮罩，查看演示邮箱的变化。',reference:{label:'Alyssa X / Screenity',url:'https://screenity.io/',note:'参考录制、编辑与分享的工作流以及 blur 交互；此处是本地实现的本地界面原型，没有移用品牌、视频或用户数据。'}},
  {id:'wayfinder',number:'02',category:'system',name:'Wayfinder',year:'2026',headline:'一个命令菜单，也值得认真做完',summary:'支持中英文搜索、方向键导航、Enter 打开与权限空态的键盘优先组件。',context:'个人组件实验 / TypeScript / 键盘交互',role:'命令模型 / 搜索逻辑 / 状态与测试',tags:['COMMAND MENU','TYPESCRIPT','KEYBOARD UX'],problem:'把文档与操作混在一个搜索框里，会让用户分不清对象和动作；把无权限项目直接隐藏，又会让人误以为搜索失效。这个组件练习把这些边界状态做清楚。',decision:'结果区分文档与操作，禁用项保留原因。键盘高亮与鼠标选择共享状态；中文输入法候选确认时不触发 Enter。搜索逻辑独立于界面，便于直接测试。',architecture:['类型化 command registry','多关键词与别名匹配','Combobox 与焦点保留','Vitest 键盘与空态测试'],result:'可以搜索中英文关键词，用 ↑ ↓ 与 Enter 打开示例文档。访客的删除命令会显示权限原因，无结果时有恢复提示；测试覆盖大小写、多关键词、循环导航和禁用项。',next:'更大的数据集需要服务端检索、请求取消和真实读屏验证。真正的权限仍必须由服务端检查，界面禁用只是表达状态，不是安全边界。',demoHint:'试着搜索“share / 分享”或“delete / 删除”；用方向键和 Enter 操作。',reference:{label:'Paco Coursey / cmdk',url:'https://github.com/dip/cmdk',note:'参考可组合命令菜单、空态与键盘导航模式；本演示使用独立的小数据集和搜索逻辑，不冒充 cmdk 作者的作品。'}},
  {id:'margin',number:'03',category:'experiment',name:'Margin',year:'2026',headline:'把技术讲清楚，先从一张幻灯片开始',summary:'一个受限 Markdown 编辑器：即时预览、逐步展示列表，并安全地把 HTML 当作文本。',context:'个人工具实验 / 解析与实时预览 / 本地会话',role:'内容模型 / 受限解析 / 编辑与演示状态',tags:['MARKDOWN','LIVE PREVIEW','DEVELOPER TOOL'],problem:'技术分享需要频繁修改步骤与要点，逐张拖拽文本框不易维护。这个练习先验证一条最小工作流：写标题、正文和列表，然后立即排练。',decision:'只解析标题、正文和列表，不执行任意 HTML 或脚本。编辑内容与展示步骤分开管理，空标题有回退；解析器保持纯函数，方便覆盖异常输入。',architecture:['纯文本内容模型','受限 Markdown 解析器','React 即时预览与步骤状态','Vitest 解析与安全边界测试'],result:'可以修改示例 Markdown，右侧同步渲染，逐步展示列表并恢复样例。测试覆盖 CRLF、空输入、缺失标题和 HTML 文本；内容只保留在当前弹窗会话中。',next:'后续可以增加本地持久化、长代码块排版与静态 HTML 导出。如果引入自定义组件，需要隔离环境，而不是直接执行文档脚本。',demoHint:'修改左侧 Markdown，点击“下一步”逐条展示，或恢复示例重新开始。',reference:{label:'Anthony Fu / Slidev',url:'https://sli.dev/guide/why',note:'参考 Markdown 优先、内容与演示分离的开发者工作流；这里保留小而明确的语法边界，没有复制 Slidev 的模板或功能规模。'}}
 ],
 en: [
  posterProjects.en,
  {id:'cutroom',number:'01',category:'product',name:'Cutroom',year:'2026',headline:'A precise note on a 32-second recording',summary:'A clip review interface with synced timestamps, review notes and a privacy-mask preview.',context:'Personal interaction exercise / React / Local sample data',role:'Interface structure / Timeline state / Responsive implementation',tags:['VIDEO REVIEW','REACT','UI STATES'],problem:'“Something is wrong here” often lacks a timestamp, and recordings may expose private email addresses. This prototype focuses on short review sessions rather than pretending to be a full video editor.',decision:'The active clip drives the frame, timecode and review note so they cannot drift apart. The mask only changes the sample frame and is explicitly labelled as a preview, not real video redaction.',architecture:['React clip and mask state','Locally drawn sample frames','Timestamp and review-note model','Responsive CSS workspace'],result:'Switch between three moments, update the frame and note, and toggle the demo email mask. Everything runs locally without claiming recording, transcoding or upload services.',next:'Next steps include real video frames and local file import, followed by non-destructive edit lists, variable-frame-rate alignment and export-time privacy checks.',demoHint:'Select a moment on the timeline. Toggle the mask to reveal or hide the demo email.',reference:{label:'Alyssa X / Screenity',url:'https://screenity.io/',note:'Studied the record-edit-share workflow and blur interaction. This is an local UI prototype with no reused branding, footage or user data.'}},
  {id:'wayfinder',number:'02',category:'system',name:'Wayfinder',year:'2026',headline:'Even a command menu deserves a finish line',summary:'A keyboard-first component with Chinese and English search, arrow navigation, Enter actions and explicit permission states.',context:'Personal component exercise / TypeScript / Keyboard interaction',role:'Command model / Search logic / States and tests',tags:['COMMAND MENU','TYPESCRIPT','KEYBOARD UX'],problem:'Mixing documents and actions makes search ambiguous, while hiding unavailable commands makes permissions look like an empty result. This exercise makes those edge states understandable.',decision:'Documents and actions stay distinct, and disabled items explain themselves. Keyboard and pointer selection share state; Enter during IME composition does not execute. Search remains separate from UI for direct testing.',architecture:['Typed command registry','Multi-token and alias matching','Combobox with retained focus','Vitest keyboard and empty-state tests'],result:'Search in English or Chinese, then use ↑ ↓ and Enter to open sample documents. A guest-only delete restriction explains itself. Tests cover case, multiple tokens, wrapping navigation and disabled items.',next:'Larger datasets need remote retrieval, cancellation and real screen-reader testing. Permissions must still be enforced on a server; disabled UI is not a security boundary.',demoHint:'Try “share” or “delete”, then use the arrow keys and Enter.',reference:{label:'Paco Coursey / cmdk',url:'https://github.com/dip/cmdk',note:'Studied composable command menus, empty states and keyboard navigation. This small local demo does not claim authorship of cmdk.'}},
  {id:'margin',number:'03',category:'experiment',name:'Margin',year:'2026',headline:'A clearer technical talk starts with one slide',summary:'A restricted Markdown editor with live preview, progressive list reveals and safe text-only HTML handling.',context:'Personal tool exercise / Parsing and live preview / Local session',role:'Content model / Restricted parser / Editor and presentation state',tags:['MARKDOWN','LIVE PREVIEW','DEVELOPER TOOL'],problem:'Technical talks change constantly, and dragging text boxes makes steps difficult to maintain. This exercise tests one minimal workflow: write a heading, prose and list items, then rehearse immediately.',decision:'Parse only headings, prose and lists; never execute arbitrary HTML or scripts. Keep source and presentation step separate, provide an empty-title fallback, and keep the parser pure for edge-case testing.',architecture:['Plain-text content model','Restricted Markdown parser','React live preview and step state','Vitest parser and safety tests'],result:'Edit the sample Markdown, see a synced preview, reveal points one by one and reset the sample. Tests cover CRLF, blank input, missing titles and HTML text. Content exists only in the current dialog session.',next:'Add local persistence, long-code layouts and static HTML export. Custom components would require isolation rather than executing scripts from a document.',demoHint:'Edit the Markdown, reveal the next point, or reset to start again.',reference:{label:'Anthony Fu / Slidev',url:'https://sli.dev/guide/why',note:'Studied Markdown-first authoring and the separation of content from presentation. Kept a small grammar rather than copying Slidev’s templates or feature scope.'}}
 ]
};

// Keep the featured tool first, followed by focused interaction exercises.
for (const locale of ['cn','en'] as Locale[]) {
 const order = ['poster','wayfinder','margin','cutroom'];
 projects[locale].sort((a,b) => order.indexOf(a.id) - order.indexOf(b.id));
 projects[locale].forEach((project,index) => {project.number = String(index + 1).padStart(2,'0')});
}
