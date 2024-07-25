'use client';
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { t } = useTranslation();
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-white  [text-wrap:balance] sm:text-7xl">
          {t("pageTitle")}
          </h1>
        </FadeIn>
      </Container>
    </>
  )
}
