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
    name: "North of Now",
    mobileVideos: ["https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/b2da14eb06df9eea6578a5da81aa9ade/downloads/default.mp4", "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/c82c8fba2dc5c30e7b9cd590829f6869/downloads/default.mp4"],
    description: "North of Now, UI Design, Web Development"
  },
  {
    name: "Faces Of Another",
    images: [
      {
        src: "/faces-of-another/2.png",
        width: 1000,
        height: 579
      },
      {
        src: "/faces-of-another/1.png",
        width: 1000,
        height: 579
      }
    ],
    description: "Faces Of Another, Web Design, Web Development"
  },
  {
    name: "Basma Beauty",
    mobileVideos: ["https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/3effe4b4174d7cdd27b1a2ac41f00561/downloads/default.mp4"],
    images: [
      {
        src: "/basma/bb-d.png",
        width: 1000,
        height: 761
      }
    ],
    description: "Basma Beauty, Web Development, for 56 Digital"
  },
  {
    name: "Full Court Press",
    mobileVideos: ["https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/71478c576dacfc40d3b92e13366f9e73/downloads/default.mp4"],
    description: "Full Court Press, Web Development - with Ronan Mcgee (design)"
  },
  {
    name: "Susan for Susan",
    mobileVideos: ["https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/49a789f383f94691c5ccd93afc0cb2c3/downloads/default.mp4"],
    images: [
      {
        src: "/susan-for-susan/1.png",
        width: 1000,
        height: 652
      }
    ],
    description: "Susan for Susan, Web Development - with Ronan Mcgee (design)"
  },
  {
    name: "Club 16",
    desktopVideo: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/787904e7ebf09dc97b99c0247acfa6f6/downloads/default.mp4",
    description: "Club 16, Web Development - with Ronan Mcgee (design)"
  },
  {
    name: "Norman Wong",
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
    description: "Norman Wong, Web Development"
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
        <header className={"fixed z-[2] bg-white/75 backdrop-blur-2xl w-full items-center justify-between duration-300 ease-in-out flex px-4 md:px-12 py-4 lg:relative lg:px-36 lg:hidden " + (direction === 'down' ? '-top-[60px]' : 'top-0')}>
          <span className="animate-fade-in-slow">
            <img className="h-7" src="/jnpr.svg" alt="JNPR Studio" />
          </span>
          {/* <button
            className="animate-fade-in-slow uppercase"
            onClick={() => {
              alert('clicked');
            }}
          >
            Info
          </button> */}
        </header>
        <main className="relative z-[1] px-4 bg-white pt-24 pb-4 lg:pb-0 md:px-12 lg:px-36 lg:pt-0">
          <div className="grid lg:grid-cols-2 lg:gap-10 w-full animate-fade-in-slow-delay opacity-0">
            <div className="lg:sticky lg:top-0 lg:py-6 lg:h-screen lg:flex lg:flex-col lg:justify-between">
              <div>
                <span className="hidden lg:block animate-fade-in-slow">
                  <img className="h-7" src="/jnpr.svg" alt="JNPR Studio" />
                </span>
                <h1 className="lg:mt-[150px] tracking-tight mb-16 text-2xl/7 w-11/12 lg:w-4/5">JNPR is a design and development studio based in Toronto.<br /><br />
                We Build unique digital experiences and e&#8209;commerce solutions for global companies and local businesses.</h1>
                <div className="mb-16 grid grid-cols-[80px_auto_auto] sm:grid-cols-[auto_auto_auto]">
                  <h2 className="text-xs">Services:</h2>
                  <p className="text-xs">
                    Research & Planning<br />
                    Visual Identity<br />
                    User Experience
                  </p>
                  <p className="text-xs">
                    Web Development<br />
                    Data & Analytics<br />
                    Maintenance
                  </p>
                </div>
              </div>
              <a href="mailto:hello@jnpr.studio" target="_blank" className="hidden lg:block text-xs text-black underline">hello@jnpr.studio</a>
            </div>
            <div className="lg:mt-[202px] lg:mb-[404px]">
              {/* <h2 className="text-xs mb-2">Projects</h2> */}
              <Accordion type="multiple" defaultValue={['item-0']} className="mb-12">
                {projects.map((project, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-solid border-black">
                    <AccordionTrigger className="text-sm font-normal py-2 lg:py-1 text-left">
                      {project.name}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
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
                          <p className="text-xs font-normal">{project.description}</p>
                        }
                        {project.tags &&
                          <p className="text-xs text-gray-400 font-normal italic">{project.tags}</p>
                        }
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
      <div className="text-center animate-fade-in-slower-delay opacity-0 fixed bottom-0 w-full px-4 md:px-12 lg:px-36 pt-16 pb-8 lg:pb-4 lg:pt-36 lg:text-left">
        <a href="mailto:hello@jnpr.studio" target="_blank" className="text-xs text-black underline">hello@jnpr.studio</a>
      </div>
    </div>
  )
}

