import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { GlobalStyles } from "@/components/GlobalStyles"

const projects = [
  {
    name: "Basma 16",
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
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
    name: "Full Court Press",
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    video: "https://example.com/portfolio-demo.mp4",
  },
  {
    name: "Milou",
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    video: "https://example.com/ecommerce-demo.mp4",
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
    <div className="min-h-screen bg-white text-black">
      <GlobalStyles />
      <main className="container px-24 py-36">
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <Accordion type="single" collapsible>
            {projects.map((project, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-solid border-white">
                <AccordionTrigger className="text-sm font-normal py-2 uppercase text-left">
                  {project.name}
                </AccordionTrigger>
                <AccordionContent className="py-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      {project.images.map((image, imgIndex) => (
                        <Image
                          key={imgIndex}
                          src={image || "/placeholder.svg"}
                          alt={`${project.name} screenshot ${imgIndex + 1}`}
                          width={400}
                          height={300}
                          className="rounded-lg shadow-md w-full"
                        />
                      ))}
                    </div>
                    <div className="aspect-w-16 aspect-h-9">
                      <video src={project.video} muted loop autoplay className="w-full h-full object-cover">
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </div>
  )
}

