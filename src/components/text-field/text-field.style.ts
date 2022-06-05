import styled from 'styled-components/macro';

import { colors } from 'styles/colors';

const Container = styled.div`
  width: 100%;
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${colors.darkElectricBlue};
  margin-left: 8px;
`;

const InputAdornment = styled.div`
  display: flex;
  align-items: center;
`;

const InputContainer = styled.div<{ disabled?: boolean }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid ${colors.lightPeriwinkle};
  border-radius: 8px;
  padding: 0 16px;
  background: ${({ disabled }) => disabled && colors.antiFlashWhite};
`;

const Input = styled.input<{ startAdornment: boolean; endAdornment: boolean }>`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  padding: 0;
  margin-left: ${({ startAdornment }) => startAdornment && '8px'};
  margin-right: ${({ endAdornment }) => endAdornment && '8px'};

  &:disabled {
    color: ${colors.cadetGrey};
  }
`;

export { Container, Label, InputContainer, Input, InputAdornment };
