/* @ds-bundle: {"format":4,"namespace":"DesignSystem_4278dc","components":[{"name":"ApprovalCard","sourcePath":"components/agent/ApprovalCard.jsx"},{"name":"TraceChain","sourcePath":"components/agent/TraceLine.jsx"},{"name":"TraceLine","sourcePath":"components/agent/TraceLine.jsx"},{"name":"Decoration","sourcePath":"components/brand/Decoration.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ActionCard","sourcePath":"components/display/ActionCard.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"StatusDot","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Chip","sourcePath":"components/display/Chip.jsx"},{"name":"Divider","sourcePath":"components/display/Divider.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"}],"sourceHashes":{"components/agent/ApprovalCard.jsx":"96c191b43184","components/agent/TraceLine.jsx":"b2a05545b6e4","components/brand/Decoration.jsx":"ed946d8b7b0e","components/brand/Icon.jsx":"680abb26f371","components/brand/Logo.jsx":"19a10bed5172","components/display/ActionCard.jsx":"b955034eb3f9","components/display/Avatar.jsx":"9a07a9db8a1d","components/display/Badge.jsx":"74c1e03aa822","components/display/Card.jsx":"0ee7e2ce52df","components/display/Chip.jsx":"8b597e7fab72","components/display/Divider.jsx":"727cca19bda3","components/forms/Button.jsx":"2e2102569828","components/forms/Checkbox.jsx":"b0bdb0d3ea1c","components/forms/IconButton.jsx":"f3a245094459","components/forms/Input.jsx":"9d53ce08cbb9","components/navigation/NavItem.jsx":"ed60e5070cca","explorations/tweaks-panel.jsx":"4f181eb354cd","ui_kits/youyou-codex/App.jsx":"eebabaa72b5c","ui_kits/youyou-codex/Composer.jsx":"44766c640cdd","ui_kits/youyou-codex/HomeScreen.jsx":"f6d0b0560104","ui_kits/youyou-codex/Sidebar.jsx":"ec03e2828424","ui_kits/youyou-codex/TaskScreen.jsx":"d4e751e5271c","ui_kits/youyou-codex/TopBar.jsx":"a4afc59299b5","ui_kits/youyou-codex/data.js":"ca36cfc64d67"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_4278dc = window.DesignSystem_4278dc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Decoration.jsx
try { (() => {
/* Scrapbook motifs — the exact hand-drawn SVGs supplied with the brand
   (stars, sparkle cluster, blush heart, paperclip), inlined so they can
   be recolored. Faithful multi-color by default; `mono` collapses to one
   tone. These are the collage confetti scattered across the paper. */

const MOTIF = {
  stars: {
    box: 512,
    shapes: [{
      t: 'path',
      d: 'M137 91L151 130L192 143L151 157L137 198L123 157L82 143L123 130Z',
      s: '#C6B275',
      w: 8
    }, {
      t: 'path',
      d: 'M336 165L347 194L377 205L347 216L336 246L325 216L295 205L325 194Z',
      s: '#8A9A6B',
      w: 8
    }, {
      t: 'path',
      d: 'M236 302L251 341L291 356L251 370L236 410L221 370L181 356L221 341Z',
      s: '#D6AAA3',
      w: 8
    }, {
      t: 'circle',
      cx: 399,
      cy: 340,
      r: 8,
      f: '#C6B275'
    }, {
      t: 'circle',
      cx: 104,
      cy: 320,
      r: 7,
      f: '#8A9A6B'
    }]
  },
  sparkles: {
    box: 512,
    shapes: [{
      t: 'path',
      d: 'M255 83L271 151L339 167L271 183L255 251L239 183L171 167L239 151Z',
      s: '#C6B275',
      w: 9
    }, {
      t: 'path',
      d: 'M129 252L139 286L173 296L139 306L129 340L119 306L85 296L119 286Z',
      s: '#8A9A6B',
      w: 8
    }, {
      t: 'path',
      d: 'M383 276L393 310L427 320L393 330L383 364L373 330L339 320L373 310Z',
      s: '#D6AAA3',
      w: 8
    }]
  },
  sparkle: {
    box: 512,
    shapes: [{
      t: 'path',
      d: 'M256 96L274 238L416 256L274 274L256 416L238 274L96 256L238 238Z',
      s: '#C6B275',
      w: 10
    }]
  },
  heart: {
    box: 512,
    shapes: [{
      t: 'path',
      d: 'M256 418C215 375 112 299 112 203C112 141 158 103 208 103C235 103 255 116 272 139C289 116 309 103 336 103C386 103 432 141 432 203C432 299 329 375 288 418L272 434L256 418Z',
      s: '#D6AAA3',
      w: 10
    }, {
      t: 'path',
      d: 'M164 219C164 176 193 155 224 155',
      s: '#C6B275',
      w: 7
    }]
  },
  paperclip: {
    box: 512,
    shapes: [{
      t: 'path',
      d: 'M342 146L204 300C169 339 109 291 143 253L287 92C336 37 421 107 372 162L221 330C179 377 112 317 155 270L294 115',
      s: '#3E4637',
      w: 10
    }]
  }
};
function Decoration({
  name = 'sparkle',
  size = 44,
  mono = false,
  color = 'var(--sage-500)',
  opacity = 1,
  rotate = 0,
  className = '',
  style = {},
  ...rest
}) {
  const m = MOTIF[name] || MOTIF.sparkle;
  const shapes = m.shapes.map((sh, i) => {
    const stroke = sh.s ? mono ? color : sh.s : 'none';
    const fill = sh.f ? mono ? color : sh.f : 'none';
    const common = {
      key: i,
      stroke,
      fill,
      strokeWidth: sh.w,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    };
    return sh.t === 'circle' ? React.createElement('circle', {
      ...common,
      cx: sh.cx,
      cy: sh.cy,
      r: sh.r
    }) : React.createElement('path', {
      ...common,
      d: sh.d
    });
  });
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: `0 0 ${m.box} ${m.box}`,
    fill: 'none',
    'aria-hidden': true,
    className,
    style: {
      opacity,
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      ...style
    },
    ...rest
  }, shapes);
}
Object.assign(__ds_scope, { Decoration });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Decoration.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
/* Hand-drawn-feeling line icons. Path data is lifted from Lucide (ISC)
   as a documented stand-in for 祐识's bespoke hand-drawn glyph set —
   an even, rounded ~2.2px stroke and friendly geometry — bumped a touch
   bolder + rounder for the cream-paper look.
   `fill` renders the solid motif variants (heart, star). */

const STROKE = {
  'square-pen': 'M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7|M18.4 2.6a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4z',
  calendar: 'M8 2v4|M16 2v4|R3 4 18 18 2|M3 10h18',
  package: 'M7.5 4.27 16.5 9.4|M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z|M3.3 7 12 12l8.7-5|M12 22V12',
  grid: 'R3 3 7 7 1|R14 3 7 7 1|R14 14 7 7 1|R3 14 7 7 1',
  'git-pull-request': 'C6 6 3|C18 18 3|M13 6h3a2 2 0 0 1 2 2v7|M6 9v12',
  message: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z',
  folder: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z',
  'folder-open': 'm6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2',
  file: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z|M14 2v5h5|M16 13H8|M16 17H8|M10 9H8',
  search: 'C11 11 8|m21 21-4.3-4.3',
  plus: 'M5 12h14|M12 5v14',
  minus: 'M5 12h14',
  check: 'M20 6 9 17l-5-5',
  x: 'M18 6 6 18|M6 6l12 12',
  mic: 'M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z|M19 10v2a7 7 0 0 1-14 0v-2|M12 19v3',
  'arrow-up': 'm5 12 7-7 7 7|M12 19V5',
  'arrow-left': 'm12 19-7-7 7-7|M19 12H5',
  'arrow-right': 'M5 12h14|m12 5 7 7-7 7',
  'chevron-right': 'm9 18 6-6-6-6',
  'chevron-down': 'm6 9 6 6 6-6',
  settings: 'M12.2 2h-.4a2 2 0 0 0-2 2v.2a2 2 0 0 1-1 1.7l-.4.3a2 2 0 0 1-2 0l-.2-.1a2 2 0 0 0-2.7.7l-.2.4a2 2 0 0 0 .7 2.7l.2.1a2 2 0 0 1 1 1.7v.5a2 2 0 0 1-1 1.7l-.2.1a2 2 0 0 0-.7 2.7l.2.4a2 2 0 0 0 2.7.7l.2-.1a2 2 0 0 1 2 0l.4.3a2 2 0 0 1 1 1.7V20a2 2 0 0 0 2 2h.4a2 2 0 0 0 2-2v-.2a2 2 0 0 1 1-1.7l.4-.3a2 2 0 0 1 2 0l.2.1a2 2 0 0 0 2.7-.7l.2-.4a2 2 0 0 0-.7-2.7l-.2-.1a2 2 0 0 1-1-1.7v-.5a2 2 0 0 1 1-1.7l.2-.1a2 2 0 0 0 .7-2.7l-.2-.4a2 2 0 0 0-2.7-.7l-.2.1a2 2 0 0 1-2 0l-.4-.3a2 2 0 0 1-1-1.7V4a2 2 0 0 0-2-2z|C12 12 3',
  code: 'm16 18 6-6-6-6|M8 6l-6 6 6 6',
  wrench: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
  'clipboard-check': 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2|R8 2 8 4 1|m9 14 2 2 4-4',
  lock: 'R3 11 18 11 2|M7 11V7a5 5 0 0 1 10 0v4',
  globe: 'C12 12 10|M2 12h20|M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20',
  'panel-left': 'R3 3 18 18 2|M9 3v18',
  more: 'C12 12 1|C19 12 1|C5 12 1',
  camera: 'M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z|C12 13 3',
  circle: 'C12 12 9',
  image: 'R3 3 18 18 2|C9 9 2|m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21',
  pencil: 'M21.2 6.8a2.1 2.1 0 0 0-3-3L4 18l-1 4 4-1z|m15 5 4 4',
  list: 'M8 6h13|M8 12h13|M8 18h13|M3 6h.01|M3 12h.01|M3 18h.01',
  shirt: 'M20.4 3.5 16 2a4 4 0 0 1-8 0L3.6 3.5a2 2 0 0 0-1.3 2.2l.6 3.5a1 1 0 0 0 1 .8H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.2a1 1 0 0 0 1-.8l.6-3.5a2 2 0 0 0-1.3-2.2z',
  'user': 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2|C12 7 4',
  'help': 'C12 12 10|M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3|M12 17h.01',
  'plug': 'M12 22v-5|M9 8V2|M15 8V2|M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z',
  refresh: 'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8|M21 3v5h-5|M3 21v-5h5|M3 16l2.26 2.26A9.75 9.75 0 0 0 12 21a9 9 0 0 0 9-9',
  clock: 'C12 12 9|M12 7v5l3.5 2',
  'check-circle': 'M22 11.1V12a10 10 0 1 1-5.9-9.1|m9 11 3 3L22 4',
  'external-link': 'M15 3h6v6|M10 14 21 3|M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
  bell: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9|M10.3 21a1.94 1.94 0 0 0 3.4 0',
  trash: 'M3 6h18|M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6|M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2|M10 11v6|M14 11v6',
  send: 'M22 2 11 13|M22 2 15 22l-4-9-9-4z',
  eye: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z|C12 12 3',
  'book-open': 'M12 7v14|M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z'
};
const SOLID = {
  heart: 'M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z',
  star: 'M12 2 15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z',
  sparkle: 'M12 2l2.2 6.6a2 2 0 0 0 1.2 1.2L22 12l-6.6 2.2a2 2 0 0 0-1.2 1.2L12 22l-2.2-6.6a2 2 0 0 0-1.2-1.2L2 12l6.6-2.2a2 2 0 0 0 1.2-1.2z',
  dot: 'C12 12 4'
};
function seg(d) {
  // "Rx y w h r" -> rect ; "Ccx cy r" -> circle ; else raw path.
  // (All real path segments here start with M/m, so R/C are unambiguous shape shorthands.)
  const t = d[0];
  if (t === 'R') {
    const [x, y, w, h, r] = d.slice(1).trim().split(/\s+/);
    return React.createElement('rect', {
      key: d,
      x,
      y,
      width: w,
      height: h,
      rx: r || 0
    });
  }
  if (t === 'C') {
    const [cx, cy, r] = d.slice(1).trim().split(/\s+/);
    return React.createElement('circle', {
      key: d,
      cx,
      cy,
      r
    });
  }
  return React.createElement('path', {
    key: d,
    d
  });
}
function Icon({
  name,
  size = 20,
  strokeWidth = 2.2,
  color = 'currentColor',
  fill = false,
  title,
  className = '',
  style = {},
  ...rest
}) {
  const solid = SOLID[name];
  const raw = solid || STROKE[name];
  if (!raw) {
    return React.createElement('svg', {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      'aria-hidden': true
    });
  }
  const parts = raw.split('|').map(seg);
  const isSolid = solid && fill;
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: isSolid ? color : 'none',
    stroke: isSolid ? 'none' : color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    role: title ? 'img' : undefined,
    'aria-hidden': title ? undefined : true,
    className,
    style,
    ...rest
  }, title ? [React.createElement('title', {
    key: 't'
  }, title), ...parts] : parts);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/agent/ApprovalCard.jsx
