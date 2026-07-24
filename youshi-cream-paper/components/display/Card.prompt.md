The floating paper surface — the base container for content blocks, panels and lists.

```jsx
<Card>普通卡片</Card>
<Card elevation="raised" padding="lg">更高的卡片</Card>
<Card interactive onClick={...}>可点击，悬停会上浮</Card>
<Card tape tapeColor="rose">顶部有和纸胶带</Card>
```

- `elevation`: `flat` / `default` / `raised` / `floating` (shallow → deeper warm shadow).
- `interactive` adds the hover-lift used by clickable cards; `tape` pins a washi-tape strip for the scrapbook look.
- `padding` `none`/`sm`/`md`/`lg`; `highlight` uses the brightest cream. Compose freely; for the hero feature tiles use `ActionCard`.
