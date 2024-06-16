import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function PageIntro({
  eyebrow,
  title,
  mainClass,
  extraTitleClass,
  extraChildrenClass,
  children,
  centered = false,
}: {
  eyebrow: string
  title: string
  mainClass?: string
  extraTitleClass?: string
  extraChildrenClass?: string
  children: React.ReactNode
  centered?: boolean
}) {
  return (
    <Container
      className={clsx('mt-24 sm:mt-32', centered && 'text-center', mainClass || "lg:mt-40")}
    >
      <FadeIn>
        <h1>
          <span className="block font-display text-base font-semibold text-neutral-950">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              'mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-6xl',
              centered && 'mx-auto', extraTitleClass || "text-neutral-950"
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            'mt-6 max-w-3xl text-xl text-neutral-60',
            centered && 'mx-auto', extraChildrenClass
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  )
}
