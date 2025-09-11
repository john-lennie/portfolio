"use client"

import CopyButton from '@/components/ui/copyButton';
import { MobileIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="container">
      <div className="border-t border-gray-100 pt-4 grid grid-cols-[50%_auto] mb-12 lg:mb-24">
        <p className="text-xs">68 Claremont St<br />Toronto, ON<br />Canada</p>
        <div className="text-right">
          <p className="text-xs">
            <span className='inline-flex items-center space-x-2 link-primary'>
              <a href="tel:+14166708705">&#43;1&#32;416&#32;670&#32;8705</a>
              <MobileIcon className='w-[1em] h-[1em]' />
            </span><br />
            <CopyButton textToCopy="hello@jnpr.studio" /><br />
            <span className='inline-flex items-center space-x-2 link-primary'>
              <a href="https://www.are.na/jnpr-studio/all" target="_blank">are.na</a>
              <ExternalLinkIcon className='w-[1em] h-[1em]' />
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
