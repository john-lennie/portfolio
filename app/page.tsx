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
        type: "image",
        src: "/vf-corp/tnf_history_1.png",
        width: 1500,
        height: 954
      },
      {
        type: "mobileVideo",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/0fe25865e5279f39e50e1ac910a8bef8/downloads/default.mp4"
      }
    ],
    description: [
      "Worked with the VF Digital Technology team to develop experiential landing pages for their brands(The North Face, Vans, Timberland) as they onboarded to a multi-brand Nuxt.js framework.",
    ],
    serviceTags: "Front-End Development",
    stackTags: {
      frontEnd: "Nuxt.js"
    },
  },
  {
    name: "Faces Of Another", 
    year: "2022 - 2025",
    type: "UI Design\nFE Development\nData & Analytics",
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
    serviceTags: "UI Design\nFront-End Development\nData & Analytics\nMaintenance",
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
    type: "Graphic Design\nUI Design\nFE Development",
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
    type: "FE Development\nMaintenance",
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
      <div className="min-h-screen text-black pb-16">
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
              <img className="h-7" src="/jnpr.svg" alt="JNPR Studio" />
              </div>
            {/* <ul
            className="flex gap-6 pt-6 pb-10 pr-6 md:pr-0 pl-20"
            style={{
              backgroundColor: '#ffffffd9',
              WebkitMaskImage: `
                linear-gradient(to right, transparent, black 50%, black 100%),
                linear-gradient(to top, transparent, black 40%, black 100%)
              `,
              WebkitMaskComposite: 'intersect',
              maskImage: `
                linear-gradient(to right, transparent, black 50%, black 100%),
                linear-gradient(to top, transparent, black 40%, black 100%)
              `,
              maskComposite: 'intersect'
            }}
            >
              <li>
                <a href="mailto:hello@jnpr.studio" target="_blank" className="link-secondary flex">
                  Studio Info
                </a>
              </li>
              <li>
                <a href="mailto:hello@jnpr.studio" target="_blank" className="link-secondary flex">
                  Contact
                </a>
              </li>
            </ul> */}
          </div>
        </header>
        <main className="container py-16">
          <h1 className="lg:mt-18 2xl:text-4xl xl:text-4xl lg:text-3xl mt-12 tracking-tight mb-20 2xl:mb-24 text-2xl leading-[26px] animate-fade-in-slow-delay opacity-0 max-w-[90%] lg:max-w-[40%]">
            JNPR is a design and development studio based in Toronto.<br /><br />
            We build digital experiences and e&#8209;commerce solutions for global companies and local businesses.
          </h1>
          <div className="relative grid grid-cols-1 lg:grid-cols-[40%_60%]  box-border w-full animate-fade-in-slower-delay opacity-0">
            <div className="mb-4 grid grid-cols-[35%_35%_30%_0%] h-max lg:sticky lg:top-20">
              <h2 className="text-xs/5 font-normal italic">Services:</h2>
              <p className="text-xs/5 font-normal">
                Graphic Design<br />
                Visual Identity<br />
                UI Design<br />
              </p>
              <p className="text-xs/5 font-normal">
                FE Development<br />
                Data & Analytics<br />
                Maintenance
              </p>
              <p></p>
            </div>
            <div className="lg:pl-16">
              <h2 className="text-xs/6 font-normal mb-[0.625rem] italic">Work:</h2>
              <Accordion type="single" collapsible className="mb-12">
                {projects.map((project, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="grid grid-cols-[35%_35%_auto_max-content] w-full text-xs/none font-normal py-1.5 text-left">
                      <p className="whitespace-pre-line text-xs/5 font-normal">{project.name}</p>
                      <p className="whitespace-pre-line text-xs/5 font-normal">{project.type}</p>
                      <p className="whitespace-pre-line text-xs/5 font-normal text-right pr-2">{project.year}</p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 lg:mt-4 mt-2 mb-1">
                        <Carousel className="relative w-full py-2" orientation="horizontal">
                          <CarouselContent>
                          {project.media.map((item, itemIndex) => (
                            <CarouselItem key={itemIndex}>
                              {item.type === "image" && (
                                <div className="flex justify-center items-center h-full">
                                  <Image
                                    width={item.width}
                                    height={item.height}
                                    className="w-full"
                                    src={item.src || "/placeholder.svg"}
                                    alt={`${project.name} screenshot ${itemIndex + 1}`}
                                  />
                                </div>
                              )}
                              {item.type === "mobileVideo" && (
                                <div className="flex justify-center items-center h-full">
                                  <div className="aspect-w-16 aspect-h-9 w-1/2 lg:w-1/3">
                                    <video src={item.src} muted playsInline autoPlay loop className="w-full h-full object-cover">
                                      Your browser does not support the video tag.
                                    </video>
                                  </div>
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
                          <p className="text-xs font-normal whitespace-pre-line leading-[1.1rem]">
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
                        <div className="grid grid-cols-[70%_auto_max-content]">
                          {project.serviceTags &&
                            <p className="text-xxs/3 text-gray-500 font-source tracking-tightest max-w-[95%] whitespace-pre-line">{project.serviceTags}</p>
                          }
                          <div className="text-xxs/3 text-gray-500 font-source tracking-tightest max-w-[95%] whitespace-pre-line">
                            {project.stackTags.frontEnd &&
                              <p className="whitespace-nowrap">Framework:</p>
                            }
                            {project.stackTags.commerce &&
                              <p className="whitespace-nowrap">E-Commerce:</p>
                            }
                            {project.stackTags.deployment &&
                              <p className="whitespace-nowrap">PAAS:</p>
                            }
                            {project.stackTags.cms &&
                              <p className="whitespace-nowrap">CMS:</p>
                            }
                          </div>
                          <div className="text-xxs/3 text-gray-500 font-source tracking-tightest max-w-[95%] whitespace-pre-line">
                            {project.stackTags.frontEnd &&
                              <p className="whitespace-nowrap">{project.stackTags.frontEnd}</p>
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
          </div>
          <section className="max-w-96">
            <p className="text-xs/5 flex items-center">
              {/* <EnvelopeClosedIcon className="h-3 mr-1" /> */}
              hello@jnpr.studio
              <CopyButton textToCopy="hello@jnpr.studio" />
            </p>
          </section>
        </main>
      </div>
      {/* <div className="block lg:hidden text-center animate-fade-in-slower-delay opacity-0 fixed bottom-0 w-full px-4 md:px-12 lg:px-36 pt-16 pb-8 lg:pb-4 lg:pt-36 lg:text-left">
        <a href="mailto:hello@jnpr.studio" target="_blank" className="link">hello@jnpr.studio</a>
      </div> */}
    </div>
  )
}

