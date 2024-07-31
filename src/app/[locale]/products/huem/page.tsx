'use client';

import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import { useTranslation } from 'react-i18next';


import logo from './huem.png'
import leanhDetails from './himg.png'

export default function Huem({ params: { locale } }: any) {

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
      <article className="mt-24 sm:mt-32 lg:mt-52">
        <header>
          <PageIntro
            eyebrow=""
            title={t('HUEM', { ns: "HUEM" })}
            centered
            extraTitleClass='text-white'
            extraChildrenClass='text-white'
          >
            <h1>{t('HUEM_TITLE', { ns: "HUEM" })}</h1>
          </PageIntro>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-96 flex justify-center items-center flex-col">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[32rem] rounded-3xl object-fill flex justify-center mb-16" >
            <StylizedImage
              {...{ src: logo, shape: 2 }}
              sizes="(min-width: 960px) 20rem, 21rem"
              className="justify-center lg:justify-center lg:group-even/section:justify-center rounded-3xl"
            />
          </FadeIn>
          <FadeIn>
            <>
              <div className='px-44'>
                <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }} className='text-primary font-sans'>
                  {/* Overview */}
                </h1>
                <p className='font-sans text-secondary mt-8'>
                  {
                    splitTextWithBreaks(t('HUEM_CONTENT', { ns: "HUEM" }))}
                </p>
              </div>
            </>
          </FadeIn>
          <FadeIn className="w-[33.75rem] flex-none lg:w-[52rem] rounded-3xl object-fill flex justify-center" >
            <StylizedImage
              {...{ src: leanhDetails, shape: 2 }}
              sizes="(min-width: 960px) 20rem, 21rem"
              className="justify-center lg:justify-center lg:group-even/section:justify-center rounded-3xl"
            />
          </FadeIn>
          <FadeIn>
            <>
              <div className='px-44'>
                <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }} className='text-primary font-sans'>
                  {/* Overview */}
                </h1>
                <p className='font-sans text-secondary mt-8'>
                  {
                    splitTextWithBreaks(t('HUEM_CONTENT_2', { ns: "HUEM" }))}
                </p>
              </div>
            </>
          </FadeIn>
        </Container>
      </article >

    </>
  )
}
