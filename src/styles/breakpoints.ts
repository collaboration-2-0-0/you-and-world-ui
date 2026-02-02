export const BREAKPOINTS = ['maxWidth', 'minHeight'] as const;

type BreakpointKey = (typeof BREAKPOINTS)[number];
export type TBreakpoints = Record<BreakpointKey, string>;

export const BREAKPOINT_MEDIA_QUERY = {
  maxWidth: '(min-width: 480px)',
  minHeight: '(max-height: 520px)',
};
