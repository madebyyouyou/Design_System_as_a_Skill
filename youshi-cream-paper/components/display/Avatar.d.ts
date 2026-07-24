import * as React from 'react';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
export type AvatarShape = 'circle' | 'rounded';
export type AvatarTone = 'sage' | 'gold' | 'rose';

/**
 * User avatar — image or auto initials (Latin & CJK), optional presence
 * ring and status dot.
 *
 * @startingPoint section="Display" subtitle="User avatar & presence" viewport="700x150"
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL; falls back to initials when absent. */
  src?: string;
  /** Name used for initials and alt text. */
  name?: string;
  /** @default 'md' */
  size?: AvatarSize;
  /** @default 'circle' */
  shape?: AvatarShape;
  /** Fallback background tint. @default 'sage' */
  tone?: AvatarTone;
  /** Presence ring. @default false */
  ring?: boolean;
  /** Corner status dot. @default false */
  status?: boolean;
  /** Status dot color. @default sage */
  statusColor?: string;
}

export declare function Avatar(props: AvatarProps): JSX.Element;
