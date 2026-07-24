import * as React from 'react';
import type { IconName } from '../brand/Icon';

export type IconButtonVariant = 'primary' | 'secondary' | 'soft' | 'ghost';
export type IconButtonSize = 'sm' | 'md' | 'lg';
export type IconButtonShape = 'circle' | 'square';

/**
 * Icon-only button — the round send / mic / + controls and toolbar
 * actions. Requires an accessible `label`.
 *
 * @startingPoint section="Forms" subtitle="Icon-only round & square buttons" viewport="700x150"
 */
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Icon glyph name. */
  icon: IconName;
  /** Accessible label (also the tooltip). Required. */
  label: string;
  /** @default 'ghost' */
  variant?: IconButtonVariant;
  /** @default 'md' */
  size?: IconButtonSize;
  /** @default 'circle' */
  shape?: IconButtonShape;
  /** Render the icon solid (heart/star/etc). @default false */
  fillIcon?: boolean;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
