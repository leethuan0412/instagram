import moment from 'moment';

export enum MomentFormat {
  DATE = 'DD/MM/YYYY',
  DAY_NAME = 'dddd',
  HH_MM = 'HH:mm',
  US_DATE = 'YYYY/MM/DD',
  DOT_DATE = 'YYYY.MM.DD',
}

function getDayOfWeek(value: any, placeholder: string = '') {
  const isValid = moment(value);

  return isValid.isValid()
    ? isValid.format(MomentFormat.DAY_NAME)
    : placeholder;
}

export function parseToString(
  format: MomentFormat,
  value: any,
  placeholder: string = '',
) {
  const isValid = moment(value);

  return isValid.isValid() ? isValid.format(format) : placeholder;
}

export default {
  getDayOfWeek,
  parseToString,
};
