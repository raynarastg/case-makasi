import { styled } from '../../stitches.config';

const StyledInputContainer = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 5,
  '@tablet': {
    flexDirection: 'column',
    gap: 10,
  },
});

const StyledInput = styled('input', {
  border: '2px solid $petroleo',
  borderRadius: 4,
  minHeight: 50,
  width: '100%',
  maxWidth: 500,
  padding: '13px 15px',
  fontSize: 20,
  lineHeight: '20px',
});

export const InputContainer = StyledInputContainer;
export const Input = StyledInput;
