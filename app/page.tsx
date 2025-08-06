"use client"

import * as React from "react"
import Image from "next/image"
import useDetectScroll from "@smakss/react-scroll-direction"

import { CrossCircledIcon } from "@radix-ui/react-icons"

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
    stack: "Nuxt.js\nAccessibility",
    media: [
      {
        type: "image",
        src: "/vf-corp/tnf_history_2.png",
        width: 1500,
        height: 864
      } 
    ],
    description: [
      "Worked with the VF Digital Technology Team to develop custom landing pages, build design systems, and perform accessibility audits/improvements for VF's umbrella of brands including The North Face, Vans, and Timberland.",
    ],
    stackTags: {
      frontEnd: "Nuxt",
      ui: "Storybook"
    },
  },
  {
    name: "Faces Of Another", 
    year: "2022 - 2025",
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
      "Designed and built a headless e-commerce platform for Faces Of Another, a men's contemporary clothing brand.\n\n",
      { 
        text: "facesofanother.com", 
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
    name: "Full Court Press",
    year: "2022",
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
      },
      "."
    ],
    stackTags: {
      commerce: "Shopify"
    },
  },
  {
    name: "Norman Wong",
    year: "2021",
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
      },
      "."
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
      },
      "."
    ],
    stackTags: {
      commerce: "Shopify"
    },
  }
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

  return (
    <div className="bg-white">
      <div className="min-h-screen text-black">
        <GlobalStyles />
        <header
          className={"container fixed z-[2] duration-300 flex flex-col justify-between " + (infoVisibility ? 'h-screen ' : 'h-auto ') + (direction === 'down' ? '-top-[76px] lg:-top-[104px]' : 'top-0')}
          style={{
            backgroundColor: 'transparent',
            backgroundImage: 'radial-gradient(transparent 1px, #fff 1px)',
            backgroundSize: '4px 4px',
            backdropFilter: 'blur(3px)',
            mask: 'linear-gradient(#000 calc(100%), #0000)'
          }}
        >
          <div className="relative z-50 flex justify-between items-center animate-fade-in-slow pr-2">
            <div className="py-4 md:pl-0">
              <img className="h-8" src="/jnpr.svg" alt="JNPR Studio" />
            </div>
            <button className={infoVisibility ? 'block' : 'hidden'} onClick={toggleInfo}>
              <CrossCircledIcon className="h-5 w-5 lg:h-7 lg:w-7" />
            </button>
            <button className={"text-xs " + (infoVisibility ? 'hidden' : 'block')} onClick={toggleInfo}>Studio Info</button>
          </div>
          <div className={infoVisibility ? 'block w-full lg:w-2/5' : 'hidden'}>
            <p className="text-base text-red-600">We research, design, and build digital products.</p>
            <p className="text-base text-red-600">We support our clients' vision, addressing their needs and delivering products that improve life.</p>
            <p className="text-base text-red-600">We enhance transformation by cultivating creativity led by strategy, and expressed by design.</p>
            <p className="text-base text-red-600">We love challenges. We're constantly looking for simple solutions aimed at tackling complexities, still maintaining a strong emphasis on craft in every detail.</p>
          </div>
          <div className={"mb-5 " + (infoVisibility ? 'block' : 'hidden')}>
            <p className="text-base text-red-600">
              For work inquiries:
            </p>
            <CopyButton className="text-base text-blue-700" textToCopy="hello@jnpr.studio" />
          </div>
        </header>
        <main className="container relative grid grid-cols-1 box-border w-full animate-fade-in-slower-delay opacity-0 pt-16">
          <div className="grid grid-cols-[50%_50%] lg:grid-cols-[25%_25%_30%_auto_max-content] h-max mt-12 mb-12">
            <p className="col-span-1 lg:row-span-2 mb-12 lg:mb-0 max-w-56 text-xs">
              JNPR works with clients on website development and e-commerce strategy.
            </p>
            <p className="mb-4 lg:mb-8 col-span-2 lg:col-span-4 text-xs uppercase">Services:</p>
            <p className="text-xs lg:col-start-2 italic">
              Design<br /><br /><br /><br />
              Frontend Engineering<br /><br /><br /><br />
              Theme Development<br /><br /><br /><br />
              Core Web Vitals
            </p>
            <p className="text-xs italic">
              Visual<br />
              Graphic<br />
              UI<br /><br />
              Headless CMS<br />
              Headless Commerce<br />
              JS Frameworks<br /><br />
              Shopify<br />
              Squarespace<br />
              Craft<br /><br />
              Performance<br />
              Accessibility<br />
              Best Practices
            </p>
          </div>
          <div className="mb-12 lg:mb-24">
            <h2 className="text-xs mb-4 lg:mb-8 uppercase">Work:</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {projects.map((project, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="grid grid-cols-[50%_auto_max-content] lg:grid-cols-[25%_25%_25%_auto_max-content] w-full text-xs/none font-normal text-left">
                    <span className="whitespace-pre-line text-xs">{project.name}</span>
                    <span className="hidden lg:block whitespace-pre-line text-xs italic">{project.type}</span>
                    <span className="hidden lg:block whitespace-pre-line text-xs pr-6 italic">{project.stack}</span>
                    <span className="whitespace-pre-line text-xs pr-2">{project.year}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 lg:space-y-0 lg:mt-4 mt-1 mb-1 lg:grid lg:grid-cols-[50%_auto]">
                      <Carousel className="relative w-full py-2 lg:order-1" orientation="horizontal" opts={{
                        align: 'start',
                        loop: false
                      }}>
                        <CarouselContent>
                        {project.media.map((item, itemIndex) => (
                          <CarouselItem key={itemIndex} className={`flex justify-center items-center ${project.media.length > 1 ? 'lg:flex-[0_0_50%]' : 'flex-[0_0_100%]'}`}>
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
                              <div className="aspect-w-16 aspect-h-9 w-1/2 sm:w-2/5">
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
                        <div className="lg:flex lg:items-center lg:justify-between w-full lg:w-3/4">
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
                      <div className="lg:hidden grid grid-cols-[50%_auto] italic">
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
          <div className="grid grid-cols-[35%_35%_auto] h-max mb-12 lg:mb-24 animate-fade-in-slow-delay opacity-0">
            <div>
              <CopyButton className="text-xs" textToCopy="hello@jnpr.studio" />
            </div>
            <div></div>
            <div></div>
          </div>
        </main>
      </div>
    </div>
  )
}

