"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { GlobalStyles } from "@/components/GlobalStyles"

const projects = [
  {
    name: "Full Court Press",
    video: "/full-court-press/m1.mp4",
    description: "Full Court Press, Web Development - with Ronan Mcgee (design)"
  },
  {
    name: "Milou Restaurant",
    images: ["/milou/2.png", "/milou/3.png", "/milou/d.png"],
    description: "Milou Restaurant, Web Development"
  },
  {
    name: "Basma Beauty",
    video: "/basma/m1.mp4",
    description: "Basma Beauty, Web Development - with 56 Digital"
  },
  {
    name: "Faces Of Another",
    images: ["/faces-of-another/1.png", "/faces-of-another/2.png"],
    description: "Faces Of Another, Web Design, Web Development"
  },
  {
    name: "Club 16",
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    video: "https://example.com/dashboard-demo.mp4",
  },
  {
    name: "Norman Wong",
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    video: "https://example.com/dashboard-demo.mp4",
  },
  {
    name: "North of Now",
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    video: "https://example.com/portfolio-demo.mp4",
  },
  {
    name: "Susan for Susan",
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    video: "https://example.com/portfolio-demo.mp4",
  },
]

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="min-h-screen text-black">
        <GlobalStyles />
        <header className="fixed z-[1] w-full items-center justify-between flex backdrop-blur-2xl px-4 md:px-12 py-4 text-sm font-black uppercase tracking-tighter lg:relative lg:backdrop-blur-none lg:px-36">
          <span className="animate-fade-in-slow">Juniper</span>
          <button
            className="animate-fade-in-slow uppercase"
            onClick={() => {
              alert('clicked');
            }}
          >
            Info
          </button>
        </header>
        <main className="animate-fade-in-slow-delay opacity-0 px-4 py-44 md:px-12 lg:px-36 lg:py-36">
          <div className="w-full md:w-1/2">
            <h1 className="mb-16 text-lg leading-[1.5rem] w-11/12 lg:w-4/5 lg:text-xl">Juniper is a digital product studio specializing in the design and development of ecommerce platforms and digital experiences for global companies, marketing teams, small businesses, creative studios and artists.</h1>
            <h2 className="text-xs uppercase mb-2">Projects</h2>
            <Accordion type="multiple" collapsible>
              {projects.map((project, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-solid border-black">
                  <AccordionTrigger className="text-xs font-normal py-2 lg:py-1 text-left">
                    {project.name}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="space-y-4">
                      {project.images &&
                        <div className="grid grid-cols-1 gap-4">
                          {project.images.map((image, imgIndex) => (
                            <Image
                              key={imgIndex}
                              src={image || "/placeholder.svg"}
                              alt={`${project.name} screenshot ${imgIndex + 1}`}
                              className="w-full"
                            />
                          ))}
                        </div>
                      }
                      {project.video &&
                        <div className="flex justify-center py-12">
                          <div className="aspect-w-16 aspect-h-9 w-1/2 lg:w-1/3">
                            <video src={project.video} muted playsInline autoPlay loop className="w-full h-full object-cover">
                              Your browser does not support the video tag.
                            </video>
                          </div>
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
          </div>
        </main>
      </div>
      <div className="min-h-screen"></div>
    </div>
  )
}

