'use client'

import clsx from "clsx"
import { usePathname } from "next/navigation"

const page = () => {
  const pathname=usePathname()
  console.log(pathname)
  return (
    <div className={clsx(
    {'bg-blue text-pink':pathname=='/dashboard/invoices'}
    )}>
        Invoice Page
    </div>
  )
}

export default page