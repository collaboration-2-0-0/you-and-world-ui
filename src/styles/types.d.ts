import { vars } from './vars';
import { mixins } from './mixins';
import { TBreakpoints } from './breakpoints';

/* ===================== Palette declare ========================== */
export interface PaletteColor {
  extraLight?: string;
  light?: string;
  medium?: string;
  main: string;
  dark?: string;
  extraDark?: string;
}

export interface BackgroundColor {
  light: string;
  main: string;
  dark: string;
  disabled?: string;
  first: string;
  second: string;
  add: string;
}

export interface FontColor {
  light: string;
  dark: string;
  first: string;
  second: string;
  add: string;
}

export interface Palette {
  first: PaletteColor;
  second: PaletteColor;
  add: PaletteColor;
  light: PaletteColor;
  dark: PaletteColor;
  bg: BackgroundColor;
  font: FontColor;
}

/* ===================== Theme declare ========================== */
declare global {
  namespace Jss {
    export interface Theme {
      palette: Palette;
      mixins: typeof mixins;
      breakpoints: TBreakpoints;
      vars: typeof vars;
    }
  }
}
