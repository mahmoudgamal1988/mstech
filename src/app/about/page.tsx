import { type Metadata } from 'next'
import Image from 'next/image'
import { StylizedImageSquare } from '@/components/StylizedImageSquare'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'

import aboutusImage from '@/images/aboutUs/SBD-PIC.png'
import { StylizedImage } from '@/components/StylizedImage'

import vissionImg from '@/images/aboutUs/vision.jpg'
import missionImg from '@/images/aboutUs/mission.jpg'


function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            Our team has been with us since the beginning because none of them
            are allowed to have LinkedIn profiles.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We don’t care when our team works just as long as they are working
            every waking second.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            You never know what someone is going through at home and we make
            sure to never find out.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Dries Vincent',
        role: 'Partner & Business Relations',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Chelsea Hagon',
        role: 'Senior Developer',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Emma Dorsey',
        role: 'Senior Designer',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Leonard Krasner',
        role: 'VP, User Experience',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Blake Reid',
        role: 'Junior Copywriter',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Kathryn Murphy',
        role: 'VP, Human Resources',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Whitney Francis',
        role: 'Content Specialist',
        image: { src: imageWhitneyFrancis },
      },
      {
        name: 'Jeffrey Webb',
        role: 'Account Coordinator',
        image: { src: imageJeffreyWebb },
      },
      {
        name: 'Benjamin Russel',
        role: 'Senior Developer',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Angela Fisher',
        role: 'Front-end Developer',
        image: { src: imageAngelaFisher },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

function Mission() {
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
  return (
    <div className='flex justify-center mt-96'>
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

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration" extraTitleClass='text-white' extraChildrenClass='text-gray-50'>
        <>
        </>
      </PageIntro>


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Vission />
      <Mission />



      <div className='flex justify-center mt-10'>
        <SectionIntro
          title=""
          className="mt-96 sm:mt-32 lg:mt-36 mr-0 ml-0 px-8"
        >
          <p className='ml-[0px] mt-[-0px]'>
            Meshkati Solutions MSTech part of AMNEST group is a team of innovative visionary Saudi professionals
            who create and adopt high-tech smart solutions, focusing on the areas of AI and IoT
            AMNEST Holding Group Company was established in 1996 under which 15
            companies do business in various sectors.
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

      {/* <PageIntro eyebrow="." title="" extraTitleClass='text-gray-50' extraChildrenClass='text-gray-50'> */}
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p className='text-secondary mt-[-56px]'>
            Meshkati Solutions MSTech part of AMNEST group is a team of innovative visionary Saudi professionals
            who create and adopt high-tech smart solutions, focusing on the areas of AI and IoT
          </p>
          <div className="mt-10 max-w-2xl space-y-6 text-base text-secondary">
            <p>
              AMNEST Holding Group Company was established in 1996 under which 15
              companies do business in various sectors.
            </p>
          </div>
        </div>
        <div>
          <Image src={aboutusImage} alt={"client" as string} unoptimized />
        </div>
      </div> */}
      {/* </PageIntro> */}


      {/* <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container> */}
      {/* 
      <Culture />

      <Team /> */}

      {/* <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      /> */}

      {/* <ContactSection /> */}
    </>
  )
}
