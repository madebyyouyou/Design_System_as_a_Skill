Hand-drawn scrapbook motifs supplied with the 祐识 brand — scatter them across paper surfaces for the collage / bullet-journal feel. Use sparingly and faintly.

```jsx
<Decoration name="sparkles" size={52} />
<Decoration name="heart" size={28} />
<Decoration name="paperclip" size={40} rotate={-18} />
<Decoration name="sparkle" mono color="var(--gold-500)" opacity={0.4} />
```

- Faithful multi-color by default (gold / sage / blush). Pass `mono` + `color` to tint a whole motif one tone — best for faint background scatter with low `opacity`.
- Motifs: `stars`, `sparkles` (three-sparkle cluster), `sparkle` (single), `heart` (outline blush), `paperclip`.
- Decorative only — always `aria-hidden`; never use as a functional control.

**Textured PNG collage stickers** (an alternative to the recolorable SVGs): the supplied hand-drawn sheet is sliced into transparent pieces in `assets/decorations/*.png` — `crane`, `leaf-sprig`, `hearts`, `washi-heart`, `corner-flourish`, `dashed-frame`, `star-dashed`, `underline-swish`, `swirl-heart`, `sparkles-gold`. These keep real paper grain, so drop them in as plain `<img>` when you want a tactile journal accent (e.g. a leaf pinned to a card corner) rather than a recolorable glyph. Fixed color; place sparingly and rotate a few degrees for the hand-placed feel.
