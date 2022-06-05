type Currency = 'usd' | 'yen' | 'eur';

interface AssetItemProps {
  currency: Currency;
  balance: number;
  onClick?: (currency: Currency) => void;
}

export type { AssetItemProps, Currency };
