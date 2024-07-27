import { SectionIntro } from '@/components/SectionIntro'
import { PageIntro } from '@/components/PageIntro'
import { Section } from '@/components/Section'

import initTranslations from '../../../i18n'
import { createInstance } from 'i18next'

import ConsultancyImg from './Consultancy.png'
import OutsourcingImg from './Outsourcing.png'
import ManagedServicesImg from './ManagedServices.png'
import IntegrationServicesgImg from './IntegrationServices.png'
import SoftwareDevelopmentImg from './SoftwareDevelopment.png'
import { slashMethod } from '../../page'



export default async function Services({ params: { locale } }: any) {

  const i18nNamespaces = ['Services'];
  const i18n = createInstance();
  const { t, resources } = await initTranslations(locale, i18nNamespaces, i18n);

  const splitTextWithBreaks = (text: string) => {
    return text.split('.').map((sentence, index) => (
      <span key={index} className="block my-4 font-bold text-[#464646] leading-10 text-xl">
        {sentence.trim()}
        {sentence.trim() && '.'}
      </span>
    ));
  };

  return (
    <>
      <header>
        <PageIntro
          eyebrow=""
          title={t('SERVICES')}
          centered
          extraTitleClass='text-white'
          extraChildrenClass='text-white'
        >
          <h1>{t('SERVICES')}</h1>
        </PageIntro>
      </header>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <SectionIntro eyebrow="" title="Overview" className="mt-96 sm:mt-32 lg:mt-96">
        <>
          {
            t('SERVICES_TITLE')
          }
        </>
      </SectionIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">

        <Section title={t('SERVICES_CONSULTANCY').split(slashMethod(i18n.language))[0]} titleExtraClass='text-primary' image={{ src: ConsultancyImg }}>
          <div className="space-y-6 text-base text-secondary">
            <>
              {t('SERVICES_CONSULTANCY').split(slashMethod(i18n.language))[1]}
            </>
          </div>
        </Section>
        <Section
          title={t('SERVICES_OUTSOURCING').split(slashMethod(i18n.language))[0]}
          titleExtraClass='text-primary'
          image={{ src: OutsourcingImg, shape: 1 }}
        >
          <div className="space-y-6 text-base text-secondary">
            <>
              {t('SERVICES_OUTSOURCING').split(slashMethod(i18n.language))[1]}
            </>
          </div>
        </Section>
        <Section title={t('SERVICES_MANAGED_SERVICES').split(slashMethod(i18n.language))[0]} titleExtraClass='text-primary' image={{ src: ManagedServicesImg }}>
          <div className="space-y-6 text-base text-secondary">
            <>
              {t('SERVICES_MANAGED_SERVICES').split(slashMethod(i18n.language))[1]}
            </>
          </div>
        </Section>
        <Section title={t('SERVICES_INTEGRATION_SERVICES').split(slashMethod(i18n.language))[0]} titleExtraClass='text-primary' image={{ src: IntegrationServicesgImg }}>
          <div className="space-y-6 text-base text-secondary">
            <>
              {t('SERVICES_INTEGRATION_SERVICES').split(slashMethod(i18n.language))[1]}
            </>
          </div>
        </Section>
        <Section title={t('SERVICES_SOFTWARE_DEVELOPMENT').split(slashMethod(i18n.language))[0]} titleExtraClass='text-primary' image={{ src: SoftwareDevelopmentImg }}>
          <div className="space-y-6 text-base text-secondary">
            <>
              {t('SERVICES_SOFTWARE_DEVELOPMENT').split(slashMethod(i18n.language))[1]}
            </>
          </div>
        </Section>

      </div>

    </>
  )
}
