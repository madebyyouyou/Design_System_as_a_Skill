import React from 'react';

/* Scrapbook motifs — the exact hand-drawn SVGs supplied with the brand
   (stars, sparkle cluster, blush heart, paperclip), inlined so they can
   be recolored. Faithful multi-color by default; `mono` collapses to one
   tone. These are the collage confetti scattered across the paper. */

const MOTIF = {
  stars:{box:512,shapes:[
    {t:'path',d:'M137 91L151 130L192 143L151 157L137 198L123 157L82 143L123 130Z',s:'#C6B275',w:8},
    {t:'path',d:'M336 165L347 194L377 205L347 216L336 246L325 216L295 205L325 194Z',s:'#8A9A6B',w:8},
    {t:'path',d:'M236 302L251 341L291 356L251 370L236 410L221 370L181 356L221 341Z',s:'#D6AAA3',w:8},
    {t:'circle',cx:399,cy:340,r:8,f:'#C6B275'},
    {t:'circle',cx:104,cy:320,r:7,f:'#8A9A6B'},
  ]},
  sparkles:{box:512,shapes:[
    {t:'path',d:'M255 83L271 151L339 167L271 183L255 251L239 183L171 167L239 151Z',s:'#C6B275',w:9},
    {t:'path',d:'M129 252L139 286L173 296L139 306L129 340L119 306L85 296L119 286Z',s:'#8A9A6B',w:8},
    {t:'path',d:'M383 276L393 310L427 320L393 330L383 364L373 330L339 320L373 310Z',s:'#D6AAA3',w:8},
  ]},
  sparkle:{box:512,shapes:[
    {t:'path',d:'M256 96L274 238L416 256L274 274L256 416L238 274L96 256L238 238Z',s:'#C6B275',w:10},
  ]},
  heart:{box:512,shapes:[
    {t:'path',d:'M256 418C215 375 112 299 112 203C112 141 158 103 208 103C235 103 255 116 272 139C289 116 309 103 336 103C386 103 432 141 432 203C432 299 329 375 288 418L272 434L256 418Z',s:'#D6AAA3',w:10},
    {t:'path',d:'M164 219C164 176 193 155 224 155',s:'#C6B275',w:7},
  ]},
  paperclip:{box:512,shapes:[
    {t:'path',d:'M342 146L204 300C169 339 109 291 143 253L287 92C336 37 421 107 372 162L221 330C179 377 112 317 155 270L294 115',s:'#3E4637',w:10},
  ]},
};

export function Decoration({name='sparkle',size=44,mono=false,color='var(--sage-500)',opacity=1,rotate=0,className='',style={},...rest}){
  const m=MOTIF[name]||MOTIF.sparkle;
  const shapes=m.shapes.map((sh,i)=>{
    const stroke=sh.s?(mono?color:sh.s):'none';
    const fill=sh.f?(mono?color:sh.f):'none';
    const common={key:i,stroke,fill,strokeWidth:sh.w,strokeLinecap:'round',strokeLinejoin:'round'};
    return sh.t==='circle'
      ?React.createElement('circle',{...common,cx:sh.cx,cy:sh.cy,r:sh.r})
      :React.createElement('path',{...common,d:sh.d});
  });
  return React.createElement('svg',{
    width:size,height:size,viewBox:`0 0 ${m.box} ${m.box}`,fill:'none',
    'aria-hidden':true,
    className,
    style:{opacity,transform:rotate?`rotate(${rotate}deg)`:undefined,...style},
    ...rest
  },shapes);
}
