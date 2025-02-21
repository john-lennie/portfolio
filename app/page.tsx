import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button, buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import { GlobalStyles } from "@/components/GlobalStyles"

const projects = [
  {
    name: "Full Court Press",
    video: "/full-court-press/m1.mp4",
  },
  {
    name: "Milou",
    images: ["/milou/2.png", "/milou/3.png", "/milou/d.png"]
  },
  {
    name: "Basma 16",
    video: "/basma/m1.mp4",
  },
  {
    name: "Faces Of Another",
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    video: "https://example.com/dashboard-demo.mp4",
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
    <div>
      <div className="min-h-screen bg-white text-black">
        <GlobalStyles />
        <header className="fixed w-full justify-between flex backdrop-blur-2xl px-4 md:px-12 py-4 text-sm font-black uppercase tracking-tighter lg:relative lg:backdrop-blur-none lg:px-36">
          Juniper Studio
          <Button
            variant="default"
            size="default"
          >
            Info
          </Button>
        </header>
        <main className="px-4 md:px-12 lg:px-36 py-48">
          <div className="w-full md:w-1/2">
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

