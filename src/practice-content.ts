import type {Locale, Project} from './content';

export const posterProjects: Record<Locale, Project> = {
  cn: {
    id:'poster', number:'01', category:'experiment', name:'Poster Lab', year:'2026',
    headline:'让一个想法，变成一张可以带走的海报',
    summary:'编辑文字与构图，保存创作配置，导出高清图片。一个从输入到交付的浏览器小工具。',
    context:'主项目 / AI 辅助开发 / 浏览器本地运行', role:'React 状态、Canvas 绘制、配置持久化与导出',
    tags:['CANVAS','LOCAL DRAFT','PNG EXPORT'],
    problem:'制作一张简单海报，常常需要反复调整文字、配色和构图。这个工具将创作过程收敛为少量可调整的参数，并保留配置，方便下一次继续编辑。',
    decision:'把配置作为唯一的数据来源。预览和导出使用同一个绘制函数；保存文字、配色、密度与随机种子，才能完整恢复创作状态。配置仅保存在当前浏览器，也可以导出 JSON 备份。',
    architecture:['React 配置与撤销历史','带种子的 Canvas 绘制','版本化 JSON 与本地草稿','1800 × 2400 PNG 导出'],
    result:'已接入三种构图、三套配色、样例画廊、最多 20 步撤销、自动保存与恢复、配置导入导出及高清 PNG 导出。非法配置会被拒绝，不覆盖当前作品。',
    next:'计划进一步学习接口和数据库，让配置可以跨设备保存。当前版本没有后端、账号或云同步；文字外观也会受到设备字体的影响。',
    demoHint:'修改标题，试试轨道构图；关闭后重新打开，或刷新页面再打开，配置会恢复。',
    reference:{label:'Canvas API / MDN',url:'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',note:'在原有海报工具基础上接入并扩展；AI 辅助写代码，实现讲解对应的是能当场核对的代码行。'},
  },
  en: {
    id:'poster', number:'01', category:'experiment', name:'Poster Lab', year:'2026',
    headline:'Turn an idea into a poster you can keep',
    summary:'Edit the text and composition, keep the configuration and export a high-resolution image. A small browser tool with a complete workflow.',
    context:'Featured project / AI-assisted development / Local browser tool', role:'React state, Canvas rendering, persistence and export',
    tags:['CANVAS','LOCAL DRAFT','PNG EXPORT'],
    problem:'A simple poster often involves repeated changes to text, color and composition. This tool reduces that process to a few parameters and preserves them for the next editing session.',
    decision:'Configuration is the single source of truth. Preview and export share one renderer. Text, colors, density and seed are saved together. Drafts stay in this browser; JSON export provides a portable backup.',
    architecture:['React configuration and undo','Seeded Canvas rendering','Versioned JSON and local draft','1800 × 2400 PNG export'],
    result:'Includes three layouts, three palettes, a sample gallery, up to 20 undo steps, automatic local recovery, JSON import/export and PNG export. Invalid configurations are rejected without replacing the current work.',
    next:'Learn APIs and databases to save configurations across devices. This version has no backend, accounts or cloud sync; text appearance also depends on device fonts.',
    demoHint:'Change the title and try Orbit. Close and reopen, or refresh and reopen, to restore the configuration.',
    reference:{label:'Canvas API / MDN',url:'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',note:'Integrated and extended from the existing local poster tool, primarily with AI assistance. The implementation notes support study and verification; they do not claim independent mastery.'},
  },
};

