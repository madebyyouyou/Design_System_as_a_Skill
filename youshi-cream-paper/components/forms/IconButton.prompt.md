Icon-only button — the composer's send / mic / + controls, toolbar and window actions. Always pass a `label`.

```jsx
<IconButton icon="arrow-up" label="发送" variant="primary" />
<IconButton icon="mic" label="语音输入" variant="ghost" />
<IconButton icon="plus" label="添加" variant="soft" />
<IconButton icon="settings" label="设置" shape="square" size="sm" />
```

- Same variants as `Button` (minus danger): `primary` sage circle for the send affordance, `ghost` for toolbar icons.
- `shape="circle"` (default) or `square`; sizes `sm`/`md`/`lg`.
- Use `Button` when there's a text label; use this only for recognizable standalone glyphs.
