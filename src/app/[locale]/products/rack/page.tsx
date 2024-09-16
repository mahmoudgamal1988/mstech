'use client';

import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import { useTranslation } from 'react-i18next';


import logo from './rack.png'
import productDetails from './rack3.png'
import productDetails2 from './rack22.png'

export default function Rack({ params: { locale } }: any) {

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
            title={t('RACK', { ns: "rack" })}
            centered
            extraTitleClass='text-white'
            extraChildrenClass='text-white'
          >
            <h1>{t('RACK_TITLE', { ns: "rack" })}</h1>
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
              <div className='px-4 md:px-20 lg:px-44'>
                <p className='font-sans text-secondary mt-8'>
                  {
                    splitTextWithBreaks(t('RACK_CONTENT', { ns: "rack" }))
                  }
                </p>
              </div>
            </>
          </FadeIn>
          <FadeIn className="w-[33.75rem] flex-none lg:w-[52rem] rounded-3xl object-fill flex justify-center" >
            <StylizedImage
              {...{ src: productDetails, shape: 2 }}
              sizes="(min-width: 960px) 20rem, 21rem"
              className="justify-center lg:justify-center lg:group-even/section:justify-center rounded-3xl"
            />
          </FadeIn>
          <FadeIn>
            <>
              <div className='px-4 md:px-20 lg:px-44'>
                <p className='font-sans text-secondary mt-8'>
                  {
                    splitTextWithBreaks(t('RACK_CONTENT_2', { ns: "rack" }))
                  }
                </p>
              </div>
            </>
          </FadeIn>
          <FadeIn className="w-[33.75rem] flex-none lg:w-[52rem] rounded-3xl object-fill flex justify-center" >
            <StylizedImage
              {...{ src: productDetails2, shape: 2 }}
              sizes="(min-width: 960px) 20rem, 21rem"
              className="justify-center lg:justify-center lg:group-even/section:justify-center rounded-3xl"
            />
          </FadeIn>
        </Container>
      </article >
    </>
  )
}
