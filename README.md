# Afterrain · Matrix 2026 申请作品集

中山大学计算机学院 2026 级本科生的个人作品集，同时是一份面向 [Matrix](https://matrix.sysu.edu.cn) 前端方向的申请材料。使用 React、TypeScript、Vite 与 Canvas 构建，中英双语，可打印为 PDF 简历。

线上地址：https://afterrain-run.github.io/matrix-portfolio/

## 这份作品集想说明什么

不是"我会很多技术"，而是四件可以被当场核对的事：

1. **能做出可用的东西** —— Poster Lab 是一个完整的输入 → 预览 → 导出工具，断网也能用。
2. **知道边界在哪** —— 每个项目都写了不做什么：没有后端、没有云同步、字体随设备变化。
3. **有工程习惯** —— 40 项单元测试、TypeScript 检查、GitHub Actions 自动构建、按 PR 流程提交。
4. **理解 Matrix 的用户** —— 作为课程系统的日常使用者，写了三个具体的改进提案和分阶段落地计划。

## 功能

- 中英文切换、项目分类筛选、项目案例弹窗、文本简历下载与打印排版。
- **Poster Lab**：三种构图与配色、随机种子、撤销、本地草稿恢复、JSON 配置导入导出和 1800 × 2400 PNG 导出。
- **Wayfinder**：命令搜索、键盘导航、空态与禁用状态，兼容中文输入法组合输入。
- **Margin**：受限 Markdown 编辑与演示预览。
- **Cutroom**：片段审阅界面原型，使用本地示例画面。
- **Matrix 申请页**（#matrix）：课程系统问题观察、30/60/90 计划、投递方式。

## 本地运行

需要 Node.js 20.19+ 或 22.12+（CI 使用 Node.js 22）。

```bash
npm ci
npm run dev
```

```bash
npm test        # 单元测试（vitest）
npm run check  # TypeScript 检查
npm run build  # 构建到 dist/
```

## 部署到 GitHub Pages

仓库内置 `.github/workflows/deploy.yml`：推送到 `main` 后自动跑测试与构建，并把 `dist/` 发布到 Pages。

首次使用需要在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**，之后每次推送都会自动更新。

`vite.config.ts` 已设置 `base: './'`，因此项目页（`/<仓库名>/`）与自定义域名都能直接打开。

## PDF 简历

联系区提供「PDF 简历」下载，文件是仓库内的 `public/resume-cn.pdf`，内容由页面的打印排版（`@media print`）生成。修改文案后重新生成（需要本机安装 Chrome 或 Edge）：

```bash
npm run build
npx vite preview --port 4173 --strictPort
# 另开一个终端：
"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu \
  --no-pdf-header-footer --print-to-pdf="public\resume-cn.pdf" "http://localhost:4173/"
```

生成后确认 2 页以内、中文没有乱码，再提交。

## 目录

| 路径 | 用途 |
| --- | --- |
| `src/content.ts` | 主文案、4 个项目案例、个人信息 |
| src/practice-content.ts | 海报案例、实现讲解、开发记录与 Matrix 申请内容 |
| `src/profile.ts` | GitHub 地址、投递邮箱、邮件标题等可配置项 |
| src/PracticeSections.tsx | 实现笔记、开发记录、Matrix 申请三个区块 |
| `src/PosterLab.tsx` / `src/poster-model.ts` / `src/poster-render.ts` | 海报工具界面、配置与校验、Canvas 绘制 |
| `tests/` | 单元测试（40 项） |

## 待本人补充

- `src/profile.ts` 中的个人邮箱（留空时联系区显示 Matrix 投递邮箱）。
- 若更换姓名或学院信息，修改 `src/content.ts` 中的 `name` / `role` / `history`。

## 实现边界与来源

浏览器本地应用，没有后端、账号或云同步。海报草稿保存在当前浏览器，清理浏览器数据会删除草稿，可导出 JSON 备份。Cutroom 不包含真实视频处理，Margin 不是通用 Markdown 执行环境。

海报工具来自本人的本地项目并继续扩展；Wayfinder、Margin、Cutroom 为交互练习，分别参考 [Screenity](https://screenity.io/)、[cmdk](https://github.com/dip/cmdk) 与 [Slidev](https://sli.dev/guide/why)，不代表参考产品作者或其成果。字体许可保留在 `public/fonts/`。

实现过程中使用 AI 辅助查文档、生成样板代码与排查问题；架构、拆分、调试与最终取舍由本人完成，页面「关于 AI 辅助」区块对此有说明。
