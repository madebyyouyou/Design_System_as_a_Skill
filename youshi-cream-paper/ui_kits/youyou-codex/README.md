# Coding assistant example — Youyou Codex (`ui_kits/youyou-codex/`)

**One optional product application** of the 祐识 · 奶油宣纸 brand system: a *Codex-inspired coding workspace demo*, dressed in the cream-paper aesthetic. It is a reference implementation showing how the brand's foundations and primitives compose into a real desktop product — **not** the definition of the design system, and not "what 祐识 is for."

Everything coding-specific here — the sidebar + project tree, the task/chat transcript, tool-run rows, the environment/sources panel, the code composer, and copy like *"我们该构建什么？"* / *"…陪你一起写代码吧~"* — is **local to this example**. Those are this product's decisions; they are not brand rules and must not be promoted into the root system.

## Run
Open `index.html`. It links `../../styles.css`, loads the compiled bundle (`../../_ds_bundle.js`, namespace `window.DesignSystem_4278dc`), then the screen scripts. Its desktop layout widths (`--sidebar-w`, `--rightpanel-w`) are defined **locally** in `index.html`, since they are example metrics rather than brand tokens. If `#root` shows a "bundle not loaded" note, the compile hasn't run yet; reload after it does.

## Screens & interactivity
- **Home** — header strip (seal + dashed connector + name tag), hero card ("我们该构建什么？" + seal/motif visual), a 4-up row of `ActionCard`s, and the bottom `Composer`.
- **Task / chat** — task header, a transcript (assistant text + user bubbles), tool-run rows, a right panel (环境信息 / 子智能体 / 来源), and the `Composer`.
- Sending from the composer, or clicking an action card, opens a task and appends a canned assistant reply. Sidebar task checkboxes toggle. The top-bar panel button hides/shows the sidebar; back returns home.

## Files
- `data.js` — all fake content (`window.YY_DATA`). No real people / fan content.
- `TopBar.jsx`, `Sidebar.jsx`, `Composer.jsx`, `HomeScreen.jsx`, `TaskScreen.jsx` — screen pieces (attached to `window.YY`).
- `App.jsx` — state + wiring; mounts into `#root`.

## Notes
This is a cosmetic recreation, not production logic. Values follow the design tokens; the layout was informed by the Codex-Dream-Skin reference (visual study only), with the brand seal + scrapbook motifs replacing the reference's celebrity hero. To build a *different* 祐识 product, don't extend this kit — start from the brand foundations in the root `readme.md` and the product-agnostic primitives in `components/`.
