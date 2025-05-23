"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CircleDollarSign } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown"

export default function Navigation() {
  const pathname = usePathname()
  const isLearnPage = pathname === "/learn"

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`relative z-[999] ${
        isLearnPage ? "bg-transparent" : "bg-white"
      }`}
    >
      <nav
        className={`container mx-auto max-w-[1400px] px-4 sm:px-6 ${
          isLearnPage ? "bg-transparent" : ""
        }`}
      >
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <CircleDollarSign
              className={`h-8 w-8 ${
                isLearnPage ? "text-white drop-shadow-lg" : "text-emerald-600"
              }`}
            />
            <span
              className={`text-xl font-bold ${
                isLearnPage ? "text-white drop-shadow-lg" : "text-gray-900"
              }`}
            >
              Spout
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`${
                  isLearnPage
                    ? "text-white drop-shadow-lg hover:text-emerald-400"
                    : "text-gray-600 hover:text-emerald-600"
                } transition-colors`}
              >
                Products
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white mt-4 z-[200]">
                <DropdownMenuLabel>Our Products</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    USCB
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {!isLearnPage && (
              <Link
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("about")
                }}
                className={`${
                  isLearnPage
                    ? "text-white hover:text-emerald-400"
                    : "text-gray-600 hover:text-emerald-600"
                } transition-colors`}
              >
                About
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
