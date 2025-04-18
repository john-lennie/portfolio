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
    description: "North of Now, UI Design, Web Development"
  },
  {
    name: "Faces Of Another",
    images: [
      {
        src: "/faces-of-another/1.png",
        width: 1000,
        height: 579
      },
      {
        src: "/faces-of-another/2.png",
        width: 1000,
        height: 579
      }
    ],
    description: "Faces Of Another, Web Design, Web Development"
  },
  {
    name: "Full Court Press",
    mobileVideo: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/9e25f93385b57f6b0c06e90c4eb76b7e/downloads/default.mp4",
    description: "Full Court Press, Web Development - with Ronan Mcgee (design)"
  },
  {
    name: "Basma Beauty",
    mobileVideo: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/e839f788e73987827ba6046dde85e49e/downloads/default.mp4",
    description: "Basma Beauty, Web Development, for 56 Digital"
  },
  {
    name: "Susan for Susan",
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
      <div className="min-h-screen text-black mb-[120px] lg:mb-[184px]">
        <GlobalStyles />
        <header className={"fixed z-[2] w-full items-center justify-between duration-300 ease-in-out flex px-4 md:px-12 py-4 lg:relative lg:px-36 " + (direction === 'down' ? '-top-[60px]' : 'top-0')}>
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
        <main className="relative z-[1] px-4 bg-white pt-44 pb-4 md:px-12 lg:px-36 lg:pt-36">
          <div className="w-full animate-fade-in-slow-delay opacity-0 md:w-1/2">
            <h1 className="mb-16 text-lg/5 w-11/12 lg:w-4/5">JNPR is a design and development studio based in Toronto.<br /><br />
            Building unique ecommerce and digital experiences for global companies and local businesses.</h1>
            <h2 className="text-xs uppercase mb-1">Projects:</h2>
            <Accordion type="multiple" className="mb-12">
              {projects.map((project, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-solid border-black">
                  <AccordionTrigger className="text-xs font-normal py-2 lg:py-1 text-left">
                    {project.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="animate-fade-in-slow-delay opacity-0 space-y-4">
                      {project.images &&
                        <div className="relative grid grid-cols-1 gap-4">
                          {project.images.map((image, imgIndex) => (
                            <Image
                              width={image.width}
                              height={image.height}
                              className="w-full"
                              src={image.src || "/placeholder.svg"}
                              alt={`${project.name} screenshot ${imgIndex + 1}`}
                              key={imgIndex}
                            />
                          ))}
                        </div>
                      }
                      {project.mobileVideo &&
                        <div className="flex justify-center py-20">
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
            {/* <h2 className="text-xs uppercase mb-2">Clients:</h2>
            <p className="text-xs">VF Corporation (The North Face, Timberland, Vans)</p> */}
          </div>
        </main>
      </div>
      <div className="text-center animate-fade-in-slower-delay opacity-0 fixed bottom-0 w-full px-4 md:px-12 lg:px-36 pt-16 pb-8 lg:pb-4 lg:pt-36 lg:text-left">
        <a href="mailto:hello@jnpr.studio" target="_blank" className="text-xs text-blue-700 underline">hello@jnpr.studio</a>
      </div>
    </div>
  )
}

