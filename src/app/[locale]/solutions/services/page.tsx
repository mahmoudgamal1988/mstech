'use client';
import { SectionIntro } from '@/components/SectionIntro'
import { PageIntro } from '@/components/PageIntro'
import { Section } from '@/components/Section'
import { slashMethod } from '../../page'
import { useTranslation } from 'react-i18next';

import ConsultancyImg from './Consultancy.png'
import OutsourcingImg from './Outsourcing.png'
import ManagedServicesImg from './ManagedServices.png'
import IntegrationServicesgImg from './IntegrationServices.png'
import SoftwareDevelopmentImg from './SoftwareDevelopment.png'



export default function Services({ params: { locale } }: any) {

  const { t, i18n } = useTranslation()

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
          title={t('SERVICES', { ns: "Services" })}
          centered
          extraTitleClass='text-white'
          extraChildrenClass='text-white'
        >
          <h1>{t('SERVICES', { ns: "Services" })}</h1>
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
            t('SERVICES_TITLE', { ns: "Services" })
          }
        </>
      </SectionIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">

        <Section title={t('SERVICES_CONSULTANCY', { ns: "" }).split(slashMethod(i18n.language))[0]} titleExtraClass='text-primary' image={{ src: ConsultancyImg }}>
          <div className="space-y-6 text-base text-secondary">
            <>
              {t('SERVICES_CONSULTANCY', { ns: "Services" }).split(slashMethod(i18n.language))[1]}
            </>
          </div>
        </Section>
        <Section
          title={t('SERVICES_OUTSOURCING', { ns: "Services" }).split(slashMethod(i18n.language))[0]}
          titleExtraClass='text-primary'
          image={{ src: OutsourcingImg, shape: 1 }}
        >
          <div className="space-y-6 text-base text-secondary">
            <>
              {t('SERVICES_OUTSOURCING', { ns: "Services" }).split(slashMethod(i18n.language))[1]}
            </>
          </div>
        </Section>
        <Section title={t('SERVICES_MANAGED_SERVICES').split(slashMethod(i18n.language))[0]} titleExtraClass='text-primary' image={{ src: ManagedServicesImg }}>
          <div className="space-y-6 text-base text-secondary">
            <>
              {t('SERVICES_MANAGED_SERVICES', { ns: "Services" }).split(slashMethod(i18n.language))[1]}
            </>
          </div>
        </Section>
        <Section title={t('SERVICES_INTEGRATION_SERVICES').split(slashMethod(i18n.language))[0]} titleExtraClass='text-primary' image={{ src: IntegrationServicesgImg }}>
          <div className="space-y-6 text-base text-secondary">
            <>
              {t('SERVICES_INTEGRATION_SERVICES', { ns: "Services" }).split(slashMethod(i18n.language))[1]}
            </>
          </div>
        </Section>
        <Section title={t('SERVICES_SOFTWARE_DEVELOPMENT', { ns: "Services" }).split(slashMethod(i18n.language))[0]} titleExtraClass='text-primary' image={{ src: SoftwareDevelopmentImg }}>
          <div className="space-y-6 text-base text-secondary">
            <>
              {t('SERVICES_SOFTWARE_DEVELOPMENT', { ns: "Services" }).split(slashMethod(i18n.language))[1]}
            </>
          </div>
        </Section>

      </div>

    </>
  )
}
