import * as React from 'react';

export type MotifName = 'stars' | 'sparkles' | 'sparkle' | 'heart' | 'paperclip';

/**
 * Scrapbook confetti — the brand's supplied hand-drawn motifs, inlined
 * and recolorable. Scatter sparingly across paper surfaces for the
 * bullet-journal collage feel.
 *
 * @startingPoint section="Brand" subtitle="Hand-drawn scrapbook motifs" viewport="700x150"
 */
export interface DecorationProps extends Omit<React.SVGProps<SVGSVGElement>, 'name'> {
  /** Which motif. @default 'sparkle' */
  name?: MotifName;
  /** Pixel size. @default 44 */
  size?: number;
  /** Collapse the motif's built-in multi-color to a single `color`. @default false */
  mono?: boolean;
  /** Tone used when `mono`. @default 'var(--sage-500)' */
  color?: string;
  /** 0–1 opacity — go faint (0.25–0.5) for background scatter. @default 1 */
  opacity?: number;
  /** Rotation in degrees. @default 0 */
  rotate?: number;
}

export declare function Decoration(props: DecorationProps): JSX.Element;
