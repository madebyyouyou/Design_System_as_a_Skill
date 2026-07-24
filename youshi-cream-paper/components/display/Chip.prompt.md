Compact pill for tags, filters, and the composer's inline controls.

```jsx
<Chip leftIcon="folder" variant="outline">选择项目</Chip>
<Chip leftIcon="lock" variant="soft">完全访问</Chip>
<Chip variant="plain">5.6 Sol 中</Chip>
<Chip dot dotColor="var(--sage-500)" variant="outline">PORTAL ONLINE</Chip>
<Chip onClick={...} selected>已选</Chip>
<Chip onRemove={...}>千纸鹤</Chip>
```

- Variants: `soft` (sage wash), `solid`, `outline` (composer chips), `plain`, plus `gold` / `rose` accents.
- Pass `onClick` to make it a real button (hover/press); `selected` for a toggled look; `onRemove` adds a "×".
- `dot` shows a status dot. Sizes `sm` / `md`. For counts/status labels prefer `Badge`.
