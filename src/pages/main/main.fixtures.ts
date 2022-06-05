import {
  AssetItemProps,
  Currency,
} from 'components/asset-item/asset-item.type';

const accountDetailsData = {
  locale: 'vnd' as Currency,
  currency: 'usd' as Currency,
  balance: 1000,
  walletId: '7300 3777 3888 3334',
};

const assetsData: AssetItemProps[] = [
  {
    currency: 'usd',
    balance: 1000,
  },
  {
    currency: 'eur',
    balance: 50,
  },
  {
    currency: 'yen',
    balance: 10000,
  },
];

export { accountDetailsData, assetsData };
