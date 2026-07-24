# 祐识 · 奶油宣纸 — Design System

### *Youyou · Cream Rice-Paper*

A **product-agnostic brand design language** built on **cool-ivory rice paper (#F5F4EF), muted sage green, subtle paper grain, delicate hand-drawn linework, and restrained scrapbook details**. The mood is a bullet-journal collage — paper cranes, dashed connectors, washi tape, mustard sparkles and blush hearts — sweet but never cloying. Cards float on the paper with soft corners and shallow, warm shadows.

祐识 is a **brand system, not a skin for any one app.** It defines the shared foundations every 祐识 product is built from — **color, typography, spacing, effects, iconography, content voice, reusable components, and layout principles** — and stays deliberately independent of any single product's information architecture. Companion chat apps, journaling surfaces, memory managers, a settings desk, or a coding workspace can all be dressed in it; none of them *is* the system.

**What this system is :** a reusable brand foundation + component library + voice, usable for production UI or throwaway mocks.

---

## Sources & provenance

Store these even though the reader may not have access:

- **Brand marks (supplied):** `assets/logo-youyou-script.png` (English "Youyou" cursive), `assets/logo-youyou-cn.png` (祐祐 brush wordmark), `assets/seal-you.png` (祐 round seal). All transparent PNGs.

- **Scrapbook motifs (supplied):** two families. **SVG (recolorable):** `assets/decorations/{stars,sparkle-cluster,small-heart,paperclip}.svg` — the `Decoration` component's inline set. **PNG collage stickers (fixed, textured, drop-in):** `assets/decorations/{crane,hearts,leaf-sprig,sparkles-gold,star-dashed,swirl-heart,underline-swish,dashed-frame,corner-flourish,washi-heart}.png` — the supplied hand-drawn scrapbook sheet, sliced into transparent pieces for real paper texture (used e.g. as the leaf on `ApprovalCard`)

- **Visual-language reference only (GitHub):** [Fei-Away/Codex-Dream-Skin](https://github.com/Fei-Away/Codex-Dream-Skin). This repo was consulted **purely as a visual & interaction reference** — a study of one polished desktop interface (spacing, card rhythm, how a composer and a transcript feel). It does **not** determine the identity, scope, information architecture, or default layout of 祐识.

- **Product-semantics reference (functional, not visual):** `design/system-mock.html` — a full-system snapshot of a **paper-world companion app** (chat as the core, plus life journals — food / lyrics / a daily "time capsule" — and memory management). It is the reference for **what 祐识 products need to carry**: features, content hierarchy, interaction states, product semantics. Its *own* colors, buttons, bubbles, borders, icons and type are the *old* treatment — exactly what this system re-designs. Use it to understand the job; use *this* system for the look.

---

## CONTENT FUNDAMENTALS — how 祐识 writes

- **Language:** primary UI is **Simplified Chinese**; Latin appears as decorative script (the logo) and small captions/eyebrows.
- **Brand tone examples (product-neutral):**
  - Greeting: **"今天想说点什么？"** / subtitle *"在纸上，慢慢把心里的话写下来。"*
  - Reassurance / honesty: *"还没弄好之前，我不会假装已经好了。"* — honest about status, never bluffs "done."
- **Casing:** Latin eyebrows are UPPERCASE + wide-tracked (`CREAM PAPER · YOUYOU`). Headings sentence-case. No ALL-CAPS shouting in body.
- **Punctuation & warmth:** occasional **`~`** and **`♡`** for softness — used sparingly, only in stickers/greetings, never in errors or system text. Chinese full-width punctuation（，。「」）throughout.
- **Emoji:** essentially none. Warmth comes from the **`♡` glyph, handwriting, and the motifs** — not emoji. A single ✨/♡ in a greeting is the ceiling.
- **Numbers/units:** playful, lowercase model names (*祐 · 均衡*), soft progress (*0/4*, *已处理 1m 14s*).

**Do:** be concrete, kind, and honest about progress. **Don't:** be corporate, breathless, exclamation-heavy, or emoji-laden.

> **Product-specific copy stays in its product.** A phrase like the coding example's *"和祐祐一起把想法写成代码"* ("let's turn ideas into code, together") belongs **inside `ui_kits/youyou-codex/`** — it is that one app's line, not the 祐识 brand voice. Each product writes its own concrete greetings/placeholders in this voice; the brand only owns the *tone*.

---

## VISUAL FOUNDATIONS

**Color** (`tokens/colors.css`)

- **Primary — sage green** (`--sage-500 #8A9A6B`, sampled from the logo script). Deeper `--sage-600/700` for hover/press and filled-button legibility.
- **Text — forest ink** (`--ink-700 #3E4637` body, up to `--ink-900`; muted `--ink-500`). A warm green-grey, never pure black.
- **Surfaces — rice-paper cream** (`--paper-page / --cream-300 #F5F4EF` canvas → `--cream-50` card highlight; `--cream-500` hairline). Cool ivory with only a whisper of warmth, low-contrast, restful.
- **Accents — mustard gold** (`--gold-500 #C6B275`, sparkles/stars) and **blush rose** (`--rose-500 #D6AAA3`, hearts). Used as small confetti, never as fills of large areas.
- **Max 1–2 background colors per surface.** Saturation is low across the board.

**Type** (`tokens/typography.css`, `tokens/fonts.css`)

- **iOS production app:** Body text, headings, and UI controls use Apple system fonts and SwiftUI semantic text styles rather than a fixed font family. The system automatically selects appropriate Chinese and Latin glyphs based on language, while supporting Dynamic Type, Bold Text, and other accessibility features.
- **Rounded style:** The system’s rounded font design may be used selectively for headings, numbers, or emphasized text, but not for all body copy.
- **Monospaced content:** Code, timestamps, and technical information use the system monospaced font.
- **Handwriting:** Handwritten fonts are reserved for a small number of decorative English stickers. When used, the font files should be bundled with the app and never used for body copy.
- **Web/HTML prototypes:** Nunito, Noto Sans SC, Caveat, and JetBrains Mono serve only as cross-platform visual substitutes and do not define the production iOS implementation.**Display & UI — Nunito** (rounded humanist sans; 400–800). Soft terminals read as "sweet but clean".

**Spacing & rhythm** (`tokens/spacing.css`) — 4px rhythm; generous, airy whitespace ("breathable"). The scale, control heights and icon sizes are system-wide; product **layout metrics** (a desktop sidebar width, a mobile 375–430pt column) belong to each product, not the brand — see *Layout principles*.

**Corners & cards** (`tokens/effects.css`) — soft radii: chips/inputs `--radius-md 14px`, buttons `--radius-lg 18px`, cards `--radius-xl 24px`, hero `--radius-2xl 32px`, pills full. A **Card** = cream surface + 1px hairline + shallow shadow; on hover it lifts 3px into a slightly deeper shadow. Optional **washi-tape** strip pinned to the top edge.

**Shadows** — warm and shallow, tinted green-grey `rgba(62,70,55,·)`, never black. `--shadow-xs → xl`; cards default to `--shadow-sm/md`. Cards read as *floating on paper*, not boxed.

**Borders & dashes** — 1px hairline (`--border-hair`) for structure; the **dashed line** (`--dash-line`, `--dash-line-sage`) is the signature bullet-journal connector used for headers, section breaks, and the outline of low-emphasis controls.

**Backgrounds** — a cool-ivory fill (`#F5F4EF`, `--paper-page` → `--surface-canvas`) + a faint neutral-grey fractal-noise **paper grain** (`--paper-grain`, soft-light so it never darkens the page, applied via `.paper-canvas`). No photographic backgrounds; hero visuals are the seal + scattered motifs over a soft sage→cream wash. No aggressive gradients.

**Iconography** — hand-drawn-feeling line icons (see ICONOGRAPHY). Motifs (cranes/stars/sparkles/hearts) are scattered *sparingly and faintly* for collage rhythm.

**Motion** (`tokens/motion.css`) — gentle and paper-light. Durations 120–480ms; standard/gentle easings with only a whisper of overshoot on hover-lift (`--ease-hover`). Fades and soft settles; no bounces, no snap. Respects `prefers-reduced-motion`.

**Interaction states**

- *Hover:* fills darken one step (sage-500→600); ghost/soft gain a sage-100/200 wash; cards lift.
- *Press:* `translateY(1px)` + reduced shadow; cards settle back to shadow-sm.
- *Focus:* 3px soft sage ring (`--shadow-focus`), never a hard outline.
- *Disabled:* \~45% opacity, no pointer.

**Transparency & blur** — minimal. Overlays use a translucent ink scrim (`--surface-overlay`); grain is a neutral `soft-light` wash (never `multiply`). No glassmorphism *inside* the design. **System chrome (a status bar, tab bar, toolbar) may be left as a plain "glass placeholder"** in mocks — on Apple platforms the OS supplies its own Liquid Glass at compile time, so those bars only need to be *indicated*, not finely styled.

---

## LAYOUT PRINCIPLES (product-agnostic)

The brand owns *principles*; each product owns its *measurements*.

- **Breathable, paper-first.** Content floats as cards on the rice-paper canvas; whitespace is generous; never edge-to-edge dense.
- **Dashed connectors are structure**, not decoration — headers, section breaks and grouping lean on the dashed line before they lean on boxes.
- **One hero visual per surface** (seal + faint scattered motifs), never a wall of imagery.
- **A clear emphasis ladder** on every surface: one primary action, the rest stepped down (see the button hierarchy in *Components*).
- **Metrics are local.** Concrete figures — a **264px desktop sidebar**, a **288px environment panel**, a **375–430pt mobile column**, a 1080px reading max — are *product* decisions made inside a kit, and must not be read as brand rules. `--content-max` is offered as a convenience; the desktop workspace widths now live inside the coding example, not the root tokens.

---

## ICONOGRAPHY

- **UI icons — `Icon` component** (`components/brand/Icon.jsx`). An even, rounded **\~2.2px line** stroke in `currentColor` (bumped a touch bolder + rounder for the cream-paper look), with solid variants for the motif glyphs (`heart`, `star`, `sparkle`, `dot`).
  - ⚠️ **Substitution flagged:** the brand's real product icons are *bespoke hand-drawn*. We don't have those files, so the set uses **[Lucide](https://lucide.dev) (ISC)** path data inlined as the closest match (same rounded, friendly, even-stroke feel). Replace with the true hand-drawn set when available.
- **Scrapbook motifs — two ways.** `Decoration` component = the **recolorable** inline SVGs (`stars`, `sparkles`, `heart`, `paperclip`) — faithful multi-color by default, `mono` for faint background scatter. For richer, paper-textured collage, drop in the **PNG stickers** from `assets/decorations/` (crane, leaf-sprig, hearts, washi-heart, corner-flourish, dashed-frame, star-dashed, underline-swish, swirl-heart, sparkles-gold) as `<img>`. Both are the collage confetti — use *sparingly*.
- **Brand marks — `Logo` component** — the supplied seal / script / brush PNGs, or a seal + wordmark lockup.
- **Status-line icons (agent trace):** the thinking / tool-run status lines (see *Agent experience*) each reserve a small **20–28px icon slot to the LEFT of the status text** — left intentionally empty in these mocks, to be filled by a platform-native animated glyph (e.g. a SwiftUI micro-animation). Design the *text* motion; leave the glyph box blank.
- **Emoji:** not used as icons. The only glyph-as-decoration is `♡` in greetings/stickers. No Unicode-symbol icon hacks.

---

## Components

Reusable primitives live in `components/<group>/`, each with `.jsx` + `.d.ts` + `.prompt.md`, one `@dsCard` per directory. Namespace: `window.DesignSystem_4278dc`. All are **product-agnostic** — nothing here encodes a specific app's screens.

**brand/** — `Icon`, `Decoration`, `Logo` **forms/** — `Button`, `IconButton`, `Input`, `Checkbox` **display/** — `Card`, `ActionCard`, `Chip`, `Badge` (+ `StatusDot`), `Avatar`, `Divider` **navigation/** — `NavItem` **agent/** — `TraceLine` (lightweight thinking / read-only tool step), `ApprovalCard` (the prominent write-action / permission envelope)

**The button hierarchy** — 祐识 is deliberately *not* a wall of solid pills. `Button` carries a full emphasis ladder so a surface can have exactly one loud action and many quiet ones:

- `solid` (sage fill) — the single primary action.
- `outline` (solid 1.5px hairline, paper fill) — standard secondary.
- `dashed` (dashed sage outline, paper fill) — optional / additive actions ("add", "another one"), echoing the bullet-journal line.
- `text` (label + dashed underline, no box) — inline low-emphasis actions.
- `ghost` (no fill until hover) — toolbar / repeated-row actions.
- `tag` (paper "stamp" — dashed rounded rect, rotated a hair) — chip-like tap targets that read as washi labels.

**Agent experience — thinking & tool execution.** The pattern is **progressive disclosure + an inline execution trace**, like a Thinking trace and tool-activity feed — *not* a wall of big cards:

- A **thinking step** or an **ordinary read-only tool call** (查看日历, 搜索, 读取) renders as a **lightweight `TraceLine`** — a single quiet row (icon slot · verb · target · optional expand), collapsed by default, faint. It never becomes a large standalone card.
- Only a **consequential write action or a permission request** (写入日历, 发送, 删除) escalates to a prominent **`ApprovalCard`** — the paper "envelope" with an explicit *批准 / 拒绝* pair and a highlighted `pending` state.
- Status text animates (streaming dots, a soft settle); the 20–28px icon to its left is a reserved empty slot for a platform-native animated glyph.

**Intentional additions** (no source component library was supplied; inventory derived from the product-semantics reference):

- `Icon`, `Decoration`, `Logo` — brand glyph / motif / mark renderers.
- `ActionCard` — a centered "quick-action" tile.
- `StatusDot` — bare presence dot exported alongside `Badge`.
- `TraceLine`, `ApprovalCard` — the agent-experience pair above.

---

## UI kits & examples

Each kit under `ui_kits/` **applies** the system to one product. They are examples to copy patterns from — none defines 祐识.

- **`ui_kits/youyou-codex/` — Coding assistant example** *(Codex-inspired coding workspace demo).* One optional reference implementation: an interactive desktop coding workspace dressed in cream paper. **Everything coding-specific is local to this kit** — the sidebar + project tree, the task/chat transcript, tool-run rows, the environment/sources panel, the code composer, its greeting *"我们该构建什么？"* and *"…陪你一起写代码吧\~"*. Treat those as this example's product decisions, not brand foundations. Its desktop layout widths (`--sidebar-w`, `--rightpanel-w`) are defined locally in its `index.html`.

---

## Index / manifest (root)

- `styles.css` — global entry (⚠️ `@import` list only; consumers link this one file).
- `tokens/` — `fonts`, `colors`, `typography`, `spacing`, `effects`, `motion`, `base`.
- `assets/` — logos, seal, `decorations/`.
- `components/` — `brand/`, `forms/`, `display/`, `navigation/`, `agent/`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Effects, Brand). The **button ladder** shows in the Components card; the **agent-trace** patterns in the Agent card.
- `ui_kits/youyou-codex/` — the *Coding assistant example* (one optional product application).
- `thumbnail.html` — homepage tile. `SKILL.md` — Agent-Skill entry. `readme.md` — this guide.
- Generated (do not edit): `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`.
