'use-client'
import Image from 'next/image'
import { useId } from 'react'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Button } from '@/components/Button'


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

import WrapperSection from './WrapperSection'
import contactImg from '@/images/aboutUs/our_values.png'
import { useTranslation } from 'react-i18next'

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
            className="mt-10 mb-[-52px] grid grid-cols-4 gap-x-8 gap-y-10 lg:grid-cols-8 md:grid-cols-8"
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

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
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
