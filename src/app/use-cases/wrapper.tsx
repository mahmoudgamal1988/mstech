import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { SectionIntro } from '@/components/SectionIntro'
import { FooterContainer } from '@/components/FooterContainer'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import Link from 'next/link'
import Image from 'next/image'


import EmotionDetection from './emotionsDetections.png'
import FaceImg from './face.png'
import HeatmapImg from './heatmap.png'
import PresontrackingImg from './presontracking.png'
import SmartparkingImg from './smartparking.png'
import SmartAccessImg from './smartAccess.png'
import SmartbuildingImg from './smartbuilding.png'


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

]
export default async function CaseStudyLayout({
  caseStudy,
  children,
}: {
  caseStudy: MDXEntry<CaseStudy>
  children: React.ReactNode
}) {
  let allCaseStudies = await loadCaseStudies()
  let moreCaseStudies = allCaseStudies
    .filter(({ metadata }) => metadata !== caseStudy)
    .slice(0, 2)

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow="Use-cases" title={caseStudy.title} centered extraTitleClass='text-white' extraChildrenClass='text-white'>
            <p>{caseStudy.description}</p>
          </PageIntro>

          <FadeIn>
            {/* <div className="mt-48 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                    <div className="border-t border-neutral-200 text-white px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Client</dt>
                      <dd>{caseStudy.client}</dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Year</dt>
                      <dd>
                        <time dateTime={caseStudy.date.split('-')[0]}>
                          {caseStudy.date.split('-')[0]}
                        </time>
                      </dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Service</dt>
                      <dd>{caseStudy.service}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div> */}

            {/* <div className="bg-transparent">
              <div className="-my-px mx-auto max-w-[28rem] bg-transparent"> */}
            {/* <GrayscaleTransitionImage
                  {...caseStudy.image}
                  quality={90}
                  className="w-full"
                  sizes="(min-width: 416px) 26rem, 50vw"
                  priority
                /> */}
            {/* </div>
            </div> */}
          </FadeIn>
        </header>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <Container className="mt-24 sm:mt-32 lg:mt-96">
          <FadeIn>
            {/* <MDXComponents.wrapper>{ */}
            <>
              <div className='pl-8'>
                <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }} className='text-primary font-sans'>
                  Overview
                </h1>
                <p className='font-sans text-secondary'>
                  ensures compliance with health and safety standards using heatmap cameras and facial recognition technology
                  track the movement of a crowd in buildings. And identify the number and gender of people who enter and exit the premises.
                  identify what a person’s feeling right now based on his emotion. to help our customers identify if their visitors are satisfied with the service they get.
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

      {/* {moreCaseStudies.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More Solutions"
          pages={moreCaseStudies}
        />
      )} */}

      {/* <ContactSection /> */}
    </>
  )
}
