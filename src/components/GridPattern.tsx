'use client'

import { useEffect, useId, useRef, useState, useContext, useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FadeIn, FadeInStagger } from './FadeIn'
import { createContext, } from 'react'
import Image from 'next/image'
import PicOne from '@/images/bg/Picture1.png'
import PicTwo from '@/images/bg/Picture2.png'
import Video from 'next-video';
import { useRouter, usePathname } from 'next/navigation'

// import videoBg from '@/images/bg/';

const FadeInStaggerContext = createContext(false)
const viewport = { once: true, margin: '0px 0px -200px' }


export function GridPattern({
  yOffset = 0,
  interactive = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  yOffset?: number
  interactive?: boolean
}) {
  let id = useId()
  let ref = useRef<React.ElementRef<'svg'>>(null)
  let currentBlock = useRef<[x: number, y: number]>()
  let counter = useRef(0)
  let [hoveredBlocks, setHoveredBlocks] = useState<
    Array<[x: number, y: number, key: number]>
  >([])
  const pathname = usePathname()

  const isHomepage = pathname === '/' || pathname === '/ar';
  const [isVideoEnded, setIsVideoEnded] = useState<boolean>(false);

  const IsVideo = useMemo(() => {
    return isHomepage ? !isVideoEnded : false;
  }, [isHomepage, isVideoEnded]);

  return (
    <div className={`absolute inset-x-0 -top-14 -z-10 w-full fill-primary stroke-ooo [mask-image:linear-gradient(to_bottom_left,#030814_40%,#030814_50%)] bg-darkBg ${isHomepage ? 'h-[830px]' : 'h-[670px]'}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40">
      </div>
      {
        IsVideo ?
          <Video
            src={"https://i.imgur.com/ik7nnGd.mp4"}
            className="w-full h-full object-cover"
            autoPlay
            muted
            onEnded={() => {
              console.log("ended !!")
              setIsVideoEnded(true)
            }}
          /> : <>
            <FadeIn>
              <Image
                src={PicOne}
                className="w-full sm:w-[800px] lg:w-[1300px] absolute left-0 sm:left-[-200px] lg:left-[-350px] mt-0 sm:mt-[-200px] lg:mt-[-450px]"
                alt="IMG"
                unoptimized
              />
            </FadeIn>
            <FadeIn>
              <Image
                src={PicTwo}
                className="w-full sm:w-[800px] lg:w-[1300px] absolute right-0 sm:right-[-200px] lg:right-[-450px] top-[50px] sm:top-[100px]"
                alt="IMG"
                unoptimized
              />
            </FadeIn>
          </>
      }
    </div>
  )
}
