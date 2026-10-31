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
  "cn": {
    "name": "Afterrain",
    "roman": "PERSONAL PORTFOLIO",
    "role": "大一 · UX/UI 与交互设计学习中",
    "resumeLabel": "个人作品集 / 2026",
    "location": "从使用场景开始，练习设计",
    "available": "学习目标：争取大二加入 Matrix",
    "statusNote": "AI 辅助原型 · 设计分析 · 持续迭代",
    "nav": [
      "作品",
      "设计分析",
      "学习路线",
      "联系"
    ],
    "eyebrow": "OBSERVE. DESIGN. TRY.",
    "statement": [
      "关注每一次操作",
      "让界面更容易理解"
    ],
    "intro": "我是一名大一学生，学习方向是 UX/UI 与交互设计。目前借助 AI 和前端技术制作可操作原型，练习梳理用户流程与界面状态；计划在寒假入门计算机网络，逐步积累设计案例，争取大二加入 Matrix。",
    "viewWork": "查看我的项目",
    "download": "下载文本简历",
    "downloaded": "文本简历已准备下载",
    "downloadFailed": "下载未完成，请使用页面下方的打印简历",
    "selected": "作品与交互练习",
    "selectedSub": "从可操作原型开始，逐步补齐设计过程与验证",
    "projectHint": "本地可运行 · 点击案例即可亲自操作",
    "all": "全部",
    "product": "产品原型",
    "system": "交互组件",
    "experiment": "创作工具",
    "resultCount": "个项目",
    "caseStudy": "查看案例",
    "close": "关闭案例",
    "challenge": "想解决的问题",
    "approach": "实现时的取舍",
    "architecture": "当前实现结构",
    "outcome": "可以现场验证的部分",
    "next": "下一步迭代",
    "responsibility": "实践范围",
    "demoLabel": "交互演示 / 本地示例数据",
    "referenceLabel": "实现参考 / 项目来源",
    "aboutLabel": "关于我",
    "aboutTitle": [
      "从观察使用过程",
      "到解释设计选择"
    ],
    "aboutBody": "我关注用户在界面上如何找到下一步、理解状态和处理错误。当前作品主要借助 AI 完成；接下来希望通过线框稿、方案比较和真实试用，逐步形成自己的设计判断。",
    "principles": [
      [
        "01",
        "先理解任务",
        "记录用户想完成什么、在哪里停顿，再提出设计假设。"
      ],
      [
        "02",
        "把交互做出来",
        "用可操作原型表达状态和反馈，前端技术帮助检验设计能否落地。"
      ],
      [
        "03",
        "用反馈修正设计",
        "把观察、推测和测试结果分开记录，真实完成后再补充改进结论。"
      ]
    ],
    "experience": "实践与下一步",
    "experienceNote": "区分已有实现与尚待完成的学习计划",
    "history": [
      {
        "date": "2026",
        "company": "个人作品集与交互练习",
        "role": "AI 辅助实现 / UX/UI 学习素材",
        "body": "已有海报工具、命令菜单、受限 Markdown 编辑和片段审阅原型。网站支持双语、响应式、测试与自动构建；这些是当前项目的实现，不代表个人已独立掌握全部技术。"
      },
      {
        "date": "进行中",
        "company": "海报工具设计分析",
        "role": "案头分析 / 待开展用户验证",
        "body": "围绕图片与配置导出、草稿保存、样例切换梳理任务与界面状态。列出方案取舍与试用计划，尚未收集用户测试结果。"
      },
      {
        "date": "寒假 → 大二",
        "company": "基础学习与案例积累",
        "role": "计算机网络入门 / UX/UI 实践",
        "body": "寒假学习 DNS、连接、HTTPS 与 HTTP 请求响应；大一下学期和暑假补齐设计案例与协作记录，争取大二参加 Matrix 招新。"
      }
    ],
    "toolkit": "技术与学习地图",
    "toolNote": "当前作品采用的工具与计划学习的方向",
    "skillGroups": [
      [
        "当前作品使用",
        "React · TypeScript · CSS · Canvas · Vite · Vitest"
      ],
      [
        "设计学习重点",
        "用户流程 · 信息架构 · 线框稿 · 视觉层级 · 组件状态 · 可用性测试"
      ],
      [
        "寒假学习计划",
        "DNS · TCP 基础 · HTTPS · HTTP · 缓存 · 浏览器 Network 面板"
      ]
    ],
    "education": "当前学习路线",
    "educationText": "UX/UI 基础 → 寒假网络入门 → 设计案例与验证 → 大二申请准备",
    "educationExtra": "时间按课业与实际进度调整；申请方向和要求以届时招新信息为准。",
    "contactTitle": [
      "一起讨论界面",
      "也讨论使用过程"
    ],
    "contactBody": "欢迎查看原型与设计分析。现阶段主要积累 UX/UI 案例；个人联系方式将在正式投递前补充。",
    "copyLink": "复制网站链接",
    "copied": "网站链接已复制",
    "copyFailed": "无法访问剪贴板，请手动复制浏览器地址",
    "contact": "AFTERRAIN / UX/UI PORTFOLIO",
    "contactNote": "个人邮箱尚未公开。可以通过下方 GitHub 仓库查看项目；招新联系渠道以 Matrix 官方信息为准。",
    "print": "打印简历 / 另存 PDF",
    "footer": "观察问题，尝试方案，再验证",
    "sculpture": "交互线框雕塑",
    "specimen": "形态研究 001",
    "sculptureHint": "点击雕塑切换形态 · 聚焦后用 ← → 旋转",
    "pause": "暂停动效",
    "play": "继续动效",
    "reset": "重置形态",
    "reduced": "减少动态已开启",
    "paused": "已暂停",
    "running": "动态中",
    "skip": "跳至作品",
    "language": "切换语言",
    "concept": "个人实践项目",
    "printable": "实践摘要"
  },
  "en": {
    "name": "Afterrain",
    "roman": "PERSONAL PORTFOLIO",
    "role": "First-year student · Learning UX/UI & interaction design",
    "resumeLabel": "Portfolio / 2026",
    "location": "Start with the task. Practise design.",
    "available": "Learning goal: apply to Matrix in my second year",
    "statusNote": "AI-assisted prototypes · Design analysis · Iteration",
    "nav": [
      "Work",
      "Design study",
      "Learning plan",
      "Contact"
    ],
    "eyebrow": "OBSERVE. DESIGN. TRY.",
    "statement": [
      "Care about each interaction",
      "Make interfaces easier to understand"
    ],
    "intro": "I am a first-year student learning UX/UI and interaction design. I use AI and frontend tools to build interactive prototypes and explore user flows and interface states. I plan to study computer networking during winter break and build a portfolio toward applying to Matrix in my second year.",
    "viewWork": "Explore my projects",
    "download": "Download text resume",
    "downloaded": "Your text resume is ready to download",
    "downloadFailed": "Download failed. Please use Print resume below.",
    "selected": "Work & interaction exercises",
    "selectedSub": "Interactive prototypes, with design reasoning and validation in progress",
    "projectHint": "Runs locally · Open a case and try it yourself",
    "all": "All work",
    "product": "Product prototype",
    "system": "Interaction",
    "experiment": "Creative tool",
    "resultCount": "projects",
    "caseStudy": "View case study",
    "close": "Close case study",
    "challenge": "The problem",
    "approach": "Implementation decisions",
    "architecture": "Current implementation",
    "outcome": "What you can verify here",
    "next": "Next iteration",
    "responsibility": "Practice scope",
    "demoLabel": "WORKING DEMO / LOCAL SAMPLE DATA",
    "referenceLabel": "Implementation reference / Project origin",
    "aboutLabel": "About me",
    "aboutTitle": [
      "Observe how people use it",
      "Explain the design choices"
    ],
    "aboutBody": "I care about how people find their next step, understand status and recover from errors. These projects are primarily AI-assisted. My next focus is developing design judgement through wireframes, alternatives and real usability sessions.",
    "principles": [
      [
        "01",
        "Understand the task",
        "Record what people want to do and where they pause before proposing a design hypothesis."
      ],
      [
        "02",
        "Make interactions tangible",
        "Use working prototypes to express states and feedback; frontend tools help explore feasibility."
      ],
      [
        "03",
        "Revise through feedback",
        "Keep observations, hypotheses and test results separate. Add outcome claims only after validation."
      ]
    ],
    "experience": "Practice & next steps",
    "experienceNote": "Implemented work and future learning are marked separately",
    "history": [
      {
        "date": "2026",
        "company": "Portfolio & interaction exercises",
        "role": "AI-assisted implementation / UX/UI learning material",
        "body": "A poster tool, command menu, restricted Markdown editor and clip-review prototype. The site includes bilingual content, responsive layouts, tests and automated builds. These describe the implementation, not independent mastery of every tool."
      },
      {
        "date": "In progress",
        "company": "Poster tool design study",
        "role": "Desk analysis / User validation pending",
        "body": "Explore image versus configuration export, local drafts and sample replacement. Design tradeoffs and a usability plan are documented; no user-test results have been collected yet."
      },
      {
        "date": "Winter break → Year two",
        "company": "Foundations & case studies",
        "role": "Networking basics / UX/UI practice",
        "body": "Study DNS, connections, HTTPS and HTTP during winter break. Develop design cases and collaboration records over the following term and summer, toward applying to Matrix in year two."
      }
    ],
    "toolkit": "Technology & learning map",
    "toolNote": "Tools in the current implementation and planned learning",
    "skillGroups": [
      [
        "Current implementation",
        "React · TypeScript · CSS · Canvas · Vite · Vitest"
      ],
      [
        "Design learning",
        "User flows · Information architecture · Wireframes · Visual hierarchy · Component states · Usability testing"
      ],
      [
        "Winter-break plan",
        "DNS · TCP basics · HTTPS · HTTP · Caching · Browser Network panel"
      ]
    ],
    "education": "Current learning path",
    "educationText": "UX/UI foundations → Winter networking basics → Design cases & validation → Year-two application",
    "educationExtra": "Adjust the pace to coursework and progress. Check the roles and requirements published when applying.",
    "contactTitle": [
      "Talk about the interface",
      "and how it is used"
    ],
    "contactBody": "Explore the prototypes and design study. I am currently building UX/UI case studies; personal contact details will be added before applying.",
    "copyLink": "Copy website link",
    "copied": "Website link copied",
    "copyFailed": "Clipboard unavailable. Please copy the browser address manually.",
    "contact": "AFTERRAIN / UX/UI PORTFOLIO",
    "contactNote": "Personal email is not public yet. Explore the GitHub repository below; check Matrix’s official information for recruitment contacts.",
    "print": "Print resume / Save PDF",
    "footer": "Observe. Try a design. Validate.",
    "sculpture": "Interactive wire sculpture",
    "specimen": "FORM STUDY 001",
    "sculptureHint": "Click to change form · Focus and use ← → to rotate",
    "pause": "Pause motion",
    "play": "Resume motion",
    "reset": "Reset form",
    "reduced": "Reduced motion enabled",
    "paused": "Paused",
    "running": "In motion",
    "skip": "Skip to work",
    "language": "Switch language",
    "concept": "Personal practice project",
    "printable": "Practice summary"
  }
};
export const projects: Record<Locale, Project[]> = {
 cn: [
  posterProjects.cn,
  {id:'cutroom',number:'01',category:'product',name:'Cutroom',year:'2026',headline:'给 32 秒的录屏，留一条准确的反馈',summary:'一个可以切换时间点、同步评审意见并预览隐私遮罩的片段审阅界面。',context:'个人交互实验 / React / 本地示例数据',role:'界面结构 / 时间轴状态 / 响应式实现',tags:['VIDEO REVIEW','REACT','UI STATES'],problem:'产品评审里的“这里有问题”经常缺少准确时间点，录屏还可能暴露邮箱等隐私信息。这个原型把问题收敛为短演示的片段审阅，而不是尝试做完整的视频剪辑器。',decision:'用当前片段驱动预览画面、时间码与评审意见，避免三套状态彼此不同步。隐私遮罩只改变当前示例帧，明确标注它是预览而不是真实的视频脱敏。',architecture:['React 片段与遮罩状态','本地绘制示例画面','时间点与评审备注数据模型','CSS 响应式工作台'],result:'可以切换三个时间点、同步画面与评审意见，并开关示例邮箱遮罩。所有内容均在浏览器本地运行，没有伪装成已经接入录制、转码或上传服务。',next:'下一步可以接入真实视频帧与本地文件导入，再研究非破坏性 edit list、可变帧率时间对齐和导出时的隐私检查。',demoHint:'点击时间轴切换片段；关闭或开启遮罩，查看演示邮箱的变化。',reference:{label:'Alyssa X / Screenity',url:'https://screenity.io/',note:'参考录制、编辑与分享的工作流以及 blur 交互；此处是本地界面原型，没有移用品牌、视频或用户数据。'}},
  {id:'wayfinder',number:'02',category:'system',name:'Wayfinder',year:'2026',headline:'一个命令菜单，也值得认真做完',summary:'支持中英文搜索、方向键导航、Enter 打开与权限空态的键盘优先组件。',context:'个人组件实验 / TypeScript / 键盘交互',role:'命令模型 / 搜索逻辑 / 状态与测试',tags:['COMMAND MENU','TYPESCRIPT','KEYBOARD UX'],problem:'把文档与操作混在一个搜索框里，会让用户分不清对象和动作；把无权限项目直接隐藏，又会让人误以为搜索失效。这个组件练习把这些边界状态做清楚。',decision:'结果区分文档与操作，禁用项保留原因。键盘高亮与鼠标选择共享状态；中文输入法候选确认时不触发 Enter。搜索逻辑独立于界面，便于直接测试。',architecture:['类型化 command registry','多关键词与别名匹配','Combobox 与焦点保留','Vitest 键盘与空态测试'],result:'可以搜索中英文关键词，用 ↑ ↓ 与 Enter 打开示例文档。访客的删除命令会显示权限原因，无结果时有恢复提示；测试覆盖大小写、多关键词、循环导航和禁用项。',next:'更大的数据集需要服务端检索、请求取消和真实读屏验证。真正的权限仍必须由服务端检查，界面禁用只是表达状态，不是安全边界。',demoHint:'试着搜索“share / 分享”或“delete / 删除”；用方向键和 Enter 操作。',reference:{label:'Paco Coursey / cmdk',url:'https://github.com/dip/cmdk',note:'参考可组合命令菜单、空态与键盘导航模式；本演示使用独立的小数据集和搜索逻辑，不冒充 cmdk 作者的作品。'}},
  {id:'margin',number:'03',category:'experiment',name:'Margin',year:'2026',headline:'把技术讲清楚，先从一张幻灯片开始',summary:'一个受限 Markdown 编辑器：即时预览、逐步展示列表，并安全地把 HTML 当作文本。',context:'个人工具实验 / 解析与实时预览 / 本地会话',role:'内容模型 / 受限解析 / 编辑与演示状态',tags:['MARKDOWN','LIVE PREVIEW','DEVELOPER TOOL'],problem:'技术分享需要频繁修改步骤与要点，逐张拖拽文本框不易维护。这个练习先验证一条最小工作流：写标题、正文和列表，然后立即排练。',decision:'只解析标题、正文和列表，不执行任意 HTML 或脚本。编辑内容与展示步骤分开管理，空标题有回退；解析器保持纯函数，方便覆盖异常输入。',architecture:['纯文本内容模型','受限 Markdown 解析器','React 即时预览与步骤状态','Vitest 解析与安全边界测试'],result:'可以修改示例 Markdown，右侧同步渲染，逐步展示列表并恢复样例。测试覆盖 CRLF、空输入、缺失标题和 HTML 文本；内容只保留在当前弹窗会话中。',next:'后续可以增加本地持久化、长代码块排版与静态 HTML 导出。如果引入自定义组件，需要隔离环境，而不是直接执行文档脚本。',demoHint:'修改左侧 Markdown，点击“下一步”逐条展示，或恢复示例重新开始。',reference:{label:'Anthony Fu / Slidev',url:'https://sli.dev/guide/why',note:'参考 Markdown 优先、内容与演示分离的开发者工作流；这里保留小而明确的语法边界，没有复制 Slidev 的模板或功能规模。'}}
 ],
 en: [
  posterProjects.en,
  {id:'cutroom',number:'01',category:'product',name:'Cutroom',year:'2026',headline:'A precise note on a 32-second recording',summary:'A clip review interface with synced timestamps, review notes and a privacy-mask preview.',context:'Personal interaction exercise / React / Local sample data',role:'Interface structure / Timeline state / Responsive implementation',tags:['VIDEO REVIEW','REACT','UI STATES'],problem:'“Something is wrong here” often lacks a timestamp, and recordings may expose private email addresses. This prototype focuses on short review sessions rather than pretending to be a full video editor.',decision:'The active clip drives the frame, timecode and review note so they cannot drift apart. The mask only changes the sample frame and is explicitly labelled as a preview, not real video redaction.',architecture:['React clip and mask state','Locally drawn sample frames','Timestamp and review-note model','Responsive CSS workspace'],result:'Switch between three moments, update the frame and note, and toggle the demo email mask. Everything runs locally without claiming recording, transcoding or upload services.',next:'Next steps include real video frames and local file import, followed by non-destructive edit lists, variable-frame-rate alignment and export-time privacy checks.',demoHint:'Select a moment on the timeline. Toggle the mask to reveal or hide the demo email.',reference:{label:'Alyssa X / Screenity',url:'https://screenity.io/',note:'Studied the record-edit-share workflow and blur interaction. This is a local UI prototype with no reused branding, footage or user data.'}},
  {id:'wayfinder',number:'02',category:'system',name:'Wayfinder',year:'2026',headline:'Even a command menu deserves a finish line',summary:'A keyboard-first component with Chinese and English search, arrow navigation, Enter actions and explicit permission states.',context:'Personal component exercise / TypeScript / Keyboard interaction',role:'Command model / Search logic / States and tests',tags:['COMMAND MENU','TYPESCRIPT','KEYBOARD UX'],problem:'Mixing documents and actions makes search ambiguous, while hiding unavailable commands makes permissions look like an empty result. This exercise makes those edge states understandable.',decision:'Documents and actions stay distinct, and disabled items explain themselves. Keyboard and pointer selection share state; Enter during IME composition does not execute. Search remains separate from UI for direct testing.',architecture:['Typed command registry','Multi-token and alias matching','Combobox with retained focus','Vitest keyboard and empty-state tests'],result:'Search in English or Chinese, then use ↑ ↓ and Enter to open sample documents. A guest-only delete restriction explains itself. Tests cover case, multiple tokens, wrapping navigation and disabled items.',next:'Larger datasets need remote retrieval, cancellation and real screen-reader testing. Permissions must still be enforced on a server; disabled UI is not a security boundary.',demoHint:'Try “share” or “delete”, then use the arrow keys and Enter.',reference:{label:'Paco Coursey / cmdk',url:'https://github.com/dip/cmdk',note:'Studied composable command menus, empty states and keyboard navigation. This small local demo does not claim authorship of cmdk.'}},
  {id:'margin',number:'03',category:'experiment',name:'Margin',year:'2026',headline:'A clearer technical talk starts with one slide',summary:'A restricted Markdown editor with live preview, progressive list reveals and safe text-only HTML handling.',context:'Personal tool exercise / Parsing and live preview / Local session',role:'Content model / Restricted parser / Editor and presentation state',tags:['MARKDOWN','LIVE PREVIEW','DEVELOPER TOOL'],problem:'Technical talks change constantly, and dragging text boxes makes steps difficult to maintain. This exercise tests one minimal workflow: write a heading, prose and list items, then rehearse immediately.',decision:'Parse only headings, prose and lists; never execute arbitrary HTML or scripts. Keep source and presentation step separate, provide an empty-title fallback, and keep the parser pure for edge-case testing.',architecture:['Plain-text content model','Restricted Markdown parser','React live preview and step state','Vitest parser and safety tests'],result:'Edit the sample Markdown, see a synced preview, reveal points one by one and reset the sample. Tests cover CRLF, blank input, missing titles and HTML text. Content exists only in the current dialog session.',next:'Add local persistence, long-code layouts and static HTML export. Custom components would require isolation rather than executing scripts from a document.',demoHint:'Edit the Markdown, reveal the next point, or reset to start again.',reference:{label:'Anthony Fu / Slidev',url:'https://sli.dev/guide/why',note:'Studied Markdown-first authoring and the separation of content from presentation. Kept a small grammar rather than copying Slidev’s templates or feature scope.'}}
 ]
};

// Keep the featured tool first, followed by focused interaction exercises.
for (const locale of ['cn','en'] as Locale[]) {
 const order = ['poster','wayfinder','margin','cutroom'];
 projects[locale].sort((a,b) => order.indexOf(a.id) - order.indexOf(b.id));
 projects[locale].forEach((project,index) => {project.number = String(index + 1).padStart(2,'0')});
 projects[locale].filter(project=>project.id!=='poster').forEach(project=>{
  project.role=(locale==='cn'?'AI 辅助交互练习 / ':'AI-assisted interaction exercise / ')+project.role;
 });
}
