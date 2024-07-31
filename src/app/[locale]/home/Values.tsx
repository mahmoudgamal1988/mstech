'use client';
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'

//values Images
import TRANSPARENCY from '@/images/values/TRANSPARENCY.png';
import RESPONSIBILITY from '@/images/values/RESPONSIBILITY.png';
import INNOVATION from '@/images/values/INNOVATION.png';
import CLIENTCENTRIC from '@/images/values/CLIENTCENTRIC.png';
import RESPECT from '@/images/values/RESPECT.png';
import AGILITY from '@/images/values/AGILITY.png';

import { useTranslation } from 'react-i18next'
import { commaMethod, slashMethod } from '@/components/RootLayout';

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

export default function Values() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <SectionIntro
        title={t("VALUES_TITLE")}
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
                  {(t('VALUES_VALUES'))?.split(commaMethod(i18n.language))[index]}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}
