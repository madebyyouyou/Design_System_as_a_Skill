The hero quick-action tile — icon in a soft wash circle, title, and a heart. Used in the row under the home greeting.

```jsx
<ActionCard icon="code" title="探索并理解代码" />
<ActionCard icon="wrench" title="构建新功能、应用或工具" accent="gold" />
<ActionCard icon="clipboard-check" title="审查代码并提出修改建议" accent="rose" />
```

- `accent` tints the icon circle: `sage` / `gold` / `rose` — alternate them across a row for the collage feel.
- Always a `<button>`; wire `onClick`. `selected` adds a ring; `footerHeart={false}` drops the heart.
- For general content use `Card`; this is specifically the centered feature tile.
