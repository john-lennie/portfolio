"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />)
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between py-4 font-bold transition-all",
        className
      )}
      {...props}
    >
      {children}
      <span className="ml-2 relative w-4 h-4">
        <Plus className="absolute inset-0 h-4 w-4 transition-opacity duration-200 group-data-[state=open]:opacity-0" />
        <Minus className="absolute inset-0 h-4 w-4 opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const contentRef = React.useRef<HTMLDivElement | null>(null)

  const setHeight = () => {
    const el = contentRef.current
    if (!el) return
    if (el.dataset.state === "open") {
      el.style.height = `${el.scrollHeight}px`
    } else {
      el.style.height = "0px"
    }
  }

  React.useEffect(() => {
    const el = contentRef.current
    if (!el) return

    // Set initial height
    setHeight()

    // Resize and mutation observers
    const mutationObserver = new MutationObserver(() => {
      requestAnimationFrame(setHeight)
    })

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(setHeight)
    })

    mutationObserver.observe(el, { attributes: true, attributeFilter: ["data-state"] })
    resizeObserver.observe(el)

    // Listen for images and videos to load
    const loadImagesAndVideos = () => {
      const elements = el.querySelectorAll("img, video")
      let loadCount = elements.length
      if (loadCount === 0) {
        setHeight() // No images/videos, so set height immediately
      }

      elements.forEach((element) => {
        const onLoad = () => {
          loadCount -= 1
          if (loadCount === 0) {
            setHeight() // Recalculate height once all elements are loaded
          }
        }
        element.addEventListener("load", onLoad)
        element.addEventListener("error", onLoad) // Handle error event
      })
    }

    loadImagesAndVideos()

    return () => {
      mutationObserver.disconnect()
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <AccordionPrimitive.Content
      forceMount
      ref={(node) => {
        contentRef.current = node
        if (typeof ref === "function") ref(node)
        else if (ref) ref.current = node
      }}
      className={cn(
        "overflow-hidden transition-[height] duration-300 ease-in-out",
        className
      )}
      style={{ height: "0px" }}
      {...props}
    >
      <div className="pt-0 pb-4">{children}</div>
    </AccordionPrimitive.Content>
  )
})
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
