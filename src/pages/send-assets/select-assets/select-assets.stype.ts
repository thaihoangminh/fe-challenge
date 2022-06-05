import styled from 'styled-components/macro';
import { colors } from 'styles/colors';

const Container = styled.div`
  background: ${colors.white};
  border-radius: 16px;
  position: relative;
  height: 100%;
`;

const Header = styled.div`
  position: relative;
  font-weight: 600;
  text-align: center;
  padding: 24px 0 16px 0;
  border-bottom: 1px solid ${colors.lightPeriwinkle};
`

const CloseIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`

const Body = styled.div``

export { Container, Header, Body, CloseIcon };
