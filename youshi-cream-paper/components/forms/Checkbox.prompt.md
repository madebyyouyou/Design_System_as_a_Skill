Checkbox and task toggle. Use `circle` for the bullet-journal task list, `square` for forms.

```jsx
<Checkbox label="做今日手账" shape="circle" strikeOnDone defaultChecked />
<Checkbox label="记住登录状态" />
<Checkbox shape="circle" size="lg" />
```

- Works controlled (`checked` + `onChange`) or uncontrolled (`defaultChecked`).
- `strikeOnDone` strikes and mutes the label when checked — ideal for to-dos.
- Checked state fills sage with a white check. Sizes `sm`/`md`/`lg`.
