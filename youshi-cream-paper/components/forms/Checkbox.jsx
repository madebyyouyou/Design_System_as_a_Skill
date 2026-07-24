import React from 'react';
import { Icon } from '../brand/Icon.jsx';

let injected = false;
const CSS = `
.yy-cbx{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-sans);font-size:var(--text-base);color:var(--ink-700);cursor:pointer;user-select:none}
.yy-cbx__native{position:absolute;opacity:0;width:0;height:0}
.yy-cbx__box{--_s:20px;flex:none;width:var(--_s);height:var(--_s);display:flex;align-items:center;justify-content:center;color:transparent;background:var(--cream-50);border:1.5px solid var(--cream-600);border-radius:6px;transition:var(--transition-colors),transform var(--dur-fast) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)}
.yy-cbx--circle .yy-cbx__box{border-radius:var(--radius-pill)}
.yy-cbx--sm .yy-cbx__box{--_s:17px}
.yy-cbx--lg .yy-cbx__box{--_s:24px}
.yy-cbx:hover .yy-cbx__box{border-color:var(--sage-400)}
.yy-cbx__native:focus-visible+.yy-cbx__box{box-shadow:var(--shadow-focus)}
.yy-cbx__native:checked+.yy-cbx__box{background:var(--sage-500);border-color:var(--sage-500);color:var(--cream-50)}
.yy-cbx:active .yy-cbx__box{transform:scale(.92)}
.yy-cbx__native:disabled~*{opacity:.5}
.yy-cbx[data-disabled=true]{cursor:not-allowed;opacity:.6}
.yy-cbx__label--done{color:var(--ink-400);text-decoration:line-through;text-decoration-color:var(--ink-300)}
`;
function ensureCSS(){ if(injected||typeof document==='undefined')return; injected=true; const s=document.createElement('style'); s.setAttribute('data-yy','checkbox'); s.textContent=CSS; document.head.appendChild(s); }

const CHK={sm:12,md:14,lg:16};

export function Checkbox({
  checked, defaultChecked, onChange, label, shape='square', size='md',
  strikeOnDone=false, disabled=false, id, className='', ...rest
}){
  ensureCSS();
  const controlled=checked!==undefined;
  const [internal,setInternal]=React.useState(!!defaultChecked);
  const isOn=controlled?checked:internal;
  const handle=e=>{ if(!controlled)setInternal(e.target.checked); onChange&&onChange(e); };
  const cls=['yy-cbx',shape==='circle'&&'yy-cbx--circle',size!=='md'&&`yy-cbx--${size}`,className].filter(Boolean).join(' ');
  return React.createElement('label',{className:cls,'data-disabled':disabled||undefined},
    React.createElement('input',{type:'checkbox',className:'yy-cbx__native',checked:controlled?checked:undefined,defaultChecked:controlled?undefined:defaultChecked,onChange:handle,disabled,id,...rest}),
    React.createElement('span',{className:'yy-cbx__box','aria-hidden':true},React.createElement(Icon,{name:'check',size:CHK[size]||14,strokeWidth:2.6})),
    label!=null?React.createElement('span',{className:isOn&&strikeOnDone?'yy-cbx__label--done':undefined},label):null
  );
}
