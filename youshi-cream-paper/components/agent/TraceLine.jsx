import React from 'react';
import { Icon } from '../brand/Icon.jsx';

/* TraceLine + TraceChain — the inline execution trace.
   Wrap a run of TraceLines in <TraceChain> to draw the continuous vertical
   connector (a "chain", like a Thinking / tool-activity feed): each step's
   icon sits on the spine, read-only and lightweight. Progressive disclosure —
   a step can expand to reveal detail (plain text, or a rich results card).
   Consequential writes / permissions escalate to ApprovalCard instead.
   Running steps animate with a TEXT SHIMMER (skeleton sweep), not jumping dots.
   The rail icon is where a platform-native animated glyph (e.g. SwiftUI) can
   mount on a running step; omit `icon` to leave the reserved placeholder. */

let injected = false;
const CSS = `
.yy-trace-chain{display:flex;flex-direction:column;--yy-trace-bg:var(--surface-canvas);--yy-trace-line:var(--cream-600)}
.yy-trace{display:flex;gap:11px;position:relative;font-family:var(--font-sans)}
.yy-trace__rail{position:relative;width:24px;flex:none;align-self:stretch}
.yy-trace__spine{display:none;position:absolute;left:50%;transform:translateX(-50%);width:1.5px;top:0;bottom:0;background:var(--yy-trace-line);border-radius:2px}
.yy-trace-chain .yy-trace__spine{display:block}
.yy-trace-chain>.yy-trace:first-child .yy-trace__spine{top:16px}
.yy-trace-chain>.yy-trace:last-child .yy-trace__spine{bottom:calc(100% - 16px)}
.yy-trace-chain>.yy-trace:only-child .yy-trace__spine{display:none}
.yy-trace__glyph{position:absolute;top:5px;left:50%;transform:translateX(-50%);z-index:1;width:22px;height:22px;border-radius:var(--radius-circle);display:grid;place-items:center;background:var(--yy-trace-bg);color:var(--text-faint)}
.yy-trace__slot{width:15px;height:15px;border-radius:var(--radius-circle);border:1.5px dashed var(--sage-300);opacity:.7}
.yy-trace--thinking .yy-trace__glyph{color:var(--sage-500)}

.yy-trace__col{flex:1;min-width:0;padding:5px 0 9px}
.yy-trace__row{display:flex;align-items:flex-start;gap:9px;width:100%;padding:0;margin:0;border:none;background:transparent;text-align:left;font:inherit;color:inherit;cursor:default;border-radius:var(--radius-xs)}
.yy-trace--expandable .yy-trace__row{cursor:pointer}
.yy-trace__row:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.yy-trace__main{flex:1;min-width:0;display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}
.yy-trace__label{font-weight:var(--weight-medium);font-size:var(--text-sm);line-height:1.55;color:var(--text-muted)}
.yy-trace--thinking .yy-trace__label{color:var(--sage-600)}
.yy-trace__target{font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.yy-trace__meta{flex:none;font-size:var(--text-xs);color:var(--text-faint);white-space:nowrap;align-self:center}
.yy-trace__ext{flex:none;color:var(--ink-300);align-self:center;display:inline-flex}
.yy-trace--expandable .yy-trace__row:hover .yy-trace__ext{color:var(--sage-500)}
.yy-trace__chev{flex:none;color:var(--ink-300);align-self:center;transition:transform var(--dur-base) var(--ease-standard)}
.yy-trace--open .yy-trace__chev{transform:rotate(90deg)}
.yy-trace__body{padding-top:7px;color:var(--text-muted);font-size:var(--text-sm);line-height:var(--leading-relaxed);white-space:pre-wrap;animation:yy-trace-open var(--dur-base) var(--ease-out)}
.yy-trace--tool .yy-trace__body:not(:has(*)){font-family:var(--font-mono);font-size:var(--text-xs)}
@keyframes yy-trace-open{from{opacity:0;transform:translateY(-3px)}to{opacity:1;transform:none}}

/* ── running: TEXT SHIMMER (skeleton sweep) — no jumping dots ── */
.yy-trace--running .yy-trace__label{--_sb:var(--ink-400);--_sh:var(--cream-600);background:linear-gradient(100deg,var(--_sb) 0 36%,var(--_sh) 50%,var(--_sb) 64% 100%);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;animation:yy-trace-shimmer 1.65s linear infinite}
.yy-trace--running.yy-trace--thinking .yy-trace__label{--_sb:var(--sage-600);--_sh:var(--sage-300)}
.yy-trace--running .yy-trace__target{opacity:.55}
@keyframes yy-trace-shimmer{0%{background-position:120% 0}100%{background-position:-120% 0}}
@media (prefers-reduced-motion:reduce){.yy-trace--running .yy-trace__label{animation-duration:3s}}
`;
function ensureCSS(){ if(injected||typeof document==='undefined')return; injected=true; const s=document.createElement('style'); s.setAttribute('data-yy','trace'); s.textContent=CSS; document.head.appendChild(s); }

export function TraceChain({ bg, children, className='', style={}, ...rest }){
  ensureCSS();
  return React.createElement('div',{className:('yy-trace-chain '+className).trim(),style:{...(bg?{'--yy-trace-bg':bg}:null),...style},...rest},children);
}

export function TraceLine({
  kind='tool', label, target, meta, icon, detail, extLink=false,
  status='done', defaultOpen=false, glyph, className='', ...rest
}){
  ensureCSS();
  const [open,setOpen]=React.useState(defaultOpen);
  const expandable=detail!=null;
  const running=status==='running';
  const cls=['yy-trace',`yy-trace--${kind}`,expandable&&'yy-trace--expandable',open&&'yy-trace--open',running&&'yy-trace--running',className].filter(Boolean).join(' ');
  const railGlyph=glyph!=null?glyph:(icon?React.createElement(Icon,{name:icon,size:16}):React.createElement('span',{className:'yy-trace__slot'}));
  const rowInner=[
    React.createElement('span',{key:'m',className:'yy-trace__main'},
      React.createElement('span',{key:'l',className:'yy-trace__label'},label),
      target?React.createElement('span',{key:'t',className:'yy-trace__target'},target):null
    ),
    meta?React.createElement('span',{key:'e',className:'yy-trace__meta'},meta):null,
    extLink?React.createElement('span',{key:'x',className:'yy-trace__ext','aria-hidden':true},React.createElement(Icon,{name:'external-link',size:15})):null,
    expandable?React.createElement(Icon,{key:'c',name:'chevron-right',size:15,className:'yy-trace__chev'}):null
  ];
  return React.createElement('div',{className:cls,...rest},
    React.createElement('span',{className:'yy-trace__rail','aria-hidden':true},
      React.createElement('span',{className:'yy-trace__spine'}),
      React.createElement('span',{className:'yy-trace__glyph'},railGlyph)
    ),
    React.createElement('div',{className:'yy-trace__col'},
      expandable
        ?React.createElement('button',{type:'button',className:'yy-trace__row','aria-expanded':open,onClick:()=>setOpen(o=>!o)},rowInner)
        :React.createElement('div',{className:'yy-trace__row'},rowInner),
      open&&expandable?React.createElement('div',{className:'yy-trace__body'},detail):null
    )
  );
}
