import type {Locale, Project} from './content';

export const posterProjects: Record<Locale, Project> = {
  cn: {
    id:'poster', number:'01', category:'experiment', name:'Poster Lab', year:'2026',
    headline:'让一个想法，变成一张可以带走的海报',
    summary:'编辑文字与构图，保存创作配置，导出高清图片。一个从输入到交付的浏览器小工具。',
    context:'主项目 / AI 辅助开发 / 浏览器本地运行', role:'AI 辅助原型 / 参数编辑、状态反馈与文件导出',
    tags:['CANVAS','LOCAL DRAFT','PNG EXPORT'],
    problem:'制作一张简单海报，常常需要反复调整文字、配色和构图。这个工具将创作过程收敛为少量可调整的参数，并保留配置，方便下一次继续编辑。',
    decision:'把配置作为唯一的数据来源。预览和导出使用同一个绘制函数；保存文字、配色、密度与随机种子，才能完整恢复创作状态。配置仅保存在当前浏览器，也可以导出 JSON 备份。',
    architecture:['React 配置与撤销历史','带种子的 Canvas 绘制','版本化 JSON 与本地草稿','1800 × 2400 PNG 导出'],
    result:'已接入三种构图、三套配色、样例画廊、最多 20 步撤销、自动保存与恢复、配置导入导出及高清 PNG 导出。非法配置会被拒绝，不覆盖当前作品。',
    next:'下一步优先验证导出含义、草稿提示和移动端编辑流程。当前版本没有后端、账号或云同步；文字外观也会受到设备字体的影响。',
    demoHint:'修改标题，试试轨道构图；关闭后重新打开，或刷新页面再打开，配置会恢复。',
    reference:{label:'Canvas API / MDN',url:'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',note:'在原有海报工具基础上接入并扩展；AI 辅助写代码，实现讲解对应的是能当场核对的代码行。'},
  },
  en: {
    id:'poster', number:'01', category:'experiment', name:'Poster Lab', year:'2026',
    headline:'Turn an idea into a poster you can keep',
    summary:'Edit the text and composition, keep the configuration and export a high-resolution image. A small browser tool with a complete workflow.',
    context:'Featured project / AI-assisted development / Local browser tool', role:'AI-assisted prototype / Parameter editing, feedback and file export',
    tags:['CANVAS','LOCAL DRAFT','PNG EXPORT'],
    problem:'A simple poster often involves repeated changes to text, color and composition. This tool reduces that process to a few parameters and preserves them for the next editing session.',
    decision:'Configuration is the single source of truth. Preview and export share one renderer. Text, colors, density and seed are saved together. Drafts stay in this browser; JSON export provides a portable backup.',
    architecture:['React configuration and undo','Seeded Canvas rendering','Versioned JSON and local draft','1800 × 2400 PNG export'],
    result:'Includes three layouts, three palettes, a sample gallery, up to 20 undo steps, automatic local recovery, JSON import/export and PNG export. Invalid configurations are rejected without replacing the current work.',
    next:'Next, validate export labels, draft feedback and the mobile editing flow. This version has no backend, accounts or cloud sync; text appearance also depends on device fonts.',
    demoHint:'Change the title and try Orbit. Close and reopen, or refresh and reopen, to restore the configuration.',
    reference:{label:'Canvas API / MDN',url:'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',note:'Integrated and extended from the existing local poster tool, primarily with AI assistance. The implementation notes support study and verification; they do not claim independent mastery.'},
  },
};

