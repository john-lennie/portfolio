"use client"

import * as React from "react"
import Link from "next/link"
import { MobileIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation"
import useDetectScroll from "@smakss/react-scroll-direction"

import { motion, AnimatePresence } from "framer-motion";
import CopyButton from '@/components/ui/copyButton';


import useLockBodyScroll from '@/hooks/use-lock-body-scroll';

export default function Header() {

  const router = useRouter()

  const handleNavClick = (path: string) => {
    setInfoVisibility(false)
    router.push(path)
  }

  const { scrollDir } = useDetectScroll();
  const [direction, setDirection] = React.useState('up')
  React.useEffect(() => {
    scrollDir === "down" && setDirection('down')
    scrollDir === "up" && setDirection('up')
  }, [scrollDir])

  const [infoVisibility, setInfoVisibility] = React.useState(false);
  const toggleInfo = () => setInfoVisibility(prev => !prev);

  useLockBodyScroll(infoVisibility);

  // tweak these if you like
  const size = 40;       // button square (px)
  const lineW = 20;      // line width (px)
  const lineH = 1.5;       // line thickness (px)
  const gap = 5;         // distance from center when closed (px)

  const common = {
    style: {
      width: lineW,
      height: lineH,
    },
    className:
      "absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 " +
      "bg-current origin-center",
    transition: { duration: 0.1, ease: "easeInOut" },
  };

  const paragraphs = [
    "JNPR is a digital product design & engineering studio.",
    "We help clients realize creative ideas while prioritizing performance for web-based digital experiences.",
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.01 },
    },
  };

  const wordContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.01 }, // per-letter speed
    },
  };

  const letter = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  
  return (
    <header
      className={"container fixed left-0 z-[2] duration-100 "
        + (direction === 'down' ? '-top-[76px] lg:-top-[104px]' : 'top-0')
      }
    >
      <div className="relative z-50 flex justify-between items-center animate-fade-in-slow">
        <div className="py-4 md:pl-0">
          <Link href="/" onClick={() => handleNavClick("/")} aria-label="Go to homepage">
            <img
              src="/jnpr.svg"
              alt="JNPR Studio"
              className="h-[6vw] sm:h-[4vw] lg:h-[2vw]"
            />
          </Link>
        </div>
        <button
          onClick={toggleInfo}
          aria-pressed={infoVisibility}
          aria-label={infoVisibility ? "Close menu" : "Open menu"}
          className="relative inline-flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          {/* Top line */}
          <motion.span
            {...common}
            animate={{
              y: infoVisibility ? 0 : -gap,
              rotate: infoVisibility ? 45 : 0,
            }}
          />
          {/* Middle line */}
          <motion.span
            {...common}
            animate={{
              y: 0,
              opacity: infoVisibility ? 0 : 1,
              scaleX: infoVisibility ? 0.8 : 1,
            }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
          />
          {/* Bottom line */}
          <motion.span
            {...common}
            animate={{
              y: infoVisibility ? 0 : gap,
              rotate: infoVisibility ? -45 : 0,
            }}
          />
        </button>
        {/* <button className={"flex text-base !leading-none items-center uppercase " + (infoVisibility ? 'block' : 'hidden')} onClick={toggleInfo}>
          Close
          <Cross2Icon className="ml-2 h-[7vw] w-[7vw] lg:h-[1.75vw] lg:w-[1.75vw]" />
        </button>
        <button className={"text-base uppercase " + (infoVisibility ? 'hidden' : 'block')} onClick={toggleInfo}>Info</button> */}
      </div>
      <div
        className={"container fixed top-0 left-0 pt-48 flex flex-col justify-between h-dvh transition duration-150 ease-in-out pointer-events-none " + (infoVisibility ? 'opacity-100 pointer-events-auto ' : 'opacity-0 ')}
        style={{
          backgroundColor: '#ffffff40',
          backgroundImage: 'radial-gradient(transparent 1px, #fff 1px)',
          backgroundSize: '2px 2px',
          backdropFilter: 'blur(10px)'
        }}
      >
        <div className="relative w-fit py-10 pr-10">
          <span
            className="absolute -z-10 left-[-90%] top-[-50%] w-[200%] h-[200%]"
            style={{ background: 'radial-gradient(closest-side, rgb(255 255 255), rgb(255 255 255 / 0%))' }}
          />
          <Link href="/blog" onClick={() => handleNavClick("/blog")} className="text-base text-red-600 underline">
            Blog
          </Link>
        </div>
        <AnimatePresence mode="wait">
          {infoVisibility && (
            <motion.div
              key="typing-text"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="w-5/6 lg:w-1/3 relative"
            >
              <span
                className="absolute -z-10 left-[-50%] top-[-50%] w-[200%] h-[200%]"
                style={{ background: 'radial-gradient(closest-side, rgb(255 255 255), rgb(255 255 255 / 0%))' }}
              />
              {paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  className="text-base text-red-600 mb-4 whitespace-normal"
                  variants={container}
                >
                  {para.split(" ").map((word, wIndex) => (
                    <motion.span
                      key={wIndex}
                      className="inline-block mr-1" // keeps spacing
                      variants={wordContainer}
                    >
                      {word.split("").map((char, cIndex) => (
                        <motion.span key={cIndex} variants={letter}>
                          {char}
                        </motion.span>
                      ))}
                    </motion.span>
                  ))}
                </motion.p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        {/* <div className="w-3/5 lg:w-1/3">
          <p className="text-base text-red-600">
            JNPR is a digital product design & engineering studio based in Toronto.<br /><br />
            We specialize in UI & visual design, e-commerce strategy, & headless frontend architecture solutions.
          </p>
        </div> */}
        <div className="flex justify-between mb-5 relative">
          <span
            className="absolute -z-10 left-[-50%] top-[-50%] w-[200%] h-[200%]"
            style={{ background: 'radial-gradient(closest-side, rgb(255 255 255), rgb(255 255 255 / 0%))' }}
          />
          <p className="text-base">68 Claremont St<br />Toronto, ON<br />Canada</p>
          <p className="text-base text-right">
            <span className='inline-flex items-center space-x-1 link-primary'>
              <a href="tel:+14166708705">&#43;1&#32;416&#32;670&#32;8705</a>
              <MobileIcon className='w-[1em] h-[1em]' />
            </span><br />
            <CopyButton textToCopy="hello@jnpr.studio" /><br />
            <span className='inline-flex items-center space-x-1 link-primary'>
              <a href="https://www.are.na/jnpr-studio/all" target="_blank">are.na</a>
              <ExternalLinkIcon className='w-[1em] h-[1em]' />
            </span> 
          </p>
        </div>
      </div>
    </header>
  )
}
