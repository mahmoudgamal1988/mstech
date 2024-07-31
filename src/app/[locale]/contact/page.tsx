'use client'

import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import contactImg from '@/images/aboutUs/our_values.png'

import { useTranslation } from 'react-i18next'

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

export default function Contact({ params: { locale } }: any) {

  const { t } = useTranslation()

  return (
    <>
      <PageIntro
        eyebrow={t('CONTACT_US', { ns: 'CONTACT_US' })}
        title={t('CONTACT_US_TITLE', { ns: 'CONTACT_US' })}
        extraTitleClass='text-white'
        extraChildrenClass='text-white'
      >
        <p>{t('CONTACT_US_TITLE_2', { ns: 'CONTACT_US' })}</p>
      </PageIntro>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Container className="mt-24 sm:mt-32 lg:mt-96">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <FadeIn className="lg:order-last">
            <form>
              <h2 className="font-display text-base font-semibold text-neutral-950">
                {t("REQUEST", { ns: "CONTACT_US" })}
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
                {t('CONTACT_US_TITLE', { ns: 'CONTACT_US' })}
              </Button>
            </form>
          </FadeIn>

          <FadeIn>
            <p className="mt-6 text-base text-neutral-600">
              {t('CONTACT_US_CONTENT', { ns: 'CONTACT_US' })}
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

            <Border className="mt-4 pt-16">
              <h2 className="font-display text-base font-semibold text-neutral-950">
                {t("EMAIL_US", { ns: "Comman" })}
              </h2>
              <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
                {[
                  [t('PRESS', { ns: "Comman" }), t('PRESS_VALUE', { ns: "Comman" })],
                ].map(([label, email]) => (
                  <div key={email}>
                    <dt className="font-semibold text-neutral-950">{label}</dt>
                    <dd>
                      <Link
                        href={`mailto:${email}`}
                        className="text-neutral-600 hover:text-neutral-950"
                      >
                        {email}
                      </Link>
                    </dd>
                  </div>
                ))}
              </dl>
            </Border>

            <Border className="mt-16 pt-16">
              <h2 className="font-display text-base font-semibold text-neutral-950">
                {t("FOLLOW_US", { ns: "Comman" })}
              </h2>
              <SocialMedia className="mt-6" />
            </Border>
          </FadeIn>
        </div>
      </Container>
    </>
  )
}



