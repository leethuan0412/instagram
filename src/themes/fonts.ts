const family = {
  Pretendard_Bold: 'Pretendard-Bold',
  Pretendard_Medium: 'Pretendard-Medium',
  Pretendard_Regular: 'Pretendard-Regular',
};

const size = {
  H0: 24,
  H1: 20,
  H2: 18,
  H3: 16,
  B0: 16,
  B1: 14,
  B2: 13,
  C1: 12,
};

const lineHeight = {
  H0: 28,
  H1: 24,
  H2: 21,
  H3: 19,
  B0: 19,
  B1: 22,
  B2: 15,
  C1: 14,
};

type TWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

interface IFontWeight {
  bold: TWeight;
  semibold: TWeight;
  normal: TWeight;
  thin: TWeight;
}

const weight: IFontWeight = {
  bold: '700',
  semibold: '500',
  normal: '400',
  thin: '300',
};

export default {
  family,
  size,
  weight,
  lineHeight,
};
