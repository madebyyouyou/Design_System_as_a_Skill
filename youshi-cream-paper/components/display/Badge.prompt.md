Small status / count labels, plus a bare `StatusDot`.

```jsx
<Badge variant="sage" dot>已完成</Badge>
<Badge variant="gold">0/4</Badge>
<Badge variant="solid" dot pulse>在线</Badge>
<StatusDot color="var(--sage-500)" />
```

- Variants: `neutral`, `sage`, `gold`, `rose`, `danger`, `info`, `solid`. Sizes `sm` / `md`.
- `dot` adds a leading status dot; `pulse` gives it a live ping.
- Use `Chip` for anything interactive or with an icon; `Badge` is a static label.
