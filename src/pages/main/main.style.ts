import styled from 'styled-components/macro';

import { colors } from 'styles/colors';

import backgroundIcon from 'assets/images/main-background.svg';
import { getLinearGradient } from 'styles/linearGradient';

const Container = styled.div`
  padding: 20px;
  background: url(${backgroundIcon}) 14px 24px no-repeat;
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const DropDown = styled.div`
  height: 32px;
  background: #f7f9fc;
  border-radius: 8px;
  padding: 6px 12px;
`;

const DropDownText = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  margin-right: 12px;
  background: ${colors.crayola};
  display: inline-block;
  border-radius: 100%;
`;

const Person = styled.div`
  width: 32px;
  height: 32px;
  background: ${colors.ghostWhite};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroCard = styled.div`
  width: 100%;
  height: 152px;
  background: ${getLinearGradient};
  box-shadow: 0 12px 20px -4px ${colors.lightPeriwinkle};
  border-radius: 16px;
  padding: 18px 20px;
  margin-bottom: 28px;
`;

const HerroCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 14px;
  border-bottom: 1px solid ${colors.veryLightAzure};
`;

const MyWallet = styled.div``;

const WalletText = styled.span`
  font-weight: 600;
  color: ${colors.white};
  margin-right: 8px;
`;

const WalletId = styled.span`
  color: ${colors.lightSkyBlue};
`;

const HerroCardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 12px;
`;

const BalanceContainer = styled.div``;

const Balance = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: ${colors.white};
  margin-bottom: 4px;
`;

const ExchangeRate = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.lightSkyBlue};
`;

const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const ActionItem = styled.div`
  text-align: center;
`;

const ActionIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${colors.ghostWhite};
  border-radius: 8px;
  margin: 0 12px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ActionText = styled.span<{ active?: boolean }>`
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  line-height: 20px;
`;

const AssetsHeader = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin: 0 0 12px 12px;
`;

export {
  Container,
  DropDown,
  Dot,
  DropDownText,
  HeaderInfo,
  Person,
  HeroCard,
  HerroCardHeader,
  HerroCardBody,
  MyWallet,
  WalletText,
  WalletId,
  Balance,
  ExchangeRate,
  BalanceContainer,
  ActionGroup,
  ActionIcon,
  ActionItem,
  ActionText,
  AssetsHeader,
};
