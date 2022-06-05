import {
  AssetItemProps,
  Currency,
} from 'components/asset-item/asset-item.type';

const findAvailableData = (data: AssetItemProps[], currency: Currency) => {
  return data.find((item) => item.currency === currency);
};

export { findAvailableData };
