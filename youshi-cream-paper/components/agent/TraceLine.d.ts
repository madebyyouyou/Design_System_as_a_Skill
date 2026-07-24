import * as React from 'react';
import type { IconName } from '../brand/Icon';

export type TraceKind = 'thinking' | 'tool';
export type TraceStatus = 'running' | 'done';

/**
 * Container that draws the continuous vertical connector for a run of
 * `TraceLine`s — the "chain". Put TraceLines as its direct children; the spine
 * links each step's rail icon (first/last ends are trimmed automatically).
 */
export interface TraceChainProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Background the rail icons sit on, so the spine reads as broken by each icon. @default canvas */
  bg?: string;
  children?: React.ReactNode;
}
export declare function TraceChain(props: TraceChainProps): JSX.Element;

/**
 * One lightweight step in the inline execution trace — a thinking step or a
 * read-only tool call. Progressive disclosure: collapsed and faint by default,
 * optionally expanding to reveal `detail` (plain text, or a rich results card).
 * Deliberately NOT a card; escalate to `ApprovalCard` for writes / permissions.
 *
 * Running steps animate with a TEXT SHIMMER (skeleton sweep) — not dots. The
 * 22px rail icon is where a platform-native animated glyph (e.g. SwiftUI) can
 * mount on a running step; omit `icon` to leave the reserved dashed placeholder.
 */
export interface TraceLineProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** `thinking` = sage summary line; `tool` = read-only tool step. @default 'tool' */
  kind?: TraceKind;
  /** The verb / summary, e.g. "查看日历" or "思考". */
  label?: React.ReactNode;
  /** Optional mono detail on the row, e.g. "明天 6:00–10:00". */
  target?: React.ReactNode;
  /** Right-aligned muted note, e.g. "10 results". */
  meta?: React.ReactNode;
  /** Rail icon. Omit to leave the reserved placeholder for a native animated glyph. */
  icon?: IconName;
  /** Show a trailing external-link glyph (e.g. a fetched URL). @default false */
  extLink?: boolean;
  /** Expandable body — the thinking chain text, or a rich node (results card). Presence makes the row a disclosure. */
  detail?: React.ReactNode;
  /** `running` adds the text shimmer; `done` is static. @default 'done' */
  status?: TraceStatus;
  /** Start expanded. @default false */
  defaultOpen?: boolean;
  /** Replace the rail icon entirely (e.g. mount your own animated glyph). */
  glyph?: React.ReactNode;
}
export declare function TraceLine(props: TraceLineProps): JSX.Element;
