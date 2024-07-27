import Link from 'next/link'

import { FooterContainer } from '@/components/FooterContainer'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

import initTranslations from '../app/i18n'
import { createInstance } from 'i18next'


async function Navigation({ locale, namespaces }: any) {
  const i18nNamespaces = ['Comman', "businesses", "HOME_AUTOMATION", "Services", "leanh", "rack", "HUEM", "PROPTECH"];
  const i18n = createInstance();
  const { t, resources } = await initTranslations(locale, i18nNamespaces, i18n);


  const navigation = [
    {
      title: 'Products',
      links: [
        { title: t("LEANH", { ns: 'leanh' }), href: '/products/leanh' },
        { title: t("RACK", { ns: 'rack' }), href: '/products/rack' },
        { title: t("HUEM", { ns: 'HUEM' }), href: '/products/huem' },
        { title: t("PROPTECH", { ns: 'PROPTECH' }), href: '/products/proptech' },
        {
          title: (
            <>
              {t("SEE_ALL")}<span aria-hidden="true">&rarr;</span>
            </>
          ),
          href: '/',
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
              {t("SEE_ALL")} <span aria-hidden="true">&rarr;</span>
            </>
          ),
          href: '/',
        },
      ],
    },
    {
      title: t("COMPANY"),
      links: [
        { title: t("USE-CASES", { ns: 'USE-CASES' }), href: '/use-cases' },
        { title: t("ABOUT_US"), href: '/about' },
        { title: t("CONNECT"), href: '/contact' },
      ],
    },
    {
      title: t("CONNECT"),
      links: socialMediaProfiles,
    },
  ]

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
    <FooterContainer as="footer" className="mt-24 bg-primary w-full pt-16 p-4 pb-5 sm:mt-32 lg:mt-40 " >
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            {/* <NewsletterForm /> */}
          </div>
        </div>
        <div className="mb-0 mt-12 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-gray-400 pt-8">
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
