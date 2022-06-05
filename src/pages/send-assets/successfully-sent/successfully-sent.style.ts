import styled from 'styled-components/macro';

import Button from 'components/button/button';
import { colors } from 'styles/colors';

const Container = styled.div`
  background: ${colors.white};
  top: 130px;
  position: relative;
  border-radius: 16px;
  padding: 24px 20px 20px;
`;

const Header = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
`;

const Body = styled.div`
  margin: 24px 0;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

export { Container, StyledButton, Header, Body };
