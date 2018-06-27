// @flow

import moment from 'moment';

export const stringFromTimestamp = (input: {
  timestamp: number,
  format: ?string,
}): string => {
  // date object from timestamp
  const dateObj = moment(input.timestamp).utc();
  return dateObj.format(input.format || 'DD-MM-YYYY HH:mm');
};

// return `17:44`
export const timeFromTimestamp = (timestamp: number): string =>
  stringFromTimestamp({ timestamp, format: 'HH:mm' });

// return `18 Jan 1970`
export const shortDateFromTimestamp = (timestamp: number) =>
  stringFromTimestamp({ timestamp, format: 'DD MMM YYYY' });

// return `18 January 1970`
export const fullDateFromTimestamp = (timestamp: number) =>
  stringFromTimestamp({ timestamp, format: 'DD MMMM YYYY' });
