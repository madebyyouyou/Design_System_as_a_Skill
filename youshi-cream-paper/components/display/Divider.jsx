import React from 'react';

let injected = false;
const CSS = `
.yy-divider{border:0;color:var(--border-hair)}
.yy-divider--h{width:100%;height:0;border-top:1px solid currentColor;margin:var(--space-4) 0}
.yy-divider--h.yy-divider--dashed{border-top-style:dashed;color:var(--border-dash)}
.yy-divider--v{align-self:stretch;width:0;min-height:1em;border-left:1px solid currentColor;margin:0 var(--space-3)}
.yy-divider--v.yy-divider--dashed{border-left-style:dashed;color:var(--border-dash)}
.yy-divider--sage{color:var(--sage-300)}
.yy-labeled{display:flex;align-items:center;gap:12px;margin:var(--space-5) 0;color:var(--border-dash)}
.yy-labeled::before,.yy-labeled::after{content:"";flex:1;border-top:1px dashed currentColor}
.yy-labeled__txt{font-family:var(--font-hand);font-size:var(--text-lg);font-weight:var(--weight-semibold);color:var(--sage-600);white-space:nowrap;line-height:1}
`;
function ensureCSS(){ if(injected||typeof document==='undefined')return; injected=true; const s=document.createElement('style'); s.setAttribute('data-yy','divider'); s.textContent=CSS; document.head.appendChild(s); }

export function Divider({
  orientation='horizontal', variant='solid', tone='default', label,
  className='', style={}, ...rest
}){
  ensureCSS();
  if(label){
    return React.createElement('div',{className:`yy-labeled ${className}`,style,...rest},
      React.createElement('span',{className:'yy-labeled__txt'},label)
    );
  }
  const cls=['yy-divider',orientation==='vertical'?'yy-divider--v':'yy-divider--h',variant==='dashed'&&'yy-divider--dashed',tone==='sage'&&'yy-divider--sage',className].filter(Boolean).join(' ');
  return React.createElement('hr',{className:cls,style,'aria-orientation':orientation,...rest});
}
