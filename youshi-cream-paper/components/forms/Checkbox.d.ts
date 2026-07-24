import * as React from 'react';

export type CheckboxShape = 'square' | 'circle';
export type CheckboxSize = 'sm' | 'md' | 'lg';

/**
 * Checkbox / task toggle. `circle` shape matches the sidebar task list;
 * `square` for forms. Controlled or uncontrolled.
 *
 * @startingPoint section="Forms" subtitle="Checkbox & task toggle" viewport="700x150"
 */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Optional text beside the box. */
  label?: React.ReactNode;
  /** @default 'square' */
  shape?: CheckboxShape;
  /** @default 'md' */
  size?: CheckboxSize;
  /** Strike through the label when checked (task lists). @default false */
  strikeOnDone?: boolean;
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;
