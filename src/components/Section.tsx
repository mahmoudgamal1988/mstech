import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import Link from 'next/link'
import { StylizedImageSquare } from './StylizedImageSquare'

export function Section({
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
            <StylizedImageSquare
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
