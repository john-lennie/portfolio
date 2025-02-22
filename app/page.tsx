"use client"

import * as React from "react"
import useDetectScroll from "@smakss/react-scroll-direction"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { GlobalStyles } from "@/components/GlobalStyles"

const projects = [
  {
    name: "North of Now",
    mobileVideo: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/c82c8fba2dc5c30e7b9cd590829f6869/downloads/default.mp4",
    description: "North of Now, Web Design, Web Development"
  },
  {
    name: "Faces Of Another",
    images: ["/faces-of-another/1.png", "/faces-of-another/2.png"],
    description: "Faces Of Another, Web Design, Web Development"
  },
  {
    name: "Full Court Press",
    mobileVideo: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/9e25f93385b57f6b0c06e90c4eb76b7e/downloads/default.mp4",
    description: "Full Court Press, Web Development - with Ronan Mcgee (design)"
  },
  {
    name: "Milou Restaurant",
    images: ["/milou/d.png"],
    description: "Milou Restaurant, Shopify Theme Enhancement (Tabbable Menus)"
  },
  
  {
    name: "Susan for Susan",
    images: ["/susan-for-susan/1.png"],
    description: "Susan for Susan, Web Development - with Ronan Mcgee (design)"
  },
  {
    name: "Club 16",
    desktopVideo: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/787904e7ebf09dc97b99c0247acfa6f6/downloads/default.mp4",
    description: "Club 16, Web Development - with Ronan Mcgee (design)"
  },
  {
    name: "Norman Wong",
    images: ["/norman-wong/1.png", "/norman-wong/3.png"],
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
      <div className="min-h-screen text-black mb-[104px] lg:mb-[184px]">
        <GlobalStyles />
        <header className={"fixed z-[2] bg-[#ffffff80] w-full items-center justify-between duration-300 ease-in-out flex backdrop-blur-2xl px-4 md:px-12 py-4 text-sm font-black uppercase tracking-tighter lg:relative lg:backdrop-blur-none lg:px-36 " + (direction === 'down' ? '-top-[52px]' : 'top-0')}>
          <span className="animate-fade-in-slow">Juniper</span>
          {/* <button
            className="animate-fade-in-slow uppercase"
            onClick={() => {
              alert('clicked');
            }}
          >
            Info
          </button> */}
        </header>
        <main className="relative z-[1] px-4 bg-white pt-44 pb-4 md:px-12 lg:px-36 lg:pt-36">
          <div className="w-full animate-fade-in-slow-delay opacity-0 md:w-1/2">
            <h1 className="mb-16 text-lg leading-[1.5rem] w-11/12 lg:w-4/5 lg:text-xl">Juniper is a digital product studio specializing in the design and development of ecommerce platforms and digital experiences for global companies, marketing teams, small businesses, creative studios and artists.</h1>
            <h2 className="text-xs uppercase mb-1">Projects:</h2>
            <Accordion type="multiple" collapsible className="mb-12">
              {projects.map((project, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-solid border-black">
                  <AccordionTrigger className="text-xs font-normal py-2 lg:py-1 text-left">
                    {project.name}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="animate-fade-in-slow-delay opacity-0 space-y-4">
                      {project.images &&
                        <div className="grid grid-cols-1 gap-4">
                          {project.images.map((image, imgIndex) => (
                            <Image
                              key={imgIndex}
                              src={image || "/placeholder.svg"}
                              alt={`${project.name} screenshot ${imgIndex + 1}`}
                              className="w-full"
                              placeholder="blur"
                            />
                          ))}
                        </div>
                      }
                      {project.mobileVideo &&
                        <div className="flex justify-center py-12">
                          <div className="aspect-w-16 aspect-h-9 w-1/2 lg:w-1/3">
                            <video src={project.mobileVideo} muted playsInline autoPlay loop className="w-full h-full object-cover">
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>
                      }
                      {project.desktopVideo &&
                        <div className="aspect-w-16 aspect-h-9">
                          <video src={project.desktopVideo} muted playsInline autoPlay loop className="w-full h-full object-cover">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      }
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
            <h2 className="text-xs uppercase mb-2">Clients:</h2>
            <p className="text-xs">VF Corporation (The North Face, Timberland, Vans)</p>
          </div>
        </main>
      </div>
      <div className="animate-fade-in-slower-delay opacity-0 fixed bottom-0 w-full px-4 md:px-12 lg:px-36 pt-16 pb-4 lg:pt-36">
        <a href="mailto:johnanthonylennie@gmail.com" target="_blank" className="text-xs">johnanthonylennie@gmail.com</a>
      </div>
    </div>
  )
}

