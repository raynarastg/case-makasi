import { styled } from '../../stitches.config';

const StyledH1 = styled('h1', {
  color: '$petroleo',
  fontSize: 50,
  fontWeight: 500,
  margin: 0,
});

const StyledH2 = styled('h2', {
  fontSize: 32,
  fontWeight: 500,
  margin: 0,
  '@tablet': {
    fontSize: 28,
  },
  '@mobile': {
    fontSize: 20,
  },
});

const StyledH3 = styled('h3', {
  fontSize: 24,
  fontWeight: 500,
  margin: 0,
  '@tablet': {
    fontSize: 20,
  },
  '@mobile': {
    fontSize: 16,
  },
});
const StyledH4 = styled('h4', {
  fontSize: 20,
  fontWeight: 500,
  margin: 0,
  '@tablet': {
    fontSize: 16,
  },
});

const StyledH5 = styled('h5', {
  fontSize: 16,
  fontWeight: 500,
  margin: 0,
});

const StyledH6 = styled('h6', {
  fontSize: 24,
  fontWeight: 500,
  margin: 0,
  '@tablet': {
    fontSize: 20,
  },
});

export const H1Title = StyledH1;
export const H2Title = StyledH2;
export const H3Title = StyledH3;
export const H4Title = StyledH4;
export const H5Title = StyledH5;
export const H6Title = StyledH6;
