import * as React from 'react';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerVariant = 'solid' | 'dashed';
export type DividerTone = 'default' | 'sage';

/**
 * Separator. The `dashed` variant is the signature bullet-journal
 * connector; add a `label` for a handwritten section break.
 *
 * @startingPoint section="Display" subtitle="Rules & handwritten section breaks" viewport="700x150"
 */
export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  /** @default 'horizontal' */
  orientation?: DividerOrientation;
  /** @default 'solid' */
  variant?: DividerVariant;
  /** @default 'default' */
  tone?: DividerTone;
  /** Centered handwritten label between two dashed rules (horizontal only). */
  label?: React.ReactNode;
}

export declare function Divider(props: DividerProps): JSX.Element;
