import React from 'react';
import { Icon } from '../brand/Icon.jsx';

let injected = false;
const CSS = `
.yy-action{position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;gap:14px;padding:22px 18px 16px;background:var(--surface-card-hi);border:1px solid var(--cream-500);border-radius:var(--radius-xl);box-shadow:var(--shadow-sm);cursor:pointer;color:var(--text-body);transition:var(--transition-lift),border-color var(--dur-base) var(--ease-standard)}
.yy-action:hover{transform:translateY(-3px);box-shadow:var(--shadow-hover);border-color:var(--sage-300)}
.yy-action:active{transform:translateY(-1px);box-shadow:var(--shadow-sm)}
.yy-action:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.yy-action--selected{border-color:var(--sage-400);box-shadow:0 0 0 2px var(--sage-200),var(--shadow-md)}
.yy-action__ic{width:52px;height:52px;border-radius:var(--radius-pill);display:flex;align-items:center;justify-content:center;flex:none}
.yy-action__ic--sage{background:var(--sage-100);color:var(--sage-600)}
.yy-action__ic--gold{background:var(--gold-200);color:var(--gold-600)}
.yy-action__ic--rose{background:var(--rose-200);color:var(--rose-600)}
.yy-action__title{font-family:var(--font-display);font-weight:var(--weight-bold);font-size:var(--text-md);line-height:var(--leading-snug);color:var(--ink-800)}
.yy-action__desc{font-size:var(--text-sm);color:var(--ink-500);line-height:var(--leading-normal);margin-top:2px}
.yy-action__foot{margin-top:2px;display:flex;color:var(--rose-500)}
`;
function ensureCSS(){ if(injected||typeof document==='undefined')return; injected=true; const s=document.createElement('style'); s.setAttribute('data-yy','action-card'); s.textContent=CSS; document.head.appendChild(s); }

export function ActionCard({
  icon, title, description, accent='sage', selected=false,
  footerHeart=true, className='', ...rest
}){
  ensureCSS();
  const cls=['yy-action',selected&&'yy-action--selected',className].filter(Boolean).join(' ');
  return React.createElement('button',{type:'button',className:cls,...rest},
    React.createElement('span',{key:'ic',className:`yy-action__ic yy-action__ic--${accent}`},React.createElement(Icon,{name:icon,size:24})),
    React.createElement('span',{key:'tx'},
      React.createElement('span',{className:'yy-action__title',style:{display:'block'}},title),
      description?React.createElement('span',{className:'yy-action__desc',style:{display:'block'}},description):null
    ),
    footerHeart?React.createElement('span',{key:'ft',className:'yy-action__foot'},React.createElement(Icon,{name:'heart',size:14,fill:true})):null
  );
}
