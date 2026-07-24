The 祐识 button **emphasis ladder** — not a wall of solid pills. Pick exactly one loud action per surface; step everything else down.

```jsx
<Button variant="solid" rightIcon="arrow-up">寄出</Button>     {/* the one primary */}
<Button variant="outline" leftIcon="folder">选择</Button>       {/* standard secondary */}
<Button variant="dashed" leftIcon="plus">再记一条</Button>      {/* optional / additive */}
<Button variant="text">查看全部</Button>                        {/* inline, dashed underline */}
<Button variant="ghost" leftIcon="search" />                    {/* toolbar / repeated row */}
<Button variant="tag">复购</Button>                             {/* paper stamp, tilted */}
<Button variant="text" tone="danger">先不了</Button>            {/* low-emphasis deny */}
<Button variant="danger">删除</Button>                          {/* solid destructive, sparingly */}
```

- **Ladder (loud → quiet):** `solid` → `outline` → `soft` → `dashed` → `tag` → `ghost` → `text`. `primary`/`secondary` alias `solid`/`outline`.
- `dashed` and `tag` echo the bullet-journal dashed line — use them for "add / one more / optional", not the main action.
- `tone="danger"` recolors `text` / `ghost` / `tag` for deny/remove without going loud; reserve solid `danger` for a real destructive confirm.
- Sizes `sm` / `md` / `lg`; `pill` for fully rounded; `block` for full width. `text`/`tag` are auto-height and ignore `pill`.
- `leftIcon` / `rightIcon` take an `Icon` name. `loading` swaps in a spinner and disables.
- Icon-only round controls (send, mic, +) → use `IconButton` instead.
