import AssetItem from 'components/asset-item/asset-item';

import { SelectAssetsProps } from 'pages/send-assets/select-assets/select-assets.type';
import { Container, Header, Body, CloseIcon } from 'pages/send-assets/select-assets/select-assets.stype';

import closeIcon from 'assets/images/icons/close.svg';
import { selectAssetsData } from 'pages/send-assets/select-assets/select-assets.fixtures';

const SelectAssets = ({ onClose, onSelect }: SelectAssetsProps) => {
  return (
    <Container onClick={onClose}>
      <Header>
        Assets <CloseIcon src={closeIcon} alt="close" />
      </Header>
      <Body>
        {selectAssetsData.map(({ currency, balance }) => (
          <AssetItem
            onClick={onSelect}
            key={currency}
            currency={currency}
            balance={balance}
          />
        ))}
      </Body>
    </Container>
  );
};

export default SelectAssets;
