import React from 'react';

let injected = false;
const CSS = `
.yy-card{position:relative;background:var(--surface-card);border:1px solid var(--cream-500);border-radius:var(--radius-xl);box-shadow:var(--shadow-sm);color:var(--text-body)}
.yy-card--hi{background:var(--surface-card-hi)}
.yy-card--flat{box-shadow:none}
.yy-card--raised{box-shadow:var(--shadow-md)}
.yy-card--floating{box-shadow:var(--shadow-lg);border-color:transparent}
.yy-card--pad-sm{padding:var(--space-4)}
.yy-card--pad-md{padding:var(--space-6)}
.yy-card--pad-lg{padding:var(--space-8)}
.yy-card--interactive{cursor:pointer;transition:var(--transition-lift),border-color var(--dur-base) var(--ease-standard)}
.yy-card--interactive:hover{transform:translateY(-3px);box-shadow:var(--shadow-hover);border-color:var(--sage-300)}
.yy-card--interactive:active{transform:translateY(-1px);box-shadow:var(--shadow-sm)}
.yy-card__tape{position:absolute;top:-11px;left:50%;width:78px;height:23px;transform:translateX(-50%) rotate(-2.5deg);background:var(--sage-200);border:1px dashed var(--sage-400);border-radius:2px;opacity:.9;box-shadow:var(--shadow-xs)}
.yy-card__tape--gold{background:var(--gold-200);border-color:var(--gold-400)}
.yy-card__tape--rose{background:var(--rose-200);border-color:var(--rose-400)}
`;
function ensureCSS(){ if(injected||typeof document==='undefined')return; injected=true; const s=document.createElement('style'); s.setAttribute('data-yy','card'); s.textContent=CSS; document.head.appendChild(s); }

export function Card({
  children, elevation='default', padding='md', highlight=false,
  interactive=false, tape=false, tapeColor='sage', as='div', className='', ...rest
}){
  ensureCSS();
  const cls=['yy-card',
    highlight&&'yy-card--hi',
    elevation!=='default'&&`yy-card--${elevation}`,
    padding!=='none'&&`yy-card--pad-${padding}`,
    interactive&&'yy-card--interactive',className].filter(Boolean).join(' ');
  return React.createElement(as,{className:cls,...rest},
    tape?React.createElement('span',{key:'tape',className:`yy-card__tape${tapeColor!=='sage'?` yy-card__tape--${tapeColor}`:''}`,'aria-hidden':true}):null,
    children
  );
}
