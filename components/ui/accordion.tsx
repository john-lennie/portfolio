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

  React.useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const setInitialHeight = () => {
      el.style.height = el.dataset.state === "open" ? `${el.scrollHeight}px` : "0px"
    }

    const observer = new MutationObserver(() => {
      if (!el) return
      if (el.dataset.state === "open") {
        el.style.height = `${el.scrollHeight}px`
      } else {
        el.style.height = "0px"
      }
    })

    setInitialHeight()
    observer.observe(el, { attributes: true, attributeFilter: ["data-state"] })

    return () => observer.disconnect()
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

