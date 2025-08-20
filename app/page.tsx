"use client"

import * as React from "react"
import Image from "next/image"
import useDetectScroll from "@smakss/react-scroll-direction"

import { motion, AnimatePresence } from "framer-motion";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselNavigation
} from "@/components/ui/carousel"
import CopyButton from '@/components/ui/copyButton';
import { GlobalStyles } from "@/components/GlobalStyles"

import useLockBodyScroll from '@/hooks/use-lock-body-scroll';

const projects = [
  {
    name: "VF Corporation",
    year: "2023 - 2025",
    type: "Frontend Engineering\nCore Web Vitals",
    stack: "Nuxt.js\nPerformance\nAccessibility",
    media: [
      {
        type: "image",
        src: "/vf-corp/tnf_about_1.png",
        width: 1500,
        height: 1152
      },
      {
        type: "mobileVideo",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/0fe25865e5279f39e50e1ac910a8bef8/downloads/default.mp4",
      },
      
    ],
    description: [
      "Worked with VF Digital Technology Team to develop product campaign pages, design system components, & improve core web vitals for The North Face, Vans & Timberland.",
    ],
    stackTags: {
      frontEnd: "Nuxt",
      ui: "Storybook"
    },
  },
  {
    name: "Faces Of Another", 
    year: "2022 - 2024",
    type: "Design\nFrontend Engineering",
    stack: "Visual\nHeadless CMS (Sanity)\nHeadless Commerce (Shopify)\nNext.js",
    media: [
      {
        type: "image",
        src: "/faces-of-another/foa_7.png",
        width: 1500,
        height: 862
      }
    ],
    description: [
      "Designed and built a headless e-commerce platform for Faces Of Another, a contemporary menswear brand.\n\n",
      { 
        text: "www.facesofanother.com", 
        link: "https://facesofanother.com/" 
      },
    ],
    stackTags: {
      cms: "Sanity",
      commerce: "Shopify",
      frontEnd: "Next.js",
      deployment: "Vercel"
    },
  },
  {
    name: "North of Now",
    year: "2022",
    type: "Design\n\n\nFrontend Engineering",
    stack: "Visual\nGraphic\nUI\nHeadless CMS (Prismic)\nNext.js",
    media: [
      {
        type: "image",
        src: "/north-of-now/non-3.png",
        width: 1500,
        height: 1131
      },
      {
        type: "mobileVideo",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/b2da14eb06df9eea6578a5da81aa9ade/downloads/default.mp4",
      },
      {
        type: "mobileVideo",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/63a1f5c62792f9d1b14507c55cf1ea5b/downloads/default.mp4",
      },
      {
        type: "image",
        src: "/north-of-now/non-1.png",
        width: 1500,
        height: 860
      },
      {
        type: "mobileVideo",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/c82c8fba2dc5c30e7b9cd590829f6869/downloads/default.mp4"
      }
    ],
    description: [
      "Logomark, website design and development for Los Angeles based film production company North of Now."
    ],
    stackTags: {
      cms: "Prismic",
      frontEnd: "Next.js",
      deployment: "Vercel"
    },
  },
  {
    name: "Basma Beauty",
    year: "2022",
    type: "Theme Development",
    stack: "Shopify",
    media: [
      {
        type: "image",
        src: "/basma/bb-d.png",
        width: 1000,
        height: 761
      },
      {
        type: "mobileVideo",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/3effe4b4174d7cdd27b1a2ac41f00561/downloads/default.mp4"
      }
    ],
    description: [
      "Worked with ",
      { 
        text: "56.digital", 
        link: "https://56.digital/" 
      },
      " to develop a shade finder quiz for Basma Beauty."
    ],
    stackTags: {
      commerce: "Shopify"
    },
  },
  {
    name: "Susan for Susan",
    year: "2021",
    type: "Theme Development",
    stack: "Squarespace",
    media: [
      {
        type: "image",
        src: "/susan-for-susan/1.png",
        width: 1000,
        height: 652
      },
      {
        type: "mobileVideo",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/49a789f383f94691c5ccd93afc0cb2c3/downloads/default.mp4"
      }
    ],
    description: [
      "Frontend development for Toronto-based design studio Susan for Susan.\n\nDesign by ",
      { 
        text: "Ronan Mcgee", 
        link: "https://www.xn--rnn-fla2g.com/" 
      }
    ],
    stackTags: {
      cms: "Squarespace"
    },
  },
  {
    name: "Club Dieciséis",
    year: "2021",
    type: "Theme Development",
    stack: "Shopify",
    media: [
      {
        type: "desktopVideo",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/787904e7ebf09dc97b99c0247acfa6f6/downloads/default.mp4"
      }
    ],
    description: [
      "Shopify theme development for Puerto Rican musician Tainy.\n\nDesign by ",
      { 
        text: "Ronan Mcgee", 
        link: "https://www.xn--rnn-fla2g.com/" 
      }
    ],
    stackTags: {
      commerce: "Shopify"
    },
  },
  {
    name: "Full Court Press",
    year: "2020",
    type: "Theme Development",
    stack: "Shopify",
    media: [
      {
        type: "mobileVideo",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/71478c576dacfc40d3b92e13366f9e73/downloads/default.mp4"
      }
    ],
    description: [
      "Shopify theme development for New York-based clothing line/publishing house Full Court Press.\n\nDesign by ",
      { 
        text: "Ronan Mcgee", 
        link: "https://www.xn--rnn-fla2g.com/" 
      }
    ],
    stackTags: {
      commerce: "Shopify"
    },
  },
  {
    name: "Norman Wong",
    year: "2020",
    type: "Theme Development",
    stack: "Craft",
    media: [
      {
        type: "image",
        src: "/norman-wong/1.png",
        width: 800,
        height: 487
      },
      {
        type: "image",
        src: "/norman-wong/3.png",
        width: 800,
        height: 487
      }
    ],
    description: [
      "Frontend development for Toronto-based photographer Norman Wong."
    ],
    stackTags: {
      cms: "Craft",
    },
  },
]

