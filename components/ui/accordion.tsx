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
      <span className="ml-2 flex items-center justify-center">
        <Plus className="h-3 w-3 shrink-0 transition-all duration-200 data-[state=open]:rotate-180 data-[state=open]:scale-0 opacity-100 data-[state=open]:opacity-0" />
        <Minus className="absolute h-3 w-3 shrink-0 transition-all duration-200 opacity-0 data-[state=open]:opacity-100 data-[state=open]:scale-100 scale-0" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const contentRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const handleTransition = () => {
      if (el.dataset.state === "open") {
        el.style.height = `${el.scrollHeight}px`
      } else {
        el.style.height = "0px"
      }
    }

    handleTransition() // set initial state
    const observer = new MutationObserver(handleTransition)
    observer.observe(el, { attributes: true, attributeFilter: ["data-state"] })

    return () => observer.disconnect()
  }, [])

  return (
    <AccordionPrimitive.Content
      forceMount
      ref={ref}
      className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        className
      )}
      {...props}
    >
      <div
        ref={contentRef}
        data-state={props["data-state"]}
        className="pt-0 pb-4"
        style={{ height: "0px" }}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
})
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

