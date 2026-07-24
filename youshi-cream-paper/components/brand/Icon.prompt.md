Line + solid icon set for 祐识 · 奶油宣纸 — use anywhere the UI needs a glyph (nav rows, buttons, action cards, status dots).

```jsx
<Icon name="folder" size={18} />
<Icon name="heart" fill color="var(--accent-rose)" size={16} />
<Icon name="arrow-up" strokeWidth={2.2} color="var(--text-on-sage)" />
```

- Line icons default to a 1.9px rounded stroke in `currentColor`; set `color` or let the parent's text color cascade.
- `heart`, `star`, `sparkle`, `dot` are solid-capable — pass `fill` to fill them (great for the blush hearts and mustard sparkles).
- Pass `title` for a meaningful icon (adds `<title>` + `role="img"`); omit it for decorative use so it's `aria-hidden`.
- The bespoke brand glyphs are hand-drawn; this set is a Lucide-based stand-in (documented in the README ICONOGRAPHY section).
