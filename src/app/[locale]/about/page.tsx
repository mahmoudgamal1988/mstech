'use client'

import { type Metadata } from 'next'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Vission, Mission } from '../home/VissionAndMission'
import { useTranslation } from 'react-i18next';

import aboutusImage from '@/images/aboutUs/SBD-PIC.png'


// export const metadata: Metadata = {
//   title: 'About Us',
//   description:
//     'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
// }

export default function About({ params: { locale } }: any) {
  const { t } = useTranslation()
  return (
    <>
      <PageIntro
        eyebrow={t('ABOUT_US', { ns: "ABOUT_US" })}
        title={t('ABOUT_US_TITLE', { ns: "ABOUT_US" })}
        extraTitleClass='text-white'
        extraChildrenClass='text-gray-50'
      >
        <>
        </>
      </PageIntro>

      <div className='mt-[650px]'>
        <Vission />
        <Mission />
      </div>

      <div className='flex justify-center mt-10'>
        <SectionIntro
          title=""
          className="mt-96 sm:mt-32 lg:mt-36 mr-0 ml-0 px-8"
        >
          <p className='ml-[0px] mt-[-0px]'>
            {t('ABOUT_US_CONTENT', { ns: "ABOUT_US" })}
          </p>
        </SectionIntro>
        <FadeIn className="w-[33.75rem] flex-none lg:w-[32rem]">
          <StylizedImage
            {...{ src: aboutusImage, shape: 1 }}
            sizes="(min-width: 960px) 20rem, 21rem"
            className="justify-center lg:justify-center lg:group-even/section:justify-center"
          />
        </FadeIn>
      </div>
    </>
  )
}