try { (() => {
/* ApprovalCard — the ONE place the trace goes loud. A write action or a
   permission request becomes a paper "envelope" gently assembled on the
   journal page (NOT a modal), that you stamp with the 祐 seal to approve.
   Read-only steps stay lightweight TraceLines.

   Entrance is a four-beat paper placement: backing sheet → main paper →
   decorative overlays → interactive 祐 seal (transforms + opacity only).
   Approving lifts the seal, presses it down leaving a muted ink imprint,
   then collapses the card into a compact completed receipt.
   prefers-reduced-motion replaces all movement with a short opacity fade. */

function resolveBase(base) {
  if (base) return base.replace(/\/$/, '');
  if (typeof window !== 'undefined' && window.__YOUYOU_ASSET_BASE__) return window.__YOUYOU_ASSET_BASE__.replace(/\/$/, '');
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
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-yy', 'approval');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function ApprovalCard({
  title,
  detail,
  meta,
  confirmNote,
  tone = 'default',
  status,
  defaultStatus = 'pending',
  onApprove,
  onDeny,
  onUndo,
  sealLabel,
  denyLabel = '先不了',
  approvedNote = '已记入',
  showUndo = false,
  animateIn = true,
  base,
  className = '',
  ...rest
}) {
  ensureCSS();
  const danger = tone === 'danger';
  const [internal, setInternal] = React.useState(defaultStatus);
  const [stamping, setStamping] = React.useState(false);
  const [collapsing, setCollapsing] = React.useState(false);
  const controlled = status != null;
  const phase = controlled ? status : internal;
  const timers = React.useRef([]);
  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const approve = () => {
    if (stamping || phase !== 'pending') return;
    setStamping(true);
    onApprove && onApprove();
    timers.current.push(setTimeout(() => setCollapsing(true), 400));
    timers.current.push(setTimeout(() => {
      setStamping(false);
      setCollapsing(false);
      if (!controlled) setInternal('approved');
    }, 600));
  };
  const deny = () => {
    onDeny && onDeny();
    if (!controlled) setInternal('denied');
  };
  const undo = () => {
    onUndo && onUndo();
    if (!controlled) setInternal('pending');
  };
  const kit = `${resolveBase(base)}/decorations/${danger ? 'dusty-lotus-mauve' : 'sage-green'}`;
  const sprig = `${kit}/05-botanical-sprig.png`;
  const sealSrc = `${kit}/seal.png`;
  const cn = confirmNote || (danger ? '确认后不可恢复' : '需要你确认');
  const seal = sealLabel || (danger ? '确认删除' : '盖章确认');
  if (phase === 'approved') {
    return React.createElement('div', {
      className: ['yy-ap', danger && 'yy-ap--danger', className].filter(Boolean).join(' '),
      ...rest
    }, React.createElement('div', {
      className: 'yy-ap__receipt'
    }, React.createElement('span', {
      className: 'yy-ap__perf',
      'aria-hidden': true
    }), React.createElement('img', {
      className: 'yy-ap__rleaf',
      src: sprig,
      alt: '',
      draggable: false
    }), React.createElement('div', {
      className: 'yy-ap__rbody'
    }, React.createElement('div', {
      className: 'yy-ap__rtitle'
    }, title), React.createElement('div', {
      className: 'yy-ap__rnote'
    }, React.createElement(__ds_scope.Icon, {
      name: 'check',
      size: 12
    }), approvedNote)), React.createElement('span', {
      className: 'yy-ap__rseal',
      'aria-hidden': true
    }, React.createElement('img', {
      src: sealSrc,
      alt: '',
      draggable: false
    })), showUndo ? React.createElement('button', {
      className: 'yy-ap__undo',
      style: {
        position: 'absolute',
        right: 8,
        bottom: 2
      },
      onClick: undo
    }, '撤销') : null));
  }
  const cls = ['yy-ap', danger && 'yy-ap--danger', animateIn && 'yy-ap--in', stamping && 'yy-ap--stamping', collapsing && 'yy-ap--collapsing', phase === 'denied' && 'yy-ap--denied', className].filter(Boolean).join(' ');
  return React.createElement('div', {
    className: cls,
    ...rest
  }, React.createElement('span', {
    className: 'yy-ap__backing',
    'aria-hidden': true
  }), React.createElement('div', {
    className: 'yy-ap__paper'
  }, React.createElement('div', {
    className: 'yy-ap__head'
  }, React.createElement('div', {
    className: 'yy-ap__deco',
    'aria-hidden': true
  }, React.createElement('img', {
    className: 'yy-ap__sprig',
    src: sprig,
    alt: '',
    draggable: false
  }), React.createElement(__ds_scope.Icon, {
    name: 'sparkle',
    className: 'yy-ap__spark',
    size: 15,
    fill: true,
    color: 'var(--gold-500)'
  })), React.createElement('h3', {
    className: 'yy-ap__title'
  }, title)), detail != null ? React.createElement('p', {
    className: 'yy-ap__sub'
  }, detail) : null, meta && meta.length ? React.createElement('ul', {
    className: 'yy-ap__meta'
  }, meta.map((m, i) => React.createElement('li', {
    key: i
  }, React.createElement(__ds_scope.Icon, {
    name: m.icon || 'circle',
    size: 18,
    className: 'yy-ap__mi'
  }), React.createElement('span', null, m.text)))) : null, React.createElement('hr', {
    className: 'yy-ap__divider'
  }), phase === 'denied' ? React.createElement('div', {
    className: 'yy-ap__deniednote'
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 15
  }), danger ? '这次先留着' : '这次先不写啦', React.createElement('button', {
    className: 'yy-ap__undo',
    style: {
      marginTop: 0
    },
    onClick: undo
  }, '重新拆封')) : [React.createElement('div', {
    key: 'c',
    className: 'yy-ap__confirm'
  }, React.createElement(__ds_scope.Icon, {
    name: 'heart',
    size: 17,
    fill: true,
    color: danger ? 'var(--rose-500)' : 'var(--rose-400)'
  }), React.createElement('span', null, cn)), React.createElement('button', {
    key: 'd',
    className: 'yy-ap__deny',
    onClick: deny
  }, denyLabel)], React.createElement('div', {
    className: 'yy-ap__sealwrap'
  }, React.createElement('span', {
    className: 'yy-ap__imprint',
    'aria-hidden': true
  }, React.createElement('img', {
    src: sealSrc,
    alt: '',
    draggable: false
  })), React.createElement('button', {
    className: 'yy-ap__seal',
    type: 'button',
    'aria-label': seal,
    disabled: phase === 'denied',
    onClick: approve
  }, React.createElement('img', {
    src: sealSrc,
    alt: '',
    draggable: false
  })), React.createElement('span', {
    className: 'yy-ap__cap'
  }, seal))));
}
Object.assign(__ds_scope, { ApprovalCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/agent/ApprovalCard.jsx", error: String((e && e.message) || e) }); }

// components/agent/TraceLine.jsx
try { (() => {
/* TraceLine + TraceChain — the inline execution trace.
   Wrap a run of TraceLines in <TraceChain> to draw the continuous vertical
   connector (a "chain", like a Thinking / tool-activity feed): each step's
   icon sits on the spine, read-only and lightweight. Progressive disclosure —
   a step can expand to reveal detail (plain text, or a rich results card).
   Consequential writes / permissions escalate to ApprovalCard instead.
   Running steps animate with a TEXT SHIMMER (skeleton sweep), not jumping dots.
   The rail icon is where a platform-native animated glyph (e.g. SwiftUI) can
   mount on a running step; omit `icon` to leave the reserved placeholder. */

let injected = false;
const CSS = `
.yy-trace-chain{display:flex;flex-direction:column;--yy-trace-bg:var(--surface-canvas);--yy-trace-line:var(--cream-600)}
.yy-trace{display:flex;gap:11px;position:relative;font-family:var(--font-sans)}
.yy-trace__rail{position:relative;width:24px;flex:none;align-self:stretch}
.yy-trace__spine{display:none;position:absolute;left:50%;transform:translateX(-50%);width:1.5px;top:0;bottom:0;background:var(--yy-trace-line);border-radius:2px}
.yy-trace-chain .yy-trace__spine{display:block}
.yy-trace-chain>.yy-trace:first-child .yy-trace__spine{top:16px}
.yy-trace-chain>.yy-trace:last-child .yy-trace__spine{bottom:calc(100% - 16px)}
.yy-trace-chain>.yy-trace:only-child .yy-trace__spine{display:none}
.yy-trace__glyph{position:absolute;top:5px;left:50%;transform:translateX(-50%);z-index:1;width:22px;height:22px;border-radius:var(--radius-circle);display:grid;place-items:center;background:var(--yy-trace-bg);color:var(--text-faint)}
.yy-trace__slot{width:15px;height:15px;border-radius:var(--radius-circle);border:1.5px dashed var(--sage-300);opacity:.7}
.yy-trace--thinking .yy-trace__glyph{color:var(--sage-500)}

.yy-trace__col{flex:1;min-width:0;padding:5px 0 9px}
.yy-trace__row{display:flex;align-items:flex-start;gap:9px;width:100%;padding:0;margin:0;border:none;background:transparent;text-align:left;font:inherit;color:inherit;cursor:default;border-radius:var(--radius-xs)}
.yy-trace--expandable .yy-trace__row{cursor:pointer}
.yy-trace__row:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.yy-trace__main{flex:1;min-width:0;display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}
.yy-trace__label{font-weight:var(--weight-medium);font-size:var(--text-sm);line-height:1.55;color:var(--text-muted)}
.yy-trace--thinking .yy-trace__label{color:var(--sage-600)}
.yy-trace__target{font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-faint);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.yy-trace__meta{flex:none;font-size:var(--text-xs);color:var(--text-faint);white-space:nowrap;align-self:center}
.yy-trace__ext{flex:none;color:var(--ink-300);align-self:center;display:inline-flex}
.yy-trace--expandable .yy-trace__row:hover .yy-trace__ext{color:var(--sage-500)}
.yy-trace__chev{flex:none;color:var(--ink-300);align-self:center;transition:transform var(--dur-base) var(--ease-standard)}
.yy-trace--open .yy-trace__chev{transform:rotate(90deg)}
.yy-trace__body{padding-top:7px;color:var(--text-muted);font-size:var(--text-sm);line-height:var(--leading-relaxed);white-space:pre-wrap;animation:yy-trace-open var(--dur-base) var(--ease-out)}
.yy-trace--tool .yy-trace__body:not(:has(*)){font-family:var(--font-mono);font-size:var(--text-xs)}
@keyframes yy-trace-open{from{opacity:0;transform:translateY(-3px)}to{opacity:1;transform:none}}

/* ── running: TEXT SHIMMER (skeleton sweep) — no jumping dots ── */
.yy-trace--running .yy-trace__label{--_sb:var(--ink-400);--_sh:var(--cream-600);background:linear-gradient(100deg,var(--_sb) 0 36%,var(--_sh) 50%,var(--_sb) 64% 100%);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;animation:yy-trace-shimmer 1.65s linear infinite}
.yy-trace--running.yy-trace--thinking .yy-trace__label{--_sb:var(--sage-600);--_sh:var(--sage-300)}
.yy-trace--running .yy-trace__target{opacity:.55}
@keyframes yy-trace-shimmer{0%{background-position:120% 0}100%{background-position:-120% 0}}
@media (prefers-reduced-motion:reduce){.yy-trace--running .yy-trace__label{animation-duration:3s}}
`;
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-yy', 'trace');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function TraceChain({
  bg,
  children,
  className = '',
  style = {},
  ...rest
}) {
  ensureCSS();
  return React.createElement('div', {
    className: ('yy-trace-chain ' + className).trim(),
    style: {
      ...(bg ? {
        '--yy-trace-bg': bg
      } : null),
      ...style
    },
    ...rest
  }, children);
}
function TraceLine({
  kind = 'tool',
  label,
  target,
  meta,
  icon,
  detail,
  extLink = false,
  status = 'done',
  defaultOpen = false,
  glyph,
  className = '',
  ...rest
}) {
  ensureCSS();
  const [open, setOpen] = React.useState(defaultOpen);
  const expandable = detail != null;
  const running = status === 'running';
  const cls = ['yy-trace', `yy-trace--${kind}`, expandable && 'yy-trace--expandable', open && 'yy-trace--open', running && 'yy-trace--running', className].filter(Boolean).join(' ');
  const railGlyph = glyph != null ? glyph : icon ? React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : React.createElement('span', {
    className: 'yy-trace__slot'
  });
  const rowInner = [React.createElement('span', {
    key: 'm',
    className: 'yy-trace__main'
  }, React.createElement('span', {
    key: 'l',
    className: 'yy-trace__label'
  }, label), target ? React.createElement('span', {
    key: 't',
    className: 'yy-trace__target'
  }, target) : null), meta ? React.createElement('span', {
    key: 'e',
    className: 'yy-trace__meta'
  }, meta) : null, extLink ? React.createElement('span', {
    key: 'x',
    className: 'yy-trace__ext',
    'aria-hidden': true
  }, React.createElement(__ds_scope.Icon, {
    name: 'external-link',
    size: 15
  })) : null, expandable ? React.createElement(__ds_scope.Icon, {
    key: 'c',
    name: 'chevron-right',
    size: 15,
    className: 'yy-trace__chev'
  }) : null];
  return React.createElement('div', {
    className: cls,
    ...rest
  }, React.createElement('span', {
    className: 'yy-trace__rail',
    'aria-hidden': true
  }, React.createElement('span', {
    className: 'yy-trace__spine'
  }), React.createElement('span', {
    className: 'yy-trace__glyph'
  }, railGlyph)), React.createElement('div', {
    className: 'yy-trace__col'
  }, expandable ? React.createElement('button', {
    type: 'button',
    className: 'yy-trace__row',
    'aria-expanded': open,
    onClick: () => setOpen(o => !o)
  }, rowInner) : React.createElement('div', {
    className: 'yy-trace__row'
  }, rowInner), open && expandable ? React.createElement('div', {
    className: 'yy-trace__body'
  }, detail) : null));
}
Object.assign(__ds_scope, { TraceChain, TraceLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/agent/TraceLine.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
/* Brand marks. Renders the supplied logo/seal PNGs (transparent),
   or a seal + wordmark lockup. Pass `base` = path to the assets folder
   relative to the page (cards use "../../assets"; a root page uses
   "assets"). Falls back to window.__YOUYOU_ASSET_BASE__ or "assets". */

const FILES = {
  script: 'logo-youyou-script.png',
  cn: 'logo-youyou-cn.png',
  seal: 'seal-you.png'
};
function resolveBase(base) {
  if (base) return base.replace(/\/$/, '');
  if (typeof window !== 'undefined' && window.__YOUYOU_ASSET_BASE__) return window.__YOUYOU_ASSET_BASE__.replace(/\/$/, '');
  return 'assets';
}
function Logo({
  variant = 'seal',
  height = 48,
  base,
  alt,
  className = '',
  style = {},
  ...rest
}) {
  const root = resolveBase(base);
  if (variant === 'lockup') {
    return React.createElement('span', {
      className,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 14,
        ...style
      },
      ...rest
    }, [React.createElement('img', {
      key: 's',
      src: `${root}/${FILES.seal}`,
      alt: '',
      height,
      width: height,
      style: {
        display: 'block'
      }
    }), React.createElement('span', {
      key: 'w',
      style: {
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 1.05,
        whiteSpace: 'nowrap'
      }
    }, [React.createElement('span', {
      key: 'cn',
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: height * 0.42,
        color: 'var(--ink-800)',
        letterSpacing: '.01em'
      }
    }, '祐识'), React.createElement('span', {
      key: 'en',
      style: {
        fontFamily: 'var(--font-hand)',
        fontWeight: 600,
        fontSize: height * 0.34,
        color: 'var(--sage-600)',
        marginTop: height * 0.02
      }
    }, '奶油宣纸')])]);
  }
  const file = FILES[variant] || FILES.seal;
  return React.createElement('img', {
    src: `${root}/${file}`,
    alt: alt != null ? alt : '祐识 · 奶油宣纸',
    height,
    className,
    style: {
      display: 'block',
      width: 'auto',
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/display/ActionCard.jsx
try { (() => {
let injected = false;
const CSS = `
.yy-action{position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;gap:14px;padding:22px 18px 16px;background:var(--surface-card-hi);border:1px solid var(--cream-500);border-radius:var(--radius-xl);box-shadow:var(--shadow-sm);cursor:pointer;color:var(--text-body);transition:var(--transition-lift),border-color var(--dur-base) var(--ease-standard)}
.yy-action:hover{transform:translateY(-3px);box-shadow:var(--shadow-hover);border-color:var(--sage-300)}
.yy-action:active{transform:translateY(-1px);box-shadow:var(--shadow-sm)}
.yy-action:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.yy-action--selected{border-color:var(--sage-400);box-shadow:0 0 0 2px var(--sage-200),var(--shadow-md)}
.yy-action__ic{width:52px;height:52px;border-radius:var(--radius-pill);display:flex;align-items:center;justify-content:center;flex:none}
.yy-action__ic--sage{background:var(--sage-100);color:var(--sage-600)}
.yy-action__ic--gold{background:var(--gold-200);color:var(--gold-600)}
.yy-action__ic--rose{background:var(--rose-200);color:var(--rose-600)}
.yy-action__title{font-family:var(--font-display);font-weight:var(--weight-bold);font-size:var(--text-md);line-height:var(--leading-snug);color:var(--ink-800)}
.yy-action__desc{font-size:var(--text-sm);color:var(--ink-500);line-height:var(--leading-normal);margin-top:2px}
.yy-action__foot{margin-top:2px;display:flex;color:var(--rose-500)}
`;
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-yy', 'action-card');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function ActionCard({
  icon,
  title,
  description,
  accent = 'sage',
  selected = false,
  footerHeart = true,
  className = '',
  ...rest
}) {
  ensureCSS();
  const cls = ['yy-action', selected && 'yy-action--selected', className].filter(Boolean).join(' ');
  return React.createElement('button', {
    type: 'button',
    className: cls,
    ...rest
  }, React.createElement('span', {
    key: 'ic',
    className: `yy-action__ic yy-action__ic--${accent}`
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24
  })), React.createElement('span', {
    key: 'tx'
  }, React.createElement('span', {
    className: 'yy-action__title',
    style: {
      display: 'block'
    }
  }, title), description ? React.createElement('span', {
    className: 'yy-action__desc',
    style: {
      display: 'block'
    }
  }, description) : null), footerHeart ? React.createElement('span', {
    key: 'ft',
    className: 'yy-action__foot'
  }, React.createElement(__ds_scope.Icon, {
    name: 'heart',
    size: 14,
    fill: true
  })) : null);
}
Object.assign(__ds_scope, { ActionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ActionCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
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
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-yy', 'avatar');
  s.textContent = CSS;
  document.head.appendChild(s);
}
const SIZES = {
  xs: 24,
  sm: 30,
  md: 36,
  lg: 44,
  xl: 56
};
function initials(name) {
  if (!name) return '';
  const parts = String(name).trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, /[\u4e00-\u9fff]/.test(parts[0]) ? 1 : 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function Avatar({
  src,
  name,
  size = 'md',
  shape = 'circle',
  tone = 'sage',
  ring = false,
  status = false,
  statusColor,
  className = '',
  style = {},
  ...rest
}) {
  ensureCSS();
  const px = typeof size === 'number' ? size : SIZES[size] || 36;
  const cls = ['yy-avatar', shape === 'rounded' && 'yy-avatar--rounded', ring && 'yy-avatar--ring', tone !== 'sage' && `yy-avatar--${tone}`, className].filter(Boolean).join(' ');
  return React.createElement('span', {
    className: cls,
    style: {
      '--_s': `${px}px`,
      ...style
    },
    ...rest
  }, src ? React.createElement('img', {
    key: 'i',
    className: 'yy-avatar__img',
    src,
    alt: name || ''
  }) : React.createElement('span', {
    key: 't',
    'aria-hidden': name ? undefined : true
  }, initials(name)), status ? React.createElement('span', {
    key: 's',
    className: 'yy-avatar__status',
    style: statusColor ? {
      background: statusColor
    } : undefined
  }) : null);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
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
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-yy', 'badge');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  dot = false,
  pulse = false,
  className = '',
  ...rest
}) {
  ensureCSS();
  const cls = ['yy-badge', `yy-badge--${variant}`, size !== 'md' && `yy-badge--${size}`, className].filter(Boolean).join(' ');
  return React.createElement('span', {
    className: cls,
    ...rest
  }, dot ? React.createElement('span', {
    key: 'd',
    className: `yy-badge__dot${pulse ? ' yy-badge__dot--pulse' : ''}`
  }) : null, children);
}
function StatusDot({
  color = 'var(--sage-500)',
  size = 9,
  className = '',
  style = {},
  ...rest
}) {
  ensureCSS();
  return React.createElement('span', {
    className: `yy-statusdot ${className}`,
    style: {
      background: color,
      width: size,
      height: size,
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Badge, StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
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
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-yy', 'card');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  children,
  elevation = 'default',
  padding = 'md',
  highlight = false,
  interactive = false,
  tape = false,
  tapeColor = 'sage',
  as = 'div',
  className = '',
  ...rest
}) {
  ensureCSS();
  const cls = ['yy-card', highlight && 'yy-card--hi', elevation !== 'default' && `yy-card--${elevation}`, padding !== 'none' && `yy-card--pad-${padding}`, interactive && 'yy-card--interactive', className].filter(Boolean).join(' ');
  return React.createElement(as, {
    className: cls,
    ...rest
  }, tape ? React.createElement('span', {
    key: 'tape',
    className: `yy-card__tape${tapeColor !== 'sage' ? ` yy-card__tape--${tapeColor}` : ''}`,
    'aria-hidden': true
  }) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Chip.jsx
try { (() => {
let injected = false;
const CSS = `
.yy-chip{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 11px;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:var(--weight-semibold);line-height:1;border-radius:var(--radius-pill);border:1.5px solid transparent;color:var(--ink-600);white-space:nowrap;transition:var(--transition-colors),transform var(--dur-fast) var(--ease-out)}
.yy-chip--sm{height:23px;padding:0 9px;font-size:var(--text-xs);gap:4px}
.yy-chip--soft{background:var(--sage-100);color:var(--sage-700)}
.yy-chip--solid{background:var(--sage-500);color:var(--cream-50)}
.yy-chip--outline{background:var(--cream-50);border-color:var(--cream-500);color:var(--ink-600)}
.yy-chip--plain{background:transparent;color:var(--ink-500)}
.yy-chip--gold{background:var(--gold-200);color:var(--gold-600)}
.yy-chip--rose{background:var(--rose-200);color:var(--rose-600)}
button.yy-chip,.yy-chip--clickable{cursor:pointer}
button.yy-chip:hover,.yy-chip--clickable:hover{filter:brightness(.97);border-color:var(--sage-300)}
button.yy-chip:active,.yy-chip--clickable:active{transform:translateY(1px)}
.yy-chip--selected{background:var(--sage-500);color:var(--cream-50);border-color:var(--sage-500)}
.yy-chip:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.yy-chip__dot{width:7px;height:7px;border-radius:50%;background:currentColor;flex:none}
.yy-chip__x{display:inline-flex;margin-right:-3px;margin-left:1px;border-radius:50%;padding:1px;cursor:pointer;opacity:.7}
.yy-chip__x:hover{opacity:1;background:rgba(62,70,55,.1)}
`;
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-yy', 'chip');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Chip({
  children,
  variant = 'soft',
  size = 'md',
  leftIcon,
  dot = false,
  dotColor,
  selected = false,
  onRemove,
  onClick,
  className = '',
  ...rest
}) {
  ensureCSS();
  const clickable = !!onClick;
  const cls = ['yy-chip', `yy-chip--${variant}`, size !== 'md' && `yy-chip--${size}`, selected && 'yy-chip--selected', clickable && 'yy-chip--clickable', className].filter(Boolean).join(' ');
  const kids = [dot ? React.createElement('span', {
    key: 'd',
    className: 'yy-chip__dot',
    style: dotColor ? {
      background: dotColor
    } : undefined
  }) : null, leftIcon ? React.createElement(__ds_scope.Icon, {
    key: 'i',
    name: leftIcon,
    size: size === 'sm' ? 13 : 15
  }) : null, children != null ? React.createElement('span', {
    key: 't'
  }, children) : null, onRemove ? React.createElement('span', {
    key: 'x',
    className: 'yy-chip__x',
    role: 'button',
    'aria-label': '移除',
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: size === 'sm' ? 11 : 13,
    strokeWidth: 2.4
  })) : null];
  return React.createElement(clickable ? 'button' : 'span', {
    className: cls,
    onClick,
    type: clickable ? 'button' : undefined,
    ...rest
  }, kids);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Chip.jsx", error: String((e && e.message) || e) }); }

// components/display/Divider.jsx
try { (() => {
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
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-yy', 'divider');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Divider({
  orientation = 'horizontal',
  variant = 'solid',
  tone = 'default',
  label,
  className = '',
  style = {},
  ...rest
}) {
  ensureCSS();
  if (label) {
    return React.createElement('div', {
      className: `yy-labeled ${className}`,
      style,
      ...rest
    }, React.createElement('span', {
      className: 'yy-labeled__txt'
    }, label));
  }
  const cls = ['yy-divider', orientation === 'vertical' ? 'yy-divider--v' : 'yy-divider--h', variant === 'dashed' && 'yy-divider--dashed', tone === 'sage' && 'yy-divider--sage', className].filter(Boolean).join(' ');
  return React.createElement('hr', {
    className: cls,
    style,
    'aria-orientation': orientation,
    ...rest
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
let injected = false;
const CSS = `
.yy-btn{--_h:38px;--_px:18px;--_fs:var(--text-base);position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;height:var(--_h);padding:0 var(--_px);font-family:var(--font-sans);font-size:var(--_fs);font-weight:var(--weight-bold);line-height:1;letter-spacing:.005em;border:var(--border-2) solid transparent;border-radius:var(--radius-lg);cursor:pointer;user-select:none;white-space:nowrap;transition:var(--transition-colors),transform var(--dur-fast) var(--ease-out),box-shadow var(--dur-base) var(--ease-out),text-decoration-color var(--dur-base) var(--ease-standard);-webkit-tap-highlight-color:transparent}
.yy-btn:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.yy-btn:disabled,.yy-btn[aria-disabled=true]{opacity:.45;cursor:not-allowed;pointer-events:none}
.yy-btn--pill{border-radius:var(--radius-pill)}
.yy-btn--block{width:100%}
.yy-btn--sm{--_h:30px;--_px:13px;--_fs:var(--text-sm)}
.yy-btn--lg{--_h:46px;--_px:24px;--_fs:var(--text-md)}

/* ── solid (a.k.a. primary): the single loud, filled action ── */
.yy-btn--solid,.yy-btn--primary{background:var(--sage-500);color:var(--cream-50);box-shadow:var(--shadow-sm)}
.yy-btn--solid:hover,.yy-btn--primary:hover{background:var(--sage-600)}
.yy-btn--solid:active,.yy-btn--primary:active{background:var(--sage-700);transform:translateY(1px);box-shadow:var(--shadow-xs)}

/* ── outline (a.k.a. secondary): solid hairline on paper ── */
.yy-btn--outline,.yy-btn--secondary{background:var(--surface-card-hi);color:var(--ink-700);border-color:var(--border-hair);box-shadow:var(--shadow-xs)}
.yy-btn--outline:hover,.yy-btn--secondary:hover{background:var(--cream-100);border-color:var(--sage-300);color:var(--ink-800)}
.yy-btn--outline:active,.yy-btn--secondary:active{background:var(--cream-200);transform:translateY(1px);box-shadow:none}

/* ── dashed: dashed sage outline — the bullet-journal "additive/optional" action ── */
.yy-btn--dashed{background:var(--surface-card-hi);color:var(--sage-700);border:var(--border-2) dashed var(--sage-400)}
.yy-btn--dashed:hover{background:var(--sage-50);border-color:var(--sage-500)}
.yy-btn--dashed:active{background:var(--sage-100);transform:translateY(1px)}

/* ── text: label + dashed underline, no box (inline low-emphasis) ── */
.yy-btn--text{height:auto;padding:2px 3px;background:transparent;color:var(--link);border-color:transparent;box-shadow:none;font-weight:var(--weight-semibold);text-decoration:underline;text-decoration-style:dashed;text-decoration-color:var(--sage-400);text-decoration-thickness:1.5px;text-underline-offset:5px;border-radius:var(--radius-xs)}
.yy-btn--text:hover{color:var(--link-hover);text-decoration-color:var(--sage-600)}
.yy-btn--text:active{transform:translateY(1px)}
.yy-btn--text.yy-btn--danger-tone{color:var(--danger);text-decoration-color:var(--rose-400)}
.yy-btn--text.yy-btn--danger-tone:hover{color:var(--rose-600);text-decoration-color:var(--rose-500)}

/* ── ghost: no fill until hover (toolbars, repeated rows) ── */
.yy-btn--ghost{background:transparent;color:var(--ink-600)}
.yy-btn--ghost:hover{background:var(--sage-100);color:var(--ink-800)}
.yy-btn--ghost:active{background:var(--sage-200)}
.yy-btn--ghost.yy-btn--danger-tone{color:var(--danger)}
.yy-btn--ghost.yy-btn--danger-tone:hover{background:var(--danger-wash);color:var(--rose-600)}

/* ── soft: quiet sage wash ── */
.yy-btn--soft{background:var(--sage-100);color:var(--sage-700)}
.yy-btn--soft:hover{background:var(--sage-200)}
.yy-btn--soft:active{background:var(--sage-300);transform:translateY(1px)}

/* ── tag: paper "stamp" — dashed rounded rect, tilted a hair (washi-label tap target) ── */
.yy-btn--tag{height:auto;padding:4px 12px;background:var(--surface-card-hi);color:var(--sage-700);border:var(--border-2) dashed var(--sage-400);border-radius:var(--radius-sm);font-size:var(--text-xs);font-weight:var(--weight-semibold);letter-spacing:.03em;box-shadow:var(--shadow-xs);transform:rotate(-1.4deg)}
.yy-btn--tag:hover{background:var(--sage-50);border-color:var(--sage-500);transform:rotate(0)}
.yy-btn--tag:active{background:var(--sage-100);transform:rotate(0) translateY(1px)}
.yy-btn--tag.yy-btn--danger-tone{color:var(--rose-600);border-color:var(--rose-400)}

/* ── danger: solid destructive confirm (use sparingly, one per dialog) ── */
.yy-btn--danger{background:var(--danger);color:#fff;box-shadow:var(--shadow-sm)}
.yy-btn--danger:hover{filter:brightness(.95)}
.yy-btn--danger:active{transform:translateY(1px);box-shadow:var(--shadow-xs)}

.yy-btn__spin{width:1em;height:1em;border-radius:50%;border:2px solid currentColor;border-top-color:transparent;animation:yy-btn-spin .7s linear infinite}
@keyframes yy-btn-spin{to{transform:rotate(360deg)}}
`;
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-yy', 'button');
  s.textContent = CSS;
  document.head.appendChild(s);
}
const ICON_SIZE = {
  sm: 15,
  md: 17,
  lg: 19
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  tone = 'default',
  pill = false,
  block = false,
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  type = 'button',
  className = '',
  ...rest
}) {
  ensureCSS();
  const cls = ['yy-btn', `yy-btn--${variant}`, tone === 'danger' && 'yy-btn--danger-tone', size !== 'md' && `yy-btn--${size}`, pill && 'yy-btn--pill', block && 'yy-btn--block', className].filter(Boolean).join(' ');
  const isz = ICON_SIZE[size] || 17;
  return React.createElement('button', {
    type,
    className: cls,
    disabled: disabled || loading,
    'aria-busy': loading || undefined,
    ...rest
  }, loading ? React.createElement('span', {
    className: 'yy-btn__spin',
    'aria-hidden': true
  }) : leftIcon ? React.createElement(__ds_scope.Icon, {
    name: leftIcon,
    size: isz,
    key: 'li'
  }) : null, children != null ? React.createElement('span', {
    key: 'l'
  }, children) : null, !loading && rightIcon ? React.createElement(__ds_scope.Icon, {
    name: rightIcon,
    size: isz,
    key: 'ri'
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
let injected = false;
const CSS = `
.yy-cbx{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-sans);font-size:var(--text-base);color:var(--ink-700);cursor:pointer;user-select:none}
.yy-cbx__native{position:absolute;opacity:0;width:0;height:0}
.yy-cbx__box{--_s:20px;flex:none;width:var(--_s);height:var(--_s);display:flex;align-items:center;justify-content:center;color:transparent;background:var(--cream-50);border:1.5px solid var(--cream-600);border-radius:6px;transition:var(--transition-colors),transform var(--dur-fast) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)}
.yy-cbx--circle .yy-cbx__box{border-radius:var(--radius-pill)}
.yy-cbx--sm .yy-cbx__box{--_s:17px}
.yy-cbx--lg .yy-cbx__box{--_s:24px}
.yy-cbx:hover .yy-cbx__box{border-color:var(--sage-400)}
.yy-cbx__native:focus-visible+.yy-cbx__box{box-shadow:var(--shadow-focus)}
.yy-cbx__native:checked+.yy-cbx__box{background:var(--sage-500);border-color:var(--sage-500);color:var(--cream-50)}
.yy-cbx:active .yy-cbx__box{transform:scale(.92)}
.yy-cbx__native:disabled~*{opacity:.5}
.yy-cbx[data-disabled=true]{cursor:not-allowed;opacity:.6}
.yy-cbx__label--done{color:var(--ink-400);text-decoration:line-through;text-decoration-color:var(--ink-300)}
`;
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-yy', 'checkbox');
  s.textContent = CSS;
  document.head.appendChild(s);
}
const CHK = {
  sm: 12,
  md: 14,
  lg: 16
};
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  shape = 'square',
  size = 'md',
  strikeOnDone = false,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  ensureCSS();
  const controlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = controlled ? checked : internal;
  const handle = e => {
    if (!controlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  const cls = ['yy-cbx', shape === 'circle' && 'yy-cbx--circle', size !== 'md' && `yy-cbx--${size}`, className].filter(Boolean).join(' ');
  return React.createElement('label', {
    className: cls,
    'data-disabled': disabled || undefined
  }, React.createElement('input', {
    type: 'checkbox',
    className: 'yy-cbx__native',
    checked: controlled ? checked : undefined,
    defaultChecked: controlled ? undefined : defaultChecked,
    onChange: handle,
    disabled,
    id,
    ...rest
  }), React.createElement('span', {
    className: 'yy-cbx__box',
    'aria-hidden': true
  }, React.createElement(__ds_scope.Icon, {
    name: 'check',
    size: CHK[size] || 14,
    strokeWidth: 2.6
  })), label != null ? React.createElement('span', {
    className: isOn && strikeOnDone ? 'yy-cbx__label--done' : undefined
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
let injected = false;
const CSS = `
.yy-ib{--_s:38px;display:inline-flex;align-items:center;justify-content:center;width:var(--_s);height:var(--_s);padding:0;border:1.5px solid transparent;border-radius:var(--radius-pill);cursor:pointer;color:var(--ink-600);background:transparent;transition:var(--transition-colors),transform var(--dur-fast) var(--ease-out),box-shadow var(--dur-base) var(--ease-out);-webkit-tap-highlight-color:transparent}
.yy-ib:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.yy-ib:disabled,.yy-ib[aria-disabled=true]{opacity:.4;cursor:not-allowed;pointer-events:none}
.yy-ib--square{border-radius:var(--radius-md)}
.yy-ib--sm{--_s:30px}
.yy-ib--lg{--_s:46px}
.yy-ib--primary{background:var(--sage-500);color:var(--cream-50);box-shadow:var(--shadow-sm)}
.yy-ib--primary:hover{background:var(--sage-600)}
.yy-ib--primary:active{background:var(--sage-700);transform:translateY(1px);box-shadow:var(--shadow-xs)}
.yy-ib--secondary{background:var(--cream-50);color:var(--ink-700);border-color:var(--cream-500);box-shadow:var(--shadow-xs)}
.yy-ib--secondary:hover{background:var(--cream-100);border-color:var(--sage-300)}
.yy-ib--secondary:active{transform:translateY(1px);box-shadow:none}
.yy-ib--soft{background:var(--sage-100);color:var(--sage-700)}
.yy-ib--soft:hover{background:var(--sage-200)}
.yy-ib--soft:active{background:var(--sage-300);transform:translateY(1px)}
.yy-ib--ghost{background:transparent;color:var(--ink-500)}
.yy-ib--ghost:hover{background:var(--sage-100);color:var(--ink-800)}
.yy-ib--ghost:active{background:var(--sage-200)}
`;
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-yy', 'icon-button');
  s.textContent = CSS;
  document.head.appendChild(s);
}
const ISZ = {
  sm: 16,
  md: 19,
  lg: 22
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  shape = 'circle',
  fillIcon = false,
  disabled = false,
  type = 'button',
  className = '',
  ...rest
}) {
  ensureCSS();
  const cls = ['yy-ib', `yy-ib--${variant}`, size !== 'md' && `yy-ib--${size}`, shape === 'square' && 'yy-ib--square', className].filter(Boolean).join(' ');
  return React.createElement('button', {
    type,
    className: cls,
    disabled,
    'aria-label': label,
    title: label,
    ...rest
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: ISZ[size] || 19,
    fill: fillIcon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
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
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-yy', 'input');
  s.textContent = CSS;
  document.head.appendChild(s);
}
let uid = 0;
function Input({
  label,
  hint,
  error,
  leftIcon,
  size = 'md',
  multiline = false,
  rows = 3,
  required = false,
  disabled = false,
  id,
  className = '',
  style = {},
  ...rest
}) {
  ensureCSS();
  const fid = id || `yy-in-${++uid}`;
  const msg = error || hint;
  const boxCls = ['yy-input', size !== 'md' && `yy-input--${size}`, multiline && 'yy-input--multiline', error && 'yy-input--err'].filter(Boolean).join(' ');
  const el = React.createElement(multiline ? 'textarea' : 'input', {
    id: fid,
    className: 'yy-input__el',
    rows: multiline ? rows : undefined,
    disabled,
    'aria-invalid': error ? true : undefined,
    ...rest
  });
  return React.createElement('div', {
    className: `yy-field ${className}`,
    'data-disabled': disabled || undefined,
    style
  }, label ? React.createElement('label', {
    className: 'yy-field__label',
    htmlFor: fid,
    key: 'lb'
  }, label, required ? React.createElement('span', {
    key: 'r'
  }, '*') : null) : null, React.createElement('div', {
    className: boxCls,
    key: 'bx'
  }, leftIcon ? React.createElement('span', {
    className: 'yy-input__icon',
    key: 'ic'
  }, React.createElement(__ds_scope.Icon, {
    name: leftIcon,
    size: size === 'lg' ? 20 : 18
  })) : null, el), msg ? React.createElement('div', {
    className: `yy-field__hint${error ? ' yy-field__hint--err' : ''}`,
    key: 'ht'
  }, msg) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
let injected = false;
const CSS = `
.yy-nav{display:flex;align-items:center;gap:10px;width:100%;padding:7px 10px;border:0;background:transparent;text-align:left;font-family:var(--font-sans);font-size:var(--text-base);font-weight:var(--weight-medium);color:var(--ink-600);border-radius:var(--radius-md);cursor:pointer;line-height:1.2;transition:var(--transition-colors);position:relative}
.yy-nav:hover{background:var(--sage-100);color:var(--ink-800)}
.yy-nav:active{background:var(--sage-200)}
.yy-nav:focus-visible{outline:none;box-shadow:var(--shadow-focus)}
.yy-nav--active{background:linear-gradient(135deg,var(--sage-200) 0%,var(--sage-100) 55%,var(--cream-50) 100%);color:var(--sage-700);font-weight:var(--weight-bold);box-shadow:var(--shadow-xs);border:1px solid var(--sage-300)}
.yy-nav--active:hover{background:linear-gradient(135deg,var(--sage-300) 0%,var(--sage-100) 55%,var(--cream-50) 100%)}
.yy-nav--active::before{content:"";position:absolute;left:-6px;top:50%;transform:translateY(-50%);width:3px;height:16px;border-radius:2px;background:linear-gradient(var(--sage-600),var(--sage-400))}
.yy-nav--muted{color:var(--ink-300);font-weight:var(--weight-regular)}
.yy-nav--indent{padding-left:34px;font-size:var(--text-sm);color:var(--ink-500)}
.yy-nav__ic{flex:none;display:flex;color:var(--ink-400)}
.yy-nav--active .yy-nav__ic{color:var(--sage-600)}
.yy-nav__label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.yy-nav__trail{flex:none;display:flex;align-items:center;gap:6px;color:var(--ink-400)}
`;
function ensureCSS() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-yy', 'nav-item');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function NavItem({
  icon,
  label,
  active = false,
  muted = false,
  indent = false,
  leading,
  trailing,
  as = 'button',
  className = '',
  ...rest
}) {
  ensureCSS();
  const cls = ['yy-nav', active && 'yy-nav--active', muted && 'yy-nav--muted', indent && 'yy-nav--indent', className].filter(Boolean).join(' ');
  const extra = as === 'button' ? {
    type: 'button'
  } : {};
  return React.createElement(as, {
    className: cls,
    'aria-current': active ? 'page' : undefined,
    ...extra,
    ...rest
  }, leading !== undefined ? React.createElement('span', {
    key: 'ld',
    className: 'yy-nav__ic'
  }, leading) : icon ? React.createElement('span', {
    key: 'ic',
    className: 'yy-nav__ic'
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: indent ? 16 : 18
  })) : null, React.createElement('span', {
    key: 'lb',
    className: 'yy-nav__label'
  }, label), trailing != null ? React.createElement('span', {
    key: 'tr',
    className: 'yy-nav__trail'
  }, trailing) : null);
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// explorations/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "explorations/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/youyou-codex/App.jsx
try { (() => {
// Root app — wires the Youyou Codex kit together with fake interactivity.
window.YY = window.YY || {};
(function () {
  const DS = window.DesignSystem_4278dc;
  const D = window.YY_DATA;
  function App() {
    const [view, setView] = React.useState('home'); // 'home' | 'task'
    const [activeId, setActiveId] = React.useState('new');
    const [showSidebar, setShowSidebar] = React.useState(true);
    const [tasks, setTasks] = React.useState(D.tasks);
    const [messages, setMessages] = React.useState(D.chat);
    const [title, setTitle] = React.useState('检查 奶油宣纸皮肤');
    const [composer, setComposer] = React.useState('');
    const replyIdx = React.useRef(0);
    const toggleTask = id => setTasks(ts => ts.map(t => t.id === id ? {
      ...t,
      done: !t.done
    } : t));
    const pushReply = () => {
      const r = D.replies[replyIdx.current % D.replies.length];
      replyIdx.current++;
      setTimeout(() => setMessages(ms => [...ms, {
        from: 'assistant',
        text: r
      }]), 600);
    };
    const sendInTask = () => {
      const text = composer.trim();
      if (!text) return;
      setMessages(ms => [...ms, {
        from: 'user',
        text
      }]);
      setComposer('');
      pushReply();
    };
    const startTask = (text, newTitle) => {
      const t = text.trim();
      if (!t) return;
      setTitle(newTitle || '新任务');
      setMessages([{
        from: 'user',
        text: t
      }]);
      setComposer('');
      setView('task');
      setActiveId('new');
      pushReply();
    };
    const onNavigate = id => {
      setActiveId(id);
      if (id === 'new') {
        setView('home');
        return;
      }
      if (id === 'chat') {
        setView('task');
        setTitle('聊天');
        return;
      }
      // project / child / other nav → task view
      const child = D.projects.flatMap(p => p.children || []).find(c => c.id === id);
      const proj = D.projects.find(p => p.id === id);
      if (child) {
        setTitle(child.label);
        setMessages(D.chat);
        setView('task');
      } else if (proj) {
        setTitle(proj.label);
        setMessages(D.chat);
        setView('task');
      } else {
        setView('task');
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-canvas)'
      },
      className: "paper-canvas"
    }, /*#__PURE__*/React.createElement(window.YY.TopBar, {
      onToggleSidebar: () => setShowSidebar(s => !s),
      onBack: () => setView('home')
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        minHeight: 0
      }
    }, showSidebar && /*#__PURE__*/React.createElement(window.YY.Sidebar, {
      data: D,
      activeId: activeId,
      onNavigate: onNavigate,
      tasks: tasks,
      onToggleTask: toggleTask
    }), /*#__PURE__*/React.createElement("main", {
      style: {
        flex: 1,
        minWidth: 0,
        position: 'relative',
        zIndex: 1
      }
    }, view === 'home' ? /*#__PURE__*/React.createElement(window.YY.Home, {
      data: D,
      composerValue: composer,
      onComposerChange: setComposer,
      onSend: () => startTask(composer, '新任务'),
      onAction: intent => startTask(intent, '新任务')
    }) : /*#__PURE__*/React.createElement(window.YY.Task, {
      data: D,
      title: title,
      messages: messages,
      composerValue: composer,
      onComposerChange: setComposer,
      onSend: sendInTask
    }))));
  }
  window.YY.App = App;
  const root = document.getElementById('root');
  if (root && window.DesignSystem_4278dc) {
    ReactDOM.createRoot(root).render(/*#__PURE__*/React.createElement(App, null));
  } else if (root) {
    root.innerHTML = '<div style="padding:40px;font-family:sans-serif;color:#8a2a2a">Design-system bundle not loaded yet. It is generated at the end of the turn — reload after the compile.</div>';
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/youyou-codex/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/youyou-codex/Composer.jsx
try { (() => {
// Shared bottom composer for the Youyou Codex kit.
window.YY = window.YY || {};
(function () {
  const DS = window.DesignSystem_4278dc;
  const {
    Chip,
    IconButton,
    Icon,
    Decoration
  } = DS;
  function Composer({
    value,
    onChange,
    onSend,
    placeholder,
    model,
    projectLabel = '选择项目',
    compact = false
  }) {
    const [modelOpen, setModelOpen] = React.useState(false);
    const send = () => {
      if (value.trim()) onSend();
    };
    const onKey = e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        background: 'var(--surface-card-hi)',
        border: '1px solid var(--border-hair)',
        borderRadius: 'var(--radius-2xl)',
        boxShadow: 'var(--shadow-md)',
        padding: '14px 16px 12px'
      }
    }, /*#__PURE__*/React.createElement(Decoration, {
      name: "sparkle",
      size: 26,
      mono: true,
      color: "var(--gold-400)",
      opacity: 0.5,
      style: {
        position: 'absolute',
        top: 12,
        right: 16
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      leftIcon: "folder",
      variant: "outline",
      size: "sm"
    }, projectLabel), /*#__PURE__*/React.createElement(Chip, {
      variant: "plain",
      size: "sm",
      leftIcon: "git-pull-request"
    }, "main")), /*#__PURE__*/React.createElement("textarea", {
      value: value,
      onChange: e => onChange(e.target.value),
      onKeyDown: onKey,
      rows: compact ? 1 : 2,
      placeholder: placeholder,
      style: {
        width: '100%',
        border: 0,
        outline: 'none',
        resize: 'none',
        background: 'transparent',
        font: 'inherit',
        fontSize: 'var(--text-md)',
        color: 'var(--ink-800)',
        lineHeight: 1.5,
        fontFamily: 'var(--font-sans)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "plus",
      label: "\u6DFB\u52A0",
      variant: "soft",
      size: "sm"
    }), /*#__PURE__*/React.createElement(Chip, {
      leftIcon: "lock",
      variant: "plain",
      size: "sm",
      style: {
        color: 'var(--gold-600)'
      }
    }, "\u5B8C\u5168\u8BBF\u95EE")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setModelOpen(o => !o),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        border: 0,
        background: 'transparent',
        font: 'inherit',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-muted)',
        cursor: 'pointer',
        padding: '5px 8px',
        borderRadius: 'var(--radius-pill)'
      },
      onMouseEnter: e => e.currentTarget.style.background = 'var(--sage-100)',
      onMouseLeave: e => e.currentTarget.style.background = 'transparent'
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sparkle",
      size: 14,
      fill: true,
      color: "var(--gold-500)"
    }), model.name, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 13
    })), modelOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 'calc(100% + 8px)',
        right: 0,
        minWidth: 150,
        background: 'var(--surface-card-hi)',
        border: '1px solid var(--border-hair)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-lg)',
        padding: 6,
        zIndex: 20
      }
    }, model.options.map(o => /*#__PURE__*/React.createElement("div", {
      key: o,
      onClick: () => setModelOpen(false),
      style: {
        padding: '7px 10px',
        borderRadius: 8,
        fontSize: 13,
        fontWeight: o === model.name ? 700 : 500,
        color: o === model.name ? 'var(--sage-700)' : 'var(--ink-600)',
        background: o === model.name ? 'var(--sage-100)' : 'transparent',
        cursor: 'pointer'
      }
    }, o))), /*#__PURE__*/React.createElement(IconButton, {
      icon: "mic",
      label: "\u8BED\u97F3\u8F93\u5165",
      variant: "ghost",
      size: "sm"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "arrow-up",
      label: "\u53D1\u9001",
      variant: "primary",
      onClick: send
    }))));
  }
  window.YY.Composer = Composer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/youyou-codex/Composer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/youyou-codex/HomeScreen.jsx
try { (() => {
// Home / greeting screen for the Youyou Codex kit.
window.YY = window.YY || {};
(function () {
  const DS = window.DesignSystem_4278dc;
  const {
    Logo,
    Card,
    ActionCard,
    Chip,
    Icon,
    Decoration
  } = DS;
  const ASSET = window.__YOUYOU_ASSET_BASE__ || '../../assets';
  function Home({
    data,
    composerValue,
    onComposerChange,
    onSend,
    onAction
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '22px 34px 8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: `${ASSET}/seal-you.png`,
      height: "46",
      alt: "\u7950"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 19,
        color: 'var(--ink-800)',
        lineHeight: 1.1
      }
    }, "\u5976\u6CB9\u5BA3\u7EB8 \xB7 \u4E13\u5C5E\u5B9A\u5236\u76AE\u80A4"), /*#__PURE__*/React.createElement("div", {
      className: "eyebrow",
      style: {
        marginTop: 3
      }
    }, "CODEX \xB7 CREAM PAPER EDITION")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        borderTop: '1.5px dashed var(--border-dash)',
        margin: '0 6px'
      }
    }), /*#__PURE__*/React.createElement(Decoration, {
      name: "stars",
      size: 38
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--gold-200)',
        border: '1px dashed var(--gold-400)',
        borderRadius: 'var(--radius-pill)',
        padding: '6px 16px',
        fontFamily: 'var(--font-hand)',
        fontWeight: 600,
        fontSize: 20,
        color: 'var(--gold-600)',
        transform: 'rotate(-2deg)'
      }
    }, "Youyou")), /*#__PURE__*/React.createElement(Card, {
      elevation: "raised",
      padding: "none",
      style: {
        overflow: 'hidden',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'stretch'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1.3,
        padding: '34px 36px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hand",
      style: {
        fontSize: 22,
        color: 'var(--rose-500)',
        marginBottom: 8
      }
    }, "\u4ECA\u5929\u4E5F\u8981\u52A0\u6CB9\u9E2D~ \u2661"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 44,
        lineHeight: 1.08,
        color: 'var(--ink-900)',
        marginBottom: 14
      }
    }, "\u6211\u4EEC\u8BE5\u6784\u5EFA\u4EC0\u4E48\uFF1F"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        color: 'var(--ink-500)',
        maxWidth: 420,
        lineHeight: 1.6
      }
    }, "\u5728\u5BA3\u7EB8\u4E0A\uFF0C\u548C\u7950\u7950\u4E00\u8D77\u628A\u60F3\u6CD5\u6162\u6162\u5199\u6210\u4EE3\u7801\u3002\u9009\u4E00\u4E2A\u65B9\u5411\uFF0C\u6216\u8005\u76F4\u63A5\u5728\u4E0B\u9762\u544A\u8BC9\u6211\u3002"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      variant: "soft",
      leftIcon: "sparkle"
    }, "\u7075\u611F\u968F\u624B\u8BB0"), /*#__PURE__*/React.createElement(Chip, {
      variant: "outline",
      leftIcon: "folder"
    }, "\u4ECE\u9879\u76EE\u5F00\u59CB"))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        position: 'relative',
        background: 'linear-gradient(135deg,var(--sage-100),var(--cream-200))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 280
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        backgroundImage: 'var(--paper-grain)',
        opacity: .08,
        mixBlendMode: 'soft-light'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 180,
        height: 180,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 40% 35%,var(--cream-50),var(--sage-200))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-md)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: `${ASSET}/seal-you.png`,
      height: "132",
      alt: "\u7950 seal"
    })), /*#__PURE__*/React.createElement(Decoration, {
      name: "sparkles",
      size: 44,
      style: {
        position: 'absolute',
        top: 26,
        left: 30
      }
    }), /*#__PURE__*/React.createElement(Decoration, {
      name: "heart",
      size: 30,
      style: {
        position: 'absolute',
        bottom: 30,
        right: 40
      }
    }), /*#__PURE__*/React.createElement(Decoration, {
      name: "paperclip",
      size: 34,
      rotate: 20,
      style: {
        position: 'absolute',
        top: 34,
        right: 28
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 14,
        marginBottom: 8
      }
    }, data.actions.map(a => /*#__PURE__*/React.createElement(ActionCard, {
      key: a.id,
      icon: a.icon,
      title: a.title,
      accent: a.accent,
      onClick: () => onAction(a.intent)
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 34px 22px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(window.YY.Composer, {
      value: composerValue,
      onChange: onComposerChange,
      onSend: onSend,
      placeholder: "\u968F\u5FC3\u8F93\u5165\uFF0C\u8BA9\u7950\u7950\u966A\u4F60\u4E00\u8D77\u5199\u4EE3\u7801\u5427~",
      model: data.model,
      projectLabel: "\u5976\u6CB9\u5BA3\u7EB8\u5C0F\u7AD9"
    }))));
  }
  window.YY.Home = Home;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/youyou-codex/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/youyou-codex/Sidebar.jsx
try { (() => {
// Left sidebar for the Youyou Codex kit.
window.YY = window.YY || {};
(function () {
  const DS = window.DesignSystem_4278dc;
  const {
    Logo,
    NavItem,
    Checkbox,
    Badge,
    Avatar,
    IconButton,
    Icon
  } = DS;
  const Cap = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.12em',
      color: 'var(--text-faint)',
      padding: '14px 12px 5px',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, children);
  function Sidebar({
    data,
    activeId,
    onNavigate,
    tasks,
    onToggleTask
  }) {
    const doneCount = tasks.filter(t => t.done).length;
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 'var(--sidebar-w)',
        flex: 'none',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-raised)',
        borderRight: '1px solid var(--border-hair)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 14px 8px'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "script",
      height: 26
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "search",
      label: "\u641C\u7D22",
      variant: "ghost",
      size: "sm"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '4px 10px 10px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, data.nav.map(n => /*#__PURE__*/React.createElement(NavItem, {
      key: n.id,
      icon: n.icon,
      label: n.label,
      active: activeId === n.id,
      onClick: () => onNavigate(n.id),
      trailing: n.badge ? /*#__PURE__*/React.createElement(Badge, {
        variant: "sage",
        size: "sm"
      }, n.badge) : null
    }))), /*#__PURE__*/React.createElement(Cap, null, "\u9879\u76EE"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, data.projects.map(p => /*#__PURE__*/React.createElement(React.Fragment, {
      key: p.id
    }, /*#__PURE__*/React.createElement(NavItem, {
      icon: p.open ? 'folder-open' : 'folder',
      label: p.label,
      active: activeId === p.id,
      onClick: () => onNavigate(p.id),
      trailing: p.children ? /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-down",
        size: 14
      }) : null
    }), p.open && p.children && p.children.map(c => /*#__PURE__*/React.createElement(NavItem, {
      key: c.id,
      indent: true,
      icon: "file",
      label: c.label,
      active: activeId === c.id,
      onClick: () => onNavigate(c.id)
    }))))), /*#__PURE__*/React.createElement(Cap, null, "\u4EFB\u52A1 ", /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 12
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, tasks.map(t => /*#__PURE__*/React.createElement(NavItem, {
      key: t.id,
      indent: true,
      label: t.done ? /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--ink-400)',
          textDecoration: 'line-through',
          textDecorationColor: 'var(--ink-300)'
        }
      }, t.label) : t.label,
      leading: /*#__PURE__*/React.createElement(Checkbox, {
        shape: "circle",
        checked: t.done,
        onChange: () => onToggleTask(t.id)
      })
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '9px 12px',
        background: 'linear-gradient(135deg,var(--sage-200) 0%,var(--sage-100) 60%,var(--cream-50) 100%)',
        border: '1px solid var(--sage-300)',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--sage-700)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 14,
      fill: true,
      color: "var(--rose-500)"
    }), "\u7EE7\u7EED\u8BBE\u7F6E"), /*#__PURE__*/React.createElement(Badge, {
      variant: "sage",
      size: "sm"
    }, doneCount, "/4"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 14px',
        borderTop: '1px solid var(--border-hair)'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "momo",
      size: "sm",
      tone: "rose",
      status: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--ink-700)',
        lineHeight: 1.1
      }
    }, "momo"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-400)'
      }
    }, "\u5343\u7EB8\u9E64 \xB7 \u4F1A\u5458")), /*#__PURE__*/React.createElement(IconButton, {
      icon: "settings",
      label: "\u8BBE\u7F6E",
      variant: "ghost",
      size: "sm"
    })));
  }
  window.YY.Sidebar = Sidebar;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/youyou-codex/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/youyou-codex/TaskScreen.jsx
