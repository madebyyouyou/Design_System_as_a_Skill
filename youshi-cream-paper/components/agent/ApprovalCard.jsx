import React from 'react';
import { Icon } from '../brand/Icon.jsx';

/* ApprovalCard — the ONE place the trace goes loud. A write action or a
   permission request becomes a paper "envelope" gently assembled on the
   journal page (NOT a modal), that you stamp with the 祐 seal to approve.
   Read-only steps stay lightweight TraceLines.

   Entrance is a four-beat paper placement: backing sheet → main paper →
   decorative overlays → interactive 祐 seal (transforms + opacity only).
   Approving lifts the seal, presses it down leaving a muted ink imprint,
   then collapses the card into a compact completed receipt.
   prefers-reduced-motion replaces all movement with a short opacity fade. */

function resolveBase(base){
  if(base)return base.replace(/\/$/,'');
  if(typeof window!=='undefined'&&window.__YOUYOU_ASSET_BASE__)return window.__YOUYOU_ASSET_BASE__.replace(/\/$/,'');
  return 'assets';
}

let injected = false;
const CSS = `
.yy-ap{position:relative;width:100%;max-width:360px;font-family:var(--font-sans)}
.yy-ap__backing{position:absolute;inset:10px -10px -12px 12px;background:var(--sage-200);border-radius:var(--radius-xl);box-shadow:var(--shadow-xs);transform:rotate(2.2deg);z-index:0}
.yy-ap--danger .yy-ap__backing{background:var(--rose-300)}
.yy-ap__paper{position:relative;z-index:1;background:var(--surface-card-hi);border:1px solid var(--border-hair);border-radius:var(--radius-xl);box-shadow:var(--shadow-md);padding:18px 22px 18px;overflow:hidden}
.yy-ap--danger .yy-ap__paper{border-color:var(--rose-200)}

.yy-ap__head{display:flex;align-items:center;gap:13px;margin:0 0 2px}
.yy-ap__deco{flex:none;position:relative;display:flex;align-items:flex-start;height:54px;pointer-events:none}
.yy-ap__sprig{height:100%;width:auto;transform:rotate(-8deg);filter:drop-shadow(0 1px 1px rgba(62,70,55,.12))}
.yy-ap__spark{position:absolute;top:-2px;right:-9px}
.yy-ap__title{margin:0;font-family:var(--font-display);font-weight:var(--weight-extrabold);font-size:var(--text-2xl);line-height:var(--leading-snug);color:var(--ink-800);letter-spacing:.01em}
.yy-ap--danger .yy-ap__title{color:var(--rose-600)}
.yy-ap--danger .yy-ap__mono{color:var(--rose-600)}
.yy-ap__sub{margin:6px 0 0;font-size:var(--text-sm);color:var(--text-muted);line-height:var(--leading-normal)}
.yy-ap__sub b,.yy-ap__mono{font-family:var(--font-mono);font-size:.94em;color:var(--ink-700);font-weight:var(--weight-medium)}
.yy-ap__meta{list-style:none;margin:14px 0 0;padding:0;display:flex;flex-direction:column;gap:9px}
.yy-ap__meta li{display:flex;align-items:center;gap:10px;font-size:var(--text-base);color:var(--text-body)}
.yy-ap__meta .yy-ap__mi{flex:none;color:var(--sage-600)}
.yy-ap--danger .yy-ap__meta .yy-ap__mi{color:var(--rose-500)}

.yy-ap__divider{height:0;border:none;border-top:1.5px dashed var(--sage-300);width:60%;margin:16px 0 0}
.yy-ap--danger .yy-ap__divider{border-top-color:var(--rose-400)}
.yy-ap__confirm{display:flex;align-items:center;gap:9px;margin-top:14px;font-size:var(--text-base);color:var(--text-body)}
.yy-ap__deny{margin-top:12px;padding:2px 2px;background:none;border:none;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:var(--weight-semibold);color:var(--text-faint);cursor:pointer;text-decoration:underline;text-decoration-style:dashed;text-decoration-color:var(--cream-600);text-underline-offset:5px;text-decoration-thickness:1.5px;border-radius:var(--radius-xs)}
.yy-ap__deny:hover{color:var(--ink-600);text-decoration-color:var(--ink-300)}
.yy-ap__deny:focus-visible{outline:none;box-shadow:var(--shadow-focus)}

/* ── the 祐 seal (approve control) + its ink imprint ── */
.yy-ap__sealwrap{position:absolute;right:18px;bottom:14px;z-index:3;display:flex;flex-direction:column;align-items:center;gap:5px}
.yy-ap__imprint{position:absolute;top:0;right:0;width:92px;height:92px;opacity:0;pointer-events:none}
.yy-ap__imprint img{width:100%;height:100%;object-fit:contain;display:block}
.yy-ap__seal{position:relative;width:92px;height:92px;padding:0;border:none;background:transparent;cursor:pointer;transform:rotate(-3deg);transition:filter var(--dur-base) var(--ease-standard)}
.yy-ap__seal img{width:100%;height:100%;object-fit:contain;display:block;filter:drop-shadow(0 1px 1px rgba(62,70,55,.1))}
.yy-ap__seal:hover{filter:brightness(.96) saturate(1.04)}
.yy-ap__seal:focus-visible{outline:none;border-radius:var(--radius-circle);box-shadow:var(--shadow-focus)}
.yy-ap__cap{font-size:var(--text-2xs);font-weight:var(--weight-bold);letter-spacing:.14em;color:var(--sage-700)}
.yy-ap--danger .yy-ap__cap{color:var(--rose-600)}

/* ── completed receipt (ticket) ── */
.yy-ap__receipt{position:relative;background:var(--surface-card-hi);border:1px solid var(--border-hair);border-radius:var(--radius-lg);filter:drop-shadow(0 3px 6px rgba(62,70,55,.1));padding:16px 84px 16px 22px;display:flex;align-items:center;gap:14px;max-width:334px;overflow:hidden;--yy-tooth:9px;-webkit-mask:conic-gradient(from -45deg at right,#0000 25%,#000 0) 0 50%/100% calc(var(--yy-tooth)*2);mask:conic-gradient(from -45deg at right,#0000 25%,#000 0) 0 50%/100% calc(var(--yy-tooth)*2)}
.yy-ap--danger .yy-ap__receipt{border-color:var(--rose-200)}
.yy-ap__receipt::before,.yy-ap__receipt::after{content:"";position:absolute;width:22px;height:22px;border-radius:var(--radius-circle);background:var(--yy-ap-page,var(--surface-canvas));right:61px;z-index:2}
.yy-ap__receipt::before{top:-11px}
.yy-ap__receipt::after{bottom:-11px}
.yy-ap__perf{position:absolute;top:12px;bottom:12px;right:72px;border-left:1.5px dashed var(--cream-600)}
.yy-ap__rleaf{flex:none;height:40px;width:auto;transform:rotate(-8deg);opacity:.92}
.yy-ap__rbody{flex:1;min-width:0}
.yy-ap__rtitle{font-family:var(--font-display);font-weight:var(--weight-bold);font-size:var(--text-md);color:var(--ink-800)}
.yy-ap__rnote{margin-top:2px;font-size:var(--text-xs);color:var(--text-faint);display:flex;align-items:center;gap:5px}
.yy-ap__rseal{position:absolute;right:14px;top:50%;transform:translateY(-50%) rotate(-4deg);width:46px;height:46px;opacity:.5}
.yy-ap__rseal img{width:100%;height:100%;object-fit:contain;display:block}

.yy-ap__undo{margin:8px 2px 0;padding:2px;background:none;border:none;font-size:var(--text-xs);font-weight:var(--weight-semibold);color:var(--text-faint);cursor:pointer;text-decoration:underline dashed var(--cream-600);text-underline-offset:4px}
.yy-ap__undo:hover{color:var(--sage-600)}

/* denied */
.yy-ap--denied .yy-ap__paper{opacity:.72}
.yy-ap--denied .yy-ap__deco,.yy-ap--denied .yy-ap__sealwrap{opacity:.35}
.yy-ap__deniednote{display:flex;align-items:center;gap:8px;margin-top:14px;font-size:var(--text-sm);color:var(--text-faint)}

/* ── four-beat entrance (transforms + opacity only) ── */
@keyframes yy-ap-place{from{opacity:0;transform:translateY(11px) scale(.965)}to{opacity:1;transform:none}}
@keyframes yy-ap-place-back{from{opacity:0;transform:translateY(6px) rotate(2.2deg) scale(.97)}to{opacity:1;transform:rotate(2.2deg)}}
@keyframes yy-ap-leaf{from{opacity:0;transform:translateY(9px) rotate(-16deg)}to{opacity:1;transform:rotate(-8deg)}}
@keyframes yy-ap-seal{from{opacity:0;transform:translateY(-7px) rotate(-3deg) scale(.8)}to{opacity:1;transform:rotate(-3deg) scale(1)}}
@keyframes yy-ap-pop{from{opacity:0;transform:scale(.5)}to{opacity:1;transform:none}}
.yy-ap--in .yy-ap__backing{animation:yy-ap-place-back .42s var(--ease-out) both}
.yy-ap--in .yy-ap__paper{animation:yy-ap-place .44s var(--ease-out) .1s both}
.yy-ap--in .yy-ap__deco{animation:yy-ap-place .4s var(--ease-out) .22s both}
.yy-ap--in .yy-ap__divider{animation:yy-ap-place .36s var(--ease-out) .3s both}
.yy-ap--in .yy-ap__sealwrap{animation:yy-ap-seal .46s var(--ease-hover) .46s both}
.yy-ap__receipt{animation:yy-ap-place .44s var(--ease-out) both}

/* ── stamp: lift → press (approval) ── */
@keyframes yy-ap-stamp{0%{transform:rotate(-3deg) translateY(0) scale(1)}28%{transform:rotate(-3deg) translateY(-13px) scale(1.12)}60%{transform:rotate(-3deg) translateY(3px) scale(.95)}78%{transform:rotate(-3deg) translateY(0) scale(1.02)}100%{transform:rotate(-3deg) translateY(0) scale(1)}}
.yy-ap--stamping .yy-ap__seal{animation:yy-ap-stamp .58s var(--ease-standard) both}
.yy-ap__imprint{transition:opacity .34s var(--ease-out) .22s}
.yy-ap--stamping .yy-ap__imprint,.yy-ap--collapsing .yy-ap__imprint{opacity:.2}
.yy-ap--collapsing .yy-ap__paper,.yy-ap--collapsing .yy-ap__backing{transition:opacity .22s var(--ease-in),transform .22s var(--ease-in);opacity:0;transform:scale(.94) translateY(6px)}

@media (prefers-reduced-motion:reduce){
  .yy-ap--in .yy-ap__backing,.yy-ap--in .yy-ap__paper,.yy-ap--in .yy-ap__deco,.yy-ap--in .yy-ap__divider,.yy-ap--in .yy-ap__sealwrap,.yy-ap__receipt{animation:yy-ap-fade .3s ease both}
  .yy-ap--in .yy-ap__backing{animation:none;opacity:1}
  .yy-ap--stamping .yy-ap__seal{animation:none}
  .yy-ap--collapsing .yy-ap__paper,.yy-ap--collapsing .yy-ap__backing{transform:none}
  @keyframes yy-ap-fade{from{opacity:0}to{opacity:1}}
}
`;
function ensureCSS(){ if(injected||typeof document==='undefined')return; injected=true; const s=document.createElement('style'); s.setAttribute('data-yy','approval'); s.textContent=CSS; document.head.appendChild(s); }

