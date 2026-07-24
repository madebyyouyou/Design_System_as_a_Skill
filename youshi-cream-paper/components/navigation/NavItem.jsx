import React from 'react';
import { Icon } from '../brand/Icon.jsx';

let injected = false;
// Active marker: a two-ends-tapered sage brush stroke at the left rail (no pill/fill).
const BLADE = 'data:image/svg+xml,' + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6 26'><path d='M3 0.6C1.9 6 1.5 13 2.4 20 2.66 22.6 2.86 24.4 3 25.4 3.14 24.4 3.4 22.6 3.7 20 4.5 13 4.1 6 3 0.6Z' fill='#6E7E52'/></svg>");
const CSS = `
.yy-nav{display:flex;align-items:center;gap:10px;width:100%;padding:7px 10px;border:0;background:transparent;text-align:left;font-family:var(--font-sans);font-size:var(--text-base);font-weight:var(--weight-medium);color:var(--ink-600);border-radius:var(--radius-md);cursor:pointer;line-height:1.2;transition:var(--transition-colors);position:relative}
.yy-nav:hover{background:var(--sage-100);color:var(--ink-800)}
.yy-nav:active{background:var(--sage-200)}
.yy-nav:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.yy-nav--active{background:transparent;color:var(--sage-700);font-weight:var(--weight-bold)}
.yy-nav--active:hover,.yy-nav--active:active{background:transparent}
.yy-nav--active .yy-nav__label{font-size:1.08em;margin-left:6px;letter-spacing:.01em;transition:font-size var(--dur-base) var(--ease-out),margin-left var(--dur-base) var(--ease-out)}
.yy-nav--active::before{content:"";position:absolute;left:1px;top:50%;transform:translateY(-50%);width:6px;height:26px;background:center/contain no-repeat url("${BLADE}")}
.yy-nav--muted{color:var(--ink-300);font-weight:var(--weight-regular)}
.yy-nav--indent{padding-left:34px;font-size:var(--text-sm);color:var(--ink-500)}
.yy-nav__ic{flex:none;display:flex;color:var(--ink-400)}
.yy-nav--active .yy-nav__ic{color:var(--sage-600)}
.yy-nav__label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.yy-nav__trail{flex:none;display:flex;align-items:center;gap:6px;color:var(--ink-400)}
`;
function ensureCSS(){ if(injected||typeof document==='undefined')return; injected=true; const s=document.createElement('style'); s.setAttribute('data-yy','nav-item'); s.textContent=CSS; document.head.appendChild(s); }

export function NavItem({
  icon, label, active=false, muted=false, indent=false,
  leading, trailing, as='button', className='', ...rest
}){
  ensureCSS();
  const cls=['yy-nav',active&&'yy-nav--active',muted&&'yy-nav--muted',indent&&'yy-nav--indent',className].filter(Boolean).join(' ');
  const extra=as==='button'?{type:'button'}:{};
  return React.createElement(as,{className:cls,'aria-current':active?'page':undefined,...extra,...rest},
    leading!==undefined?React.createElement('span',{key:'ld',className:'yy-nav__ic'},leading):
      (icon?React.createElement('span',{key:'ic',className:'yy-nav__ic'},React.createElement(Icon,{name:icon,size:indent?16:18})):null),
    React.createElement('span',{key:'lb',className:'yy-nav__label'},label),
    trailing!=null?React.createElement('span',{key:'tr',className:'yy-nav__trail'},trailing):null
  );
}
