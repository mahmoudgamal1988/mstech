'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  Transition,
  PopoverPanel,
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/NavButton'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from './NavLinks'


import { ChevronDownIcon } from '@heroicons/react/20/solid'


export interface MenuLink {
  name: string;
  href: string;
  subLinks: SubLink[];
}

export interface SubLink {
  name: string;
  href: string;
}

export const Links: MenuLink[] = [
  {
    name: 'Products',
    href: '/products',
    subLinks: [
      { name: 'Leanh', href: '/products/leanh' },
      { name: 'Rack', href: '/products/rack' },
      { name: 'Huem', href: '/products/huem' },
      { name: 'Proptech ', href: '/products/proptech' },
    ]
  },
  {
    name: 'Solutions',
    href: '#',
    subLinks: [
      { name: 'Businesses', href: '/solutions/businesses' },
      { name: 'Home Automation', href: '/solutions/home_automation' },
      { name: 'Additional Stack of Services', href: '/solutions/services' },
    ]
  },
  {
    name: 'Use-cases',
    href: '/use-cases',
    subLinks: []
  },
  {
    name: 'Mstech',
    href: '#',
    subLinks: [
      { name: 'About us ', href: '#' },
      { name: 'Careers', href: '#' },
    ]
  },
]



function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}




interface Props {
  link: MenuLink;
  isSelected: boolean;
  onClick: () => void
}

function MobileNavLink(
  props: Props
) {
  const { link, isSelected, onClick } = props;

  return (
    <Popover className="relative w-full" >
      <PopoverButton
        className="w-full flex flex-row content-between  text-sm font-semibold leading-6 text-gray-900"
        onClick={onClick}
      >
        <span>{link.name}</span>
        {link.subLinks.length > 0 && <ChevronDownIcon className="h-5 w-5 text-gray-400" />}
      </PopoverButton>
      {
        isSelected && link.subLinks.length > 0 &&
        <Transition
          show={true}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl bg-white text-gray-50 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {link.subLinks.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex justify-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-100 hover:text-gray-50"
                >
                  <div className="flex">
                    <a href={item.href} className="block font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </PopoverPanel>
        </Transition>
      }
    </Popover>
  )
}

export function Header() {

  let [selectedTab, setSelectedTab] = useState<string>('')

  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8 w-full">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <PopoverButton
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverOverlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            {
                              Links.map((link, index) => {
                                return <MobileNavLink
                                  key={index}
                                  link={link}
                                  isSelected={selectedTab === link.name}
                                  onClick={() => {
                                    setSelectedTab((prev) => prev === link.name ? "" : link.name)
                                  }}
                                />
                              })
                            }
                            {/* <MobileNavLink title='Reviews' isSelected={selectedTab === "Reviews"} onClick={() => { setSelectedTab("Reviews") }} /> */}
                            {/* <MobileNavLink onClick={() => { setSelectedTab("/#reviews") }} href="/#reviews"> */}
                            {/* Reviews
                            </MobileNavLink>
                            <MobileNavLink href="/#pricing">
                              Pricing
                            </MobileNavLink>
                            <MobileNavLink href="/#faqs">FAQs</MobileNavLink> */}
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="#">Contact Us</Button>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <Button href="#" className="hidden lg:block">
              Contact Us
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  )
}
