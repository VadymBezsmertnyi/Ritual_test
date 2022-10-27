import { createTheme, Theme } from '@mui/material/styles';
import { InterFont, InterFontMedium } from 'fonts';

type TCustomColors = {
  main: {
    borderLightGray: string;
    backgroundCulturedWhite: string;
    fontRomanSilver: string;
    iconBorderSilverMetallic: string;
    fontEerieBlack: string;
    fontNewGray: string;
    lineAntiFlashWhite: string;

    selectLavenderWeb: string;
    iconSpanishGray: string;
  };
  font: {};
  background: {};
  accent: {};
  colors: {};
  other: {};
};
declare module '@mui/material/styles' {
  interface PaletteOptions {
    custom?: TCustomColors;
  }
  interface Palette {
    custom?: TCustomColors;
  }
}
declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

export enum AppColor {
  LightGray = '#D5D5D5',
  CulturedWhite = '#F8F8F8',
  LavenderWeb = '#EDE1FA',
  EerieBlack = '#1D1C1D',
  SpanishGray = '#91979A',
  RomanSilver = '#83898D',
  SilverMetallic = '#ABAAB5',
  Gray = '#827A8A',
  AntiFlashWhite = '#F2F2F2',
}

export const createAppTheme = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Inter',
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          fallbacks: [
            {
              '@font-face': {
                fontFamily: 'Inter',
                src: `url(${InterFont}) format('truetype')`,
              },
            },
            {
              '@font-face': {
                fontFamily: 'Inter-Medium',
                src: `url(${InterFontMedium}) format('truetype')`,
              },
            },
          ],
          body: {},
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '18px',
            lineHeight: '22px',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: 'Inter',
          },
        },
      },
    },
    palette: {
      custom: {
        main: {
          borderLightGray: AppColor.LightGray,
          backgroundCulturedWhite: AppColor.CulturedWhite,
          fontRomanSilver: AppColor.RomanSilver,
          iconBorderSilverMetallic: AppColor.SilverMetallic,
          fontEerieBlack: AppColor.EerieBlack,
          selectLavenderWeb: AppColor.LavenderWeb,
          fontNewGray: AppColor.Gray,
          lineAntiFlashWhite: AppColor.AntiFlashWhite,

          iconSpanishGray: AppColor.SpanishGray,
        },
        font: {},
        background: {},
        colors: {},
        accent: {},
        other: {},
      },
    },
  });
  return theme;
};
