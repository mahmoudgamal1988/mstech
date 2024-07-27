import { type Metadata } from 'next'
import { StylizedImageSquare } from '@/components/StylizedImageSquare'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

import initTranslations from '../../i18n'
import { useTranslation } from 'react-i18next'
import { createInstance } from 'i18next'


import aboutusImage from '@/images/aboutUs/SBD-PIC.png'
import { StylizedImage } from '@/components/StylizedImage'

import vissionImg from '@/images/aboutUs/vision.jpg'
import missionImg from '@/images/aboutUs/mission.jpg'
import { Vission, Mission } from '../home/VissionAndMission'
import TranslationsProvider from '@/components/TranslationsProvider'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

// function Mission() {
//   return (
//     <div className='flex justify-center'>
//       <FadeIn className="w-[33.75rem] flex-none lg:w-[32rem] rounded-3xl object-fill">
//         <StylizedImageSquare
//           {...{ src: vissionImg, shape: 2 }}
//           sizes="(min-width: 960px) 20rem, 21rem"
//           className="justify-center lg:justify-center lg:group-even/section:justify-center rounded-3xl"
//         />
//       </FadeIn>
//       <SectionIntro
//         title="Mission"
//         className="mt-96 sm:mt-32 lg:mt-32 mr-0 ml-0 px-8"
//       >
//         <p className='ml-[80px] mt-[-0px]'>
//           Providing innovative technology solutions that enable our clients
//           keeping pace with market dynamics through a team of qualified.
//         </p>
//       </SectionIntro>
//     </div>
//   )
// }

// function Vission() {
//   return (
//     <div className='flex justify-center mt-96'>
//       <SectionIntro
//         title="Vission"
//         className="mt-96 sm:mt-32 lg:mt-36 mr-0 ml-0 px-8"
//       >
//         <p className='ml-[80px] mt-[-0px]'>
//           To be a leading company in providing digital solutions and services
//           that achieve sustainable growth while fulfilling the Kingdom’s vision.
//         </p>
//       </SectionIntro>
//       <FadeIn className="w-[33.75rem] flex-none lg:w-[32rem]">
//         <StylizedImageSquare
//           {...{ src: missionImg, shape: 2 }}
//           sizes="(min-width: 960px) 20rem, 21rem"
//           className="justify-center lg:justify-center lg:group-even/section:justify-center"
//         />
//       </FadeIn>
//     </div>
//   )
// }

export default async function About({ params: { locale } }: any) {

  const i18nNamespaces = ['ABOUT_US', "home"];
  const i18n = createInstance();
  const { t, resources } = await initTranslations(locale, i18nNamespaces, i18n);

  console.log("---- tttttttttttttttttttttt", resources)
  return (
    <>
      <TranslationsProvider
        namespaces={["home"]}
        locale={locale}
        resources={resources}
      >

        <PageIntro
          eyebrow={t('ABOUT_US')}
          title={t('ABOUT_US_TITLE')}
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
              {t('ABOUT_US_CONTENT')}
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
      </TranslationsProvider>

    </>
  )
}
