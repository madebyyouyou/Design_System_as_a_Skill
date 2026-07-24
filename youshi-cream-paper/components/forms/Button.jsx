import React from 'react';
import { Icon } from '../brand/Icon.jsx';

let injected = false;
const CSS = `
.yy-btn{--_h:38px;--_px:18px;--_fs:var(--text-base);position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;height:var(--_h);padding:0 var(--_px);font-family:var(--font-sans);font-size:var(--_fs);font-weight:var(--weight-bold);line-height:1;letter-spacing:.005em;border:var(--border-2) solid transparent;border-radius:var(--radius-lg);cursor:pointer;user-select:none;white-space:nowrap;transition:var(--transition-colors),transform var(--dur-fast) var(--ease-out),box-shadow var(--dur-base) var(--ease-out),text-decoration-color var(--dur-base) var(--ease-standard);-webkit-tap-highlight-color:transparent}
.yy-btn:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.yy-btn:disabled,.yy-btn[aria-disabled=true]{opacity:.45;cursor:not-allowed;pointer-events:none}
.yy-btn--pill{border-radius:var(--radius-pill)}
.yy-btn--block{width:100%}
.yy-btn--sm{--_h:30px;--_px:13px;--_fs:var(--text-sm)}
.yy-btn--lg{--_h:46px;--_px:24px;--_fs:var(--text-md)}

/* ── solid (a.k.a. primary): the single loud, filled action ── */
.yy-btn--solid,.yy-btn--primary{background:var(--sage-500);color:var(--cream-50);box-shadow:var(--shadow-sm)}
.yy-btn--solid:hover,.yy-btn--primary:hover{background:var(--sage-600)}
.yy-btn--solid:active,.yy-btn--primary:active{background:var(--sage-700);transform:translateY(1px);box-shadow:var(--shadow-xs)}

/* ── outline (a.k.a. secondary): solid hairline on paper ── */
.yy-btn--outline,.yy-btn--secondary{background:var(--surface-card-hi);color:var(--ink-700);border-color:var(--border-hair);box-shadow:var(--shadow-xs)}
.yy-btn--outline:hover,.yy-btn--secondary:hover{background:var(--cream-100);border-color:var(--sage-300);color:var(--ink-800)}
.yy-btn--outline:active,.yy-btn--secondary:active{background:var(--cream-200);transform:translateY(1px);box-shadow:none}

/* ── dashed: dashed sage outline — the bullet-journal "additive/optional" action ── */
.yy-btn--dashed{background:var(--surface-card-hi);color:var(--sage-700);border:var(--border-2) dashed var(--sage-400)}
.yy-btn--dashed:hover{background:var(--sage-50);border-color:var(--sage-500)}
.yy-btn--dashed:active{background:var(--sage-100);transform:translateY(1px)}

/* ── text: label + dashed underline, no box (inline low-emphasis) ── */
.yy-btn--text{height:auto;padding:2px 3px;background:transparent;color:var(--link);border-color:transparent;box-shadow:none;font-weight:var(--weight-semibold);text-decoration:underline;text-decoration-style:dashed;text-decoration-color:var(--sage-400);text-decoration-thickness:1.5px;text-underline-offset:5px;border-radius:var(--radius-xs)}
.yy-btn--text:hover{color:var(--link-hover);text-decoration-color:var(--sage-600)}
.yy-btn--text:active{transform:translateY(1px)}
.yy-btn--text.yy-btn--danger-tone{color:var(--danger);text-decoration-color:var(--rose-400)}
.yy-btn--text.yy-btn--danger-tone:hover{color:var(--rose-600);text-decoration-color:var(--rose-500)}

/* ── ghost: no fill until hover (toolbars, repeated rows) ── */
.yy-btn--ghost{background:transparent;color:var(--ink-600)}
.yy-btn--ghost:hover{background:var(--sage-100);color:var(--ink-800)}
.yy-btn--ghost:active{background:var(--sage-200)}
.yy-btn--ghost.yy-btn--danger-tone{color:var(--danger)}
.yy-btn--ghost.yy-btn--danger-tone:hover{background:var(--danger-wash);color:var(--rose-600)}

/* ── soft: quiet sage wash ── */
.yy-btn--soft{background:var(--sage-100);color:var(--sage-700)}
.yy-btn--soft:hover{background:var(--sage-200)}
.yy-btn--soft:active{background:var(--sage-300);transform:translateY(1px)}

/* ── tag: paper "stamp" — dashed rounded rect, tilted a hair (washi-label tap target) ── */
.yy-btn--tag{height:auto;padding:4px 12px;background:var(--surface-card-hi);color:var(--sage-700);border:var(--border-2) dashed var(--sage-400);border-radius:var(--radius-sm);font-size:var(--text-xs);font-weight:var(--weight-semibold);letter-spacing:.03em;box-shadow:var(--shadow-xs);transform:rotate(-1.4deg)}
.yy-btn--tag:hover{background:var(--sage-50);border-color:var(--sage-500);transform:rotate(0)}
.yy-btn--tag:active{background:var(--sage-100);transform:rotate(0) translateY(1px)}
.yy-btn--tag.yy-btn--danger-tone{color:var(--rose-600);border-color:var(--rose-400)}

/* ── danger: solid destructive confirm (use sparingly, one per dialog) ── */
.yy-btn--danger{background:var(--danger);color:#fff;box-shadow:var(--shadow-sm)}
.yy-btn--danger:hover{filter:brightness(.95)}
.yy-btn--danger:active{transform:translateY(1px);box-shadow:var(--shadow-xs)}

.yy-btn__spin{width:1em;height:1em;border-radius:50%;border:2px solid currentColor;border-top-color:transparent;animation:yy-btn-spin .7s linear infinite}
@keyframes yy-btn-spin{to{transform:rotate(360deg)}}
`;
function ensureCSS(){ if(injected||typeof document==='undefined')return; injected=true; const s=document.createElement('style'); s.setAttribute('data-yy','button'); s.textContent=CSS; document.head.appendChild(s); }

const ICON_SIZE={sm:15,md:17,lg:19};

export function Button({
  children, variant='primary', size='md', tone='default', pill=false, block=false,
  leftIcon, rightIcon, loading=false, disabled=false,
  type='button', className='', ...rest
}){
  ensureCSS();
  const cls=['yy-btn',`yy-btn--${variant}`,
    tone==='danger'&&'yy-btn--danger-tone',
    size!=='md'&&`yy-btn--${size}`,pill&&'yy-btn--pill',block&&'yy-btn--block',className].filter(Boolean).join(' ');
  const isz=ICON_SIZE[size]||17;
  return React.createElement('button',{type,className:cls,disabled:disabled||loading,'aria-busy':loading||undefined,...rest},
    loading?React.createElement('span',{className:'yy-btn__spin','aria-hidden':true}):
      (leftIcon?React.createElement(Icon,{name:leftIcon,size:isz,key:'li'}):null),
    children!=null?React.createElement('span',{key:'l'},children):null,
    !loading&&rightIcon?React.createElement(Icon,{name:rightIcon,size:isz,key:'ri'}):null
  );
}
