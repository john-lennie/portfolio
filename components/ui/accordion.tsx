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
        "flex flex-1 items-center justify-between py-4 font-bold transition-all",
        className
      )}
      {...props}
    >
      {children}
      <Plus className="h-3 w-3 shrink-0 transition-transform duration-200 accordion-plus" />
      <Minus className="h-3 w-3 shrink-0 transition-transform duration-200 accordion-minus" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const contentRef = React.useRef<HTMLDivElement>(null)
  const [height, setHeight] = React.useState(0)

  React.useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [children]) // Updates height if content changes

  return (
    <AccordionPrimitive.Content
      forceMount
      ref={contentRef}
      style={{
        height: 0,
        opacity: 0,
        transition: "height 300ms ease-in-out, opacity 200ms ease-in-out",
      }}
      className={cn(
        "overflow-hidden",
        "data-[state=open]:opacity-100 data-[state=open]:h-auto",
        className
      )}
      data-state="closed"
      {...props}
      onTransitionEnd={(e) => {
        if (e.target.getAttribute("data-state") === "open") {
          e.target.style.height = "auto" // Fixes jumpy behavior
        }
      }}
      onAnimationStart={(e) => {
        if (e.target.getAttribute("data-state") === "open") {
          e.target.style.height = `${height}px` // Expands dynamically
        }
      }}
    >
      <div className="p-2">{children}</div>
    </AccordionPrimitive.Content>
  )
})
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
