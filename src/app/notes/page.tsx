
import Image from "next/image"

import { accounts, mails } from "../components/data"
import { Mail } from "../components/mail"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MailPage() {

//   const defaultLayout = layout ? JSON.parse(layout.value) : undefined
//   const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <>
      <div className="hidden flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={undefined}
          defaultCollapsed={undefined}
          navCollapsedSize={4}
        />
      </div>
    </>
  )
}