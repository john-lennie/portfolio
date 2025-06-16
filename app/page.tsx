"use client"

import * as React from "react"
import useDetectScroll from "@smakss/react-scroll-direction"
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
import { EnvelopeClosedIcon } from "@radix-ui/react-icons"
import CopyButton from '@/components/ui/copyButton';
import Image from "next/image"
import { GlobalStyles } from "@/components/GlobalStyles"

const projects = [
  {
    name: "VF Corporation",
    year: "2022 - 2025",
    type: "FE Development",
    media: [
      {
        type: "mobileVideo",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/0fe25865e5279f39e50e1ac910a8bef8/downloads/default.mp4"
      },
      {
        type: "image",
        src: "/vf-corp/tnf_history_1.png",
        width: 1500,
        height: 954
      }
    ],
    description: [
      "Worked with the VF Digital Technology team to develop experiential landing pages for VF's various brands including The North Face, Vans & Timberland.",
    ],
    serviceTags: "Front-End Development",
    stackTags: {
      frontEnd: "Nuxt",
      ui: "Storybook"
    },
  },
  {
    name: "Faces Of Another", 
    year: "2022 - 2025",
    type: "UI/UX Design\nFE Development",
    media: [
      {
        type: "image",
        src: "/faces-of-another/foa-5.png",
        width: 1500,
        height: 1068
      }
    ],
    description: [
      "Designed and built a headless e-commerce platform for men's clothing line Faces of Another.\n\n",
      { 
        text: "facesofanother.com", 
        link: "https://facesofanother.com/" 
      },
    ],
    serviceTags: "UI Design\nFront-End Development\nCMS Development\nData & Analytics\nMaintenance",
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
    type: "UI/UX Design\nFE Development\nGraphic Design",
    media: [
      {
        type: "mobileVideo",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/b2da14eb06df9eea6578a5da81aa9ade/downloads/default.mp4",
      },
      {
        type: "image",
        src: "/north-of-now/non-3.png",
        width: 1500,
        height: 1131
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
      "New visual identity and website for Los Angeles based film production company North of Now."
    ],
    serviceTags: "Graphic Design\nVisual Identity\nUI Design\nFront-End Development",
    stackTags: {
      cms: "Prismic",
      frontEnd: "Next.js",
      deployment: "Vercel"
    },
  },
  {
    name: "Basma Beauty",
    year: "2022",
    type: "FE Development",
    media: [
      {
        type: "mobileVideo",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/3effe4b4174d7cdd27b1a2ac41f00561/downloads/default.mp4"
      },
      {
        type: "image",
        src: "/basma/bb-d.png",
        width: 1000,
        height: 761
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
    serviceTags: "Front-End Development",
    stackTags: {
      commerce: "Shopify"
    },
  },
  {
    name: "Full Court Press",
    year: "2022",
    type: "FE Development",
    media: [
      {
        type: "mobileVideo",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/71478c576dacfc40d3b92e13366f9e73/downloads/default.mp4"
      }
    ],
    description: [
      "Front-End Development for New York-based clothing line/publishing house Full Court Press.\n\nUI Design by ",
      { 
        text: "Ronan Mcgee", 
        link: "https://www.xn--rnn-fla2g.com/" 
      },
      "."
    ],
    serviceTags: "Front-End Development",
    stackTags: {
      commerce: "Shopify"
    },
  },
  {
    name: "Norman Wong",
    year: "2021 - 2022",
    type: "FE Development",
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
      "Front-End Development for Toronto-based photographer Norman Wong."
    ],
    serviceTags: "Front-End Development",
    stackTags: {
      cms: "Craft",
    },
  },
  {
    name: "Susan for Susan",
    year: "2021",
    type: "FE Development",
    media: [
      {
        type: "mobileVideo",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/49a789f383f94691c5ccd93afc0cb2c3/downloads/default.mp4"
      },
      {
        type: "image",
        src: "/susan-for-susan/1.png",
        width: 1000,
        height: 652
      }
    ],
    description: [
      "Front-End Development for Toronto-based design studio Susan for Susan.\n\nUI Design by ",
      { 
        text: "Ronan Mcgee", 
        link: "https://www.xn--rnn-fla2g.com/" 
      },
      "."
    ],
    serviceTags: "Front-End Development",
    stackTags: {
      cms: "Squarespace"
    },
  },
  {
    name: "Club Dieciséis",
    year: "2021",
    type: "FE Development",
    media: [
      {
        type: "desktopVideo",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/787904e7ebf09dc97b99c0247acfa6f6/downloads/default.mp4"
      }
    ],
    description: [
      "Front-End Development for Puerto Rican artist Tainy.\n\nUI Design by ",
      { 
        text: "Ronan Mcgee", 
        link: "https://www.xn--rnn-fla2g.com/" 
      },
      "."
    ],
    serviceTags: "Front-End Development",
    stackTags: {
      commerce: "Shopify"
    },
  }
]

export default function Home() {

  const [direction, setDirection] = React.useState('up')
  const { scrollDir } = useDetectScroll();

  React.useEffect(() => {
    scrollDir === "down" && setDirection('down')
    scrollDir === "up" && setDirection('up')
  }, [scrollDir])

  return (
    <div className="bg-white">
      <div className="min-h-screen text-black">
        <GlobalStyles />
        <header
          className={"container fixed z-[2] duration-300 " + (direction === 'down' ? '-top-[60px] lg:top-0' : 'top-0')}
          style={{
            backgroundColor: 'transparent',
            backgroundImage: 'radial-gradient(transparent 1px, #fff 1px)',
            backgroundSize: '4px 4px',
            backdropFilter: 'blur(3px)',
            mask: 'linear-gradient(#000 calc(100% - 16px), #0000)'
          }}
        >
          <div className="relative z-50 flex justify-between items-center animate-fade-in-slow">
            <div
            className="pt-4 pb-8 pr-12 md:pl-0"
            style={{
              backgroundColor: '#fff',
              WebkitMaskImage: `
                linear-gradient(to right, black, black 50%, transparent 100%),
                linear-gradient(to top, transparent, black 50%, black 100%)
              `,
              WebkitMaskComposite: 'intersect',
              maskImage: `
                linear-gradient(to right, black, black 50%, transparent 100%),
                linear-gradient(to top, transparent, black 50%, black 100%)
              `,
              maskComposite: 'intersect'
            }}
            >
              <img className="h-7 lg:h-14" src="/jnpr.svg" alt="JNPR Studio" />
              </div>
          </div>
        </header>
        <main className="container pt-16">
          <div className="relative grid grid-cols-1 box-border w-full animate-fade-in-slower-delay opacity-0">
            <div className="grid grid-cols-[35%_35%_auto] h-max mb-12 lg:mb-24">
              <h1 className="mt-8 lg:mt-24 mb-12 lg:mb-24 text-base animate-fade-in-slow-delay opacity-0">
                JNPR is a design & development studio based in Toronto.
              </h1>
              <h2 className="col-span-3 mb-4 lg:mb-8 text-base italic">Services:</h2>
              <p className="lg:mb-3 text-base">
                FE Development<br />
                CMS Development
              </p>
              <p className="lg:mb-3 text-base">
                Graphic Design<br />
                UI/UX Design
              </p>
              <p className="lg:mb-3 text-base">
              Visual Idenity<br />
              Data & Analytics
              </p>
            </div>
            <div className="mb-12 lg:mb-24">
              <h2 className="text-base mb-4 lg:mb-8 italic">Work:</h2>
              <Accordion type="single" defaultValue="item-0" collapsible className="space-y-2">
                {projects.map((project, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="grid grid-cols-[35%_35%_auto_max-content] w-full text-xs/none font-normal text-left">
                      <p className="whitespace-pre-line text-base">{project.name}</p>
                      <p className="whitespace-pre-line text-base">{project.type}</p>
                      <p className="whitespace-pre-line text-base pr-2">{project.year}</p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 lg:mt-4 mt-1 mb-1 lg:grid lg:grid-cols-[35%_35%_auto]">
                        <Carousel className="relative w-full py-2 lg:order-1" orientation="horizontal">
                          <CarouselContent>
                          {project.media.map((item, itemIndex) => (
                            <CarouselItem key={itemIndex} className="flex justify-center items-center pt-4">
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
                                    sizes="(max-width: 1024px) 120vw, 40vw"
                                    style={{ objectFit: "contain" }}
                                  />
                                </div>
                              )}
                              {item.type === "mobileVideo" && (
                                <div className="aspect-w-16 aspect-h-9 w-1/2 lg:w-1/3">
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
                          <CarouselNext variant="quiet" />
                        </Carousel>
                        {project.description &&
                          <p className="text-base whitespace-pre-line lg:pr-32">
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
                        }
                        <div className="grid grid-cols-[35%_35%_auto_max-content] lg:grid-cols-2">
                          <div className="text-xxs/3 lg:text-[1vw] lg:leading-[1.5vw] text-gray-500 font-source tracking-tightest max-w-[95%] whitespace-pre-line">
                            {project.stackTags.frontEnd &&
                              <p className="whitespace-nowrap">JS Framework:</p>
                            }
                            {project.stackTags.ui &&
                              <p className="whitespace-nowrap">UI Documentation:</p>
                            }
                            {project.stackTags.commerce &&
                              <p className="whitespace-nowrap">E-Commerce Platform:</p>
                            }
                            {project.stackTags.deployment &&
                              <p className="whitespace-nowrap">PAAS:</p>
                            }
                            {project.stackTags.cms &&
                              <p className="whitespace-nowrap">CMS:</p>
                            }
                          </div>
                          <div className="text-xxs/3 lg:text-[1vw] lg:leading-[1.5vw] text-gray-500 font-source tracking-tightest max-w-[95%] whitespace-pre-line">
                            {project.stackTags.frontEnd &&
                              <p className="whitespace-nowrap">{project.stackTags.frontEnd}</p>
                            }
                            {project.stackTags.ui &&
                              <p className="whitespace-nowrap">{project.stackTags.ui}</p>
                            }
                            {project.stackTags.commerce &&
                              <p className="whitespace-nowrap">{project.stackTags.commerce}</p>
                            }
                            {project.stackTags.deployment &&
                              <p className="whitespace-nowrap">{project.stackTags.deployment}</p>
                            }
                            {project.stackTags.cms &&
                              <p className="whitespace-nowrap">{project.stackTags.cms}</p>
                            }
                          </div>
                        </div>
                      </div>
                      </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="grid grid-cols-[35%_35%_auto] h-max mb-12 lg:mb-24">
              <div>
                <p className="mb-2 lg:mb-4 text-base animate-fade-in-slow-delay opacity-0">
                  For work inquiries, reach out via email:
                </p>
                <CopyButton textToCopy="hello@jnpr.studio" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