try { (() => {
// Task / conversation screen for the Youyou Codex kit.
window.YY = window.YY || {};
(function () {
  const DS = window.DesignSystem_4278dc;
  const {
    Card,
    Chip,
    Badge,
    Icon,
    IconButton,
    Divider
  } = DS;
  const PanelCap = ({
    children,
    action
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink-700)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, children), action);
  function Message({
    m
  }) {
    if (m.from === 'user') {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'flex-end'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: '76%',
          background: 'var(--sage-100)',
          color: 'var(--ink-800)',
          border: '1px solid var(--sage-200)',
          borderRadius: '18px 18px 6px 18px',
          padding: '11px 15px',
          fontSize: 15,
          lineHeight: 1.55,
          boxShadow: 'var(--shadow-xs)'
        }
      }, m.text));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 11,
        maxWidth: '82%'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 26,
        height: 26,
        borderRadius: '50%',
        background: 'var(--sage-200)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sparkle",
      size: 14,
      fill: true,
      color: "var(--sage-600)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        lineHeight: 1.65,
        color: 'var(--ink-700)'
      }
    }, m.text));
  }
  function Task({
    data,
    title,
    messages,
    composerValue,
    onComposerChange,
    onSend
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 26px',
        borderBottom: '1px solid var(--border-hair)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "folder-open",
      size: 18,
      color: "var(--sage-600)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--ink-800)'
      }
    }, title), /*#__PURE__*/React.createElement(IconButton, {
      icon: "more",
      label: "\u66F4\u591A",
      variant: "ghost",
      size: "sm"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      variant: "outline",
      size: "sm",
      leftIcon: "globe"
    }, "\u6253\u5F00\u4F4D\u7F6E"), /*#__PURE__*/React.createElement(IconButton, {
      icon: "clipboard-check",
      label: "\u4EFB\u52A1",
      variant: "ghost",
      size: "sm"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '24px 30px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 720,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, messages.map((m, i) => /*#__PURE__*/React.createElement(Message, {
      key: i,
      m: m
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-400)',
        fontFamily: 'var(--font-mono)'
      }
    }, "\u5DF2\u5904\u7406 1m 14s"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, data.toolRuns.map((t, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        fontSize: 13,
        color: 'var(--ink-500)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 15,
      color: "var(--ink-400)"
    }), t.label))))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 30px 22px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 720,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(window.YY.Composer, {
      value: composerValue,
      onChange: onComposerChange,
      onSend: onSend,
      placeholder: "\u8981\u6C42\u540E\u7EED\u53D8\u66F4\u2026",
      model: data.model,
      projectLabel: "\u5976\u6CB9\u5BA3\u7EB8\u5C0F\u7AD9",
      compact: true
    })))), /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 'var(--rightpanel-w)',
        flex: 'none',
        borderLeft: '1px solid var(--border-hair)',
        background: 'var(--surface-raised)',
        padding: '20px 18px',
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement(PanelCap, {
      action: /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-right",
        size: 15,
        color: "var(--ink-400)"
      })
    }, "\u73AF\u5883\u4FE1\u606F"), /*#__PURE__*/React.createElement(Divider, {
      variant: "dashed"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '14px 0'
      }
    }, /*#__PURE__*/React.createElement(PanelCap, null, "\u5B50\u667A\u80FD\u4F53"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontSize: 13,
        color: 'var(--ink-600)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: '50%',
        background: 'var(--sage-500)'
      }
    }), data.env.status)), /*#__PURE__*/React.createElement(Divider, {
      variant: "dashed"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(PanelCap, {
      action: /*#__PURE__*/React.createElement(IconButton, {
        icon: "plus",
        label: "\u6DFB\u52A0\u6765\u6E90",
        variant: "ghost",
        size: "sm"
      })
    }, "\u6765\u6E90"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 7
      }
    }, data.sources.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        padding: '8px 10px',
        background: 'var(--surface-card-hi)',
        border: '1px solid var(--border-hair)',
        borderRadius: 'var(--radius-md)',
        fontSize: 12.5,
        color: 'var(--ink-600)',
        fontFamily: 'var(--font-mono)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "file",
      size: 14,
      color: "var(--sage-600)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, s.label))), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 12.5,
        color: 'var(--link)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        marginTop: 2,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "git-pull-request",
      size: 13
    }), "\u67E5\u770B\u5168\u90E8"))))));
  }
  window.YY.Task = Task;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/youyou-codex/TaskScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/youyou-codex/TopBar.jsx
