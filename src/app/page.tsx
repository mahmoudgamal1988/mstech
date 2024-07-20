
import { useRef, useState, useContext } from 'react'
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useId } from 'react'
import { Container } from '@/components/Container'
import { FooterContainer } from '@/components/FooterContainer'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { StylizedImageSquare } from '@/components/StylizedImageSquare'
import { PageIntro } from '@/components/PageIntro'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { Border } from '@/components/Border'
import { StatList, StatListItem, CustomStatList } from '@/components/StatList'
import { Button } from '@/components/Button'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'

import RackImg from '@/images/products/rack.png'
import HuemImg from '@/images/products/huem.png'
import LeanhImg from '@/images/products/leanh.jpg'
import ProptechImg from '@/images/products/proptech.png'



//Why Images
import BRANDIMG from '@/images/why/BRAND.png';
import QUALITY from '@/images/why/QUALITY.png';
import SUPPORT from '@/images/why/SUPPORT.png';
import METHODOLOGY from '@/images/why/METHODOLOGY.png';
import TECHNOLOGIES from '@/images/why/TECHNOLOGIES.png';
import TAILORED from '@/images/why/TAILORED.png';
import NETWORK from '@/images/why/NETWORK.png';
import RESEACH from '@/images/why/RESEACH.png';

//values Images
import TRANSPARENCY from '@/images/values/TRANSPARENCY.png';
import RESPONSIBILITY from '@/images/values/RESPONSIBILITY.png';
import INNOVATION from '@/images/values/INNOVATION.png';
import CLIENTCENTRIC from '@/images/values/CLIENTCENTRIC.png';
import RESPECT from '@/images/values/RESPECT.png';
import AGILITY from '@/images/values/AGILITY.png';


import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'


import vissionImg from '@/images/aboutUs/vision.jpg'
import missionImg from '@/images/aboutUs/mission.jpg'


import Partners01 from '@/images/our-partners/our partners/Meshkati Solutions Partners-01.png';
import Partners02 from '@/images/our-partners/our partners/Meshkati Solutions Partners-02.png';
import Partners03 from '@/images/our-partners/our partners/Meshkati Solutions Partners-03.png';
import Partners04 from '@/images/our-partners/our partners/Meshkati Solutions Partners-04.png';
import Partners05 from '@/images/our-partners/our partners/Meshkati Solutions Partners-05.png';
import Partners06 from '@/images/our-partners/our partners/Meshkati Solutions Partners-06.png';
import Partners07 from '@/images/our-partners/our partners/Meshkati Solutions Partners-07.png';
import Partners08 from '@/images/our-partners/our partners/Meshkati Solutions Partners-08.png';
import Partners09 from '@/images/our-partners/our partners/Meshkati Solutions Partners-09.png';
import Partners10 from '@/images/our-partners/our partners/Meshkati Solutions Partners-10.png';
import Partners11 from '@/images/our-partners/our partners/Meshkati Solutions Partners-11.png';
import Partners12 from '@/images/our-partners/our partners/Meshkati Solutions Partners-12.png';
import Partners13 from '@/images/our-partners/our partners/Meshkati Solutions Partners-13.png';
import Partners14 from '@/images/our-partners/our partners/Meshkati Solutions Partners-14.png';
import Partners15 from '@/images/our-partners/our partners/Meshkati Solutions Partners-15.png';
import Partners16 from '@/images/our-partners/our partners/Meshkati Solutions Partners-16.png';
import Partners17 from '@/images/our-partners/our partners/Meshkati Solutions Partners-17.png';
import Partners18 from '@/images/our-partners/our partners/Meshkati Solutions Partners-18.png';
import Partners19 from '@/images/our-partners/our partners/Meshkati Solutions Partners-19.png';
import Partners20 from '@/images/our-partners/our partners/Meshkati Solutions Partners-20.png';
// import Partners21 from '@/images/our-partners/our partners/Meshkati Solutions Partners-21.png';
// import Partners22 from '@/images/our-partners/our partners/Meshkati Solutions Partners-22.png';
// import Partners23 from '@/images/our-partners/our partners/Meshkati Solutions Partners-23.png';
// import Partners24 from '@/images/our-partners/our partners/Meshkati Solutions Partners-24.png';
// import Partners25 from '@/images/our-partners/our partners/Meshkati Solutions Partners-25.png';

