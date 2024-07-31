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
import { commaMethod, slashMethod } from '@/components/RootLayout';


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
  const { t, i18n } = useTranslation();

  return (
    < >
      <SectionIntro
        eyebrow=""
        title={t('PRODUCTS').split(slashMethod(i18n.language))[0]}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          {t('PRODUCTS').split(slashMethod(i18n.language))[1]}
        </p>
      </SectionIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">

        {/* <Container className="mt-16"> */}
          <Section
            title={t('PRODUCTS_LEANH').split(slashMethod(i18n.language))[0]}
            titleExtraClass='text-green-600'
            image={{ src: LeanhImg }}
          >
            <div className="space-y-6 text-base text-secondary">
              {
                t('PRODUCTS_LEANH').split(slashMethod(i18n.language)).slice(1).map((text, index) => {
                  return <p key={index}>
                    {text}
                  </p>
                })
              }
            </div>
          </Section>
        {/* </Container> */}

        <Section
          title={t('PRODUCTS_RACK').split(slashMethod(i18n.language))[0]}
          titleExtraClass='text-[#c2073f]'
          image={{ src: RackImg, shape: 1 }}
        >
          <div className="space-y-6 text-base text-secondary">
            {
              t('PRODUCTS_RACK').split(slashMethod(i18n.language)).slice(1).map((text, index) => {
                return <p key={index}>
                  {text}
                </p>
              })
            }
          </div>
        </Section>

        <Section
          title={t('PRODUCTS_PROPTECH').split(slashMethod(i18n.language))[0]}
          titleExtraClass=''
          image={{ src: ProptechImg }}>
          <div className="space-y-6 text-base text-secondary">
            {
              t('PRODUCTS_PROPTECH').split(slashMethod(i18n.language)).slice(1).map((text, index) => {
                return <p key={index}>
                  {text}
                </p>
              })
            }
          </div>
        </Section>


        <Section
          title={t('PRODUCTS_HUEM').split(slashMethod(i18n.language))[0]}
          topClass='mt-[-130px]'
          titleExtraClass='text-primary'
          image={{ src: HuemImg, shape: 1 }}
        >
          <div className="space-y-6 text-base text-secondary">
            {
              t('PRODUCTS_HUEM').split(slashMethod(i18n.language)).slice(1).map((text, index) => {
                return <p key={index}>
                  {text}
                </p>
              })
            }
          </div>
        </Section>

      </div>

    </>
  )
}
