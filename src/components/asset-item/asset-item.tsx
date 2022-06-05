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

const AssetItem = ({ currency, balance, onClick }: AssetItemProps) => {
  const { icon, label, rate } = MAP_CURRENCY[currency];
  return (
    <Container onClick={() => onClick && onClick(currency)}>
      <Icon src={icon} alt={label} />
      <BalanceContainer>
        <Balance>
          {localString(balance)} {label}
        </Balance>
        <Exchange>{localString(rate * balance)} VND</Exchange>
      </BalanceContainer>
    </Container>
  );
};

export default AssetItem;