export default function Home() {

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
  const size = 20;       // button square (px)
  const lineW = 20;      // line width (px)
  const lineH = 1.5;       // line thickness (px)
  const gap = 5;         // distance from center when closed (px)

  const common = {
    style: {
      width: lineW,
      height: lineH,
    },
    className:
      "absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 " +
      "bg-current origin-center",
    transition: { duration: 0.1, ease: "easeInOut" },
  };

  const paragraphs = [
    "JNPR is a design and development studio based in Toronto.",
    "We help clients realize their creative ideas and digital experiences.",
    "With over 8 years of experience, we bring a depth of knowledge in contemporary design, e-commerce, & frontend engineering."
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
    <div className="bg-white">
      <div className="container text-black">
        <GlobalStyles />
        <header
          className={"container fixed left-0 z-[2] duration-100 "
           + (direction === 'down' ? '-top-[76px] lg:-top-[104px]' : 'top-0')
          }
        >
          <div className="relative z-50 flex justify-between items-center animate-fade-in-slow">
            <div className="py-4 md:pl-0">
              <img className="h-[6vw] sm:h-[4vw] lg:h-[2vw]" src="/jnpr.svg" alt="JNPR Studio" />
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
            className={"container fixed top-0 left-0 flex flex-col justify-between h-dvh transition duration-150 ease-in-out pointer-events-none " + (infoVisibility ? 'opacity-100 pointer-events-auto ' : 'opacity-0 ')}
            style={{
              backgroundColor: '#ffffffb8',
              backgroundImage: 'radial-gradient(transparent 1px, #fff 1px)',
              backgroundSize: '2px 2px',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div></div>
            <AnimatePresence mode="wait">
              {infoVisibility && (
                <motion.div
                  key="typing-text"
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  className="w-5/6 lg:w-1/3"
                >
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
                JNPR is a design and development studio based in Toronto.<br /><br />
                We specialize in UI and visual design, e-commerce strategy, and headless frontend architecture solutions.
              </p>
            </div> */}
            <div className="flex justify-between mb-5">
              <p className="text-base">68 Claremont St<br />Toronto, ON<br />Canada</p>
              <p className="text-base text-right">
                <a href="tel:+14166708705" className="link-primary">&#43;1&#32;416&#32;670&#32;8705</a><br />
                <CopyButton className="link-primary" textToCopy="hello@jnpr.studio" /><br />
                <a href="https://www.instagram.com/jnpr.studio/" className="link-primary" target="_blank">@jnpr.studio</a>
              </p>
            </div>
          </div>
        </header>
        <main className="animate-fade-in-slower-delay opacity-0 pt-16 xl:pt-36 min-h-[92vh]">
          <div className="grid grid-cols-[50%_50%] lg:grid-cols-[25%_25%_30%_auto_max-content] h-max mt-12 mb-12">
            <div className="col-span-2 lg:col-span-1 lg:row-span-2 mb-16 lg:mb-0 text-xs w-5/6 lg:max-w-64 italic">
              <p className="mb-4">About:</p>
              <p>JNPR is a design and development studio based in Toronto.</p>
              <p>We help clients realize their creative ideas and digital experiences.</p>
              <p>With over 8 years of experience, we bring a depth of knowledge in contemporary design, e-commerce, & frontend engineering.</p>
            </div>
            <p className="mb-4 col-span-2 lg:col-span-4 text-xs italic">Areas of Interest:</p>
            <p className="text-xs lg:col-start-2">
              Frontend Engineering<br /><br /><br /><br />
              Core Web Vitals<br /><br /><br /><br />
              Design
            </p>
            <p className="text-xs">
              JS Meta Frameworks<br />
              Headless Commerce<br />
              Headless CMS<br /><br />
              Best Practices<br />
              Performance<br />
              Accessibility<br /><br />
              Visual<br />
              UX<br />
              UI
            </p>
          </div>
          <div className="mb-28">
            <h2 className="text-xs mb-4 italic">Work:</h2>
            <Accordion type="single" defaultValue="item-0" collapsible className="space-y-2">
              {projects.map((project, index) => (
                <AccordionItem
                  key={index} value={`item-${index}`}
                >
                  <AccordionTrigger
                    className="grid grid-cols-[50%_auto_max-content] lg:grid-cols-[25%_25%_25%_auto_max-content] w-full text-xs/none font-normal text-left pb-2"
                  >
                    <span className="whitespace-pre-line text-xs">{project.name}</span>
                    <span className="hidden lg:block whitespace-pre-line text-xs">{project.type}</span>
                    <span className="hidden lg:block whitespace-pre-line text-xs pr-6">{project.stack}</span>
                    <span className="whitespace-pre-line text-xs pr-2">{project.year}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 lg:space-y-0 lg:mt-4 mt-1 mb-1 lg:grid lg:grid-cols-[25%_25%_50%]">
                      <Carousel className="relative w-full py-2 lg:order-2" orientation="horizontal" opts={{
                        align: 'start',
                        loop: false
                      }}>
                        <CarouselContent>
                        {project.media.map((item, itemIndex) => (
                          <CarouselItem
                            key={itemIndex}
                            className={`flex justify-center items-center ${project.media.length > 1 ? 'lg:flex-[0_0_50%]' : 'flex-[0_0_100%]'}`}
                          >
                            {item.type === "image" && (
                              <div
                                className="relative w-full"
                                style={{
                                  aspectRatio: `${item.width} / ${item.height}`,
                                }}
                              >
                                <Image
                                  fill
                                  src={item.src}
                                  alt={`${project.name} screenshot ${itemIndex + 1}`}
                                  sizes="(max-width: 1024px) 100vw, 40vw"
                                  style={{ objectFit: "contain" }}
                                />
                              </div>
                            )}
                            {item.type === "mobileVideo" && (
                              <div className="aspect-w-16 aspect-h-9 w-[38%]">
                                <video src={item.src} muted playsInline autoPlay loop className="w-full h-full object-cover">
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                            )}
                            {item.type === "desktopVideo" && (
                              <div className="aspect-w-16 aspect-h-9">
                                <video src={item.src} muted playsInline autoPlay loop className="w-full h-full object-cover">
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                            )}
                          </CarouselItem>
                        ))}
                        </CarouselContent>
                        <CarouselNavigation />
                        <CarouselPrevious variant="quiet" />
                        <CarouselNext variant="quiet" />
                      </Carousel>
                      {project.description &&
                        <div className="lg:flex lg:items-center lg:justify-between w-full lg:col-span-2 lg:w-1/2">
                          <p className="text-xs whitespace-pre-line lg:pr-32">
                            {project.description.map((item, i) =>
                              typeof item === "string" ? (
                                item
                              ) : (
                                <a key={i} href={item.link} target="_blank" className="link-primary">
                                  {item.text}
                                </a>
                              )
                            )}
                          </p>
                        </div>
                      }
                      <div className="lg:hidden grid grid-cols-[50%_auto]">
                        {/* <h3 className="col-span-2 text-xs mb-4">Services: </h3> */}
                        <div className="text-xs max-w-[95%] mb-2 whitespace-pre-line">
                          {project.type}
                        </div>
                        <div className="text-xs max-w-[95%] whitespace-pre-line">
                          {project.stack}
                        </div>
                      </div>
                    </div>
                    </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </main>
        <footer className="grid grid-cols-[50%_auto] mb-16 lg:mb-24 animate-fade-in-slow-delay opacity-0">
          <p className="text-xs">68 Claremont St<br />Toronto, ON<br />Canada</p>
          <div className="text-right">
            <p className="text-xs">
              <a href="tel:+14166708705" className="link-primary">&#43;1&#32;416&#32;670&#32;8705</a><br />
              <CopyButton className="link-primary" textToCopy="hello@jnpr.studio" /><br />
              <a href="https://www.instagram.com/jnpr.studio/" className="link-primary" target="_blank">@jnpr.studio</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

