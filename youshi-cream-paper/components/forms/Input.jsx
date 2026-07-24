import React from 'react';
import { Icon } from '../brand/Icon.jsx';

let injected = false;
const CSS = `
.yy-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans)}
.yy-field__label{font-size:var(--text-sm);font-weight:var(--weight-semibold);color:var(--ink-700)}
.yy-field__label span{color:var(--danger);margin-left:2px}
.yy-input{--_h:38px;--_px:14px;--_fs:var(--text-base);display:flex;align-items:center;gap:8px;background:var(--cream-50);border:1.5px solid var(--cream-500);border-radius:var(--radius-md);padding:0 var(--_px);min-height:var(--_h);box-shadow:var(--shadow-inset);transition:var(--transition-colors),box-shadow var(--dur-base) var(--ease-out)}
.yy-input:hover{border-color:var(--sage-300)}
.yy-input:focus-within{border-color:var(--sage-400);box-shadow:var(--shadow-focus)}
.yy-input--sm{--_h:30px;--_px:11px;--_fs:var(--text-sm)}
.yy-input--lg{--_h:46px;--_px:16px;--_fs:var(--text-md)}
.yy-input--multiline{align-items:flex-start;padding-top:10px;padding-bottom:10px}
.yy-input--err{border-color:var(--danger)}
.yy-input--err:focus-within{box-shadow:0 0 0 3px var(--danger-wash)}
.yy-input__icon{color:var(--ink-400);flex:none;display:flex}
.yy-input:focus-within .yy-input__icon{color:var(--sage-600)}
.yy-input__el{flex:1;min-width:0;border:none;outline:none;background:transparent;font-family:inherit;font-size:var(--_fs);color:var(--ink-800);line-height:1.5;padding:var(--_pad,0)}
.yy-input__el::placeholder{color:var(--ink-400)}
.yy-input__el:disabled{cursor:not-allowed}
.yy-input--multiline .yy-input__el{resize:vertical}
.yy-field__hint{font-size:var(--text-xs);color:var(--ink-400)}
.yy-field__hint--err{color:var(--danger)}
.yy-field[data-disabled=true]{opacity:.55}
`;
function ensureCSS(){ if(injected||typeof document==='undefined')return; injected=true; const s=document.createElement('style'); s.setAttribute('data-yy','input'); s.textContent=CSS; document.head.appendChild(s); }

let uid=0;

export function Input({
  label, hint, error, leftIcon, size='md', multiline=false, rows=3,
  required=false, disabled=false, id, className='', style={}, ...rest
}){
  ensureCSS();
  const fid=id||`yy-in-${++uid}`;
  const msg=error||hint;
  const boxCls=['yy-input',size!=='md'&&`yy-input--${size}`,multiline&&'yy-input--multiline',error&&'yy-input--err'].filter(Boolean).join(' ');
  const el=React.createElement(multiline?'textarea':'input',{
    id:fid,className:'yy-input__el',rows:multiline?rows:undefined,disabled,
    'aria-invalid':error?true:undefined,...rest
  });
  return React.createElement('div',{className:`yy-field ${className}`,'data-disabled':disabled||undefined,style},
    label?React.createElement('label',{className:'yy-field__label',htmlFor:fid,key:'lb'},label,required?React.createElement('span',{key:'r'},'*'):null):null,
    React.createElement('div',{className:boxCls,key:'bx'},
      leftIcon?React.createElement('span',{className:'yy-input__icon',key:'ic'},React.createElement(Icon,{name:leftIcon,size:size==='lg'?20:18})):null,
      el
    ),
    msg?React.createElement('div',{className:`yy-field__hint${error?' yy-field__hint--err':''}`,key:'ht'},msg):null
  );
}
