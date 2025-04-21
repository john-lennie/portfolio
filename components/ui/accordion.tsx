"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(
  (props: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>, ref: React.Ref<HTMLDivElement>) => (
    <AccordionPrimitive.Item ref={ref} className={cn(props.className)} {...props} />
  )
)
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(
  (props: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>, ref: React.Ref<HTMLButtonElement>) => {
    const { className, children, ...rest } = props
    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            "group flex flex-1 items-center justify-between py-4 font-bold transition-all",
            className
          )}
          {...rest}
        >
          {children}
          <span className="ml-2 relative w-4 h-4">
            <Plus className="absolute inset-0 h-4 w-4 transition-opacity duration-200 group-data-[state=open]:opacity-0" />
            <Minus className="absolute inset-0 h-4 w-4 opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100" />
          </span>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef(
  (props: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>, ref: React.Ref<HTMLDivElement>) => {
    const { className, children, ...rest } = props
    const contentRef = React.useRef<HTMLDivElement | null>(null)

    const setRef = (node: HTMLDivElement | null) => {
      contentRef.current = node
      if (typeof ref === "function") ref(node)
      else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
    }

    const updateHeight = () => {
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

      const observer = new MutationObserver(() => updateHeight())
      observer.observe(el, { attributes: true, attributeFilter: ["data-state"] })

      const resizeObserver = new ResizeObserver(() => {
        if (el.dataset.state === "open") {
          el.style.height = `${el.scrollHeight}px`
        }
      })
      resizeObserver.observe(el)

      const onTransitionEnd = () => {
        if (el.dataset.state === "open") {
          el.style.height = "auto"
        }
      }

      el.addEventListener("transitionend", onTransitionEnd)

      requestAnimationFrame(() => {
        if (el.dataset.state === "open") {
          el.style.height = `${el.scrollHeight}px`
        }
      })

      return () => {
        observer.disconnect()
        resizeObserver.disconnect()
        el.removeEventListener("transitionend", onTransitionEnd)
      }
    }, [])

    return (
      <AccordionPrimitive.Content
        forceMount
        ref={setRef}
        className={cn(
          "overflow-hidden transition-[height] duration-300 ease-in-out",
          className
        )}
        style={{ height: "0px" }}
        {...rest}
      >
        <div className="pt-0 pb-4">{children}</div>
      </AccordionPrimitive.Content>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
