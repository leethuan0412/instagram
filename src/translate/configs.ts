import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageLongCode, LanguageName, LanguageShortCode } from './types';
import localVietNamese from './locales/vi.json';
import localEnglish from './locales/en.json';

export const Languages = {
  VIETNAMESE: {
    shortCode: LanguageShortCode.VIETNAMESE,
    longCode: LanguageLongCode.VIETNAMESE,
    name: LanguageName.VIETNAMESE,
  },
  ENGLISH: {
    shortCode: LanguageShortCode.ENGLISH,
    longCode: LanguageLongCode.ENGLISH,
    name: LanguageName.ENGLISH,
  },
};

const resources = {
  [LanguageShortCode.ENGLISH]: {
    translation: localVietNamese,
  },
  [LanguageShortCode.VIETNAMESE]: {
    translation: localEnglish,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: LanguageShortCode.ENGLISH,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
