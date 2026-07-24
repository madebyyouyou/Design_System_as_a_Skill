The prominent write / permission "envelope" — the one agent-trace element allowed to grab attention. Everything read-only stays a `TraceLine`; only a consequential write or a permission request escalates to this. You **stamp the 祐 seal** to approve.

```jsx
{/* benign write — uncontrolled; stamping the seal collapses it into a receipt */}
<ApprovalCard title="河边散步"
  meta={[{icon:'calendar', text:'7月18日 07:30–08:30'},
         {icon:'bell', text:'提前15分钟提醒'}]}
  approvedNote="已记入 · 21:07"
  base="../../assets" onApprove={writeEvent} />

{/* destructive write — danger tone: ivory paper, rose accents + lotus-mauve seal */}
<ApprovalCard tone="danger" title="删除这条记忆？"
  detail={<>「不吃香菜」将从<span className="yy-ap__mono">公共档案</span>移除</>}
  base="../../assets" />

{/* controlled */}
<ApprovalCard status={s} onApprove={()=>setS('approved')} onDeny={()=>setS('denied')} title="发送这封信？" />
```

- **Assembled, not presented.** Entrance is a four-beat paper placement (backing sheet → main paper → leaf/divider overlays → the 祐 seal last). All motion is transforms + opacity; under `prefers-reduced-motion` it becomes a short opacity fade.
- **Approve = stamp.** Clicking the seal lifts it, presses it down leaving a muted ink imprint, then collapses the card into the compact completed receipt (a notched ticket).
- **Emphasis is built in:** the seal is the one loud action against a quiet "先不了" deny. Don't add more loud buttons.
- States `pending` → `approved` / `denied`. Uncontrolled by default (self-manages; `重新拆封` resets a denial); pass `status` + `onApprove`/`onDeny` to control.
- `meta` renders icon+text rows (calendar/bell); `detail` is a sub-line for destructive consequences. Wrap concrete values in `<span className="yy-ap__mono">…</span>`.
- Pass `base` (or set `window.__YOUYOU_ASSET_BASE__`) so the botanical sprig and 祐 seal resolve — each tone loads its palette-matched pair (`decorations/sage-green/05-botanical-sprig.png` + `seal.png`; `decorations/dusty-lotus-mauve/…` for danger).
- Rule of thumb: if a human would want to say "wait, let me see that first" — it's an `ApprovalCard`. Otherwise it's a `TraceLine`.
