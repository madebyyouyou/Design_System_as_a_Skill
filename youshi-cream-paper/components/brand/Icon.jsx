import React from 'react';

/* Hand-drawn-feeling line icons. Path data is lifted from Lucide (ISC)
   as a documented stand-in for 祐识's bespoke hand-drawn glyph set —
   an even, rounded ~2.2px stroke and friendly geometry — bumped a touch
   bolder + rounder for the cream-paper look.
   `fill` renders the solid motif variants (heart, star). */

const STROKE = {
  'square-pen':'M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7|M18.4 2.6a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4z',
  calendar:'M8 2v4|M16 2v4|R3 4 18 18 2|M3 10h18',
  package:'M7.5 4.27 16.5 9.4|M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z|M3.3 7 12 12l8.7-5|M12 22V12',
  grid:'R3 3 7 7 1|R14 3 7 7 1|R14 14 7 7 1|R3 14 7 7 1',
  'git-pull-request':'C6 6 3|C18 18 3|M13 6h3a2 2 0 0 1 2 2v7|M6 9v12',
  message:'M7.9 20A9 9 0 1 0 4 16.1L2 22Z',
  folder:'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z',
  'folder-open':'m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2',
  file:'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z|M14 2v5h5|M16 13H8|M16 17H8|M10 9H8',
  search:'C11 11 8|m21 21-4.3-4.3',
  plus:'M5 12h14|M12 5v14',
  minus:'M5 12h14',
  check:'M20 6 9 17l-5-5',
  x:'M18 6 6 18|M6 6l12 12',
  mic:'M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z|M19 10v2a7 7 0 0 1-14 0v-2|M12 19v3',
  'arrow-up':'m5 12 7-7 7 7|M12 19V5',
  'arrow-left':'m12 19-7-7 7-7|M19 12H5',
  'arrow-right':'M5 12h14|m12 5 7 7-7 7',
  'chevron-right':'m9 18 6-6-6-6',
  'chevron-down':'m6 9 6 6 6-6',
  settings:'M12.2 2h-.4a2 2 0 0 0-2 2v.2a2 2 0 0 1-1 1.7l-.4.3a2 2 0 0 1-2 0l-.2-.1a2 2 0 0 0-2.7.7l-.2.4a2 2 0 0 0 .7 2.7l.2.1a2 2 0 0 1 1 1.7v.5a2 2 0 0 1-1 1.7l-.2.1a2 2 0 0 0-.7 2.7l.2.4a2 2 0 0 0 2.7.7l.2-.1a2 2 0 0 1 2 0l.4.3a2 2 0 0 1 1 1.7V20a2 2 0 0 0 2 2h.4a2 2 0 0 0 2-2v-.2a2 2 0 0 1 1-1.7l.4-.3a2 2 0 0 1 2 0l.2.1a2 2 0 0 0 2.7-.7l.2-.4a2 2 0 0 0-.7-2.7l-.2-.1a2 2 0 0 1-1-1.7v-.5a2 2 0 0 1 1-1.7l.2-.1a2 2 0 0 0 .7-2.7l-.2-.4a2 2 0 0 0-2.7-.7l-.2.1a2 2 0 0 1-2 0l-.4-.3a2 2 0 0 1-1-1.7V4a2 2 0 0 0-2-2z|C12 12 3',
  code:'m16 18 6-6-6-6|M8 6l-6 6 6 6',
  wrench:'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
  'clipboard-check':'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2|R8 2 8 4 1|m9 14 2 2 4-4',
  lock:'R3 11 18 11 2|M7 11V7a5 5 0 0 1 10 0v4',
  globe:'C12 12 10|M2 12h20|M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20',
  'panel-left':'R3 3 18 18 2|M9 3v18',
  more:'C12 12 1|C19 12 1|C5 12 1',
  camera:'M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z|C12 13 3',
  circle:'C12 12 9',
  image:'R3 3 18 18 2|C9 9 2|m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21',
  pencil:'M21.2 6.8a2.1 2.1 0 0 0-3-3L4 18l-1 4 4-1z|m15 5 4 4',
  list:'M8 6h13|M8 12h13|M8 18h13|M3 6h.01|M3 12h.01|M3 18h.01',
  shirt:'M20.4 3.5 16 2a4 4 0 0 1-8 0L3.6 3.5a2 2 0 0 0-1.3 2.2l.6 3.5a1 1 0 0 0 1 .8H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.2a1 1 0 0 0 1-.8l.6-3.5a2 2 0 0 0-1.3-2.2z',
  'user':'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2|C12 7 4',
  'help':'C12 12 10|M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3|M12 17h.01',
  'plug':'M12 22v-5|M9 8V2|M15 8V2|M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z',
  refresh:'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8|M21 3v5h-5|M3 21v-5h5|M3 16l2.26 2.26A9.75 9.75 0 0 0 12 21a9 9 0 0 0 9-9',
  clock:'C12 12 9|M12 7v5l3.5 2',
  'check-circle':'M22 11.1V12a10 10 0 1 1-5.9-9.1|m9 11 3 3L22 4',
  'external-link':'M15 3h6v6|M10 14 21 3|M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
  bell:'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9|M10.3 21a1.94 1.94 0 0 0 3.4 0',
  trash:'M3 6h18|M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6|M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2|M10 11v6|M14 11v6',
  send:'M22 2 11 13|M22 2 15 22l-4-9-9-4z',
  eye:'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z|C12 12 3',
  'book-open':'M12 7v14|M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z',
};

const SOLID = {
  heart:'M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z',
  star:'M12 2 15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z',
  sparkle:'M12 2l2.2 6.6a2 2 0 0 0 1.2 1.2L22 12l-6.6 2.2a2 2 0 0 0-1.2 1.2L12 22l-2.2-6.6a2 2 0 0 0-1.2-1.2L2 12l6.6-2.2a2 2 0 0 0 1.2-1.2z',
  dot:'C12 12 4',
};

function seg(d){
  // "Rx y w h r" -> rect ; "Ccx cy r" -> circle ; else raw path.
  // (All real path segments here start with M/m, so R/C are unambiguous shape shorthands.)
  const t=d[0];
  if(t==='R'){const[x,y,w,h,r]=d.slice(1).trim().split(/\s+/);return React.createElement('rect',{key:d,x,y,width:w,height:h,rx:r||0});}
  if(t==='C'){const[cx,cy,r]=d.slice(1).trim().split(/\s+/);return React.createElement('circle',{key:d,cx,cy,r});}
  return React.createElement('path',{key:d,d});
}

export function Icon({name,size=20,strokeWidth=2.2,color='currentColor',fill=false,title,className='',style={},...rest}){
  const solid=SOLID[name];
  const raw=solid||STROKE[name];
  if(!raw){return React.createElement('svg',{width:size,height:size,viewBox:'0 0 24 24','aria-hidden':true});}
  const parts=raw.split('|').map(seg);
  const isSolid=solid&&fill;
  return React.createElement('svg',{
    width:size,height:size,viewBox:'0 0 24 24',
    fill:isSolid?color:'none',
    stroke:isSolid?'none':color,
    strokeWidth,strokeLinecap:'round',strokeLinejoin:'round',
    role:title?'img':undefined,'aria-hidden':title?undefined:true,
    className,style,...rest
  },title?[React.createElement('title',{key:'t'},title),...parts]:parts);
}
