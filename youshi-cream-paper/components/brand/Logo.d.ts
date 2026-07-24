import * as React from 'react';

export type LogoVariant = 'seal' | 'script' | 'cn' | 'lockup';

/**
 * 祐识 · 奶油宣纸 brand marks (supplied transparent PNGs) or a
 * seal + wordmark lockup.
 *
 * @startingPoint section="Brand" subtitle="Logo marks & lockup" viewport="700x150"
 */
export interface LogoProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  /** 'seal' round stamp · 'script' English cursive · 'cn' 祐祐 brush · 'lockup' seal+wordmark. @default 'seal' */
  variant?: LogoVariant;
  /** Rendered height in px (width scales / lockup scales off this). @default 48 */
  height?: number;
  /**
   * Path to the assets folder relative to the page (e.g. "../../assets").
   * Falls back to window.__YOUYOU_ASSET_BASE__, then "assets".
   */
  base?: string;
  /** Alt text; defaults to the brand name. Pass "" for decorative. */
  alt?: string;
  style?: React.CSSProperties;
}

export declare function Logo(props: LogoProps): JSX.Element;
