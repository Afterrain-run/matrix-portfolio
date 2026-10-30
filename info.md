# Afterrain / Matrix 申请作品集

面向 Matrix 招新的本地个人作品集。已确认：大一、全栈学习目标、现有项目主要借助 AI 完成。学院专业、公开仓库、联系方式和每周投入时间尚待提供。

## 运行

已有依赖时运行 `npm run dev`。检查：`npm test`、`npm run build`。`dist/` 为静态构建产物。当前没有后端、账号、云同步或投递功能。

## 当前内容

- 双语首页、项目筛选、案例弹窗、Canvas 动效、文本简历及打印样式。
- Poster Lab：从原有海报工具接入，保留三种构图、三种配色、随机种子、20 步撤销、高清 PNG 导出；新增本地保存与恢复、JSON 导入导出、样例画廊。
- Wayfinder：小数据集搜索、键盘导航、禁用原因与空态。
- Margin：受限 Markdown 即时预览，仅支持标题、正文和列表。
- Cutroom：三个示例画面与遮罩切换，没有真实视频处理功能。
- 实现笔记：状态与绘制流程、随机种子、撤销、导出及导入验证。
- 开发记录：2026-10-30 的 AI 辅助迭代与下一步待实践内容。
- Matrix 申请区域：学习目标、指导下的小任务、AI 辅助边界及待补充信息。

## 主要文件

- src/content.ts：双语主文案与项目案例。
- src/practice-content.ts：海报案例、实现笔记、开发记录及申请说明。
- src/PracticeSections.tsx、src/practice.css：新增内容区。
- src/PosterLab.tsx、src/poster.css：海报界面、存储、文件导入导出。
- src/poster-model.ts：配置验证、v1 JSON、样例和撤销 reducer。
- src/poster-render.ts：从压缩包内原有 PosterLab.tsx 提取的 Canvas 绘制函数，补充超长单行标题缩放。
- src/ProjectArt.tsx：封面与操作演示。
- src/Sculpture.tsx：参数曲面的 Canvas 三维投影。

海报配置保存在 localStorage 的 afterrain.poster.v1。清理浏览器数据会移除草稿，撤销历史只在当前会话保留。存储不可用时提示用户导出 JSON。导入限制为 10 KB，验证版本、类型和范围；跨设备字体可能导致文字外观不同。

## 来源与贡献

Cutroom 参考 Screenity（https://screenity.io/），Wayfinder 参考 cmdk（https://github.com/dip/cmdk），Margin 参考 Slidev（https://sli.dev/guide/why）。不将参考产品作者、用户或成绩归属于候选人。前端禁用状态不构成服务端权限控制。

项目主要借助 AI 开发，本次扩展、讲解与验证也由 AI 辅助完成。已有功能不等于候选人已独立掌握。后续按实际经历补充个人修改、排错和验证记录。

## 验证

Vitest 覆盖内容、筛选、文本导出、几何、命令模型、受限解析，以及海报配置导入边界、撤销与历史上限。父目录 .validation/ 存放浏览器验证脚本和截图。测试通过不代表所有浏览器和辅助技术均已认证。

字体与许可证保留在 public/fonts/。