try { (() => {
// Slim window chrome for the Youyou Codex kit.
window.YY = window.YY || {};
(function () {
  const DS = window.DesignSystem_4278dc;
  const {
    IconButton,
    Icon
  } = DS;
  function TopBar({
    onToggleSidebar,
    onBack
  }) {
    const menu = ['文件', '编辑', '视图', '帮助'];
    return /*#__PURE__*/React.createElement("header", {
      style: {
        height: 44,
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 12px',
        background: 'var(--surface-raised)',
        borderBottom: '1px solid var(--border-hair)',
        WebkitUserSelect: 'none',
        userSelect: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "panel-left",
      label: "\u4FA7\u680F",
      variant: "ghost",
      size: "sm",
      onClick: onToggleSidebar
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "arrow-left",
      label: "\u540E\u9000",
      variant: "ghost",
      size: "sm",
      onClick: onBack
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "arrow-right",
      label: "\u524D\u8FDB",
      variant: "ghost",
      size: "sm"
    }), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        gap: 2,
        marginLeft: 10
      }
    }, menu.map(m => /*#__PURE__*/React.createElement("button", {
      key: m,
      style: {
        border: 0,
        background: 'transparent',
        font: 'inherit',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-muted)',
        padding: '5px 10px',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer'
      },
      onMouseEnter: e => e.currentTarget.style.background = 'var(--sage-100)',
      onMouseLeave: e => e.currentTarget.style.background = 'transparent'
    }, m)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '.06em',
        color: 'var(--sage-600)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--sage-500)'
      }
    }), "CREAM PAPER"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 3,
        color: 'var(--text-faint)'
      }
    }, /*#__PURE__*/React.createElement(WinDot, {
      icon: "minus"
    }), /*#__PURE__*/React.createElement(WinDot, {
      icon: "grid"
    }), /*#__PURE__*/React.createElement(WinDot, {
      icon: "x"
    }))));
  }
  function WinDot({
    icon
  }) {
    return /*#__PURE__*/React.createElement("button", {
      "aria-label": "window",
      style: {
        width: 26,
        height: 26,
        border: 0,
        background: 'transparent',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-faint)',
        cursor: 'pointer'
      },
      onMouseEnter: e => e.currentTarget.style.background = 'var(--sage-100)',
      onMouseLeave: e => e.currentTarget.style.background = 'transparent'
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 13
    }));
  }
  window.YY.TopBar = TopBar;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/youyou-codex/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/youyou-codex/data.js
