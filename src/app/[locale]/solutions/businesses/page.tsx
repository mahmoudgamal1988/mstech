'use client';

import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { FadeIn } from '@/components/FadeIn'


import EmotionDetection from './imageHero.png'
import FaceImg from './imageHero.png'
import HeatmapImg from './imageHero.png'
import PresontrackingImg from './imageHero.png'
import SmartparkingImg from './imageHero.png'
import SmartAccessImg from './imageHero.png'
import SmartbuildingImg from './imageHero.png'
import businessesImg from './imageHero.png'
import { StylizedImage } from '@/components/StylizedImage'
import { useTranslation } from 'react-i18next';

const items = [
  {
    id: "0",
    title: "Emotion detection",
    description: "identify what a person’s feeling right now based on his emotion. to help our customers identify if their visitors are satisfied with the service they get.",
    imgUrl: EmotionDetection,
  },
  {
    id: "1",
    title: "Face recognition",
    description: "This use case is being used in access control and employee attendance.",
    imgUrl: FaceImg,
  },
  {
    id: "2",
    title: "Heatmap discovery",
    description: "identify what a person’s feeling right now based on his emotion. to help our customers identify if their visitors are satisfied with the service they get.",
    imgUrl: HeatmapImg,
  },
  {
    id: "3",
    title: "Person and employee tracking",
    description: "Track the real time employees’ movements. This would help evaluating the behavior of store salesmen as an example.",
    imgUrl: PresontrackingImg,
  },
  {
    id: "4",
    title: "Smart Parking",
    description: "Optimize space utilization and reduce congestion while offering real-time availability updates and automated vehicle entry/exit.",
    imgUrl: SmartparkingImg,
  },
  {
    id: "5",
    title: "Smart Smart Access Control",
    description: "A full control on granting the necessary access authority is at your hands. Car plats, persons’ faces, and employees’ IDs can be recognized.",
    imgUrl: SmartAccessImg,
  },
  {
    id: "6",
    title: "Smart buildings",
    description: "Residents will have the ability to control and monitor the devices in their apartment using a mobile application.",
    imgUrl: SmartbuildingImg,
  },
  {
    id: "7",
    title: "Alert detection",
    description: "Discover the dangerous situations at retail stores or properties, and Preventative actions can be easily automated.",
    imgUrl: EmotionDetection,
  },
];

export default function CaseStudyLayout({ params: { locale } }: any) {

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
      <article className="mt-40 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro
            eyebrow=""
            title={t('BUSINESSES', { ns: "businesses" })}
            centered
            extraTitleClass='text-white'
            extraChildrenClass='text-white'
          >
            <h1>{t('BUSINESSES_TITLE', { ns: "businesses" })}</h1>
          </PageIntro>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-96 flex justify-center items-center flex-col">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[32rem] rounded-3xl object-fill flex justify-center mb-16" >
            <StylizedImage
              {...{ src: businessesImg, shape: 2 }}
              sizes="(min-width: 960px) 20rem, 21rem"
              className="justify-center lg:justify-center lg:group-even/section:justify-center rounded-3xl"
            />
          </FadeIn>
          <FadeIn>
            {/* <MDXComponents.wrapper>{ */}
            <>
              <div className='px-4 md:px-20 lg:px-44'>
                <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }} className='text-primary font-sans'>
                  {(t('OVERVIEW', { ns: "Comman" }))}
                </h1>
                <p className='font-sans text-secondary mt-8'>
                  {
                    splitTextWithBreaks(t('BUSINESSES_CONTENT', { ns: "businesses" }))}
                </p>
              </div>

            </>
          </FadeIn>
        </Container>
      </article >

    </>
  )
}
