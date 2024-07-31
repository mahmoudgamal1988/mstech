'use client';
import Image from 'next/image'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { useTranslation } from 'react-i18next'

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
];

export default function Partners() {
  const { t } = useTranslation();

  return (
    <div className="mt-4 rounded-4xl bg-white py-0 sm:mt-32 sm:py-8 lg:mt-12">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-3xl font-semibold tracking-wider text-primary sm:text-left">
            {t("OUR_PARTNERS")}
          </h2>
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
