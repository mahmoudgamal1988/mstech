'use client';

import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import Image from 'next/image'
import { useTranslation } from 'react-i18next';


import EmotionDetection from './emotionsDetections.png'
import FaceImg from './face.png'
import HeatmapImg from './heatmap.png'
import PresontrackingImg from './presontracking.png'
import SmartparkingImg from './smartparking.png'
import SmartAccessImg from './smartAccess.png'
import SmartbuildingImg from './smartbuilding.png'
import { commaMethod, slashMethod } from '@/components/RootLayout';




export default function UsesCases({ params: { locale } }: any) {

  const { t, i18n } = useTranslation()

  const items = [
    {
      id: "0",
      title: t("EMOTION_DETECTION", { ns: "USE-CASES" }).split(slashMethod(i18n.language))[0],
      description: t("EMOTION_DETECTION", { ns: "USE-CASES" }).split(slashMethod(i18n.language))[1],
      imgUrl: EmotionDetection,
    },
    {
      id: "1",
      title: t("FACE_RECOGNITION", { ns: "USE-CASES" }).split(slashMethod(i18n.language))[0],
      description: t("FACE_RECOGNITION", { ns: "USE-CASES" }).split(slashMethod(i18n.language))[1],
      imgUrl: FaceImg,
    },
    {
      id: "2",
      title: t("HEATMAP_DISCOVERY", { ns: "USE-CASES" }).split(slashMethod(i18n.language))[0],
      description: t("HEATMAP_DISCOVERY", { ns: "USE-CASES" }).split(slashMethod(i18n.language))[1],
      imgUrl: HeatmapImg,
    },
    {
      id: "3",
      title: t("TRACKING", { ns: "USE-CASES" }).split(slashMethod(i18n.language))[0],
      description: t("TRACKING", { ns: "USE-CASES" }).split(slashMethod(i18n.language))[1],
      imgUrl: PresontrackingImg,
    },
    {
      id: "4",
      title: t("SMART_PARKING", { ns: "USE-CASES" }).split(slashMethod(i18n.language))[0],
      description: t("SMART_PARKING", { ns: "USE-CASES" }).split(slashMethod(i18n.language))[1],
      imgUrl: SmartparkingImg,
    },
    {
      id: "5",
      title: t("ACCESS_CONTROL", { ns: "USE-CASES" }).split(slashMethod(i18n.language))[0],
      description: t("ACCESS_CONTROL", { ns: "USE-CASES" }).split(slashMethod(i18n.language))[1],
      imgUrl: SmartAccessImg,
    },
    {
      id: "6",
      title: t("SMART_BUILDINGS", { ns: "USE-CASES" }).split(slashMethod(i18n.language))[0],
      description: t("SMART_BUILDINGS", { ns: "USE-CASES" }).split(slashMethod(i18n.language))[1],
      imgUrl: SmartbuildingImg,
    },
    {
      id: "7",
      title: t("ALERT_DETECTION", { ns: "USE-CASES" }).split(slashMethod(i18n.language))[0],
      description: t("ALERT_DETECTION", { ns: "USE-CASES" }).split(slashMethod(i18n.language))[1],
      imgUrl: EmotionDetection,
    },
  ];
  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro
            eyebrow={t("USE-CASES", { ns: "USE-CASES" })}
            title={t("USE-CASES_TITLE", { ns: "USE-CASES" })}
            centered
            extraTitleClass='text-white'
            extraChildrenClass='text-white'
          >
            <></>
          </PageIntro>
        </header>

        <br />
        <br />
        <br />
        <br />
        <br />

        <Container className="mt-24 sm:mt-32 lg:mt-96">
          <FadeIn>
            <>
              <div className='pl-8'>
                <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }} className='text-primary font-sans'>
                  {(t('OVERVIEW', { ns: "Comman" }))}
                </h1>
                <p className='font-sans text-secondary'>
                  {t("USE-CASES_CONTENT", { ns: "USE-CASES" })}
                </p>
              </div>

              <SectionIntro
                title="Use Cases"
                className="mt-24 sm:mt-32 lg:mt-40"
              >
              </SectionIntro>
              <Container className="mt-16">
                <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                  {items.map((item) => (
                    <FadeIn key={item.id} className="flex">
                      <article className="relative flex w-full flex-col rounded-3xl p-2 ring-1 ring-primary transition hover:bg-primary text-white sm:p-8 group">
                        <h3 style={{ display: "flex", justifyContent: "center" }}>
                          {/* <Link href={item.id}> */}
                          <span className="absolute inset-0 rounded-3xl" />
                          <Image
                            src={item.imgUrl}
                            alt={item.id}
                            className="h-40 w-40 fill-white"
                            unoptimized
                          />
                          {/* </Link> */}
                        </h3>
                        <p className="mt-6 font-display text-xl font-semibold text-primary group-hover:text-white">
                          {item.title}
                        </p>
                        <p className="mt-4 mb-6 text-base text-secondary group-hover:text-white">
                          {item.description}
                        </p>
                      </article>
                    </FadeIn>
                  ))}
                </FadeInStagger>
              </Container>

              {/* {children} */}
            </>

            {/*}</MDXComponents.wrapper> */}
          </FadeIn>
        </Container>
      </article>

    </>
  )
}
