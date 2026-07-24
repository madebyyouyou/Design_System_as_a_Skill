import * as React from 'react';

export type BadgeVariant = 'neutral' | 'sage' | 'gold' | 'rose' | 'danger' | 'info' | 'solid';
export type BadgeSize = 'sm' | 'md';

/**
 * Small status / count label. Pairs a tint with optional leading status dot.
 *
 * @startingPoint section="Display" subtitle="Status & count badges" viewport="700x150"
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** @default 'neutral' */
  variant?: BadgeVariant;
  /** @default 'md' */
  size?: BadgeSize;
  /** Show a leading status dot. @default false */
  dot?: boolean;
  /** Animate the dot (live/online). @default false */
  pulse?: boolean;
}

export declare function Badge(props: BadgeProps): JSX.Element;

/** A bare status dot (e.g. the sidebar "online" indicator). */
export interface StatusDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
  size?: number;
}
export declare function StatusDot(props: StatusDotProps): JSX.Element;
