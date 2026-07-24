import React from 'react';

/* Brand marks. Renders the supplied logo/seal PNGs (transparent),
   or a seal + wordmark lockup. Pass `base` = path to the assets folder
   relative to the page (cards use "../../assets"; a root page uses
   "assets"). Falls back to window.__YOUYOU_ASSET_BASE__ or "assets". */

const FILES={
  script:'logo-youyou-script.png',
  cn:'logo-youyou-cn.png',
  seal:'seal-you.png',
};

function resolveBase(base){
  if(base)return base.replace(/\/$/,'');
  if(typeof window!=='undefined'&&window.__YOUYOU_ASSET_BASE__)return window.__YOUYOU_ASSET_BASE__.replace(/\/$/,'');
  return 'assets';
}

export function Logo({variant='seal',height=48,base,alt,className='',style={},...rest}){
  const root=resolveBase(base);

  if(variant==='lockup'){
    return React.createElement('span',{
      className,
      style:{display:'inline-flex',alignItems:'center',gap:14,...style},...rest
    },[
      React.createElement('img',{key:'s',src:`${root}/${FILES.seal}`,alt:'',height,width:height,style:{display:'block'}}),
      React.createElement('span',{key:'w',style:{display:'flex',flexDirection:'column',lineHeight:1.05,whiteSpace:'nowrap'}},[
        React.createElement('span',{key:'cn',style:{fontFamily:'var(--font-display)',fontWeight:800,fontSize:height*0.42,color:'var(--ink-800)',letterSpacing:'.01em'}},'祐识'),
        React.createElement('span',{key:'en',style:{fontFamily:'var(--font-hand)',fontWeight:600,fontSize:height*0.34,color:'var(--sage-600)',marginTop:height*0.02}},'奶油宣纸'),
      ]),
    ]);
  }

  const file=FILES[variant]||FILES.seal;
  return React.createElement('img',{
    src:`${root}/${file}`,
    alt:alt!=null?alt:'祐识 · 奶油宣纸',
    height,
    className,
    style:{display:'block',width:'auto',...style},
    ...rest
  });
}
