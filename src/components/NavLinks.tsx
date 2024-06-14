'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from '@headlessui/react'
import { Links } from './Header'


export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  let timeoutRef = useRef<number | null>(null)
  const [isShowing, setIsShowing] = useState(false)

  return Links.map((link, index) => {
    const { name, href, subLinks } = link;
    // console.log("link", link)
    return <Link
      key={name}
      href={href}
      className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-900 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
      onMouseEnter={() => {
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current)
        }
        setIsShowing(true)
        setHoveredIndex(index)
      }}
      onMouseLeave={() => {
        timeoutRef.current = window.setTimeout(() => {
          setIsShowing(false)
          setHoveredIndex(null)
        }, 200)
      }}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-primary  hover:text-gray-900"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15 },
            }}
          />
        )}
      </AnimatePresence>

      <Popover className="relative" >
        <PopoverButton className="flex items-center">
          <Link href={href} className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-50 hover:text-gray-50">
            <span className="relative z-10">{name}</span>
            {subLinks.length > 0 && <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" />}
          </Link>
        </PopoverButton>
        {
          hoveredIndex === index && subLinks.length > 0 &&
          <Transition
            show={isShowing}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-56 max-w-sm overflow-hidden rounded-3xl bg-white text-gray-50 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {subLinks.map((subLink) => (
                  <Link
                    key={subLink.name}
                    href={subLink.href}
                  >
                    <div
                      className="group relative flex justify-start gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-100 hover:text-gray-50"
                    >
                      <div className="flex">
                        <div className="block font-semibold text-gray-900">
                          {subLink.name}
                          <span className="absolute inset-0" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Transition>
        }
      </Popover >
    </Link >
  })
}
