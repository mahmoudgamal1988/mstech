import initTranslations from '../i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import { createInstance } from 'i18next'

import Header from './home/Header'
import WhySection from './home/WhySection'
import VissionAndMission from './home/VissionAndMission'
import Values from './home/Values'
import CaseStudies from './home/CaseStudies'
import Services from './home/Services'
import Achievements from './home/Achievements'
import Partners from './home/Partners'
import Contact from './home/Contact'


export const commaMethod = (lng: string): string => {
  return lng === "en" ? ',' : "،"
}
export const slashMethod = (lng: string): string => {
  return "/"
}

export default async function Home({ params: { locale } }: any) {

  const i18nNamespaces = ['home'];
  const i18n = createInstance();

  const {  resources } = await initTranslations(locale, ['home'], i18n);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Header />
      <WhySection />
      <VissionAndMission />
      <Values />
      <CaseStudies />
      <Services />
      <Achievements />
      <Partners />
      <Contact />

    </TranslationsProvider>
  )
}
