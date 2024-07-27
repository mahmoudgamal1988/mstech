'use client';
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImageSquare } from '@/components/StylizedImageSquare'
import { useTranslation } from 'react-i18next'

import vissionImg from '@/images/aboutUs/vision.jpg'
import missionImg from '@/images/aboutUs/mission.jpg'
import { commaMethod } from '../page';


export function Mission() {
  const { t, i18n } = useTranslation();

  return (
    <div className='flex justify-center'>
      <FadeIn className="w-[33.75rem] flex-none lg:w-[32rem] rounded-3xl object-fill">
        <StylizedImageSquare
          {...{ src: vissionImg, shape: 2 }}
          sizes="(min-width: 960px) 20rem, 21rem"
          className="justify-center lg:justify-center lg:group-even/section:justify-center rounded-3xl"
        />
      </FadeIn>
      <SectionIntro
        title={t('MISSION')?.split(commaMethod(i18n.language))[0]}
        className="mt-96 sm:mt-32 lg:mt-32 mr-0 ml-0 px-8"
      >
        <p className='ml-[80px] mt-[-0px]'>
          {t('MISSION')?.split(commaMethod(i18n.language))[1]}
        </p>
      </SectionIntro>
    </div>
  )
}

export function Vission() {
  const { t, i18n,   } = useTranslation();
  // console.log("---- tttttttttttttttttttttt 111" , i18n.options.resources)

  return (
    <div className='flex justify-center mt-10'>
      <SectionIntro
        title={t('VISSION')?.split(commaMethod(i18n.language))[0]}
        className="mt-96 sm:mt-32 lg:mt-36 mr-0 ml-0 px-8"
      >
        <p className='ml-[80px] mt-[-0px]'>
          {t('VISSION')?.split(commaMethod(i18n.language))[1]}
        </p>
      </SectionIntro>
      <FadeIn className="w-[33.75rem] flex-none lg:w-[32rem]">
        <StylizedImageSquare
          {...{ src: missionImg, shape: 2 }}
          sizes="(min-width: 960px) 20rem, 21rem"
          className="justify-center lg:justify-center lg:group-even/section:justify-center"
        />
      </FadeIn>
    </div>
  )
}

export default function VissionAndMission() {
  return (
    <>
      <Vission />
      <Mission />
    </>
  )
};