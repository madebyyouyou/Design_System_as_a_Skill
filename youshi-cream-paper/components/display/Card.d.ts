import * as React from 'react';

export type CardElevation = 'flat' | 'default' | 'raised' | 'floating';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';
export type TapeColor = 'sage' | 'gold' | 'rose';

/**
 * The floating paper surface — soft rounded corners, shallow warm shadow.
 * The base container for nearly everything.
 *
 * @startingPoint section="Display" subtitle="Paper card surface" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Shadow depth. @default 'default' */
  elevation?: CardElevation;
  /** Inner padding. @default 'md' */
  padding?: CardPadding;
  /** Use the brightest cream surface. @default false */
  highlight?: boolean;
  /** Hover-lift + pointer, for clickable cards. @default false */
  interactive?: boolean;
  /** Show a washi-tape strip pinned to the top edge. @default false */
  tape?: boolean;
  /** Tape tint. @default 'sage' */
  tapeColor?: TapeColor;
  /** Element/tag to render. @default 'div' */
  as?: keyof JSX.IntrinsicElements;
}

export declare function Card(props: CardProps): JSX.Element;
