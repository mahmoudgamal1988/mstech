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
                    <div className='flex  flex-col justify-center items-center'>
                      <Image src={client.logo} className='w-16' alt={client.logo as any} unoptimized />
                      <div className="mt-6 mx-2 flex justify-start font-display text-xs font-semibold text-white [text-wrap:balance] sm:text-base">
                        {/* {client.title} */}
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
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-4">
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
                <p className="mt-4 text-base text-secondary group-hover:text-white">
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

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Our Methodology"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We adopt a customer-focused, data-driven,  and iterative methodology. Our Lean approach helps us validate new ideas
          avoid  costly mistakes, and build successful businesses
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="implementation">
              Select implementation outcome framework
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="Intervention">
              Describe intervention components and implementation strategies
            </ListItem>
            <ListItem title="Markers">
              identify markers, measures, and data sources
            </ListItem>
            <ListItem title="Outcomes">
              List implementation outcomes
            </ListItem>
          </List>
        </div>
      </Container>
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
              <article className="relative flex flex-col w-full content-center items-center rounded-3xl p-6  transition hover:bg-gray-200 sm:p-8">
                <h3>
                  <Link href={value.title}>
                    <span className="absolute inset-0 rounded-3xl " />
                    <Image src={value.logo} className='h-16 w-16 p-0' alt={value.logo as any} unoptimized />
                  </Link>
                </h3>
                <p className="mt-6 mx-2 flex justify-start font-display text-xs font-semibold text-primary [text-wrap:balance] sm:text-base">
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



      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40 text-primary"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond
        with our onboarding even finding a way
        to access the user’s microphone without
        triggering one of those annoying permission dialogs.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
