import initTranslations from '../i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import ExampleComp from './ExampleComp'

import Header from './home/Header'
import WhySection from './home/WhySection'
import VissionAndMission from './home/VissionAndMission'
// import Values from './home/Values'

export default async function Home({ params: { locale } }: any) {

  const i18nNamespaces = ['home'];
  const { t, resources } = await initTranslations(locale, ['home']);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Header />
      {/* <WhySection />
      <VissionAndMission /> */}
      {/* <Values /> */}

    </TranslationsProvider>
  )
}
