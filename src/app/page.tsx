import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import logo from '@/images/clients/phobia/logomark-dark.svg'
import { Border } from '@/components/Border'
// import imageHero from './hero.jpg'
import imageJennyWilson from './jenny-wilson.jpg'


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


function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-lightBg py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container className="mt-0 sm:mt-32 lg:mt-0">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-white">
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
                  <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
                    <div className='flex flex-col justify-center items-center group cursor-pointer'>
                      <Image
                        src={client.logo}
                        className='w-16 transition-transform transform transition-filter filter-none group-hover:scale-110'
                        alt={client.logo as any}
                        unoptimized
                      />
                      <div
                        className="mt-6 mx-2 flex justify-start font-display text-xs font-semibold text-white [text-wrap:balance] sm:text-base transition-transform transform transition-filter filter-none group-hover:scale-110"
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
    <>
      <SectionIntro
        title="Mission"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Providing innovative technology solutions that enable our clients keeping
          pace with market dynamics through a team of qualified.
        </p>
      </SectionIntro>
    </>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Our Solutions"
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
    </>
  )
}

function Section({
  title,
  titleExtraClass,
  image,
  children,
}: {
  title: string;
  titleExtraClass?: string;
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className={"mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl" + " " + titleExtraClass}>
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow=""
        title="Projects"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We adopt a customer-focused, data-driven,  and iterative methodology. Our Lean approach helps us validate new ideas
          avoid  costly mistakes, and build successful businesses
        </p>
      </SectionIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">

        <Container className="mr-0 mt-16">
          <Section title="Leanh" titleExtraClass='text-green-600' image={{ src: imageLaptop }}>
            <div className="space-y-6 text-base text-neutral-600">
              <p>
                A leading platform for developing smart city and <strong className="font-semibold text-neutral-950">Internet of Things</strong> solutions
                using Artificial intelligence for forecasting, decision making and bringing
                together solutions under one umbrella.
              </p>
              <p>
                With Leanh, cities can harness the power of <strong className="font-semibold text-neutral-950">advanced technologies</strong>{' '}
                data analytics, and IoT to optimize urban infrastructure
                enhance public services, and improve the overall quality of life for residents.
              </p>
            </div>
          </Section>
        </Container>

        <Section title="Rack" titleExtraClass='text-[#c2073f]' image={{ src: imageLaptop, shape: 1 }}>
          <div className="space-y-6 text-base text-neutral-600">
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

        
      </div>

    </>
  )
}

function Values() {
  return (
    <>
      <SectionIntro
        title="Our Values"
        className="mt-24 sm:mt-32 lg:mt-40"
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

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 4)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-white  [text-wrap:balance] sm:text-7xl">
            A pioneering journey in AI and IOT
            to shape a future that inspires the world.
          </h1>
        </FadeIn>
      </Container>

      <Clients />

      <Values />

      <CaseStudies caseStudies={caseStudies} />


      <Services />

      <ContactSection />
    </>
  )
}
