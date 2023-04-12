import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, getCssText, keyframes, theme, createTheme, config, reset } = createStitches({
  theme: {
    colors: {
      petroleo: 'rgb(59, 66, 82)',
      white: 'white',
    },
  },
  media: {
    mobile: '(max-width: 360px)',
    tablet: '(max-width: 768px)',
    desktop: '(min-width: 1300px)',
  },
  utils: {
    px: (value: string | number) => ({
      paddingRight: value,
      paddingLeft: value,
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export const globalStyles = globalCss({
  'html, body': {
    padding: 0,
    margin: 0,
    fontFamily: 'Roboto, sans-serif',
  },
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    scrollBehavior: 'smooth',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
});
