import React from 'react';
import { Icon } from '../brand/Icon.jsx';

let injected = false;
const CSS = `
.yy-ib{--_s:38px;display:inline-flex;align-items:center;justify-content:center;width:var(--_s);height:var(--_s);padding:0;border:1.5px solid transparent;border-radius:var(--radius-pill);cursor:pointer;color:var(--ink-600);background:transparent;transition:var(--transition-colors),transform var(--dur-fast) var(--ease-out),box-shadow var(--dur-base) var(--ease-out);-webkit-tap-highlight-color:transparent}
.yy-ib:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.yy-ib:disabled,.yy-ib[aria-disabled=true]{opacity:.4;cursor:not-allowed;pointer-events:none}
.yy-ib--square{border-radius:var(--radius-md)}
.yy-ib--sm{--_s:30px}
.yy-ib--lg{--_s:46px}
.yy-ib--primary{background:var(--sage-500);color:var(--cream-50);box-shadow:var(--shadow-sm)}
.yy-ib--primary:hover{background:var(--sage-600)}
.yy-ib--primary:active{background:var(--sage-700);transform:translateY(1px);box-shadow:var(--shadow-xs)}
.yy-ib--secondary{background:var(--cream-50);color:var(--ink-700);border-color:var(--cream-500);box-shadow:var(--shadow-xs)}
.yy-ib--secondary:hover{background:var(--cream-100);border-color:var(--sage-300)}
.yy-ib--secondary:active{transform:translateY(1px);box-shadow:none}
.yy-ib--soft{background:var(--sage-100);color:var(--sage-700)}
.yy-ib--soft:hover{background:var(--sage-200)}
.yy-ib--soft:active{background:var(--sage-300);transform:translateY(1px)}
.yy-ib--ghost{background:transparent;color:var(--ink-500)}
.yy-ib--ghost:hover{background:var(--sage-100);color:var(--ink-800)}
.yy-ib--ghost:active{background:var(--sage-200)}
`;
function ensureCSS(){ if(injected||typeof document==='undefined')return; injected=true; const s=document.createElement('style'); s.setAttribute('data-yy','icon-button'); s.textContent=CSS; document.head.appendChild(s); }

const ISZ={sm:16,md:19,lg:22};

export function IconButton({
  icon, label, variant='ghost', size='md', shape='circle',
  fillIcon=false, disabled=false, type='button', className='', ...rest
}){
  ensureCSS();
  const cls=['yy-ib',`yy-ib--${variant}`,size!=='md'&&`yy-ib--${size}`,shape==='square'&&'yy-ib--square',className].filter(Boolean).join(' ');
  return React.createElement('button',{type,className:cls,disabled,'aria-label':label,title:label,...rest},
    React.createElement(Icon,{name:icon,size:ISZ[size]||19,fill:fillIcon})
  );
}
