import {
  css,
  Interpolation,
  StyledProps,
  ThemedStyledProps,
} from "styled-components";
import {
  FontStyle,
  FontWeight,
  Wat2DoFont,
  Wat2DoFonts,
  Wat2DoFontWeight,
} from "./fonts";
import { Wat2DoTheme } from "./theme";

export const rem =
  (...values: Array<number | "auto">) =>
  ({ theme }: StyledProps<unknown>) =>
    values
      .map((n) => (n === "auto" ? n : `${n / theme.baseFontSize}rem`))
      .join(" ");

export const fontFamily =
  <T extends Wat2DoFont>(font: T) =>
  ({ theme }: StyledProps<unknown>): string =>
    theme.fonts[font].family;

export const fontWeight =
  <T extends Wat2DoFont, TT extends Wat2DoFontWeight<T>>(font: T, weight: TT) =>
  ({ theme }: StyledProps<unknown>): FontWeight => {
    const fontConfig = theme.fonts[font];
    const fontVariants = fontConfig.variants as Wat2DoFonts[T]["variants"];
    return fontVariants[weight] as unknown as FontWeight;
  };

export const font =
  <T extends Wat2DoFont, TT extends Wat2DoFontWeight<T>, TTT extends FontStyle>(
    font: T,
    weight: TT,
    style: TTT
  ) =>
  ({ theme }: StyledProps<unknown>) => {
    const fontConfig = theme.fonts[font];
    const fontVariants = fontConfig.variants as Wat2DoFonts[T]["variants"];
    const fontWeight = fontVariants[weight];

    return `
          font-family: ${fontConfig.family};
          font-weight: ${fontWeight};
          font-style: ${style};
      `;
  };

export const color =
  <T extends keyof Wat2DoTheme["colors"]>(color: T) =>
  ({ theme }: StyledProps<unknown>) =>
    theme.colors[color];

export const up =
  <Props extends object>(breakpoint: keyof Wat2DoTheme["breakpoints"]) =>
  (
    template: TemplateStringsArray,
    ...values: Interpolation<ThemedStyledProps<Props, Wat2DoTheme>>[]
  ) =>
  ({ theme }: StyledProps<unknown>) =>
    css`
      @media (min-width: ${rem(theme.breakpoints[breakpoint])}) {
        ${css<Props>(template, ...values)}
      }
    `;
