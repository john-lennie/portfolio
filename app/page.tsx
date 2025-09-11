"use client"

import * as React from "react"
import type { Project } from "@/types/projects";
import Image from "next/image"

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

import { DeferredVideo } from "@/components/ui/DeferredVideo"
import CopyButton from '@/components/ui/copyButton';

const projects: Project[] = [
  {
    name: "VF Corporation",
    year: "2022 - 2025",
    type: "Frontend Engineering",
    stack: "JS Framework Development (Nuxt.js)\nPerformance & A11y",
    media: [
      {
        type: "image",
        src: "/vf-corp/tnf_about_1.png",
        width: 1500,
        height: 1152
      },
      {
        type: "mobileVideo",
        poster: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/0fe25865e5279f39e50e1ac910a8bef8/thumbnails/thumbnail.jpg?time=0s&width=200&format=webp&quality=70",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/0fe25865e5279f39e50e1ac910a8bef8/downloads/default.mp4",
      }
    ],
    description: [
      "Worked with the VF Digital Technology Team to develop product campaign pages, design system components, and improve core web vitals for The North Face, Vans & Timberland.",
    ],
    stackTags: {
      frontEnd: "Nuxt",
      ui: "Storybook"
    },
  },
  {
    name: "Faces Of Another", 
    year: "2022 - 2025",
    type: "Digital Product Design\n\nFrontend Engineering",
    stack: "UI Design\n\nJS Framework Development (Next.js)",
    media: [
      {
        type: "image",
        src: "/faces-of-another/foa_10.png",
        width: 1500,
        height: 862
      },
      {
        type: "image",
        src: "/faces-of-another/foa_7.png",
        width: 1500,
        height: 862
      },
      {
        type: "image",
        src: "/faces-of-another/foa_8.png",
        width: 1500,
        height: 862
      }
    ],
    description: [
      "Owned all aspects of the Faces of Another e-commerce website; continually  collaborating on design updates and new features."
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
    type: "Digital Product Design\n\n\nFrontend Engineering",
    stack: "Branding\nUX & UI Design\n\nJS Framework Development (Next.js)",
    media: [
      {
        type: "image",
        src: "/north-of-now/non-3.png",
        width: 1500,
        height: 1131
      },
      {
        type: "image",
        src: "/north-of-now/non-6.png",
        width: 1500,
        height: 815
      },
      {
        type: "mobileVideo",
        poster: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/b2da14eb06df9eea6578a5da81aa9ade/thumbnails/thumbnail.jpg?time=0s&width=200&format=webp&quality=70",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/b2da14eb06df9eea6578a5da81aa9ade/downloads/default.mp4",
      },
      {
        type: "image",
        src: "/north-of-now/non-1.png",
        width: 1500,
        height: 860
      },
      {
        type: "mobileVideo",
        poster: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/c82c8fba2dc5c30e7b9cd590829f6869/thumbnails/thumbnail.jpg?time=0s&width=200&format=webp&quality=70",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/c82c8fba2dc5c30e7b9cd590829f6869/downloads/default.mp4"
      }
    ],
    description: [
      "Logomark, website design & development for Los Angeles based film production company North of Now."
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
    type: "Frontend Engineering",
    stack: "Shopify Theme Development",
    media: [
      {
        type: "image",
        src: "/basma/bb-d.png",
        width: 1000,
        height: 761
      },
      {
        type: "mobileVideo",
        poster: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/3effe4b4174d7cdd27b1a2ac41f00561/thumbnails/thumbnail.jpg?time=0s&width=200&format=webp&quality=70",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/3effe4b4174d7cdd27b1a2ac41f00561/downloads/default.mp4"
      }
    ],
    description: [
      "Worked with ",
      { 
        text: "56.digital", 
        link: "https://56.digital/" 
      },
      " on the development of a shade finder quiz for Basma Beauty."
    ],
    stackTags: {
      commerce: "Shopify"
    },
  },
  {
    name: "Susan for Susan",
    year: "2021",
    type: "Frontend Engineering",
    stack: "Static Site Generation",
    media: [
      {
        type: "image",
        src: "/susan-for-susan/1.png",
        width: 1000,
        height: 652
      },
      {
        type: "mobileVideo",
        poster: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/49a789f383f94691c5ccd93afc0cb2c3/thumbnails/thumbnail.jpg?time=0s&width=200&format=webp&quality=70",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/49a789f383f94691c5ccd93afc0cb2c3/downloads/default.mp4"
      }
    ],
    description: [
      "Frontend development for Toronto-based design studio Susan for Susan.\n\nDesign by ",
      { 
        text: "Ronan Mcgee", 
        link: "https://www.xn--rnn-fla2g.com/" 
      }
    ],
    stackTags: {
      cms: "Squarespace"
    },
  },
  // {
  //   name: "Club Dieciséis",
  //   year: "2021",
  //   type: "Frontend Engineering",
  //   stack: "Shopify Theme Development",
  //   media: [
  //     {
  //       type: "desktopVideo",
  //       src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/787904e7ebf09dc97b99c0247acfa6f6/downloads/default.mp4"
  //     }
  //   ],
  //   description: [
  //     "Shopify theme development for Puerto Rican musician Tainy.\n\nDesign by ",
  //     { 
  //       text: "Ronan Mcgee", 
  //       link: "https://www.xn--rnn-fla2g.com/" 
  //     }
  //   ],
  //   stackTags: {
  //     commerce: "Shopify"
  //   },
  // },
  {
    name: "Full Court Press",
    year: "2020",
    type: "Frontend Engineering",
    stack: "Shopify Theme Development",
    media: [
      {
        type: "mobileVideo",
        poster: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/71478c576dacfc40d3b92e13366f9e73/thumbnails/thumbnail.jpg?time=0s&width=200&format=webp&quality=70",
        src: "https://customer-8yrmilz5ghwcudh1.cloudflarestream.com/71478c576dacfc40d3b92e13366f9e73/downloads/default.mp4"
      }
    ],
    description: [
      "Shopify theme development for New York-based clothing line/publishing house Full Court Press.\n\nDesign by ",
      { 
        text: "Ronan Mcgee", 
        link: "https://www.xn--rnn-fla2g.com/" 
      }
    ],
    stackTags: {
      commerce: "Shopify"
    },
  },
  {
    name: "Norman Wong",
    year: "2020",
    type: "Frontend Engineering",
    stack: "Static Site Generation",
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
]

export default function Home() {
  return (
    <main className="container bg-white text-black animate-fade-in-slower-delay opacity-0 py-16 min-h-[92vh]">
      <div className="grid grid-cols-[50%_50%] lg:grid-cols-[25%_25%_30%_auto_max-content] h-max mt-12 mb-16">
        <div className="col-span-2 max-w-[65%] lg:col-span-1 lg:row-span-2 mb-16 lg:mb-0 text-xs lg:w-full md:max-w-[70%]">
          <h2 className="text-sm mb-4 uppercase">Info</h2>
          <p>JNPR is a digital product design & engineering studio.</p>
          <p>Interested in working together?</p>
          <p>E-mail <CopyButton textToCopy="hello@jnpr.studio" /></p>
        </div>
        <h2 className="text-sm mb-4 col-span-2 lg:col-span-4 uppercase">Services</h2>
        <p className="text-xs lg:col-start-2">
          Digital Product Design<br /><br /><br />
          Frontend Engineering
        </p>
        <p className="text-xs">
          Branding<br />
          UX/UI Design<br /><br />
          Shopify Theme Development<br />
          JS Framework Development<br />
          Static Site Generation<br />
          Performance & A11y<br />
        </p>
      </div>
      <div className="mb-28">
        <h2 className="text-sm uppercase mb-4">Work</h2>
        <Accordion type="single" defaultValue="item-0" collapsible className="space-y-2">
          {projects.map((project, index) => (
            <AccordionItem
              key={index} value={`item-${index}`}
            >
              <AccordionTrigger
                className="grid grid-cols-[50%_auto_max-content] lg:grid-cols-[25%_25%_25%_auto_max-content] w-full text-xs/none font-normal text-left pb-2"
              >
                <span className="whitespace-pre-line text-xs">{project.name}</span>
                <span className="hidden lg:block whitespace-pre-line text-xs">{project.type}</span>
                <span className="hidden lg:block whitespace-pre-line text-xs pr-6">{project.stack}</span>
                <span className="text-right whitespace-pre-line text-xs pr-2">{project.year}</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 lg:space-y-0 lg:mt-4 mt-1 mb-4 lg:grid lg:grid-cols-[25%_25%_50%]">
                  <Carousel className="relative w-full py-2 lg:order-2" orientation="horizontal" opts={{
                    align: 'start',
                    loop: false
                  }}>
                    <CarouselContent>
                    {project.media.map((item, itemIndex) => (
                      <CarouselItem
                        key={itemIndex}
                        className={`flex justify-center items-center ${project.media.length > 1 ? 'lg:flex-[0_0_50%]' : 'flex-[0_0_100%]'}`}
                      >
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
                          <div className="aspect-w-16 aspect-h-9 w-[38%] max-w-[200px]">
                            <video
                              src={item.src}
                              muted
                              playsInline
                              autoPlay
                              loop
                            />
                            {/* <DeferredVideo
                              poster={item.poster}
                              src={item.src}
                              muted
                              playsInline
                              autoPlay
                              loop
                              unloadOnClose  // optional: frees memory after closing
                            /> */}
                          </div>
                        )}
                        {item.type === "desktopVideo" && (
                          <div className="aspect-w-16 aspect-h-9">
                            <video
                              src={item.src}
                              muted
                              playsInline
                              autoPlay
                              loop
                            />
                            {/* <DeferredVideo
                              poster={item.poster}
                              src={item.src}
                              muted
                              playsInline
                              autoPlay
                              loop
                              unloadOnClose  // optional: frees memory after closing
                            /> */}
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
                    <div className="lg:flex lg:items-center lg:justify-between w-full lg:col-span-2 lg:w-1/2">
                      <p className="text-xs whitespace-pre-line lg:pr-32">
                        {project.description.map((descriptionItem, i) =>
                          typeof descriptionItem === "string" ? (
                            descriptionItem
                          ) : (
                            <a key={i} href={descriptionItem.link} target="_blank" className="link-primary">
                              {descriptionItem.text}
                            </a>
                          )
                        )}
                      </p>
                    </div>
                  }
                  <div className="lg:hidden grid grid-cols-[50%_auto]">
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
    </main>
  )
}