try { (() => {
// Fake content for the 祐识 · 奶油宣纸 Codex UI kit. No real people / fan content.
window.YY_DATA = {
  model: {
    name: '祐 · 均衡',
    options: ['祐 · 轻盈', '祐 · 均衡', '祐 · 深思']
  },
  nav: [{
    id: 'new',
    icon: 'square-pen',
    label: '新建任务'
  }, {
    id: 'scheduled',
    icon: 'calendar',
    label: '已安排'
  }, {
    id: 'skills',
    icon: 'package',
    label: '技能'
  }, {
    id: 'sites',
    icon: 'grid',
    label: '站点'
  }, {
    id: 'pr',
    icon: 'git-pull-request',
    label: '拉取请求'
  }, {
    id: 'chat',
    icon: 'message',
    label: '聊天',
    badge: 3
  }],
  projects: [{
    id: 'p1',
    label: '奶油宣纸小站',
    open: true,
    children: [{
      id: 'p1a',
      label: '首页横幅设计'
    }, {
      id: 'p1b',
      label: '手账组件库整理'
    }, {
      id: 'p1c',
      label: '一起写代码打卡页'
    }]
  }, {
    id: 'p2',
    label: '公域内容整理'
  }, {
    id: 'p3',
    label: '私域灵感库'
  }],
  tasks: [{
    id: 't1',
    label: '做今日手账',
    done: true
  }, {
    id: 't2',
    label: '学习一点新技能',
    done: false
  }, {
    id: 't3',
    label: '拍一张氛围照片',
    done: false
  }, {
    id: 't4',
    label: '写晚安日记',
    done: false
  }],
  actions: [{
    id: 'a1',
    icon: 'code',
    title: '探索并理解代码',
    accent: 'sage',
    intent: '帮我读一遍这个项目，讲讲整体结构。'
  }, {
    id: 'a2',
    icon: 'wrench',
    title: '构建新功能、应用或工具',
    accent: 'gold',
    intent: '我想做一个新的手账卡片组件。'
  }, {
    id: 'a3',
    icon: 'clipboard-check',
    title: '审查代码并提出修改建议',
    accent: 'rose',
    intent: '帮我审查一下首页横幅的代码。'
  }, {
    id: 'a4',
    icon: 'refresh',
    title: '修复问题和失败',
    accent: 'sage',
    intent: '页面在移动端会错位，帮我修一下。'
  }],
  chat: [{
    from: 'assistant',
    text: '好呀～我先把「奶油宣纸小站」整体看了一遍：首页横幅、手账组件库、打卡页三块。当前只切到了浅色基础主题，正式注入还没接上，我们一步步来。'
  }, {
    from: 'user',
    text: '重启后主题回来了吗？'
  }, {
    from: 'assistant',
    text: '回来啦 ♡ 截图里的任务页背景、侧栏和输入框都是新主题的实时效果。剩下最后三项：正式版复验、横幅验收、生成打包。我继续做，完成前不会把「看起来恢复了」当成已交付。'
  }, {
    from: 'user',
    text: '辛苦啦，那就继续～'
  }],
  toolRuns: [{
    icon: 'refresh',
    label: '运行了多个命令'
  }, {
    icon: 'image',
    label: '已查看 1 张图像'
  }, {
    icon: 'code',
    label: '正在运行 ./scripts/apply-cream-skin.sh'
  }],
  env: {
    name: '子智能体',
    status: '1 完成'
  },
  sources: [{
    id: 's1',
    label: 'cream-skin-f18600.patch'
  }, {
    id: 's2',
    label: 'cream-skin-a0d528.patch'
  }, {
    id: 's3',
    label: 'cream-skin-15c8f8.patch'
  }],
  replies: ['收到～我先梳理一下步骤，再动手改，稳稳的。', '好的呀 ♡ 我这就去处理，完成后同步给你。', '明白啦，我先看看相关文件再回来。']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/youyou-codex/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ApprovalCard = __ds_scope.ApprovalCard;

__ds_ns.TraceChain = __ds_scope.TraceChain;

__ds_ns.TraceLine = __ds_scope.TraceLine;

__ds_ns.Decoration = __ds_scope.Decoration;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ActionCard = __ds_scope.ActionCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NavItem = __ds_scope.NavItem;

})();
