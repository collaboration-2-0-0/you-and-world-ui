import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'react-jss';
import { mixins } from './mixins';

import { useCssBaseline } from './hooks/useCssBaseline';
import { palette } from './palette';
import { vars } from './vars';
import { BREAKPOINT_MEDIA_QUERY } from './breakpoints';

export const getBreakpointQueries = () => {
  const breakpointQueries = { ...BREAKPOINT_MEDIA_QUERY };
  for (const [key, value] of Object.entries(breakpointQueries)) {
    breakpointQueries[key as keyof typeof breakpointQueries] = `@media ${value}`;
  }
  return breakpointQueries;
};

const BREAKPOINT_QUERIES = getBreakpointQueries();

function createCustomTheme(): Jss.Theme {
  return {
    palette,
    mixins,
    breakpoints: BREAKPOINT_QUERIES,
    vars,
  };
}

const defaultTheme = createCustomTheme();

const CssBaseline: FC = () => {
  useCssBaseline();
  return null;
};

const Theme: FC<PropsWithChildren<{ theme?: Jss.Theme }>> = ({ theme, children }) => (
  <ThemeProvider theme={theme || defaultTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export { defaultTheme, createCustomTheme, Theme };
