import styled from 'styled-components/macro';

import Button from 'components/button/button';

import { colors } from 'styles/colors';

import TextField from 'components/text-field/text-field';

const Container = styled.div`
  height: 100vh;
`;

const Header = styled.div`
  position: relative;
  padding: 18px 0;
  box-shadow: 0 4px 12px ${colors.ghostWhite};
`;

const BackIcon = styled.img`
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
`;

const Title = styled.div`
  font-weight: 600;
  text-align: center;
`;

const Body = styled.div`
  padding: 25px 20px 0;
`;

const Footer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 12px;
  display: flex;
  width: calc(100% - 24px);
  justify-content: space-between;
`;

const FooterButton = styled(Button)`
  width: 100%;
  margin: 0 8px;
`;

const AmountField = styled.div`
  position: relative;
`;

const Available = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.5px;
  position: absolute;
  right: 0;
  top: 4px;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 16px;
`;

const MyWallet = styled.div`
  font-weight: 600;
  color: ${colors.cadetGrey};
  white-space: nowrap;
`;

const SelectedAssetIcon = styled.img.attrs(() => ({
  width: 24,
  height: 24,
}))`
  margin-right: 8px;
`;

const SelectedAssetCurrency = styled.span``;

const Max = styled.span`
  padding: 2px 8px;
  height: 20px;
  background: ${colors.aliceBlue};
  border-radius: 8px;
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${colors.darkElectricBlue};
`;

export {
  Container,
  Header,
  BackIcon,
  Title,
  Body,
  Footer,
  StyledTextField,
  MyWallet,
  SelectedAssetIcon,
  SelectedAssetCurrency,
  Max,
  FooterButton,
  AmountField,
  Available,
};
