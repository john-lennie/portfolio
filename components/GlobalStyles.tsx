"use client"

export function GlobalStyles() {
  return (
    <style jsx global>{`
      .accordion-plus {
        display: block;
      }
      .accordion-minus {
        display: none;
      }
      [data-state=open] .accordion-plus {
        display: none;
      }
      [data-state=open] .accordion-minus {
        display: block;
      }
    `}</style>
  )
}

