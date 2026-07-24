import React from 'react';

let injected = false;
const CSS = `
.yy-avatar{position:relative;display:inline-flex;align-items:center;justify-content:center;flex:none;width:var(--_s,36px);height:var(--_s,36px);border-radius:var(--radius-pill);background:var(--sage-200);color:var(--sage-700);font-family:var(--font-display);font-weight:var(--weight-bold);font-size:calc(var(--_s,36px)*.4);overflow:hidden;user-select:none}
.yy-avatar--rounded{border-radius:var(--radius-md)}
.yy-avatar--ring{box-shadow:0 0 0 2px var(--surface-canvas),0 0 0 3.5px var(--sage-400)}
.yy-avatar--gold{background:var(--gold-200);color:var(--gold-600)}
.yy-avatar--rose{background:var(--rose-200);color:var(--rose-600)}
.yy-avatar__img{width:100%;height:100%;object-fit:cover;display:block}
.yy-avatar__status{position:absolute;right:-1px;bottom:-1px;width:calc(var(--_s,36px)*.3);height:calc(var(--_s,36px)*.3);min-width:8px;min-height:8px;border-radius:50%;background:var(--sage-500);box-shadow:0 0 0 2px var(--surface-canvas)}
`;
function ensureCSS(){ if(injected||typeof document==='undefined')return; injected=true; const s=document.createElement('style'); s.setAttribute('data-yy','avatar'); s.textContent=CSS; document.head.appendChild(s); }

const SIZES={xs:24,sm:30,md:36,lg:44,xl:56};

function initials(name){
  if(!name)return '';
  const parts=String(name).trim().split(/\s+/);
  if(parts.length===1)return parts[0].slice(0,/[\u4e00-\u9fff]/.test(parts[0])?1:2).toUpperCase();
  return (parts[0][0]+parts[parts.length-1][0]).toUpperCase();
}

export function Avatar({
  src, name, size='md', shape='circle', tone='sage',
  ring=false, status=false, statusColor, className='', style={}, ...rest
}){
  ensureCSS();
  const px=typeof size==='number'?size:(SIZES[size]||36);
  const cls=['yy-avatar',shape==='rounded'&&'yy-avatar--rounded',ring&&'yy-avatar--ring',tone!=='sage'&&`yy-avatar--${tone}`,className].filter(Boolean).join(' ');
  return React.createElement('span',{className:cls,style:{'--_s':`${px}px`,...style},...rest},
    src?React.createElement('img',{key:'i',className:'yy-avatar__img',src,alt:name||''}):
      React.createElement('span',{key:'t','aria-hidden':name?undefined:true},initials(name)),
    status?React.createElement('span',{key:'s',className:'yy-avatar__status',style:statusColor?{background:statusColor}:undefined}):null
  );
}
