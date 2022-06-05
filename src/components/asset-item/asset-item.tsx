import {
  Container,
  Icon,
  BalanceContainer,
  Balance,
  Exchange,
} from 'components/asset-item/asset-item.style';
import { AssetItemProps } from 'components/asset-item/asset-item.type';
import { MAP_CURRENCY } from 'components/asset-item/asset-item.contants';
import { localString } from 'utils';
import { accountDetailsData } from 'pages/main/main.fixtures';

const AssetItem = ({ currency, balance, onClick }: AssetItemProps) => {
  const { icon, label, rate } = MAP_CURRENCY[currency];
  const exchange = `${localString(rate * balance)} ${
    MAP_CURRENCY[accountDetailsData.locale].label
  }`;

  return (
    <Container onClick={() => onClick && onClick(currency)}>
      <Icon src={icon} alt={label} />
      <BalanceContainer>
        <Balance>
          {localString(balance)} {label}
        </Balance>
        <Exchange>{exchange}</Exchange>
      </BalanceContainer>
    </Container>
  );
};

export default AssetItem;
