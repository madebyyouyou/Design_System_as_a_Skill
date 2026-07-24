import React from 'react';

let injected = false;
const CSS = `
.yy-badge{display:inline-flex;align-items:center;gap:5px;font-family:var(--font-sans);font-weight:var(--weight-bold);font-size:var(--text-xs);line-height:1;padding:3px 8px;border-radius:var(--radius-pill);letter-spacing:.01em}
.yy-badge--sm{font-size:var(--text-2xs);padding:2px 6px}
.yy-badge--neutral{background:var(--cream-400);color:var(--ink-600)}
.yy-badge--sage{background:var(--sage-100);color:var(--sage-700)}
.yy-badge--gold{background:var(--gold-200);color:var(--gold-600)}
.yy-badge--rose{background:var(--rose-200);color:var(--rose-600)}
.yy-badge--danger{background:var(--danger-wash);color:var(--danger)}
.yy-badge--info{background:var(--info-wash);color:var(--sky-600)}
.yy-badge--solid{background:var(--sage-500);color:var(--cream-50)}
.yy-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex:none}
.yy-badge__dot--pulse{box-shadow:0 0 0 0 currentColor;animation:yy-badge-pulse 2s var(--ease-out) infinite}
@keyframes yy-badge-pulse{0%{box-shadow:0 0 0 0 rgba(138,154,107,.5)}70%{box-shadow:0 0 0 6px rgba(138,154,107,0)}100%{box-shadow:0 0 0 0 rgba(138,154,107,0)}}
.yy-statusdot{display:inline-block;width:9px;height:9px;border-radius:50%;background:var(--sage-500)}
`;
function ensureCSS(){ if(injected||typeof document==='undefined')return; injected=true; const s=document.createElement('style'); s.setAttribute('data-yy','badge'); s.textContent=CSS; document.head.appendChild(s); }

export function Badge({
  children, variant='neutral', size='md', dot=false, pulse=false, className='', ...rest
}){
  ensureCSS();
  const cls=['yy-badge',`yy-badge--${variant}`,size!=='md'&&`yy-badge--${size}`,className].filter(Boolean).join(' ');
  return React.createElement('span',{className:cls,...rest},
    dot?React.createElement('span',{key:'d',className:`yy-badge__dot${pulse?' yy-badge__dot--pulse':''}`}):null,
    children
  );
}

export function StatusDot({color='var(--sage-500)',size=9,className='',style={},...rest}){
  ensureCSS();
  return React.createElement('span',{className:`yy-statusdot ${className}`,style:{background:color,width:size,height:size,...style},...rest});
}
