import { useNavigate } from 'react-router-dom';

import AssetItem from 'components/asset-item/asset-item';

import {
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
  ActionItem,
  ActionIcon,
  ActionText,
  AssetsHeader,
} from 'pages/main/main.style';

import personIcon from 'assets/images/icons/person.svg';
import copyIcon from 'assets/images/icons/copy.svg';
import logo from 'assets/images/icons/ronin-white.svg';
import creditCardIcon from 'assets/images/icons/credit-card.svg';
import planeIcon from 'assets/images/icons/plane.svg';
import swapIcon from 'assets/images/icons/swap.svg';

import { accountDetailsData, assetsData } from 'pages/main/main.fixtures';

import { MAP_CURRENCY } from 'components/asset-item/asset-item.contants';

import { BASE_URL } from 'constants/routes';

import { localString } from 'utils';

const Main = () => {
  const navigate = useNavigate();

  const handleGoToSendAssets = () => navigate(BASE_URL.sendAssets);

  const { label, rate } = MAP_CURRENCY[accountDetailsData.currency];

  const exchange = `${localString(accountDetailsData.balance * rate)} ${
    MAP_CURRENCY[accountDetailsData.locale].label
  }`;

  return (
    <Container>
      <HeaderInfo>
        <DropDown>
          <Dot />
          <DropDownText>Ronin Wallet</DropDownText>
        </DropDown>
        <Person>
          <img src={personIcon} alt="person" />
        </Person>
      </HeaderInfo>
      <HeroCard>
        <HerroCardHeader>
          <MyWallet>
            <WalletText>My Wallet</WalletText>
            <WalletId>({accountDetailsData.walletId})</WalletId>
          </MyWallet>
          <img src={copyIcon} alt="copy" />
        </HerroCardHeader>
        <HerroCardBody>
          <BalanceContainer>
            <Balance>
              {localString(accountDetailsData.balance)} {label}
            </Balance>
            <ExchangeRate>{exchange}</ExchangeRate>
          </BalanceContainer>
          <img src={logo} alt="logo" />
        </HerroCardBody>
      </HeroCard>
      <ActionGroup>
        <ActionItem>
          <ActionIcon>
            <img src={creditCardIcon} alt="credit" />
          </ActionIcon>
          <ActionText>Deposit</ActionText>
        </ActionItem>
        <ActionItem>
          <ActionIcon>
            <img onClick={handleGoToSendAssets} src={planeIcon} alt="plane" />
          </ActionIcon>
          <ActionText active={true}>Send</ActionText>
        </ActionItem>
        <ActionItem>
          <ActionIcon>
            <img src={swapIcon} alt="swap" />
          </ActionIcon>
          <ActionText>Swap</ActionText>
        </ActionItem>
      </ActionGroup>
      <AssetsHeader>Assets</AssetsHeader>
      {assetsData.map(({ currency, balance }) => (
        <AssetItem key={currency} currency={currency} balance={balance} />
      ))}
    </Container>
  );
};

export default Main;
