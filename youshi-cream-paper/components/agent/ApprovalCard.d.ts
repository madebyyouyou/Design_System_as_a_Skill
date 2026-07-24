import * as React from 'react';
import type { IconName } from '../brand/Icon';

export type ApprovalTone = 'default' | 'danger';
export type ApprovalStatus = 'pending' | 'approved' | 'denied';

export interface ApprovalMetaRow {
  icon?: IconName;
  text: React.ReactNode;
}

/**
 * The prominent write-action / permission "envelope" — the ONLY agent-trace
 * element allowed to be a big card. Reserve it for consequential writes and
 * permission requests; read-only steps stay `TraceLine`s.
 *
 * It reads as paper gently assembled on a journal page (a leaf sticker, a
 * dashed divider, a 祐 seal), not a modal. Approving is stamping the seal:
 * it lifts, presses down leaving a muted ink imprint, then the card collapses
 * into a compact completed receipt. Entrance is a four-beat placement
 * (backing → paper → overlays → seal); all motion is transforms + opacity and
 * is replaced by a short opacity fade under prefers-reduced-motion.
 *
 * Uncontrolled by default (manages pending → approved/denied); pass `status`
 * to control it.
 */
export interface ApprovalCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** The write action / subject, e.g. "河边散步" or "删除这条记忆？". */
  title?: React.ReactNode;
  /** Sub-line under the title (the concrete consequence). Wrap specifics in `<span className="yy-ap__mono">…</span>`. */
  detail?: React.ReactNode;
  /** Icon + text rows (e.g. calendar date, reminder). */
  meta?: ApprovalMetaRow[];
  /** The confirm prompt beside the heart. @default '需要你确认' ( / '确认后不可恢复' for danger) */
  confirmNote?: React.ReactNode;
  /** `danger` for destructive writes: ivory paper, rose accents + a lotus-mauve 祐 seal. @default 'default' */
  tone?: ApprovalTone;
  /** Controlled state. Omit to let the card manage its own. */
  status?: ApprovalStatus;
  /** Initial state when uncontrolled. @default 'pending' */
  defaultStatus?: ApprovalStatus;
  onApprove?: () => void;
  onDeny?: () => void;
  onUndo?: () => void;
  /** Seal caption / aria-label. @default '盖章确认' ( / '确认删除' for danger) */
  sealLabel?: React.ReactNode;
  /** @default '先不了' */
  denyLabel?: React.ReactNode;
  /** Note on the completed receipt. @default '已记入' */
  approvedNote?: React.ReactNode;
  /** Show an "撤销" affordance on the receipt. @default false */
  showUndo?: boolean;
  /** Play the four-beat entrance on mount. @default true */
  animateIn?: boolean;
  /** Assets folder path (for the botanical sprig + 祐 seal), relative to the page. Falls back to window.__YOUYOU_ASSET_BASE__ or "assets". */
  base?: string;
}

export declare function ApprovalCard(props: ApprovalCardProps): JSX.Element;
