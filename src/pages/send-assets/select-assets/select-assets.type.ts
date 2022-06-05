import { Currency } from 'components/asset-item/asset-item.type';

interface SelectAssetsProps {
  onClose: () => void;
  onSelect: (currency: Currency) => void;
}

export type { SelectAssetsProps };
