'use-client';
import Image from 'next/image'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Border } from '@/components/Border'
import { useTranslation } from 'react-i18next'

//Why Images
import BRANDIMG from '@/images/why/BRAND.png';
import QUALITY from '@/images/why/QUALITY.png';
import SUPPORT from '@/images/why/SUPPORT.png';
import METHODOLOGY from '@/images/why/METHODOLOGY.png';
import TECHNOLOGIES from '@/images/why/TECHNOLOGIES.png';
import TAILORED from '@/images/why/TAILORED.png';
import NETWORK from '@/images/why/NETWORK.png';
import RESEACH from '@/images/why/RESEACH.png';


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
];


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

export default function WhySection() {
  const { t } = useTranslation();

  return (
    <>
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
    </>
  )
}
