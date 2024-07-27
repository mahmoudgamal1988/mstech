'use client';
import Image from 'next/image'
import { useId } from 'react'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'
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

function ContactForm() {
  const { t } = useTranslation();

  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-primary">
          {t("WORK_INQUIRIES")}
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
          {t("FORM_CONFIRMATION")}
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  const { t } = useTranslation();

  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-primary">
        {t("GET_IN_TOUCH")}
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        {t("GET_IN_TOUCH_TEXT")}
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

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>

    </>
  )
}
