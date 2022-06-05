type Currency = 'usd' | 'yen' | 'eur' | 'vnd';

interface AssetItemProps {
  currency: Currency;
  balance: number;
  onClick?: (currency: Currency) => void;
}

export type { AssetItemProps, Currency };
