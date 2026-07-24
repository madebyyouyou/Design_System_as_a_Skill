import React from 'react';
import { Icon } from '../brand/Icon.jsx';

let injected = false;
const CSS = `
.yy-chip{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 11px;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:var(--weight-semibold);line-height:1;border-radius:var(--radius-pill);border:1.5px solid transparent;color:var(--ink-600);white-space:nowrap;transition:var(--transition-colors),transform var(--dur-fast) var(--ease-out)}
.yy-chip--sm{height:23px;padding:0 9px;font-size:var(--text-xs);gap:4px}
.yy-chip--soft{background:var(--sage-100);color:var(--sage-700)}
.yy-chip--solid{background:var(--sage-500);color:var(--cream-50)}
.yy-chip--outline{background:var(--cream-50);border-color:var(--cream-500);color:var(--ink-600)}
.yy-chip--plain{background:transparent;color:var(--ink-500)}
.yy-chip--gold{background:var(--gold-200);color:var(--gold-600)}
.yy-chip--rose{background:var(--rose-200);color:var(--rose-600)}
button.yy-chip,.yy-chip--clickable{cursor:pointer}
button.yy-chip:hover,.yy-chip--clickable:hover{filter:brightness(.97);border-color:var(--sage-300)}
button.yy-chip:active,.yy-chip--clickable:active{transform:translateY(1px)}
.yy-chip--selected{background:var(--sage-500);color:var(--cream-50);border-color:var(--sage-500)}
.yy-chip:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.yy-chip__dot{width:7px;height:7px;border-radius:50%;background:currentColor;flex:none}
.yy-chip__x{display:inline-flex;margin-right:-3px;margin-left:1px;border-radius:50%;padding:1px;cursor:pointer;opacity:.7}
.yy-chip__x:hover{opacity:1;background:rgba(62,70,55,.1)}
`;
function ensureCSS(){ if(injected||typeof document==='undefined')return; injected=true; const s=document.createElement('style'); s.setAttribute('data-yy','chip'); s.textContent=CSS; document.head.appendChild(s); }

export function Chip({
  children, variant='soft', size='md', leftIcon, dot=false, dotColor,
  selected=false, onRemove, onClick, className='', ...rest
}){
  ensureCSS();
  const clickable=!!onClick;
  const cls=['yy-chip',`yy-chip--${variant}`,size!=='md'&&`yy-chip--${size}`,selected&&'yy-chip--selected',clickable&&'yy-chip--clickable',className].filter(Boolean).join(' ');
  const kids=[
    dot?React.createElement('span',{key:'d',className:'yy-chip__dot',style:dotColor?{background:dotColor}:undefined}):null,
    leftIcon?React.createElement(Icon,{key:'i',name:leftIcon,size:size==='sm'?13:15}):null,
    children!=null?React.createElement('span',{key:'t'},children):null,
    onRemove?React.createElement('span',{key:'x',className:'yy-chip__x',role:'button','aria-label':'移除',onClick:e=>{e.stopPropagation();onRemove(e);}},React.createElement(Icon,{name:'x',size:size==='sm'?11:13,strokeWidth:2.4})):null,
  ];
  return React.createElement(clickable?'button':'span',{className:cls,onClick,type:clickable?'button':undefined,...rest},kids);
}
