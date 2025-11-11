'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'

interface NavLinkProps extends ComponentProps<typeof Link> {}

export function NavLink(props: NavLinkProps) {
  const pathname = usePathname()

  const hrefString =
    typeof props.href === 'string'
      ? props.href
      : typeof props.href === 'object' && props.href !== null
        ? props.href.pathname || String(props.href)
        : String(props.href)

  const isCurrent = hrefString === pathname

  return <Link data-current={isCurrent} {...props} />
}
