'use client';
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { useTranslation } from 'react-i18next'

import RackImg from '@/images/products/rack.png'
import HuemImg from '@/images/products/huem.png'
import LeanhImg from '@/images/products/leanh.jpg'
import ProptechImg from '@/images/products/proptech.png'
import WrapperSection from '../WrapperSection'


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
              className="justify-center lg:justify-center lg:group-even/section:justify-start "
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

export default function Services() {
  const { t } = useTranslation();

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
