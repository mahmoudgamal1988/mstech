'use client'

import { useEffect, useId, useRef, useState, useContext } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FadeIn, FadeInStagger } from './FadeIn'
import { createContext, } from 'react'
import Image from 'next/image'
import PicOne from '@/images/bg/Picture1.png'
import PicTwo from '@/images/bg/Picture2.png'
// import videoBg from '@/images/bg/';

const FadeInStaggerContext = createContext(false)
const viewport = { once: true, margin: '0px 0px -200px' }




function StaticBlock({
  x,
  y,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof motion.path>, 'x' | 'y'> & {
  x: number
  y: number
}) {

  let shouldReduceMotion = useReducedMotion()
  let isInStaggerGroup = useContext(FadeInStaggerContext)

  // console.log("y", props.fill)
  return (
    <motion.path
      transform={`translate(${-32 * y + 96 * x} ${160 * y})`}
      d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
      // fill="transparent"
      // stroke="black"
      strokeWidth="2"
      initial={{ pathLength: 0, fill: "transparent", opacity: 0 }}
      animate={{ pathLength: 1, fill: props.fill as string, opacity: 1 }}
      transition={{
        duration: 0 + (y / 2),
        ease: "easeInOut",
        // repeat: Infinity,
        // repeatType: 'reverse'
      }}
    // {...props}
    />
  )
}

function Block({
  x,
  y,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof motion.path>, 'x' | 'y'> & {
  x: number
  y: number
}) {
  return (
    <motion.path
      transform={`translate(${-32 * y + 96 * x} ${160 * y})`}
      d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
      {...props}
    />
  )
}


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
  let staticBlocks = [
    [1, 1],
    [2, 2],
    [6, 2],
    [4, 3],
    [7, 4],
  ]


  const staticColors = [
    { fill: "#1E96C7" },
    { fill: "#1E96C7" },
    { fill: "#1E96C7" },
    { fill: "#197DB7" },
    { fill: "#197DB7" },
  ]

  useEffect(() => {
    if (!interactive) {
      return
    }

    function onMouseMove(event: MouseEvent) {
      if (!ref.current) {
        return
      }

      let rect = ref.current.getBoundingClientRect()
      let x = event.clientX - rect.left
      let y = event.clientY - rect.top
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        return
      }

      x = x - rect.width / 2 - 32
      y = y - yOffset
      x += Math.tan(32 / 160) * y
      x = Math.floor(x / 96)
      y = Math.floor(y / 160)

      if (currentBlock.current?.[0] === x && currentBlock.current?.[1] === y) {
        return
      }

      currentBlock.current = [x, y]

      setHoveredBlocks((blocks) => {
        let key = counter.current++
        let block = [x, y, key] as (typeof hoveredBlocks)[number]
        return [...blocks, block].filter(
          (block) => !(block[0] === x && block[1] === y && block[2] !== key),
        )
      })
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [yOffset, interactive])

  return (
    <div className='absolute inset-x-0 -top-14 -z-10 h-[830px] w-full fill-primary stroke-ooo [mask-image:linear-gradient(to_bottom_left,#030814_40%,#030814_50%)] bg-darkBg'>
      {/* <div className='main'> */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      <video src={"https://i.imgur.com/L7ZKFL9.mp4"} className="w-full h-full object-cover"  autoPlay loop muted />
      <div className="content">
        <h1>Welcome</h1>
        <p>To my site.</p>
      </div>
      {/* </div> */}
    </div>
  )
}
