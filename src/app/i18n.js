import i18next from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import i18nConfig from '../../i18nConfig';
import LanguageDetector from "i18next-browser-languagedetector";

const apiKey = "Hz_6KLT93Ywk7kMAM8Dc8w";
const allNameSpaces = ["home", "businesses", "HOME_AUTOMATION", "Services", "leanh", "rack", "HUEM", "PROPTECH", "USE-CASES", "ABOUT_US", "CONTACT_US", "Comman"];
const languages = i18nConfig.locales;

const loadTranslations = async () => {
  try {
    for (const language of languages) {
      for (const namespace of allNameSpaces) {
        const response = await fetch(`https://api.i18nexus.com/project_resources/translations/${language}/${namespace}.json?api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error(`Failed to load ${namespace} namespace for ${language}: ${response.statusText}`);
        }
        const data = await response.json();
        // console.log("-----------daddd --------", data)
        i18next.addResources(language, namespace, data);
      }
    }
  } catch (error) {
    console.error('Error loading translations:', error);
    throw error;
  }
};

// Initialize i18next after loading all translations
const initI18next = async () => {
  return i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      // lng: i18nConfig.defaultLocale, // Default language
      fallbackLng: i18nConfig.defaultLocale,
      supportedLngs: i18nConfig.locales,
      ns: allNameSpaces, // List of namespaces
      defaultNS: 'home', // Default namespace if not specified in t() calls
      fallbackNS: "home",
    }).then(async () => {
      return await loadTranslations();
    });
};

const i18nextPromise = initI18next();
export default i18nextPromise;