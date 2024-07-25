import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import i18nConfig from '../../i18nConfig';

export default async function initTranslations(
  locale,
  namespaces,
  i18nInstance,
  resources
) {
  
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);
  const apiKey = "Hz_6KLT93Ywk7kMAM8Dc8w";
  // const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;
  console.log("vvvv", resources)
  console.log("vvvv namespace", i18nInstance)

  // resources = {};

  i18nInstance.use(
    resourcesToBackend(
      (language, namespace) => {
        console.log("vvvv pppppp", namespace)
        return fetch(`https://api.i18nexus.com/project_resources/translations/${language}/${namespace}.json?api_key=${apiKey}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Failed to load ${namespace} namespace for ${language}: ${response.statusText}`);
            }
            return response.json();
          })
          .then(data => {
            console.log(`Loaded ${namespace} namespace for ${language}:`, data);
            return data;
          })
          .catch(error => {
            console.error(`Failed to load ${namespace} namespace for ${language}:`, error);
            throw error;
          })
      }
    )
  );

  // if (!resources) {

  // await Promise.all(
  //   namespaces.map(async (namespace) => {
  //     const response = await fetch(`https://api.i18nexus.com/project_resources/translations/${"en"}/${namespace}.json?api_key=${apiKey}`);
  //     if (!response.ok) {
  //       throw new Error(`Failed to load ${namespace} namespace for ${locale}: ${response.statusText}`);
  //     }
  //     const data = await response.json();
  //     console.log(`Loaded ${namespace} namespace for ${locale}:`, data);

  //     // Add fetched data to resources object
  //     if (!resources[locale]) {
  //       resources[locale] = {};
  //     }
  //     resources[locale][namespace] = data;
  //   })
  // );


  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t
  };
}