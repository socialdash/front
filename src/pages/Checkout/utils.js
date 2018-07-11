// @flow

import { map, find } from 'ramda';

import type { AddressFullType } from 'components/AddressAutocomplete/AddressForm';

export const addressesToSelect = (deliveryAddresses: any) =>
  map(i => {
    if (!i.address || !i.address.value) {
      return null;
    }
    return { id: i.address.value, label: i.address.value };
  }, deliveryAddresses);

export const getAddressFullByValue = (deliveryAddresses: any, value: any) => {
  const addressValue = find(
    item => item.address.value === value,
    deliveryAddresses,
  );
  if (!addressValue) {
    return null;
  }
  return addressValue.address;
};

export const addressFullToString = (addressFull: AddressFullType) => {
  if (
    !addressFull ||
    !addressFull.country ||
    !addressFull.locality ||
    !addressFull.value
  ) {
    return 'no address';
  }
  return `${addressFull.country}, ${addressFull.locality}, ${
    addressFull.value
  }`;
};

export const calcTotal = (stores: any, fieldName: string) => {
  let total = 0;
  // eslint-disable-next-line
  for (let i = 0; i < stores.length; i++) {
    total += stores[i][fieldName];
  }
  return total;
};