import { RootLayoutContext } from '@/components/RootLayout'
import WrapperSection from './WrapperSection'
import contactImg from '@/images/aboutUs/our_values.png'

// import { useTranslation } from 'next-i18next'


function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

const FormattedText = ({ text }: any) => {
  const lines = text.split('\n');

  return (
    <div>
      {lines.map((line: string, index: number) => (
        <h1 key={index} className='flex flex-col items-center w-auto'>
          {line}
          {index !== lines.length - 1 && <br />}
        </h1 >
      ))}
    </div>
  );
};


const clients = [
  {
    title: "SAUDI BRAND",
    logo: BRANDIMG
  },
  {
    title: "QUALITY",
    logo: QUALITY
  },
  {
    title: "SUPPORT",
    logo: SUPPORT
  },
  {
    title: "METHODOLOGY",
    logo: METHODOLOGY
  },
  {
    title: "ADVANCED\n TECHNOLOGIES ",
    logo: TECHNOLOGIES
  },
  {
    title: "TAILORED\n SOLUTIONS",
    logo: TAILORED
  },
  {
    title: `EXTENDED\n PARTNERS’ NETWORK`,
    logo: NETWORK
  },
  {
    title: "RESEACH\n & DEVELOPMENT",
    logo: RESEACH
  },
]


const partners = [
  ['Partners01', Partners01],
  ['Partners02', Partners02],
  ['Partners03', Partners03],
  ['Partners04', Partners04],
  ['Partners05', Partners05],
  ['Partners06', Partners06],
  ['Partners07', Partners07],
  ['Partners08', Partners08],
  ['Partners09', Partners09],
  ['Partners10', Partners10],
  ['Partners11', Partners11],
  ['Partners12', Partners12],
  ['Partners13', Partners13],
  ['Partners14', Partners14],
  ['Partners15', Partners15],
  ['Partners16', Partners16],
  ['Partners17', Partners17],
  ['Partners18', Partners18],
  ['Partners19', Partners19],
  ['Partners20', Partners20],
  // ['Partners21', Partners21],
  // ['Partners22', Partners22],
  // ['Partners23', Partners23],
  // ['Partners24', Partners24],
  // ['Partners25', Partners25],
]


const values = [
  {
    title: 'TRANSPARENCY',
    logo: TRANSPARENCY,
  },
  {
    title: 'RESPONSIBILITY',
    logo: RESPONSIBILITY,
  },
  {
    title: 'INNOVATION',
    logo: INNOVATION,
  },
  {
    title: 'CLIENT CENTRIC',
    logo: CLIENTCENTRIC,
  },
  {
    title: 'RESPECT',
    logo: RESPECT,
  },
  {
    title: 'AGILITY',
    logo: AGILITY,
  }
];



