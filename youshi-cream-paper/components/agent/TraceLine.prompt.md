Lightweight rows for the inline execution trace — thinking steps and **read-only** tool calls. Wrap a run of them in `TraceChain` to draw the connected vertical spine (a Thinking / tool-activity chain). Never a big card — that's `ApprovalCard`.

```jsx
<TraceChain bg="var(--surface-card-hi)">
  <TraceLine kind="thinking" icon="clock" label="先看日历，别拍脑袋应下来" />
  <TraceLine icon="external-link" extLink label="Failed to fetch" target="x.com/claudeai/status/207…" />
  <TraceLine kind="thinking" icon="clock" label="那我换个法子，直接搜" />
  <TraceLine icon="globe" label="claudeai twitter Fable 5 status" meta="10 results" defaultOpen
    detail={<ResultsCard/>} />          {/* rich node lives in the expandable body */}
  <TraceLine icon="search" label="搜索天气" target="河边 · 明晨" status="running" />
  <TraceLine icon="check-circle" label="完成" />
</TraceChain>
```

- **The chain is the layout.** `TraceChain` provides the spine; each `TraceLine`'s rail icon sits on it. Set `bg` to the surface the chain sits on so the spine reads as broken by each icon.
- `kind="thinking"` = sage summary line; `kind="tool"` (default) = read-only step (verb + optional mono `target`).
- `status="running"` animates the **label text with a shimmer** (skeleton sweep) — no jumping dots. On a running step the rail icon is where a platform-native animated glyph (SwiftUI) mounts; omit `icon` to leave the reserved dashed placeholder (or pass `glyph`).
- `meta` = right-aligned note ("10 results"); `extLink` adds a trailing ↗. Adding `detail` makes the row an accessible disclosure — pass text (thinking chain) or a rich results card.
- The moment a step would **write** something or needs **permission**, stop using `TraceLine` and render an `ApprovalCard`.
