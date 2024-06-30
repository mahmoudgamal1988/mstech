import Link from 'next/link'

import { FooterContainer } from '@/components/FooterContainer'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Products',
    links: [
      { title: 'Leanh', href: '/products/leanh' },
      { title: 'Rack', href: '/products/rack' },
      { title: 'Huem', href: '/products/huem' },
      { title: 'Proptech', href: '/products/proptech' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/solutions',
      },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { title: 'Businesses', href: '/solutions/businesses' },
      { title: 'Home Automation', href: '/solutions/home_automation' },
      { title: 'Additional Stack of Services', href: '/solutions/services' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/solutions',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'Use-cases', href: '/use-cases' },
      { title: 'About', href: '/about' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-white">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-gray-300">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-gray-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-white">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-gray-300">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-400 bg-transparent py-4 pl-6 pr-20 text-base/6 text-white ring-4 ring-transparent transition placeholder:text-gray-300 focus:border-gray-300 focus:outline-none"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-white text-neutral-950 transition hover:bg-gray-200"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <FooterContainer as="footer" className="mt-24 bg-lightBg w-full pt-28 p-4 sm:mt-32 lg:mt-40 " >
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            {/* <NewsletterForm /> */}
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-gray-400 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8 " fillOnHover />
          </Link>
          {/* <p className="text-sm text-gray-300">
            © Meshkati Agency Inc. {new Date().getFullYear()}
          </p> */}
        </div>
      </FadeIn>
    </FooterContainer>
  )
}
