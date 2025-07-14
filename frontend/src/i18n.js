import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Digital Healthcare!",
      view_patients: "View Patients"
    }
  },
  hi: {
    translation: {
      welcome: "डिजिटल स्वास्थ्य में आपका स्वागत है!",
      view_patients: "मरीज देखें"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
