import { formatDateToString, numberHelper, isEmpty } from 'src/utils/utils';

describe('check number helper', () => {
  it('should return number has been formatted when input string', () => {
    expect(numberHelper('1000')).toBe('1,000');
  });

  it('should return number has been formatted when input number', () => {
    expect(numberHelper(1000)).toBe('1,000');
  });

  it('should return empty string when input number', () => {
    expect(numberHelper('0')).toBe('');
    expect(numberHelper('-1000')).toBe('');
    expect(numberHelper(0)).toBe('');
    expect(numberHelper(-1000)).toBe('');
  });
});

describe('check render date', () => {
  it('should return date formatted when input date string', () => {
    expect(formatDateToString('2023-09-18T10:12:09.665Z')).toBe('2023-09-18');
  });

  it('should return empty string when input not correct', () => {
    expect(formatDateToString('')).toBe('');
    expect(formatDateToString('12214234')).toBe('');
    expect(formatDateToString('a')).toBe('');
  });
});

describe('check isEmpty', () => {
  it('should truthy when input zero', () => {
    expect(isEmpty(0)).not.toBeTruthy();
  });

  it('should truthy when input truthy value', () => {
    expect(isEmpty(1)).not.toBeTruthy();
    expect(isEmpty('1')).not.toBeTruthy();
    expect(isEmpty('-1')).not.toBeTruthy();
    expect(isEmpty(true)).not.toBeTruthy();
    expect(isEmpty({})).not.toBeTruthy();
    expect(isEmpty([])).not.toBeTruthy();
  });

  it('should truthy when input falsy value ignore zero', () => {
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty('')).toBeTruthy();
    expect(isEmpty(false)).toBeTruthy();
  });
});
