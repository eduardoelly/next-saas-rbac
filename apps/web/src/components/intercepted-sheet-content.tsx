'use client'

import { type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { SheetClose, SheetContent, SheetOverlay, SheetPortal } from './ui/sheet'

interface InterceptedSheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetContent>,
    VariantProps<typeof SheetContent> {}

export const InterceptedSheetContent = React.forwardRef<
  React.ElementRef<typeof SheetContent>,
  InterceptedSheetContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetContent ref={ref} className={cn(className)} {...props}>
        {children}
        <SheetClose className='ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none'>
          <X className='h-4 w-4' />
          <span className='sr-only'>Close</span>
        </SheetClose>
      </SheetContent>
    </SheetPortal>
  )
})
InterceptedSheetContent.displayName = 'InterceptedSheetContent'
