import * as React from 'react';

export type IconName =
  | 'square-pen' | 'calendar' | 'package' | 'grid' | 'git-pull-request'
  | 'message' | 'folder' | 'folder-open' | 'file' | 'search' | 'plus'
  | 'minus' | 'check' | 'x' | 'mic' | 'arrow-up' | 'arrow-left'
  | 'arrow-right' | 'chevron-right' | 'chevron-down' | 'settings'
  | 'code' | 'wrench' | 'clipboard-check' | 'lock' | 'globe'
  | 'panel-left' | 'more' | 'camera' | 'circle' | 'image' | 'pencil'
  | 'list' | 'shirt' | 'user' | 'help' | 'plug' | 'refresh'
  // solid motifs (use with fill)
  | 'heart' | 'star' | 'sparkle' | 'dot';

/**
 * Line + solid icon for 祐识 · 奶油宣纸. Even rounded stroke; `fill`
 * turns the motif icons (heart/star/sparkle/dot) solid.
 *
 * @startingPoint section="Brand" subtitle="Hand-drawn-style icon set" viewport="700x150"
 */
export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'name' | 'color'> {
  /** Which glyph to render. */
  name: IconName;
  /** Pixel size (width & height). @default 20 */
  size?: number;
  /** Stroke weight for line icons. @default 1.9 */
  strokeWidth?: number;
  /** Stroke/fill color. @default 'currentColor' */
  color?: string;
  /** Render solid (only meaningful for heart/star/sparkle/dot). @default false */
  fill?: boolean;
  /** Accessible label; omit for decorative icons. */
  title?: string;
}

export declare function Icon(props: IconProps): JSX.Element;
