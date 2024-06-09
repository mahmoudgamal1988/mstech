import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import clsx from 'clsx';
import TRANSPARENCY from '@/images/values/TRANSPARENCY.png';
import Image from 'next/image'

export function StatList({
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof FadeInStagger>, 'children'> & {
  children: React.ReactNode
}) {
  return (
    <FadeInStagger {...props}>
      <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
        {children}
      </dl>
    </FadeInStagger>
  )
}

export function StatListItem({
  label,
  value,
  extraClass
}: {
  label: string;
  value: string;
  extraClass?: string
}) {
  return (
    <Border as={FadeIn} position="left" className={clsx('flex flex-col-reverse pl-8')} >

      <dt className={clsx('mt-2 text-base text-neutral-600', extraClass)}>{label}</dt>
      <dd className={clsx('font-display text-3xl font-semibold text-neutral-950 sm:text-4xl')}>
        {value}
      </dd>

    </Border >
  )
}

export function CustomStatList({
  label,
  value,
  icon,
  extraClass
}: {
  label: string;
  value: string;
  icon: any;
  extraClass?: string;
}) {
  return (
    <Border as={FadeIn} position="left" className={clsx('flex content-end justify-end items-start  flex-row-reverse pl-6')} >
      <div className='flex flex-col-reverse ml-4'>
        <dt className={clsx('mt-2 text-base text-neutral-600', extraClass)}>{label}</dt>
        <dd className={clsx('font-display text-3xl font-semibold text-neutral-950 sm:text-4xl')}>
          {value}
        </dd>
      </div>
      <Image
        src={icon}
        className='w-12 transition-transform transform transition-filter filter-none group-hover:scale-110'
        alt={icon}
        unoptimized
      />

    </Border >
  )
}
