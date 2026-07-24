import * as React from 'react';
import type { IconName } from '../brand/Icon';

export type InputSize = 'sm' | 'md' | 'lg';

/**
 * Text field & multiline textarea on inset cream, with optional label,
 * leading icon, hint and error. Underpins search, forms and the composer.
 *
 * @startingPoint section="Forms" subtitle="Text field & textarea" viewport="700x220"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement>, 'size'> {
  /** Field label above the control. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message (overrides hint, turns the field red). */
  error?: string;
  /** Leading icon inside the field. */
  leftIcon?: IconName;
  /** @default 'md' */
  size?: InputSize;
  /** Render a resizable textarea. @default false */
  multiline?: boolean;
  /** Rows when multiline. @default 3 */
  rows?: number;
  /** Mark required (adds an asterisk to the label). */
  required?: boolean;
}

export declare function Input(props: InputProps): JSX.Element;