function Partners() {
  return (
    <div className="mt-4 rounded-4xl bg-grayBg py-14 sm:mt-32 sm:py-32 lg:mt-28">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-3xl font-semibold tracking-wider text-primary sm:text-left">
            Our Partners
          </h2>
          {/* <div className="h-px flex-auto bg-secondary" /> */}
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 mb-[-52px] grid grid-cols-4 gap-x-8 gap-y-10 lg:grid-cols-8"
          >
            {partners.map(([client, logo]) => (
              <li key={client as string} className='w-28'>
                <FadeIn>
                  <Image src={logo} alt={client as string} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Clients() {
  return (
    <div className="mt-4 rounded-4xl bg-grayBg py-20 sm:mt-32 sm:py-32 lg:mt-36">
      <Container className="mt-0 sm:mt-32 lg:mt-0">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-lightBg">
            Why MSTech
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-10" faster>
          <Border as={FadeIn} />
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
          >
            {clients.map((client, index) => (
              <li key={index} className="group">
                <FadeIn className="overflow-hidden">
                  <Border className="pt-12 group-[&:nth-child(-n+4)]:-mt-px sm:group-[&:nth-child(-4)]:-mt-px lg:group-[&:nth-child(-4)]:-mt-px">
                    <div className='flex flex-col justify-center items-center group cursor-pointer'>
                      <Image
                        src={client.logo}
                        className='w-16 transition-transform transform transition-filter filter-none group-hover:scale-110'
                        alt={client.logo as any}
                        unoptimized
                      />
                      <div
                        className="mt-6 mx-2 flex justify-start font-display text-xs font-semibold text-secondary [text-wrap:balance] sm:text-base transition-transform transform transition-filter filter-none group-hover:scale-110"
                      >
                        <FormattedText text={client.title} />
                      </div>
                    </div>
                    {/* <Image src={client.logo} alt={client.logo} unoptimized /> */}
                  </Border>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>

  )
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


function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <WrapperSection sectionTag='solutions'>
      <SectionIntro
        title="Solutions"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          MSTech catalogue of offerings is presented in three main stacks: Smart Solutions for Businesses, Smart Solutions
          for home automa-tion, and Additional stack of services.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-32 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-primary transition hover:bg-primary text-white sm:p-8 group">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16 fill-white"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 font-display text-2xl font-semibold text-primary group-hover:text-white">
                  {caseStudy.title}
                </p>
                <p className="mt-4 mb-6 text-base text-secondary group-hover:text-white">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </WrapperSection>
  )
}

function Section({
  title,
  titleExtraClass,
  topClass,
  image,
  children,
}: {
  title: string;
  topClass?: string;
  titleExtraClass?: string;
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className={"group/section [counter-increment:section]" + " " + topClass}>
      < div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20 mt-[0px]" >
        <div className={"flex justify-center" + " " + topClass}>
          <FadeIn className="w-[33.75rem] flex-none lg:w-[25rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 26rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start "
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-secondary after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className={"mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl" + " " + titleExtraClass || "text-secondary"}>
              <Link href={`products/${title.toLowerCase()}`}>
                {title}
              </Link>
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div >
    </Container >
  )
}

function Services() {

  return (
    <WrapperSection sectionTag='products'>
      <SectionIntro
        eyebrow=""
        title="Products"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We adopt a customer-focused, data-driven,  and iterative methodology. Our Lean approach helps us validate new ideas
          avoid  costly mistakes, and build successful businesses
        </p>
      </SectionIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">

        <Container className="mt-16">
          <Section title="Leanh" titleExtraClass='text-green-600' image={{ src: LeanhImg }}>
            <div className="space-y-6 text-base text-secondary">
              <p>
                A leading platform for developing smart city and <strong className="font-semibold text-neutral-600">Internet of Things</strong> solutions
                using Artificial intelligence for forecasting, decision making and bringing
                together solutions under one umbrella.
              </p>
              <p>
                With Leanh, cities can harness the power of <strong className="font-semibold text-neutral-600">advanced technologies</strong>{' '}
                data analytics, and IoT to optimize urban infrastructure
                enhance public services, and improve the overall quality of life for residents.
              </p>
            </div>
          </Section>
        </Container>

        <Section title="Rack" titleExtraClass='text-[#c2073f]' image={{ src: RackImg, shape: 1 }}>
          <div className="space-y-6 text-base text-secondary">
            <p>
              Rack Smart Retail System is one of the comprehensive solutions
              fot managing retail operations and data analysis to increase efficiency and improve sales.
            </p>
            <p>
              Rack offers real-time monitoring capabilities,
              allowing you to stay updated on your business operations at all times.
              With instant access to vital information, you can make informed decisions
              and take proactive actions to drive business growth.
            </p>
          </div>
        </Section>

        <Section title="Proptech" titleExtraClass='' image={{ src: ProptechImg }}>
          <div className="space-y-6 text-base text-secondary">
            <p>
              Introducing /proptech, the revolutionary smart solution for property management that empowers property owners
              and managers to streamline operations, enhance tenant experiences, and maximize returns on their real estate investments.
            </p>
            <p>
              Proptech leverages cutting-edge technology and innovative features to transform traditional property
              management into a seamless, efficient, and data-driven process.
            </p>
          </div>
        </Section>


        <Section title="Huem" topClass='mt-[-130px]' titleExtraClass='text-primary' image={{ src: HuemImg, shape: 1 }}>
          <div className="space-y-6 text-base text-secondary">
            <p>
              A smart application to control the home easily and safely from one interface.
            </p>
          </div>
        </Section>

      </div>

    </WrapperSection>
  )
}

function Values() {
  return (
    <>
      <SectionIntro
        title="Our Values"
        className="mt-24 sm:mt-32 lg:mt-36"
      >
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {values.map((value, index) => (
            <FadeIn key={index} className="flex">
              <article className="relative flex flex-col w-full content-center items-center rounded-3xl p-6 transition hover: sm:p-8 group">
                <h3>
                  <Link href={value.title}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={value.logo}
                      className='h-16 w-16 p-0 transition-transform transform group-hover:scale-110 group-hover:translate-y-2'
                      alt={value.logo as any}
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 mx-2 flex justify-start font-display text-xs font-semibold text-primary [text-wrap:balance] sm:text-base transition-transform transform group-hover:scale-110 group-hover:translate-y-2">
                  {value.title}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-primary">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-primary">
        Get in touch.
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Let’s make something awesome together!
        Drop us a line, or give us a heads up if you’re interested in visiting us.
      </p>
      <div className='flex justify-center'>
        <FadeIn>
          <Image
            src={contactImg}
            alt={"contactImg"}
            className='mt-8 max-w-96 rounded-3xl'
            unoptimized
          />
        </FadeIn>
      </div>
    </FadeIn>
  )
}

// export const metadata: Metadata = {
//   description:
//     'We are a development studio working at the intersection of design and technology.',
// }

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 4)
  // const { t } = useTranslation('footer')

  return (
    <>

      {/* <h1>{t('h1')}</h1> */}

      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-white  [text-wrap:balance] sm:text-7xl">
            A pioneering journey in AI and IOT
            to shape a future that inspires the world.
          </h1>
        </FadeIn>
      </Container>

      <Clients />

      {/* <div className="grid gap-32 lg:grid-cols-2 mt-32"> */}
      <Vission />
      <Mission />
      {/* </div> */}

      <Values />

      <CaseStudies caseStudies={caseStudies} />

      <Services />

      {/* <ContactSection /> */}

      <FooterContainer className="bg-grayBg max-w-full pb-40 pt-14 mt-20">
        <PageIntro eyebrow="" title="Our Achievements" extraTitleClass='mt-0 text-lightBg' mainClass='lg:mt-16' >
          <></>
        </PageIntro>
        <Container className="mt-20">
          <StatList>
            <CustomStatList value="10k" label="Users" extraClass='text-secondary' icon={TRANSPARENCY} />
            <CustomStatList value="12k" label="Connected devices" extraClass='text-secondary' icon={TRANSPARENCY} />
            <CustomStatList value="3k" label="Managed Units" extraClass='text-secondary' icon={TRANSPARENCY} />
            <CustomStatList value="115" label="Projects" extraClass='text-secondary' icon={TRANSPARENCY} />
          </StatList>
        </Container>
      </FooterContainer>


      <Partners />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>

    </>
  )
}
