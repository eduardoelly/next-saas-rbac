'use client'

import { useRouter } from 'next/navigation'

import { InterceptedSheetContent } from '@/components/intercepted-sheet-content'
import { Sheet, SheetHeader, SheetTitle } from '@/components/ui/sheet'

import { OrganizationForm } from '../../org/organization-form'

export default function CreateOrganization() {
  const router = useRouter()

  return (
    <Sheet
      defaultOpen
      onOpenChange={(open) => {
        if (!open) {
          router.back()
        }
      }}
    >
      <InterceptedSheetContent>
        <SheetHeader>
          <SheetTitle>Create organization</SheetTitle>
        </SheetHeader>

        <div className='p-4'>
          <OrganizationForm />
        </div>
      </InterceptedSheetContent>
    </Sheet>
  )
}