export const practiceCopy = {
  "cn": {
    "title": "交互背后，代码如何响应",
    "subtitle": "以下描述对应当前实现，帮助理解设计与技术的连接。",
    "steps": [
      [
        "01 / INPUT",
        "输入即更新",
        "标题与副标题通过 onChange 更新配置，无需提交按钮。"
      ],
      [
        "02 / STATE",
        "记录配置",
        "reducer 保存当前配置与最多 20 步撤销历史。"
      ],
      [
        "03 / PREVIEW",
        "即时预览",
        "配置变化触发 Canvas 重绘，并尝试保存本地草稿。"
      ],
      [
        "04 / EXPORT",
        "导出结果",
        "PNG 导出重新绘制大画布，JSON 导出保留可编辑配置。"
      ]
    ],
    "notes": [
      {
        "title": "文字修改后，为什么预览立即变化？",
        "body": "输入事件更新 PosterConfig；预览组件的 effect 监听配置变化，再调用 drawPoster。没有额外的提交动作，也没有署名输入项。",
        "code": "onChange → update → dispatch\nconfig changes → effect → drawPoster",
        "question": "设计关注：修改得到及时反馈，用户可以直接比较结果。"
      },
      {
        "title": "清空标题时，目前会发生什么？",
        "body": "输入框和配置允许空标题，绘制函数用 UNTITLED 作为显示回退；当前没有专门的空标题提示。是否允许无标题导出，需要结合创作任务验证。",
        "code": "const lines = (title.trim() || 'UNTITLED').split('\\n').slice(0, 4);",
        "question": "待验证：用户更希望保留空白、获得提醒，还是看到占位标题？"
      },
      {
        "title": "恢复与导出，各自保留什么？",
        "body": "本地草稿保存当前配置；撤销历史仅在本次会话保留。PNG 在 1800 × 2400 的新画布上重新绘制，JSON 保存文字、配色、构图、密度和种子。",
        "code": "current config → localStorage / JSON\ndrawPoster(ctx, config, 1800, 2400) → PNG",
        "question": "设计关注：图片适合分享，配置适合继续编辑，两者需要明确区分。"
      },
      {
        "title": "哪些失败已有反馈？",
        "body": "JSON 导入先校验版本、字段和范围，失败时不替换当前配置。存储失败与 PNG 导出失败有提示；预览绘制当前没有单独的异常恢复机制。",
        "code": "parseConfig(file) → validate → update\ninvalid import → keep current configuration",
        "question": "后续可以补充预览异常反馈，不能把它写成已经完成的能力。"
      }
    ],
    "noteFooter": "实现说明不替代用户验证；原型的可用性仍需通过实际任务观察。",
    "logTitle": "留下过程，也留下边界",
    "logSubtitle": "记录本次实现变化，个人实践与研究结果另行补充。",
    "log": [
      {
        "date": "2026.10.30",
        "tag": "已有实现",
        "title": "交互工具与发布流程",
        "body": "已有海报工具和三个交互练习，保留测试、类型检查、GitHub Actions 与 Pages 配置。",
        "evidence": "功能与工程配置可在源码中核对；不据此推断本人已具备团队协作经验。"
      },
      {
        "date": "2026.10.31",
        "tag": "已调整",
        "title": "围绕 UX/UI 重新组织作品",
        "body": "明确大二目标与寒假网络学习计划，纠正实现讲解和联系方式，增加海报工具的设计假设与验证计划。",
        "evidence": "本次文案、设计分析与代码修改由 AI 辅助完成。"
      },
      {
        "date": "下一步",
        "tag": "待实践",
        "title": "由本人开展一次小型可用性测试",
        "body": "邀请自愿试用的同学完成导出、恢复与样例切换任务，记录停顿和误解，再选择一个问题制作改版。",
        "evidence": "完成后补充真实观察、方案取舍及修改前后的结果，不预写成效。"
      }
    ],
    "applicationTitle": "以 UX/UI 为方向，\n为大二的 Matrix 申请做准备。",
    "applicationIntro": "当前重点是理解任务、组织界面信息、设计状态与反馈，并用原型表达方案。寒假计划入门计算机网络，让设计判断能考虑请求、等待、失败和恢复等实际约束。",
    "facts": [
      [
        "当前阶段",
        "大一 · UX/UI 学习中"
      ],
      [
        "目标时间",
        "争取大二加入 Matrix"
      ],
      [
        "寒假重点",
        "计算机网络入门与界面状态理解"
      ],
      [
        "准备方式",
        "设计案例、试用记录、可操作原型"
      ]
    ],
    "observationsTitle": "校园工具研究题目 · 尚待验证",
    "observations": [
      {
        "tag": "待观察 / 信息可见性",
        "title": "截止时间与提交状态是否容易确认？",
        "body": "先记录实际页面和任务，观察使用者是否需要来回查找。若存在问题，再比较固定信息栏与按需提示，不预设现有系统有缺陷。"
      },
      {
        "tag": "待观察 / 错误反馈",
        "title": "失败后，用户是否知道下一步？",
        "body": "区分答案错误、编译失败与网络异常。验证提示是否说明已知事实、可采取的操作和未知结果；不把 WA 直接诊断为某一种代码错误。"
      },
      {
        "tag": "待观察 / 首次使用",
        "title": "首次操作是否需要练习入口？",
        "body": "通过任务观察了解陌生步骤，再评估引导、说明或模拟练习的必要性。研究采用非真实考试内容，不预先宣称能降低焦虑。"
      }
    ],
    "planTitle": "从现在到大二的准备路线",
    "plan": [
      [
        "现在至寒假前",
        "UI 与交互基础",
        "练习视觉层级、信息架构、用户流程与线框稿，完成一个可点击原型。"
      ],
      [
        "寒假",
        "入门计算机网络",
        "学习 DNS、TCP 基础、HTTPS 与 HTTP；用 Network 面板观察请求，设计加载、超时和断网状态。"
      ],
      [
        "大一下学期与暑假",
        "补齐设计案例",
        "完成试用与迭代，整理两个能讲清楚的案例；尝试与开发者进行组件和状态交接。"
      ],
      [
        "大二招新前",
        "整理与申请",
        "核对当年设计、产品及相关岗位要求，整理真实贡献、作品集与本人可投入时间。"
      ]
    ],
    "contributionTitle": "AI 辅助与个人实践",
    "contribution": "现有项目主要借助 AI 完成，本次设计分析和文案整理也有 AI 参与。当前展示的是原型与分析框架；本人独立完成的设计、访谈、修改和验证，将在实际完成后补充记录。",
    "info": "学院专业、个人联系方式和可投入时间尚待本人确认。当前是准备阶段，正式申请时以 Matrix 当年的招新信息为准。",
    "applicationLabel": "UX/UI 学习与 Matrix 准备计划",
    "open": "体验海报工具"
  },
  "en": {
    "title": "How the interface responds",
    "subtitle": "Notes grounded in the current implementation, connecting interaction and technology.",
    "steps": [
      [
        "01 / INPUT",
        "Update as you type",
        "Title and subtitle update configuration through onChange, without a submit button."
      ],
      [
        "02 / STATE",
        "Keep configuration",
        "A reducer stores the current configuration and up to 20 undo steps."
      ],
      [
        "03 / PREVIEW",
        "Preview immediately",
        "Configuration changes redraw Canvas and attempt to save a local draft."
      ],
      [
        "04 / EXPORT",
        "Keep the result",
        "PNG redraws a larger canvas; JSON keeps the editable configuration."
      ]
    ],
    "notes": [
      {
        "title": "Why does typing update the preview immediately?",
        "body": "Input events update PosterConfig. The preview effect observes configuration changes and calls drawPoster. There is no extra submit step or signature field.",
        "code": "onChange → update → dispatch\nconfig changes → effect → drawPoster",
        "question": "Design concern: immediate feedback helps people compare changes."
      },
      {
        "title": "What happens when the title is empty?",
        "body": "The input and configuration allow an empty title. Rendering falls back to UNTITLED; there is no dedicated empty-title message. Whether a title should be required needs task-based validation.",
        "code": "const lines = (title.trim() || 'UNTITLED').split('\\n').slice(0, 4);",
        "question": "To validate: would people prefer a blank poster, a reminder or a placeholder?"
      },
      {
        "title": "What do recovery and export preserve?",
        "body": "The local draft stores the current configuration; undo history lasts for this session. PNG is redrawn at 1800 × 2400, while JSON keeps text, palette, layout, density and seed.",
        "code": "current config → localStorage / JSON\ndrawPoster(ctx, config, 1800, 2400) → PNG",
        "question": "Design concern: an image is for sharing; a configuration is for editing later."
      },
      {
        "title": "Which failures already have feedback?",
        "body": "JSON import validates version, fields and ranges before replacing the current configuration. Storage and PNG export failures show feedback. Preview rendering has no separate recovery mechanism yet.",
        "code": "parseConfig(file) → validate → update\ninvalid import → keep current configuration",
        "question": "Preview recovery is a future improvement, not a completed feature."
      }
    ],
    "noteFooter": "Implementation notes do not replace usability validation through real tasks.",
    "logTitle": "Keep the process visible",
    "logSubtitle": "Implementation changes, with personal practice and research results documented separately.",
    "log": [
      {
        "date": "2026.10.30",
        "tag": "Implemented",
        "title": "Interactive tools and publishing",
        "body": "The poster tool and three interaction exercises include tests, type checks, GitHub Actions and Pages configuration.",
        "evidence": "Code verifies the implementation; it does not establish personal collaboration experience."
      },
      {
        "date": "2026.10.31",
        "tag": "Reframed",
        "title": "Organise the portfolio around UX/UI",
        "body": "Clarified the year-two goal and winter networking plan, corrected technical notes and contact handling, and added design hypotheses and a validation plan.",
        "evidence": "This update to content, analysis and code was AI-assisted."
      },
      {
        "date": "Next",
        "tag": "To practise",
        "title": "Conduct a small usability session myself",
        "body": "Invite willing classmates to export, restore and switch samples. Record pauses and misunderstandings, then prototype a change for one observed issue.",
        "evidence": "Add real observations, tradeoffs and before/after results after completion."
      }
    ],
    "applicationTitle": "Learn UX/UI now.\nPrepare for Matrix in year two.",
    "applicationIntro": "My focus is understanding tasks, organising information, designing states and feedback, and expressing ideas with prototypes. During winter break I plan to study networking basics to understand requests, waiting, failure and recovery.",
    "facts": [
      [
        "Stage",
        "First-year student · Learning UX/UI"
      ],
      [
        "Goal",
        "Apply to Matrix in year two"
      ],
      [
        "Winter focus",
        "Networking basics and interface states"
      ],
      [
        "Preparation",
        "Design cases, usability notes and prototypes"
      ]
    ],
    "observationsTitle": "Campus-tool research topics · Validation pending",
    "observations": [
      {
        "tag": "To observe / Visibility",
        "title": "Are deadlines and submission status easy to find?",
        "body": "Document actual pages and tasks, then observe whether people need to search repeatedly. Compare persistent and contextual cues only if a problem is observed."
      },
      {
        "tag": "To observe / Error feedback",
        "title": "Does a failure explain the next step?",
        "body": "Distinguish wrong answers, compilation failures and network errors. Check whether feedback describes known facts, available actions and uncertain results; a wrong answer does not diagnose one specific code bug."
      },
      {
        "tag": "To observe / First use",
        "title": "Would a practice entry help new users?",
        "body": "Observe unfamiliar steps before evaluating onboarding or simulation. Use non-exam content and do not claim reduced anxiety before validation."
      }
    ],
    "planTitle": "A path from now to year two",
    "plan": [
      [
        "Before winter break",
        "UI and interaction foundations",
        "Practise hierarchy, information architecture, user flows and wireframes; build a clickable prototype."
      ],
      [
        "Winter break",
        "Networking fundamentals",
        "Study DNS, TCP basics, HTTPS and HTTP. Inspect requests in Network tools and design loading, timeout and offline states."
      ],
      [
        "Following term & summer",
        "Complete design cases",
        "Run usability sessions and iterate; prepare two explainable cases and practise component and state handoff with a developer."
      ],
      [
        "Before year-two recruitment",
        "Prepare an application",
        "Check current design, product and related roles. Present verified contributions, the portfolio and actual availability."
      ]
    ],
    "contributionTitle": "AI assistance and personal practice",
    "contribution": "These projects were primarily built with AI assistance, including this design analysis and content update. The site currently presents prototypes and a study framework. Independently completed design, interviews, changes and validation will be documented as they happen.",
    "info": "Department, major, personal contact and availability remain to be confirmed. This is a preparation-stage portfolio; check Matrix’s recruitment information when applying.",
    "applicationLabel": "UX/UI learning and Matrix preparation",
    "open": "Try Poster Lab"
  }
};
