"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus, Minus, Ellipsis, Dot } from "lucide-react"
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
          {/* <span className="ml-2 relative w-4 h-4">
            <Ellipsis className="absolute inset-0 h-4 w-4 transition-opacity duration-200 group-data-[state=open]:opacity-0" />
            <Dot className="absolute inset-0 h-4 w-4 opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100" />
            <Plus className="absolute inset-0 h-4 w-4 transition-opacity duration-200 group-data-[state=open]:opacity-0" />
            <Minus className="absolute inset-0 h-4 w-4 opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100" />
          </span> */}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef(
  (
    props: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const { className, children, ...rest } = props
    const wrapperRef = React.useRef<HTMLDivElement | null>(null)
    const innerRef = React.useRef<HTMLDivElement | null>(null)

    const setRef = (node: HTMLDivElement | null) => {
      wrapperRef.current = node
      if (typeof ref === "function") ref(node)
      else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
    }

    const updateHeight = () => {
      const wrapper = wrapperRef.current
      const inner = innerRef.current
      if (!wrapper || !inner) return
    
      const isOpen = wrapper.dataset.state === "open"
      const height = inner.offsetHeight
    
      if (isOpen) {
        wrapper.style.height = `${height}px`
      } else {
        // Set to fixed height before collapsing to trigger animation
        wrapper.style.height = `${height}px`
        // Force reflow
        void wrapper.offsetHeight
        wrapper.style.height = "0px"
      }
    }    

    // Run right after DOM is mounted, before paint
    React.useLayoutEffect(() => {
      const wrapper = wrapperRef.current
      const inner = innerRef.current
      if (!wrapper || !inner) return

      const resizeObserver = new ResizeObserver(() => {
        if (wrapper.dataset.state === "open") {
          wrapper.style.height = `${inner.offsetHeight}px`
        }
      })
      resizeObserver.observe(inner)

      const mutationObserver = new MutationObserver(updateHeight)
      mutationObserver.observe(wrapper, {
        attributes: true,
        attributeFilter: ["data-state"]
      })

      const onTransitionEnd = () => {
        if (wrapper.dataset.state === "open") {
          wrapper.style.height = "auto"
        }
      }
      wrapper.addEventListener("transitionend", onTransitionEnd)

      // Initial height update
      updateHeight()

      return () => {
        resizeObserver.disconnect()
        mutationObserver.disconnect()
        wrapper.removeEventListener("transitionend", onTransitionEnd)
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
        <div ref={innerRef} className="pt-0 pb-4">
          {children}
        </div>
      </AccordionPrimitive.Content>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
