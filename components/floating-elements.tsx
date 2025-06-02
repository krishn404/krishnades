"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function FloatingElements() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, -100])
  const y2 = useTransform(scrollY, [0, 500], [0, 50])
  const y3 = useTransform(scrollY, [0, 800], [0, -150])
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 360])
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -180])
  const scale1 = useTransform(scrollY, [0, 500], [1, 1.2])
  const scale2 = useTransform(scrollY, [0, 500], [1, 0.8])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Scribble Star */}
      <motion.svg
        style={{ y: y1, rotate: rotate1, scale: scale1 }}
        className="absolute top-20 left-[5%] w-16 h-16 text-orange-500 opacity-30"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 5C52 25 65 35 85 50C65 65 52 75 50 95C48 75 35 65 15 50C35 35 48 25 50 5Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.svg>

      {/* Scribble Spiral */}
      <motion.svg
        style={{ y: y2, rotate: rotate2, scale: scale2 }}
        className="absolute top-40 right-[10%] w-20 h-20 text-blue-500 opacity-30"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 90C65 90 80 80 80 65C80 50 70 40 55 40C40 40 35 50 35 60C35 70 42 75 50 75C58 75 62 68 62 60C62 52 58 48 50 48C42 48 40 52 40 56C40 60 43 62 47 62"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.svg>

      {/* Scribble Cloud */}
      <motion.svg
        style={{ y: y3 }}
        className="absolute bottom-32 left-1/4 w-24 h-16 text-red-400 opacity-25"
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 40C10 30 15 25 25 25C28 15 35 10 45 10C55 10 65 20 70 30C80 25 90 30 90 40C90 50 80 55 70 50C65 55 55 55 45 55C35 55 25 50 20 45C15 50 10 45 10 40Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.svg>

      {/* Scribble Lightning */}
      <motion.svg
        style={{ rotate: useTransform(scrollY, [0, 1000], [0, 180]) }}
        className="absolute top-1/3 right-1/4 w-12 h-16 text-yellow-400 opacity-40"
        viewBox="0 0 60 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35 5L10 45H30L25 95L50 45H30L35 5Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.svg>

      {/* Scribble Squiggle */}
      <motion.svg
        style={{ y: useTransform(scrollY, [0, 500], [0, 75]) }}
        className="absolute bottom-1/4 right-1/3 w-20 h-10 text-orange-500 opacity-40"
        viewBox="0 0 100 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 20C10 10 20 30 30 20C40 10 50 30 60 20C70 10 80 30 95 20"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.svg>

      {/* Scribble Circle */}
      <motion.svg
        style={{ y: y1 }}
        className="absolute top-1/2 left-[8%] w-14 h-14 text-blue-500 opacity-35"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 50C30 40 35 30 50 30C65 30 75 40 75 50C75 60 65 70 50 70C35 70 30 60 30 50Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.svg>

     
      {/* Scribble Music Note */}
      <motion.svg
        style={{ y: y3 }}
        className="absolute top-2/3 left-1/3 w-12 h-16 text-yellow-400 opacity-30"
        viewBox="0 0 60 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 20L40 70C40 70 40 80 30 80C20 80 15 75 15 70C15 65 20 60 30 60C35 60 40 65 40 70"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M40 20L45 15L45 65"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.svg>

      {/* Scribble Smiley */}
      <motion.svg
        style={{ rotate: useTransform(scrollY, [0, 700], [-20, 20]) }}
        className="absolute top-[15%] left-[20%] w-10 h-10 text-orange-500 opacity-30"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 40C32 42 34 42 35 40M65 40C67 42 69 42 70 40M35 65C40 70 60 70 65 65"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M50 90C72 90 90 72 90 50C90 28 72 10 50 10C28 10 10 28 10 50C10 72 28 90 50 90Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.svg>

      {/* Scribble Asterisk */}
      <motion.svg
        style={{ rotate: useTransform(scrollY, [0, 500], [0, 90]) }}
        className="absolute bottom-[20%] left-[15%] w-8 h-8 text-blue-500 opacity-30"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 20L50 80M20 35L80 65M20 65L80 35"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.svg>

      {/* Scribble Dots */}
      <motion.svg
        style={{ y: useTransform(scrollY, [0, 300], [0, 30]) }}
        className="absolute top-[40%] right-[15%] w-16 h-8 text-red-400 opacity-25"
        viewBox="0 0 100 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 20C22 22 24 22 25 20C26 18 24 16 20 20ZM50 20C52 22 54 22 55 20C56 18 54 16 50 20ZM80 20C82 22 84 22 85 20C86 18 84 16 80 20Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.svg>

      
    </div>
  )
}
