---
name: youyou-design
description: Use this skill to generate well-branded interfaces and assets for 祐识 · 奶油宣纸 (Youyou · Cream Rice-Paper), a product-agnostic brand design system — for production or throwaway prototypes/mocks. Contains the brand's colors, type, fonts, assets, reusable components, content voice, and example UI kits for prototyping any 祐识 product.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

祐识 is a **brand system, not a skin for one app**. It gives you the shared foundations (color, type, spacing, effects, iconography, voice, components, layout principles) to dress *any* product — a companion chat app, a journaling surface, a memory manager, a coding workspace. The kits under `ui_kits/` are **examples**, not the definition of the system.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without other guidance, ask them what they want to build, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `readme.md` — full brand guide: voice, color, type, iconography, components, layout principles, examples. **Start here.**
- `styles.css` — link this one file to load every token + webfont. Namespace for compiled components: `window.DesignSystem_4278dc`.
- `tokens/` — CSS custom properties (colors, typography, spacing, effects, motion) + `@font-face`.
- `assets/` — brand marks (`logo-youyou-script.png`, `logo-youyou-cn.png`, `seal-you.png`) and `decorations/` motifs. Copy these out into artifacts.
- `components/` — React primitives, all product-agnostic (brand / forms / display / navigation / agent) with `.d.ts` + `.prompt.md`.
- `guidelines/` — foundation specimen cards.
- `ui_kits/youyou-codex/` — the **Coding assistant example** (one optional product application). Coding-specific structures live inside it; they are not brand rules.
- `design/system-mock.html` — product-semantics reference (what 祐识 products need to carry — features, hierarchy, states); its *own* visuals are the old treatment this system re-designs, not a style to copy.

## The vibe in one breath
Creamy rice paper, muted sage green, faint paper grain, hand-drawn linework, dashed connectors, paper cranes and small scrapbook confetti (stars/sparkles/hearts). Soft rounded cards floating on paper with shallow warm shadows. Gentle, sweet not cloying. Simplified-Chinese UI in a warm companion voice ("我 / 祐祐" to "你"), almost no emoji — warmth comes from handwriting + `♡` + motifs.

## Component notes worth knowing
- **Button is a full emphasis ladder**, not just solid pills: `solid` · `outline` · `dashed` · `text` (dashed underline) · `ghost` · `tag` (paper stamp). Use one loud action per surface; keep the rest quiet.
- **Agent experience = progressive disclosure + inline trace.** Thinking steps and read-only tool calls are lightweight `TraceLine` rows (collapsed, faint); only write actions / permission requests escalate to a prominent `ApprovalCard`. Status lines reserve a 20–28px icon slot on the left for a platform-native animated glyph — leave it empty in mocks.
- System chrome (status bar / tab bar / toolbar) can be a plain "glass placeholder" — Apple platforms supply Liquid Glass at compile time; only indicate it.

## Gotchas
- Fonts (Nunito / Caveat / Noto Sans SC / JetBrains Mono) are Google Fonts substitutions — no brand binaries were supplied.
- The `Icon` set is Lucide path data standing in for the brand's bespoke hand-drawn icons. `Decoration` and `Logo` use the real supplied assets.
- Set `window.__YOUYOU_ASSET_BASE__` (or pass `Logo`'s `base` prop) to the assets folder path relative to your page.
