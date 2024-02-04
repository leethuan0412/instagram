import { useTranslation } from 'react-i18next';

interface TranslateType {
  trans: (key: string, extra?: Object) => string;
}

export default function useTranslate(): TranslateType {
  const { t } = useTranslation();

  return {
    trans: t,
  };
}
