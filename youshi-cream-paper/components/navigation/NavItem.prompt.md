One sidebar row — used for nav links, project-tree folders/files, and task items.

```jsx
<NavItem icon="square-pen" label="新建任务" />
<NavItem icon="folder" label="系统搭建" active />
<NavItem icon="file" label="今日穿搭灵感" indent />
<NavItem label="做今日手账" indent leading={<Checkbox shape="circle" />} />
<NavItem icon="message" label="聊天" trailing={<Badge variant="sage">3</Badge>} />
```

- `active` gives the cream pill + sage tab marker + bold label.
- `indent` shrinks and insets the row for tree children / tasks; `muted` for de-emphasized rows.
- `leading` overrides the icon (drop in a `Checkbox`/`Avatar`); `trailing` takes a `Badge`, chevron, spinner, or count.
- Renders a `<button>` by default; pass `as="a"` + `href` for links.