export const practiceCopy = {
 cn: {
  title:'从界面，走进实现', subtitle:'以海报工具为例，拆开一次操作背后的过程。',
  steps:[
   ['01','输入','标题、副标题与署名先进入受控输入，等待一次明确的提交动作，不会边打字边重绘画布。'],
   ['02','状态','参数更新、模板切换与渲染结果都写入同一个 reducer，避免界面、画布和导出各自为政。'],
   ['03','绘制','画布按固定尺寸与像素比绘制，导出前先在离屏画布上完整重绘一次，再转成 PNG。']
  ],
  notes:[
   {title:'一份配置，一个数据源',body:'标题、配色、构图、密度与随机种子都放在同一个 PosterConfig 里；界面只是它的投影，不是另一份真相。',code:'const next = {...state.config, title: value.trim()};\ndispatch({type: \'update\', config: next});',question:'如果标题被清空，是回退默认值还是允许空？我选择回退默认值并给出提示，因为空标题导出就是一张废图。'},
   {title:'预览与导出共用同一条绘制路径',body:'preview 和 export 都调用 drawPoster，只是尺寸和像素比不同。少一套逻辑，就少一类“预览好看、导出错位”的问题。',code:'drawPoster(ctx, config, 1800, 2400);',question:'为什么不在导出时另写一个函数？因为两套布局代码一定会慢慢分叉，最后没人说得清哪个才是对的。'},
   {title:'失败要看得见',body:'解析配置、导入 JSON、绘制异常都走 validateConfig 与 try/catch；出错时保留旧画面，把状态写进界面，而不是点了没反应。',code:'try { drawPoster(ctx, parseConfig(text), 900, 1200); }\ncatch { setStatus(\'error\'); }',question:'静默失败和明确报错，对用户来说差别有多大？前者会让人怀疑自己，后者只让人知道下一步做什么。'}
  ],
  noteFooter:'打开工具，沿着参数、状态和画布这条链路，验证上面的实现。',
  logTitle:'每一次迭代，都留下依据', logSubtitle:'记录项目变化，也记录 AI 与我的分工。',
  log:[
   {date:'2026.10.30',tag:'已实现',title:'补上“可被验证”的那一半',body:'接入 GitHub Actions 与 Pages 部署配置，补单元测试与构建检查；把能力写成可核对的证据清单，而不是形容词。',evidence:'可验证：推送后 Actions 依次跑 tsc --noEmit、40 项单元测试与 vite build。'},
   {date:'2026.10.30',tag:'已整理',title:'把申请材料做成一个页面',body:'重写首页定位，新增能力证据与 Matrix 申请页：三个具体的使用问题、分阶段计划、投递方式。',evidence:'可验证：对比改动前后的章节；每条说法都能在仓库、命令或演示里找到对应。'},
   {date:'下一步',tag:'待实践',title:'由我独立完成一次代码修改',body:'把滑块连续拖动合并成一步撤销，自己写测试、自己提 PR，并在面试时讲清楚为什么这样改。',evidence:'完成后再补：提交记录、测试用例与取舍说明。'}
  ],
  evidence:{
   kicker:'02 / EVIDENCE',
   title:'能力证据，不是形容词',
   lead:'投递前先自查：下面每一条都能在几分钟内被验证，也欢迎现场抽查。',
   items:[
    {index:'01',label:'仓库与 CI',title:'源码、提交记录与自动构建',body:'公开仓库放完整源码；每次推送触发 GitHub Actions，依次跑 TypeScript 检查、40 项单元测试和构建。',meta:'tsc · 40 tests · vite build',action:'repo'},
    {index:'02',label:'产品',title:'Poster Lab：从输入到交付',body:'改标题、换构图、导出 1800 × 2400 PNG；关掉页面再打开草稿还在；配置能导出 JSON 再导入。',meta:'Canvas · 本地草稿 · PNG',action:'poster'},
    {index:'03',label:'底层',title:'并行 C：MPI 与 Pthreads',body:'梯形积分、奇偶交换排序、向量乘法与广播用 MPI 写；互斥锁加和用 Pthreads 写。在 Linux 上编译运行，并和串行结果对拍。',meta:'C · MPI · Pthreads · Linux',action:''},
    {index:'04',label:'课程视角',title:'C 语言期中复习答案册',body:'把程设课的易错题型按考点整理成答案册，标注易错点和验证方式，发给同班同学——这是我离课程系统用户最近的一次。',meta:'整理 · 校对 · 分发',action:''},
    {index:'05',label:'交互质量',title:'键盘优先，边界写清楚',body:'命令菜单支持中英文搜索与上下键导航，禁用项说明原因；中文输入法组合输入时按 Enter 不会误执行。',meta:'Wayfinder · IME · 空态',action:''}
   ],
   footer:'仓库地址与测试命令会附在投递邮件里；演示步骤写在本页，任何人都能复现。'
  },
  applicationTitle:'我为什么申请 Matrix，\n以及进来后能马上做什么',
  applicationIntro:'我用 Matrix 交程设作业，也在自己写小工具，所以对“课程系统哪里好用、哪里卡手”有具体体感。前端方向的三条要求——对 Web 开发有热情、会用 Git 协作、能在短周期内学会陌生技术——正好对应我过去两个月在做的事，而不是我打算去做的事。',
  facts:[
   ['申请方向','前端（可接受后端服务端 / 评测后台）'],
   ['年级专业','2026 级 · 计算机学院（本科）'],
   ['可投入时间','学期每周 ≥ 10 小时，寒暑假可全勤参与线上开发'],
   ['现在能上手','React 页面与组件、Canvas、响应式与打印、Git 与 PR 流程']
  ],
  observationsTitle:'作为用户，我看到的三个小问题',
  observations:[
   {tag:'课程系统',title:'做作业时看不到截止时间',body:'我常在做题页切回列表确认 DDL。可以在做题页常驻一条“剩余时间 + 提交状态”，并在 DDL 前 24 / 48 小时做渐进提醒。改动很小，但每天都会用到。'},
   {tag:'评测结果',title:'WA 之后不知道该查什么',body:'评测报告给了用例结果，却不给排查路径。可以做“常见错误 → 建议检查项”的映射（数组越界、变量未初始化、多组数据没清空），放在失败结果下面。'},
   {tag:'考试系统',title:'第一次线上考试的紧张来自“不知道界面”',body:'给一个 60 秒的模拟考试入口：倒计时、交卷确认、断网提示各走一遍，不需要真实题目。降低首考焦虑，也减少考试当天的操作类提问。'}
  ],
  planTitle:'如果能进来，我打算这样开始',
  plan:[
   ['第 1 周','把系统跑起来','本地跑通课程系统前端，读路由和状态管理，记录 3 个能稳定复现的小问题。'],
   ['第 2–4 周','接第一个 issue','在师兄带的范围内修一个页面 bug 或补一个空态，写清复现步骤，按规范提 PR 并跟完 review。'],
   ['第 2 个月','独立负责一个小模块','从设计稿到上线独立完成一个模块，补测试、写取舍；同时补 Go 与后端基础。'],
   ['长期','前后端都懂一点','前端在课程系统，后端在评测后台补 C++ / Linux；目标是能独立定位一次“提交很慢”的链路问题。']
  ],
  contributionTitle:'关于 AI 辅助，我把话说清楚',
  contribution:'这些作品的第一版由 AI 辅助产出。我的做法是：让 AI 出方案，我来拆解、验证、修改，并保证每个说法都能在代码或命令里对上。AI 让我在大一就能做出完整的东西，而解释和修改由我负责。',
  info:'投递：recruit@matrix.moe，标题「Matrix招新简历-前端-2026级-计算机学院-姓名」，附件放 PDF 简历；招新交流群 878822270。邮件里我会附上仓库地址与 3 分钟演示步骤。',
  applicationLabel:'加入 Matrix 的学习与交付计划', open:'体验海报工具'
 },
 en: {
  title:'From interface to implementation', subtitle:'A poster tool, opened up: what one action actually sets off.',
  steps:[
   ['01','Input','Title, subtitle and signature enter controlled inputs and wait for an explicit commit; typing never redraws the canvas.'],
   ['02','State','Parameter updates, template switches and render results all go through one reducer, so UI, canvas and export cannot disagree.'],
   ['03','Draw','The canvas draws at a fixed size and pixel ratio; export performs one full redraw on an offscreen canvas before encoding to PNG.']
  ],
  notes:[
   {title:'One configuration, one source of truth',body:'Title, palette, layout, density and seed all live in one PosterConfig. The interface is a projection of it, not a second truth.',code:'const next = {...state.config, title: value.trim()};\ndispatch({type: \'update\', config: next});',question:'Should an emptied title fall back to the default or stay empty? I fall back and show a hint, because an empty title exports a broken poster.'},
   {title:'Preview and export share one draw path',body:'Preview and export both call drawPoster with different sizes and pixel ratios. One path means one class of “looks right, exports offset” bugs disappears.',code:'drawPoster(ctx, config, 1800, 2400);',question:'Why not a separate export function? Because two layout implementations drift apart until nobody can say which one is correct.'},
   {title:'Failures must be visible',body:'Parsing, JSON import and drawing all go through validateConfig and try/catch. On failure the previous frame stays and the status surfaces in the UI instead of nothing happening.',code:'try { drawPoster(ctx, parseConfig(text), 900, 1200); }\ncatch { setStatus(\'error\'); }',question:'How much does silent failure versus an explicit error matter? One makes users doubt themselves, the other tells them what to do next.'}
  ],
  noteFooter:'Open the tool and verify this along the path from parameters to state to canvas.',
  logTitle:'Every iteration leaves evidence', logSubtitle:'Project changes, and how work was divided between AI and me.',
  log:[
   {date:'2026.10.30',tag:'Shipped',title:'Adding the verifiable half',body:'Wired up GitHub Actions and Pages deployment, plus unit tests and a build check; rewrote capability claims as a checklist that can be checked rather than adjectives.',evidence:'Verifiable: a push runs tsc --noEmit, 40 unit tests and vite build in order.'},
   {date:'2026.10.30',tag:'Reframed',title:'Turning the application into a page',body:'Rewrote the positioning, added an evidence section and a Matrix application page: three concrete user problems, a staged plan, and how to apply.',evidence:'Verifiable: compare the sections before and after; every claim maps to the repository, a command or a demo.'},
   {date:'Next',tag:'To practise',title:'One code change, independently',body:'Coalesce rapid slider drags into a single undo step, write the tests myself, open my own pull request, and explain the trade-off in an interview.',evidence:'To be added: commits, test cases and reasoning.'}
  ],
  evidence:{
   kicker:'02 / EVIDENCE',
   title:'Evidence, not adjectives',
   lead:'Check it yourself: each item below can be verified in minutes, and is open to a live spot check.',
   items:[
    {index:'01',label:'Repository & CI',title:'Source, commit history, automated builds',body:'The public repository holds the full source; every push runs TypeScript checks, 40 unit tests and a production build in GitHub Actions.',meta:'tsc · 40 tests · vite build',action:'repo'},
    {index:'02',label:'Product',title:'Poster Lab: from input to delivery',body:'Change the title, switch the composition, export a 1800 × 2400 PNG; close the page and the draft is still there; export and re-import the configuration as JSON.',meta:'Canvas · local draft · PNG',action:'poster'},
    {index:'03',label:'Systems',title:'Parallel C: MPI and Pthreads',body:'Trapezoid integration, odd-even transposition sort, vector multiplication and broadcast in MPI; mutex-guarded summation in Pthreads. Compiled and run on Linux, results diffed against serial versions.',meta:'C · MPI · Pthreads · Linux',action:''},
    {index:'04',label:'Course perspective',title:'C midterm review booklet',body:'Turned error-prone C exercises into a topic-indexed booklet with common mistakes and verification steps, and shared it with classmates. It is where I got closest to course-system users.',meta:'Organise · proofread · distribute',action:''},
    {index:'05',label:'Interaction quality',title:'Keyboard first, edges made explicit',body:'The command menu searches Chinese and English, navigates with arrow keys and explains disabled items; pressing Enter during IME composition does not fire the action.',meta:'Wayfinder · IME · empty states',action:''}
   ],
   footer:'The repository URL and test commands go in the application email; the walkthrough is on this page, so anyone can reproduce it.'
  },
  applicationTitle:'Why I am applying to Matrix,\nand what I can do from week one',
  applicationIntro:'I submit coursework through Matrix and build small tools of my own, so I have a concrete sense of where the course system works and where it gets in the way. The three frontend requirements — genuine interest in web development, using Git to collaborate, and learning unfamiliar technology quickly — match what I have already been doing these past two months, not what I plan to do.',
  facts:[
   ['Track','Frontend (also open to backend / judge admin)'],
   ['Year & major','Class of 2026 · Computer Science, undergraduate'],
   ['Time available','≥ 10 hours per week in term; full-time online in vacations'],
   ['Can start on','React pages and components, Canvas, responsive and print, Git and pull requests']
  ],
  observationsTitle:'Three small problems I hit as a user',
  observations:[
   {tag:'Course system',title:'The deadline disappears while I work',body:'I keep switching back to the list to confirm the deadline. A persistent “time left + submission status” strip on the problem page, with progressive reminders at 24 and 48 hours, is a small change used every day.'},
   {tag:'Judge results',title:'After a wrong answer, I do not know what to check',body:'The report lists case results but no debugging path. A “common mistake → what to check” mapping (out-of-bounds, uninitialised variables, uncleared state between test groups) under the failure would help.'},
   {tag:'Exam system',title:'First-exam nerves come from not knowing the interface',body:'A 60-second mock exam entry that walks through the countdown, submit confirmation and disconnect warning, with no real questions, would reduce first-exam anxiety and the operational questions asked on exam day.'}
  ],
  planTitle:'If I join, this is how I would start',
  plan:[
   ['Week 1','Get it running locally','Run the course-system frontend locally, read the routing and state management, and log three reliably reproducible issues.'],
   ['Weeks 2–4','Take a first issue','Fix one page bug or add one empty state within a mentor-scoped task, document reproduction steps, and open a pull request that follows the rules and the review.'],
   ['Month 2','Own a small module','Deliver one module from design to release, with tests and written trade-offs, while building up Go and backend fundamentals.'],
   ['Longer term','Frontend and backend','Frontend in the course system, backend work in C++ / Linux on the judge; the goal is diagnosing a slow-submission path end to end.']
  ],
  contributionTitle:'About AI assistance, plainly',
  contribution:'The first versions of these projects were generated largely with AI. My method: let AI propose, then I take it apart, verify it, change it, and make sure every claim matches code or a command. AI let a first-year student ship something complete; whether I stay depends on whether I can explain it and fix it.',
  info:'Apply to recruit@matrix.moe with the subject "Matrix招新简历-前端-2026级-计算机学院-姓名" and a PDF resume attached; recruitment group 878822270. I will include the repository URL and a three-minute walkthrough.',
  applicationLabel:'Learning and delivery plan for Matrix', open:'Open the poster tool'
 }
};
