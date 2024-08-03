'use client';
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImageSquare } from '@/components/StylizedImageSquare'
import { useTranslation } from 'react-i18next'

import vissionImg from '@/images/aboutUs/vision.jpg'
import missionImg from '@/images/aboutUs/mission.jpg'
import { commaMethod, slashMethod } from '@/components/RootLayout';


export function Mission() {
  const { t, i18n } = useTranslation();

  return (
    <div className="grid grid-cols-1 gap-10 mt-10 lg:grid-cols-2 lg:px-64">
      <div className="col-span-1 lg:col-span-1 flex justify-center">
        <FadeIn className="w-full sm:w-[33.75rem] flex-none lg:w-[32rem] rounded-3xl object-fill">
          <StylizedImageSquare
            {...{ src: vissionImg, shape: 2 }}
            sizes="(min-width: 960px) 20rem, 21rem"
            className="justify-center lg:justify-center lg:group-even/section:justify-center rounded-3xl"
          />
        </FadeIn>
      </div>
      <div className="col-span-1 lg:col-span-1 mt-10 sm:mt-32 lg:mt-32 px-4 sm:px-8">
        <SectionIntro
          title={t('MISSION')?.split(commaMethod(i18n.language))[0]}
          className="mr-0 ml-0"
        >
          <p className="ml-4 sm:ml-[80px] mt-4 sm:mt-[-0px]">
            {t('MISSION')?.split(commaMethod(i18n.language))[1]}
          </p>
        </SectionIntro>
      </div>
    </div>

  )
}

export function Vission() {
  const { t, i18n, } = useTranslation();
  // console.log("---- tttttttttttttttttttttt 111" , i18n.options.resources)

  return (
    <div className="grid grid-cols-1 gap-10 mt-10 lg:grid-cols-2 lg:px-64">
      <div className="col-span-1 lg:col-span-1 mt-10 sm:mt-32 lg:mt-36 px-4 sm:px-8">
        <SectionIntro
          title={t('VISSION')?.split(commaMethod(i18n.language))[0]}
          className="mr-0 ml-0"
        >
          <p className="ml-4 sm:ml-[80px] mt-4 sm:mt-[-0px]">
            {t('VISSION')?.split(commaMethod(i18n.language))[1]}
          </p>
        </SectionIntro>
      </div>
      <div className="col-span-1 lg:col-span-1 flex justify-center">
        <FadeIn className="w-full sm:w-[33.75rem] flex-none lg:w-[32rem]">
          <StylizedImageSquare
            {...{ src: missionImg, shape: 2 }}
            sizes="(min-width: 960px) 20rem, 21rem"
            className="justify-center lg:justify-center lg:group-even/section:justify-center"
          />
        </FadeIn>
      </div>
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