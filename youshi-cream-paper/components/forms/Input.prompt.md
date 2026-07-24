Text input & textarea for search, forms, and the composer field. Inset cream well, sage focus ring.

```jsx
<Input label="项目名称" placeholder="给它起个名字" required />
<Input leftIcon="search" placeholder="搜索任务…" size="sm" />
<Input multiline rows={3} placeholder="随心输入，一起写点什么吧~" />
<Input label="邮箱" error="请输入有效邮箱" defaultValue="bad" />
```

- `leftIcon` slots an `Icon` inside the well; `multiline` switches to a resizable textarea.
- `label` / `hint` / `error` render around the field; `error` wins over `hint` and reddens the border.
- Sizes `sm` / `md` / `lg`. Spread any native input/textarea prop (`value`, `onChange`, `type`, …).
