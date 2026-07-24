import * as React from 'react';
import type { IconName } from '../brand/Icon';

/**
 * A single sidebar row — nav links, project-tree folders/files, and
 * task items. Active state is marked by a sage brush-stroke at the left
 * rail plus a slightly enlarged, right-nudged label — no pill/fill/border.
 *
 * @startingPoint section="Navigation" subtitle="Sidebar nav / tree / task row" viewport="700x220"
 */
export interface NavItemProps extends React.HTMLAttributes<HTMLElement> {
  /** Leading icon (ignored if `leading` is provided). */
  icon?: IconName;
  /** Row label. */
  label: React.ReactNode;
  /** Active/current state. @default false */
  active?: boolean;
  /** Faint style for low-priority rows (e.g. "展开显示"). @default false */
  muted?: boolean;
  /** Indent + shrink for tree children / task rows. @default false */
  indent?: boolean;
  /** Custom leading element (e.g. a Checkbox or Avatar) instead of an icon. */
  leading?: React.ReactNode;
  /** Trailing content — a Badge, spinner, chevron, count, etc. */
  trailing?: React.ReactNode;
  /** Element/tag to render. @default 'button' */
  as?: keyof JSX.IntrinsicElements;
}

export declare function NavItem(props: NavItemProps): JSX.Element;
