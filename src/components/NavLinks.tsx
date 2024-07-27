'use client'

import { useRef, useState, useContext, useMemo } from 'react'
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
import { MenuLink } from './Header'
import { RootLayoutContext } from './RootLayout'
import { useRouter, usePathname } from 'next/navigation'

export function NavLinks({ links }: { links: MenuLink[] }) {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  let timeoutRef = useRef<number | null>(null)
  const [isShowing, setIsShowing] = useState(false)
  const contextRes = useContext(RootLayoutContext);
  const { productRef, solutionRef } = contextRes as any;
  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = (sectionRef: any) => {
    setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000);
  };

  // const navigateTo = (path: string) => {
  //   router.push(path);
  // };

  // const isExsists = useMemo(() => {
  //   return solutionRef.current || productRef.current
  // }, [productRef, solutionRef]);


  const isHomePage = useMemo(() => {
    // Check if the pathname is '/' or empty, indicating it's the home page
    if (pathname === '/' || pathname === '') {
      return true;
    } else {
      return false;
    }
  }, [pathname]);

  return links.map((link, index) => {
    const { name, href, isSubPage, sectionTag, subLinks } = link;
    return <Link
      key={name}
      // href={(isSubPage && href) || !isExsists ? href : "#"}
      href={!isSubPage && isHomePage ? "#" : href}
      className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-900 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
      onClick={() => {
        if (!isHomePage) {
          return false
        }

        switch (sectionTag) {
          case "/products":
            console.log("productRefproductRefproductRefproductRef", productRef)
            if (productRef && productRef.current) {
              scrollToSection(productRef)
            } else {

            }
            break;
          case "/solutions":
            if (solutionRef && solutionRef.current) {
              scrollToSection(solutionRef)
            } else {

            }
          default:
            break;
        }
      }}
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
        {/* <Link href={href} className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-50 hover:text-gray-50"> */}
        {/* <a href={href}> */}
        {/* <Link href={href}> */}

        <PopoverButton className="flex items-center" style={{ pointerEvents: "none" }}>
          <span className="relative z-10 text-white" > {name}</span >
          {subLinks.length > 0 && <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" />}
        </PopoverButton>
        {/* </Link> */}

        {/* </a> */}
        {/* </Link> */}
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
