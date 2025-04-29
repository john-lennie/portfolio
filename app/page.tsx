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
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { GlobalStyles } from "@/components/GlobalStyles"

const projects = [
  {
    name: "Faces Of Another",
    year: "2023 - 2025",
    images: [
      {
        src: "/faces-of-another/foa-2.png",
        width: 1500,
        height: 860
      },
      {
        src: "/faces-of-another/foa-3.png",
        width: 1500,
        height: 860
      },
      {
        src: "/faces-of-another/foa-4.png",
        width: 1500,
        height: 860
      }
    ],
    description: [
      "Designed and built a headless e-commerce platform for men's clothing line Faces of Another.\n\n",
      { 
        text: "facesofanother.com", 
        link: "https://facesofanother.com/" 
      },
    ],
    serviceTags: "UX Design\nFront-End Development\nData & Analytics\nMaintenance",
    stackTags: {
      cms: "Sanity",
      commerce: "Shopify",
      frontEnd: "Next.js",
      deployment: "Vercel"
    },
  },
  {
    name: "North of Now",
    year: "2023",
    mobileVideos: [
      "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/b2da14eb06df9eea6578a5da81aa9ade/downloads/default.mp4",
      "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/63a1f5c62792f9d1b14507c55cf1ea5b/downloads/default.mp4",
      "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/c82c8fba2dc5c30e7b9cd590829f6869/downloads/default.mp4"
    ],
    images: [
      {
        src: "/north-of-now/non-3.png",
        width: 1500,
        height: 1131
      },
      {
        src: "/north-of-now/non-1.png",
        width: 1500,
        height: 860
      },
      {
        src: "/north-of-now/non-4.png",
        width: 1500,
        height: 954
      }
    ],
    description: [
      "New visual identity and website for Los Angeles based film production company North of Now."
    ],
    serviceTags: "Graphic Design\nVisual Identity\nUX Design\nFront-End Development",
    stackTags: {
      cms: "Prismic",
      frontEnd: "Next.js",
      deployment: "Vercel"
    },
  },
  {
    name: "Basma Beauty",
    year: "2022",
    mobileVideos: ["https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/3effe4b4174d7cdd27b1a2ac41f00561/downloads/default.mp4"],
    images: [
      {
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
    mobileVideos: ["https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/71478c576dacfc40d3b92e13366f9e73/downloads/default.mp4"],
    description: [
      "Front-End Development for New York-based clothing line/publishing house Full Court Press.\n\nUX by ",
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
    name: "Susan for Susan",
    year: "2022",
    mobileVideos: ["https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/49a789f383f94691c5ccd93afc0cb2c3/downloads/default.mp4"],
    images: [
      {
        src: "/susan-for-susan/1.png",
        width: 1000,
        height: 652
      }
    ],
    description: [
      "Front-End Development for Toronto-based design studio Susan for Susan.\n\nUX by ",
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
    desktopVideo: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/787904e7ebf09dc97b99c0247acfa6f6/downloads/default.mp4",
    description: [
      "Front-End Development for Puerto Rican artist Tainy.\n\nUX by ",
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
    year: "2021",
    images: [
      {
        src: "/norman-wong/1.png",
        width: 800,
        height: 487
      },
      {
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
      cms: "Craft"
    },
  },
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
      <div className="min-h-screen text-black mb-[200px] lg:mb-0">
        <GlobalStyles />
        <header className={"fixed z-[2] w-full bg-white/50 backdrop-blur-xl px-4 md:px-12 py-3 lg:relative lg:px-36 lg:hidden duration-300 " + (direction === 'down' ? '-top-[60px]' : 'top-0')}>
          <div className="flex justify-between items-center animate-fade-in-slow">
            <img className="h-7" src="/jnpr.svg" alt="JNPR Studio" />
            <a href="mailto:hello@jnpr.studio" target="_blank" className="btn-primary text-xs">Contact JNPR</a>
          </div>
        </header>
        <main className="relative z-[1] px-4 bg-white pt-24 pb-4 lg:pb-0 md:px-12 lg:px-36 lg:pt-0">
          <div className="grid lg:grid-cols-2 lg:gap-10 w-full animate-fade-in-slow-delay opacity-0">
            <div className="lg:sticky lg:top-0 lg:py-6 lg:h-screen lg:flex lg:flex-col lg:justify-between">
              <div className="max-w-[90%] md:max-w-xl">
                <img className="hidden lg:block h-7" src="/jnpr.svg" alt="JNPR Studio" />
                <h1 className="lg:mt-[120px] tracking-tight mb-16 text-2xl/7">JNPR is a design and development studio based in Toronto.<br /><br />
                Building unique digital experiences and e&#8209;commerce solutions for global companies and local businesses.</h1>
                <div className="mb-14 grid grid-cols-[auto_auto_max-content] sm:grid-cols-[auto_auto_auto]">
                  <h2 className="text-xs">Services:</h2>
                  <p className="text-xxs/3 font-source tracking-tightest text-gray-500">
                    Graphic Design<br />
                    Visual Identity<br />
                    UX Design<br />
                  </p>
                  <p className="text-xxs/3 font-source tracking-tightest text-gray-500">
                    Front-End Development<br />
                    Data & Analytics<br />
                    Maintenance
                  </p>
                </div>
                <h2 className="hidden lg:block mb-6">Have a project you'd like to talk about?</h2>
                <a className="hidden lg:inline-block btn-primary">Contact JNPR</a>
              </div>
              <a href="mailto:hello@jnpr.studio" target="_blank" className="hidden lg:block text-xs text-black underline">hello@jnpr.studio</a>
            </div>
            <div className="lg:mt-[126px] lg:mb-[404px]">
              {/* <h2 className="text-xs mb-2">Projects</h2> */}
              <Accordion type="multiple" defaultValue={["item-0"]} className="mb-12">
                {projects.map((project, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-solid border-gray-400">
                    <AccordionTrigger className="text-sm font-normal py-2 lg:py-1 text-left">
                      <div className="flex justify-between w-full">
                        <span>{project.name}</span>
                        <span>{project.year}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 mb-2">
                        <Carousel className="relative w-full py-2" orientation="horizontal">
                          <CarouselContent>
                          {project.images && project.images.map((image, imgIndex) => (
                            <CarouselItem key={imgIndex}>
                              <div className="flex justify-center items-center h-full">
                                <Image
                                  width={image.width}
                                  height={image.height}
                                  className="w-full"
                                  src={image.src || "/placeholder.svg"}
                                  alt={`${project.name} screenshot ${imgIndex + 1}`}
                                />
                              </div>
                            </CarouselItem>
                          ))}
                          {project.mobileVideos && project.mobileVideos.map((video, videoIndex) => (
                              <CarouselItem key={videoIndex}>
                                <div className="flex justify-center items-center h-full">
                                  <div className="aspect-w-16 aspect-h-9 w-1/2 lg:w-1/3">
                                    <video src={video} muted playsInline autoPlay loop className="w-full h-full object-cover">
                                      Your browser does not support the video tag.
                                    </video>
                                  </div>
                                </div>
                              </CarouselItem>
                            ))}
                            {project.desktopVideo &&
                              <CarouselItem>
                                <div className="aspect-w-16 aspect-h-9">
                                  <video src={project.desktopVideo} muted playsInline autoPlay loop className="w-full h-full object-cover">
                                    Your browser does not support the video tag.
                                  </video>
                                </div>
                              </CarouselItem>
                            }
                          </CarouselContent>
                          <CarouselNavigation />
                          <CarouselNext variant="quiet" />
                        </Carousel>
                        {project.description &&
                          <p className="text-sm font-normal whitespace-pre-line">
                            {project.description.map((item, i) =>
                              typeof item === "string" ? (
                                item
                              ) : (
                                <a key={i} href={item.link} target="_blank" className="underline">
                                  {item.text}
                                </a>
                              )
                            )}
                          </p>
                        }
                        <div className="grid grid-cols-[auto_max-content_max-content] gap-4">
                          {project.serviceTags &&
                            <p className="text-xxs/3 text-gray-500 font-source tracking-tightest max-w-[95%] whitespace-pre-line">{project.serviceTags}</p>
                          }
                          <div className="text-xxs/3 text-gray-500 font-source tracking-tightest max-w-[95%] whitespace-pre-line">
                            {project.stackTags.frontEnd &&
                              <p className="whitespace-nowrap">JS Framework:</p>
                            }
                            {project.stackTags.commerce &&
                              <p className="whitespace-nowrap">eCommerce:</p>
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
            {/* <h2 className="text-xs uppercase mb-2">Clients:</h2>
            <p className="text-xs">VF Corporation (The North Face, Timberland, Vans)</p> */}
          </div>
        </main>
      </div>
      <div className="block lg:hidden text-center animate-fade-in-slower-delay opacity-0 fixed bottom-0 w-full px-4 md:px-12 lg:px-36 pt-16 pb-8 lg:pb-4 lg:pt-36 lg:text-left">
        <a href="mailto:hello@jnpr.studio" target="_blank" className="text-xs text-black underline">hello@jnpr.studio</a>
      </div>
    </div>
  )
}

