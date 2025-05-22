import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Spout Finance",
  description: "Transforming on-chain treasury management",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
