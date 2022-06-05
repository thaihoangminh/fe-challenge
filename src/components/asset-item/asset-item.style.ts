import styled from 'styled-components/macro';

import { colors } from 'styles/colors';

const Container = styled.div`
  background: ${colors.ghostWhite};
  border-radius: 8px;
  padding: 12px 20px;
  margin-bottom: 8px;
  display: flex;
`;

const Icon = styled.img`
  margin-right: 16px;
`;

const BalanceContainer = styled.div``;

const Balance = styled.div`
  font-weight: 600;
`;

const Exchange = styled.div`
  color: ${colors.cadetGrey};
`;

export { Container, Icon, BalanceContainer, Balance, Exchange };
