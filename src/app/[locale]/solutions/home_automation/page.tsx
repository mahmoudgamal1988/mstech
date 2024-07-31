'use client';

import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { FadeIn } from '@/components/FadeIn'
import { useTranslation } from 'react-i18next';

export default function HomeAutomation({ params: { locale } }: any) {

  const { t } = useTranslation()

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
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro
            eyebrow=""
            title={t('HOME_AUTOMATION', { ns: "HOME_AUTOMATION" })}
            centered
            extraTitleClass='text-white'
            extraChildrenClass='text-white'
          >
            <h1>{t('HOME_AUTOMATION_TITLE', { ns: "HOME_AUTOMATION" })}</h1>
          </PageIntro>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-96 flex justify-center items-center flex-col">
          <FadeIn>
            {/* <MDXComponents.wrapper>{ */}
            <>
              <div className='px-44 pt-28'>
                <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }} className='text-primary font-sans'>
                  Overview
                </h1>
                <p className='font-sans text-secondary mt-8'>
                  {
                    splitTextWithBreaks(t('HOME_AUTOMATION_CONTENT', { ns: "HOME_AUTOMATION" }))}
                </p>
              </div>

            </>
          </FadeIn>
        </Container>
      </article >

    </>
  )
}
