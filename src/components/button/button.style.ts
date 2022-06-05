import styled from 'styled-components/macro';

import { ButtonProps, ButtonVariant } from 'components/button/button.type';

import { colors } from 'styles/colors';

const getBackgroundColor = ({ variant }: ButtonProps) => {
  return variant === ButtonVariant.Secondary
    ? colors.ghostWhite
    : `linear-gradient(256.28deg, ${colors.dodgerBlue} 0%, ${colors.crayola} 100%)`;
};

const getTextColor = ({ variant }: ButtonProps) => {
  return variant === ButtonVariant.Secondary ? colors.crayola : colors.white;
};

const Container = styled.button`
  padding: 10px 20px;
  height: 40px;
  background: ${getBackgroundColor};
  border-radius: 8px;
  color: ${getTextColor};
  border: none;
  font-weight: 600;
`;

export { Container };
