import * as React from 'react';
import type { IconName } from '../brand/Icon';

export type ChipVariant = 'soft' | 'solid' | 'outline' | 'plain' | 'gold' | 'rose';
export type ChipSize = 'sm' | 'md';

/**
 * Compact pill for tags, filters, and the composer's inline controls
 * (选择项目, 完全访问, model). Static, clickable, selectable or removable.
 *
 * @startingPoint section="Display" subtitle="Pills, tags & filter chips" viewport="700x150"
 */
export interface ChipProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onClick'> {
  children?: React.ReactNode;
  /** @default 'soft' */
  variant?: ChipVariant;
  /** @default 'md' */
  size?: ChipSize;
  /** Leading icon. */
  leftIcon?: IconName;
  /** Show a status dot. @default false */
  dot?: boolean;
  /** Dot color override (defaults to text color). */
  dotColor?: string;
  /** Selected/active toggle look. @default false */
  selected?: boolean;
  /** Render as a button and handle clicks. */
  onClick?: (e: React.MouseEvent) => void;
  /** Show a remove "×"; called when clicked. */
  onRemove?: (e: React.MouseEvent) => void;
}

export declare function Chip(props: ChipProps): JSX.Element;
