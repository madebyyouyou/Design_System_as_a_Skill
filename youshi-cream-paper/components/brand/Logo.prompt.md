The 祐识 · 奶油宣纸 brand marks — use in headers, sidebars, splash areas, and sign-in.

```jsx
<Logo variant="seal" height={56} base="../../assets" />
<Logo variant="script" height={40} base="../../assets" />
<Logo variant="lockup" height={52} base="../../assets" />
```

- `variant`: `seal` (round hand-drawn stamp — best single mark), `script` (English "Youyou" cursive), `cn` (祐祐 brush wordmark), `lockup` (seal + 祐识 / 奶油宣纸 wordmark).
- **Always set `base`** to the assets folder path relative to your page, or set `window.__YOUYOU_ASSET_BASE__` once globally. Cards/kits two levels deep use `"../../assets"`.
- The PNGs are transparent — they sit directly on cream. Never place a colored box behind the seal.
