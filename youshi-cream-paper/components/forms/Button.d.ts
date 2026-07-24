import * as React from 'react';
import type { IconName } from '../brand/Icon';

/**
 * The 祐识 button emphasis ladder. `solid` is the one loud action per surface;
 * everything else steps down so a view is never a wall of filled pills.
 * `primary`/`secondary` are kept as aliases of `solid`/`outline`.
 */
export type ButtonVariant =
  | 'solid'     // sage fill — the single primary action
  | 'outline'   // solid hairline on paper — standard secondary
  | 'dashed'    // dashed sage outline — optional / additive ("add another")
  | 'text'      // label + dashed underline, no box — inline low-emphasis
  | 'ghost'     // no fill until hover — toolbars / repeated rows
  | 'tag'       // paper "stamp": dashed rounded rect, tilted a hair
  | 'soft'      // quiet sage wash
  | 'danger'    // solid destructive confirm (sparingly)
  | 'primary'   // alias of solid
  | 'secondary';// alias of outline

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonTone = 'default' | 'danger';

/**
 * @startingPoint section="Forms" subtitle="Button — full emphasis ladder" viewport="720x180"
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children?: React.ReactNode;
  /** Emphasis level. @default 'primary' (= solid) */
  variant?: ButtonVariant;
  /** @default 'md' */
  size?: ButtonSize;
  /** Recolor `text` / `ghost` / `tag` for destructive intent (e.g. a "deny"/"remove"). @default 'default' */
  tone?: ButtonTone;
  /** Fully rounded pill shape (ignored by `text`/`tag`). @default false */
  pill?: boolean;
  /** Stretch to container width. @default false */
  block?: boolean;
  /** Icon before the label. */
  leftIcon?: IconName;
  /** Icon after the label. */
  rightIcon?: IconName;
  /** Show a spinner and disable. @default false */
  loading?: boolean;
}

export declare function Button(props: ButtonProps): JSX.Element;
