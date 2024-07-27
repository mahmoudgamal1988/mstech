'use client';
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { loadCaseStudies } from '@/lib/mdx'
import WrapperSection from '../WrapperSection'
import { useTranslation } from 'react-i18next'

import businessesImg from '@/images/solutions/businesses.svg'
import homeImg from '@/images/solutions/home.svg'
import servicesImg from '@/images/solutions/services.svg'
import { commaMethod, slashMethod } from '../page';

const caseStudies: any[] = [
  {
    client: 'FamilyFund',
    title: 'SOLUTIONS_BUSINESSES',
    description:
      'Control your entire business environment through Artificial Intelligence (AI), the Internet of Things (IoT), and Augmented Reality (AR) advanced solutions.',
    summary: [
      'Collect, analyze data and transform them into meaningful reports in order to timely make the right decisions.',
    ],
    logo: businessesImg,
    image: { src: null },
    date: '2023-01',
    service: 'Web development, CMS',
    testimonial: {
      author: { name: 'Debra Fiscal', role: 'CEO of FamilyFund' },
      content:
        'Working with Studio, we felt more like a partner than a customer. They really resonated with our mission to change the way people convince their parents to cash out their pensions.',
    },
    href: "/solutions/businesses"
  },
  {
    client: 'Unseal',
    title: 'SOLUTIONS_HOME_AUTOMATION',
    description:
      'Through MSTech channels and partners we offer to control your entire building, parking, or home with one click by connecting various appliances, devices, and systems together and controlling them from anywhere.',
    summary: [
      'A variety of use cases were carefully selected that address our society and individual needs.',
    ],
    logo: homeImg,
    image: { src: null },
    date: '2022-10',
    service: 'Blockchain development',
    testimonial: {
      author: { name: 'Emily Selman', role: 'Head of Engineering at Unseal' },
      content:
        'Studio did an amazing job building out our core blockchain infrastructure and I’m sure once PlaceboCoin rallies they’ll be able to finish the project.',
    },
    href: "/solutions/home_automation"
  },
  {
    client: 'Unseal',
    title: 'SOLUTIONS_ADDITIONAL_STACK_OF_SERVICES',
    description:
      'In order to provide an end-to-end total solution, MSTech is offering additional consultancy and IT services.',
    summary: [
      'We develop smart solutions using Internet of Things (IoT) and Artificial Intelligence (AI) technologies in various sectors to enhance the quality of life.  Learn more (go to Leanh page).',
    ],
    logo: servicesImg,
    image: {
      src: null,
    },
    date: '2022-10',
    service: 'Blockchain development',
    testimonial: {
      author: { name: 'Emily Selman', role: 'Head of Engineering at Unseal' },
      content:
        'Studio did an amazing job building out our core blockchain infrastructure and I’m sure once PlaceboCoin rallies they’ll be able to finish the project.',
    },
    href: "/solutions/services"
  }

]
// console.log("caseStudies sssssssssssssssssssssssss", caseStudies)

function CaseStudiesTab() {
  const { t, i18n } = useTranslation();

  // let caseStudies = (await loadCaseStudies()).slice(0, 4)
  return (
    <WrapperSection sectionTag='solutions'>
      <SectionIntro
        title={t("SOLUTIONS").split(slashMethod(i18n.language))[0]}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          {t("SOLUTIONS").split(slashMethod(i18n.language))[1]}
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-32 lg:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
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
                  {t(caseStudy.title).split(slashMethod(i18n.language))[0]}
                </p>
                <p className="mt-4 mb-6 text-base text-secondary group-hover:text-white">
                  {t(caseStudy.title).split(slashMethod(i18n.language))[1]}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </WrapperSection>
  );
}

export default function CaseStudies() {

  return (
    <CaseStudiesTab />
  )
}
