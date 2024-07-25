'use client';
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImageSquare } from '@/components/StylizedImageSquare'
import { useTranslation } from 'react-i18next'

import vissionImg from '@/images/aboutUs/vision.jpg'
import missionImg from '@/images/aboutUs/mission.jpg'


function Mission() {
  const { t } = useTranslation();

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
        title="Mission"
        className="mt-96 sm:mt-32 lg:mt-32 mr-0 ml-0 px-8"
      >
        <p className='ml-[80px] mt-[-0px]'>
          Providing innovative technology solutions that enable our clients
          keeping pace with market dynamics through a team of qualified.
        </p>
      </SectionIntro>
    </div>
  )
}

function Vission() {
  const { t } = useTranslation();

  return (
    <div className='flex justify-center mt-10'>
      <SectionIntro
        title="Vission"
        className="mt-96 sm:mt-32 lg:mt-36 mr-0 ml-0 px-8"
      >
        <p className='ml-[80px] mt-[-0px]'>
          To be a leading company in providing digital solutions and services
          that achieve sustainable growth while fulfilling the Kingdom’s vision.
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