export function ApprovalCard({
  title, detail, meta, confirmNote, tone='default',
  status, defaultStatus='pending', onApprove, onDeny, onUndo,
  sealLabel, denyLabel='先不了', approvedNote='已记入', showUndo=false,
  animateIn=true, base, className='', ...rest
}){
  ensureCSS();
  const danger=tone==='danger';
  const [internal,setInternal]=React.useState(defaultStatus);
  const [stamping,setStamping]=React.useState(false);
  const [collapsing,setCollapsing]=React.useState(false);
  const controlled=status!=null;
  const phase=controlled?status:internal;
  const timers=React.useRef([]);
  React.useEffect(()=>()=>timers.current.forEach(clearTimeout),[]);

  const approve=()=>{
    if(stamping||phase!=='pending')return;
    setStamping(true); onApprove&&onApprove();
    timers.current.push(setTimeout(()=>setCollapsing(true),400));
    timers.current.push(setTimeout(()=>{ setStamping(false); setCollapsing(false); if(!controlled)setInternal('approved'); },600));
  };
  const deny=()=>{ onDeny&&onDeny(); if(!controlled)setInternal('denied'); };
  const undo=()=>{ onUndo&&onUndo(); if(!controlled)setInternal('pending'); };

  const kit=`${resolveBase(base)}/decorations/${danger?'dusty-lotus-mauve':'sage-green'}`;
  const sprig=`${kit}/05-botanical-sprig.png`;
  const sealSrc=`${kit}/seal.png`;
  const cn=confirmNote||(danger?'确认后不可恢复':'需要你确认');
  const seal=sealLabel||(danger?'确认删除':'盖章确认');

  if(phase==='approved'){
    return React.createElement('div',{className:['yy-ap',danger&&'yy-ap--danger',className].filter(Boolean).join(' '),...rest},
      React.createElement('div',{className:'yy-ap__receipt'},
        React.createElement('span',{className:'yy-ap__perf','aria-hidden':true}),
        React.createElement('img',{className:'yy-ap__rleaf',src:sprig,alt:'',draggable:false}),
        React.createElement('div',{className:'yy-ap__rbody'},
          React.createElement('div',{className:'yy-ap__rtitle'},title),
          React.createElement('div',{className:'yy-ap__rnote'},React.createElement(Icon,{name:'check',size:12}),approvedNote)
        ),
        React.createElement('span',{className:'yy-ap__rseal','aria-hidden':true},
          React.createElement('img',{src:sealSrc,alt:'',draggable:false})),
        showUndo?React.createElement('button',{className:'yy-ap__undo',style:{position:'absolute',right:8,bottom:2},onClick:undo},'撤销'):null
      )
    );
  }

  const cls=['yy-ap',danger&&'yy-ap--danger',animateIn&&'yy-ap--in',stamping&&'yy-ap--stamping',collapsing&&'yy-ap--collapsing',phase==='denied'&&'yy-ap--denied',className].filter(Boolean).join(' ');
  return React.createElement('div',{className:cls,...rest},
    React.createElement('span',{className:'yy-ap__backing','aria-hidden':true}),
    React.createElement('div',{className:'yy-ap__paper'},
      React.createElement('div',{className:'yy-ap__head'},
        React.createElement('div',{className:'yy-ap__deco','aria-hidden':true},
          React.createElement('img',{className:'yy-ap__sprig',src:sprig,alt:'',draggable:false}),
          React.createElement(Icon,{name:'sparkle',className:'yy-ap__spark',size:15,fill:true,color:'var(--gold-500)'})),
        React.createElement('h3',{className:'yy-ap__title'},title)),
      detail!=null?React.createElement('p',{className:'yy-ap__sub'},detail):null,
      meta&&meta.length?React.createElement('ul',{className:'yy-ap__meta'},
        meta.map((m,i)=>React.createElement('li',{key:i},
          React.createElement(Icon,{name:m.icon||'circle',size:18,className:'yy-ap__mi'}),
          React.createElement('span',null,m.text)))):null,
      React.createElement('hr',{className:'yy-ap__divider'}),
      phase==='denied'
        ?React.createElement('div',{className:'yy-ap__deniednote'},React.createElement(Icon,{name:'x',size:15}),danger?'这次先留着':'这次先不写啦',
           React.createElement('button',{className:'yy-ap__undo',style:{marginTop:0},onClick:undo},'重新拆封'))
        :[
          React.createElement('div',{key:'c',className:'yy-ap__confirm'},
            React.createElement(Icon,{name:'heart',size:17,fill:true,color:danger?'var(--rose-500)':'var(--rose-400)'}),
            React.createElement('span',null,cn)),
          React.createElement('button',{key:'d',className:'yy-ap__deny',onClick:deny},denyLabel)
        ],
      React.createElement('div',{className:'yy-ap__sealwrap'},
        React.createElement('span',{className:'yy-ap__imprint','aria-hidden':true},
          React.createElement('img',{src:sealSrc,alt:'',draggable:false})),
        React.createElement('button',{className:'yy-ap__seal',type:'button','aria-label':seal,disabled:phase==='denied',onClick:approve},
          React.createElement('img',{src:sealSrc,alt:'',draggable:false})),
        React.createElement('span',{className:'yy-ap__cap'},seal)
      )
    )
  );
}
