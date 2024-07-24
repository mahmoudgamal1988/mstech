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
  const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

  // if (!resources) {
  //   i18nInstance.use(
  //     resourcesToBackend(
  //       (language, namespace) => (`https://api.i18nexus.com/project_resources/translations/{${language}}/${namespace}.json?api_key=${apiKey}`)
  //     )
  //   );
  // }
  // import(`../../locales/${language}/${namespace}.json`)
  console.log("vvvv", resources)

  if (!resources) {

    i18nInstance.use(
      resourcesToBackend(
        (language, namespace) => {

            console.log("vvvv", namespace)
          return import(`../../locales/${language}/${namespace}.json`)
        }
      )
    );
  }

  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t
  };
}