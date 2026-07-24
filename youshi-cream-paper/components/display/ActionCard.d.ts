import * as React from 'react';
import type { IconName } from '../brand/Icon';

export type ActionAccent = 'sage' | 'gold' | 'rose';

/**
 * The hero feature tile — a centered icon-in-a-wash-circle, a title, and
 * a little heart. The clickable quick-action cards under the greeting.
 *
 * @startingPoint section="Display" subtitle="Hero feature / quick-action tile" viewport="700x220"
 */
export interface ActionCardProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'title'> {
  /** Icon glyph. */
  icon: IconName;
  /** Tile title (1–2 lines). */
  title: React.ReactNode;
  /** Optional supporting line. */
  description?: React.ReactNode;
  /** Icon-circle tint. @default 'sage' */
  accent?: ActionAccent;
  /** Selected ring. @default false */
  selected?: boolean;
  /** Show the little heart in the footer. @default true */
  footerHeart?: boolean;
}

export declare function ActionCard(props: ActionCardProps): JSX.Element;
