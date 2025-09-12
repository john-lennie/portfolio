// "use client"

// import * as React from "react"
// import * as AccordionPrimitive from "@radix-ui/react-accordion"
// import { Plus, Minus, Ellipsis, Dot } from "lucide-react"
// import { cn } from "@/lib/utils"

// const Accordion = AccordionPrimitive.Root

// const AccordionItem = React.forwardRef(
//   (props: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>, ref: React.Ref<HTMLDivElement>) => (
//     <AccordionPrimitive.Item ref={ref} className={cn(props.className)} {...props} />
//   )
// )
// AccordionItem.displayName = "AccordionItem"

// const AccordionTrigger = React.forwardRef(
//   (props: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>, ref: React.Ref<HTMLButtonElement>) => {
//     const { className, children, ...rest } = props
//     return (
//       <AccordionPrimitive.Header className="flex">
//         <AccordionPrimitive.Trigger
//           ref={ref}
//           className={cn(
//             "group transition-all",
//             className
//           )}
//           {...rest}
//         >
//           {children}
//           {/* <ArrowDownIcon className="duration-200 h-3 transition-transform group-data-[state=open]:rotate-180" aria-hidden /> */}
//           {/* <ChevronDownIcon className="duration-200 h-3 transition-transform group-data-[state=open]:rotate-180" aria-hidden /> */}
//           <div className="relative flex items-center h-full w-4 lg:w-[1vw] 2xl:w-[0.8vw]">
//             <Plus className="absolute inset-0 h-full lg:h-auto w-full transition-opacity duration-200 group-data-[state=open]:opacity-0" />
//             <Minus className="absolute inset-0 h-full lg:h-auto w-full opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100" />
//           </div>
//         </AccordionPrimitive.Trigger>
//       </AccordionPrimitive.Header>
//     )
//   }
// )
// AccordionTrigger.displayName = "AccordionTrigger"

// const AccordionContent = React.forwardRef(
//   (
//     props: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>,
//     ref: React.Ref<HTMLDivElement>
//   ) => {
//     const { className, children, ...rest } = props
//     const wrapperRef = React.useRef<HTMLDivElement | null>(null)
//     const innerRef = React.useRef<HTMLDivElement | null>(null)

//     const setRef = (node: HTMLDivElement | null) => {
//       wrapperRef.current = node
//       if (typeof ref === "function") ref(node)
//       else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
//     }

//     const updateHeight = () => {
//       const wrapper = wrapperRef.current
//       const inner = innerRef.current
//       if (!wrapper || !inner) return
    
//       const isOpen = wrapper.dataset.state === "open"
//       const height = inner.offsetHeight
    
//       if (isOpen) {
//         wrapper.style.height = `${height}px`
//       } else {
//         // Set to fixed height before collapsing to trigger animation
//         wrapper.style.height = `${height}px`
//         // Force reflow
//         void wrapper.offsetHeight
//         wrapper.style.height = "0px"
//       }
//     }    

//     // Run right after DOM is mounted, before paint
//     React.useLayoutEffect(() => {
//       const wrapper = wrapperRef.current
//       const inner = innerRef.current
//       if (!wrapper || !inner) return

//       const resizeObserver = new ResizeObserver(() => {
//         if (wrapper.dataset.state === "open") {
//           wrapper.style.height = `${inner.offsetHeight}px`
//         }
//       })
//       resizeObserver.observe(inner)

//       const mutationObserver = new MutationObserver(updateHeight)
//       mutationObserver.observe(wrapper, {
//         attributes: true,
//         attributeFilter: ["data-state"]
//       })

//       const onTransitionEnd = () => {
//         if (wrapper.dataset.state === "open") {
//           wrapper.style.height = "auto"
//         }
//       }
//       wrapper.addEventListener("transitionend", onTransitionEnd)

//       // Initial height update
//       updateHeight()

//       return () => {
//         resizeObserver.disconnect()
//         mutationObserver.disconnect()
//         wrapper.removeEventListener("transitionend", onTransitionEnd)
//       }
//     }, [])

//     return (
//       <AccordionPrimitive.Content
//         forceMount
//         ref={setRef}
//         className={cn(
//           "overflow-hidden transition-[height] duration-300 ease-in-out",
//           className
//         )}
//         style={{ height: "0px" }}
//         {...rest}
//       >
//         <div ref={innerRef} className="pt-0 pb-4">
//           {children}
//         </div>
//       </AccordionPrimitive.Content>
//     )
//   }
// )
// AccordionContent.displayName = "AccordionContent"

// export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

// components/Accordion.tsx
"use client";

import * as React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";

// Root (no change needed)
export const Accordion = RadixAccordion.Root;

// Item
export const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof RadixAccordion.Item>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Item>
>((props, ref) => <RadixAccordion.Item ref={ref} {...props} />);
AccordionItem.displayName = "AccordionItem";

// Trigger
export const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof RadixAccordion.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Trigger>
>(({ children, ...props }, ref) => (
  <RadixAccordion.Header>
    <RadixAccordion.Trigger ref={ref} {...props}>
      {children}
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

// Content
export const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof RadixAccordion.Content>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Content>
>(({ children, ...props }, ref) => (
  <>
    <RadixAccordion.Content
      className="AccordionContent"
      ref={ref}
      {...props}
    >
      {children}
    </RadixAccordion.Content>
    <style jsx global>{`
      .AccordionContent {
        overflow: hidden;
      }
      .AccordionContent[data-state="open"] {
        animation: slideDown 300ms ease-in-out;
      }
      .AccordionContent[data-state="closed"] {
        animation: slideUp 300ms ease-in-out;
      }
      @keyframes slideDown {
        from {
          height: 0;
        }
        to {
          height: var(--radix-accordion-content-height);
        }
      }
      @keyframes slideUp {
        from {
          height: var(--radix-accordion-content-height);
        }
        to {
          height: 0;
        }
      }
    `}</style>
  </>
));
AccordionContent.displayName = "AccordionContent";
