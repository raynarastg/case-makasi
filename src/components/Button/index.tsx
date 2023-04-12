import { styled } from '../../stitches.config';

const StyledButton = styled('button', {
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  backgroundColor: '$petroleo',
  flexShrink: 0,
  color: '$white',
  padding: '13px 50px',
  borderRadius: 4,
  gap: 5,
  fontSize: 24,
  lineHeight: '24px',
  span: {
    fontFamily: 'Material Symbols Outlined',
    fontVariant: "'FILL' 0 'wght' 400 'GRAD' 0 'opsz' 48",
    fontSize: 35,
  },
  variants: {
    backgroundColor: {
      white: {
        backgroundColor: '$white',
        '@tablet': {
          padding: '8px 15px',
          fontSize: 16,
          lineHeight: '16px',
        },
      },
    },
    color: {
      petroleo: {
        color: '$petroleo',
      },
    },
    fontSize: {
      size: {
        fontSize: 16,
      },
    },
  },
});

export const Button = StyledButton;
