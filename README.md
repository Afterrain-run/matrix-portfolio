# Afterrain · UX/UI 学习作品集

大一学生的学习阶段作品集：以 UX/UI 与交互设计为方向，寒假计划入门计算机网络，争取大二加入 Matrix。项目主要借助 AI 完成；网站区分已实现功能、设计假设与未来计划，不将原型功能等同于个人独立掌握。

[在线作品集](https://afterrain-run.github.io/matrix-portfolio/)

## 内容

- 四个可操作原型：Poster Lab、Wayfinder、Margin、Cutroom。
- 海报设计分析：图片与配置导出、本机草稿恢复、样例替换。可切换任务与方案对照；用户测试尚未开展，方案示意未应用到工具。
- 对应源码的交互实现讲解、AI 辅助记录、从现在到大二的学习路线。
- 中英文、响应式、项目筛选、文本简历、打印排版及中文 PDF。

海报工具包含文字与构图编辑、预览、最多 20 步撤销、本机配置保存、JSON 导入导出和 1800 × 2400 PNG 导出。页面与资源加载完成后，这些本地操作不依赖接口；未实现离线安装或首次断网访问保障。

## 开发与检查

使用 Node.js 22.12+；CI 使用 Node.js 22。依次运行：

    npm ci
    npm run dev

提交前运行：

    npm run check
    npm test
    npm run build

当前 40 项单元测试覆盖内容与导出、筛选、几何、命令模型、解析器、渲染结构和海报配置。海报模型测试为 6 项。测试不替代用户验证。

## 部署与简历

推送到 main 后，GitHub Actions 工作流运行测试、构建并发布 dist/ 到 Pages。Pages 来源应为 GitHub Actions。Vite 使用相对资源路径，适配仓库子路径。

中文 PDF 位于 public/resume-cn.pdf，来自页面的打印视图。修改简历后，打开本地开发页，切到中文，选择“打印简历 / 另存 PDF”，关闭浏览器页眉页脚，采用 A4 并检查分页。保存到原路径后重新构建，使 dist/ 包含新 PDF。英文页面明确标注固定下载为中文；英文内容可通过英文页面打印或文本下载取得。

## 主要文件

| 路径 | 用途 |
| --- | --- |
| src/content.ts | 双语介绍与案例 |
| src/UXStudy.tsx | 设计分析、方案对照与试用计划 |
| src/practice-content.ts | 技术说明、开发记录与学习路线 |
| src/profile.ts | 已确认的个人信息与公开链接 |
| src/PrintResume.tsx | 双语打印摘要 |
| src/model.ts | 筛选与文本简历 |
| src/PosterLab.tsx、src/poster-model.ts、src/poster-render.ts | 海报界面、配置与绘制 |
| docs/ | 学习计划、申请准备与试用记录模板 |

## 待本人补充

个人邮箱、学院、专业、可投入时间，以及实际完成的设计、试用、迭代和协作记录。邮箱留空时显示待补充，不使用团队招新邮箱替代。姓名与账号使用现有 Afterrain 信息。

## 来源与边界

Poster Lab 在原有本地海报工具上扩展；Cutroom 参考 Screenity 的流程，Wayfinder 参考 cmdk 的命令菜单模式，Margin 参考 Slidev 的内容与演示分离。对应链接在各案例中保留，不将参考产品作者的作品或成绩归属于候选人。字体许可保留在 public/fonts/。

没有后端、账号或云同步。草稿仅保存在当前浏览器，撤销历史不跨会话，清理数据可能删除草稿。Cutroom 不处理真实视频；Margin 是受限文本解析器；前端禁用不构成服务端权限控制。

实现、设计分析、文案更新与验证主要由 AI 辅助完成。独立贡献由本人实际经历补充。Matrix 的方向与要求以投递时官方信息为准。
