"use client"
import Link from "next/link"
import Image from "next/image"
import { CircleDollarSign } from "lucide-react"
import { Button } from "@/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown"

function Navigation() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId)
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <nav className="hidden md:flex gap-8">
      <DropdownMenu>
        <DropdownMenuTrigger className="text-sm font-semibold text-gray-600 hover:text-gray-900">
          Products
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Our Products</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="#" className="w-full">
              USCB
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link
        href="#about"
        onClick={scrollToSection}
        className="text-sm font-semibold text-gray-600 hover:text-gray-900"
      >
        About
      </Link>
    </nav>
  )
}

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      {/* Header */}
      <header className="w-full py-6">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CircleDollarSign className="h-6 w-6 text-emerald-600" />
              <Link
                href="/"
                className="text-xl font-extrabold hover:text-emerald-600 transition-colors"
              >
                Spout
              </Link>
            </div>
            <div className="flex items-center gap-8">
              <Navigation />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-emerald-600 mb-6">
                Spout is transforming on-chain treasury management
              </h1>
              <p className="text-xl font-semibold text-gray-600 mb-12 max-w-3xl mx-auto">
                We provide secure, efficient solutions for organizations to
                manage digital assets through transparent on-chain treasury
                operations.
              </p>
            </div>
          </div>
        </section>

        {/* Image with moving overlay text */}
        <section className="w-full">
          <div className="relative overflow-hidden rounded-lg w-full">
            <div className="min-w-full overflow-hidden">
              <div className="relative left-1/2 -translate-x-1/2 w-[1420px] h-[740px] ml-2 mr-2">
                <Image
                  src="/Bankcombination.jpg"
                  alt="City Skyline"
                  width={1920}
                  height={950}
                  className="object-cover brightness-75 rounded-2xl"
                  priority
                  quality={100}
                  unoptimized
                />

                {/* ✅ Container to make text behave like institutional section */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center sm:justify-end">
                  <div className="container mx-auto px-4 sm:px-6 pb-12">
                    <div className="w-[90%] sm:w-[80%] md:max-w-2xl text-white mx-auto text-center flex flex-col items-center sm:items-start sm:mx-0 sm:text-left">
                      <div className="mb-4">
                        <CircleDollarSign className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-4">
                        Introducing
                        <br className="sm:hidden" /> Treasury Vault
                      </h2>
                      <p className="text-base sm:text-lg font-semibold text-gray-100 mb-6">
                        Spout Treasury Vault helps
                        <br className="sm:hidden" /> organizations manage their
                        digital assets securely
                        <br className="sm:hidden" /> with institutional-grade
                        on-chain treasury solutions.
                      </p>
                      <Button className="bg-emerald-600 text-white hover:bg-emerald-700 text-sm sm:text-base cursor-pointer">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-extrabold text-emerald-600 mb-6">
                    Institutional-grade treasury management
                  </h2>
                  <p className="text-gray-600 font-semibold mb-6">
                    Spout provides a comprehensive suite of tools for
                    organizations to manage their Real World Assets with
                    security, compliance, and efficiency.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-emerald-100 p-1 mt-1">
                        <CircleDollarSign className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-semibold">
                        Multi-signature governance and controls
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-emerald-100 p-1 mt-1">
                        <CircleDollarSign className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-semibold">
                        Interoperable with any on-chain DeFi protocol
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-emerald-100 p-1 mt-1">
                        <CircleDollarSign className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-semibold">
                        Off-chain collateral proofs
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] md:h-auto rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Dashboard Preview"
                    width={800}
                    height={600}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Cards */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-extrabold text-emerald-600 mb-8">
                Our Products
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {["Treasury Vault", "Yield Optimizer", "Governance Portal"].map(
                  (title, i) => (
                    <div
                      key={i}
                      className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                    >
                      <CircleDollarSign className="h-10 w-10 text-emerald-600 mb-4 mx-auto" />
                      <h3 className="text-xl font-extrabold mb-2">{title}</h3>
                      <p className="text-gray-600 font-semibold mb-4">
                        {title === "Treasury Vault"
                          ? "Secure multi-signature treasury management for digital assets."
                          : title === "Yield Optimizer"
                          ? "Automated strategies to maximize returns on treasury assets."
                          : "Customizable governance frameworks for treasury operations."}
                      </p>
                      <Button
                        variant="outline"
                        className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold"
                      >
                        Explore
                      </Button>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* About/Team Section */}
        <section id="about" className="w-full py-16 md:py-24">
          <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
            <div className="mx-auto max-w-6xl text-center">
              <h2 className="text-3xl font-extrabold text-emerald-600 mb-8">
                Our Team
              </h2>
              <div className="grid gap-12 md:grid-cols-2">
                {[
                  {
                    name: "Marc Ryan",
                    role: "CEO",
                    description:
                      "Former tech investment banker at HSBC, covering fintech and software.  Founder of FlipVault, a web3 bartering platform. Angel investor in several blockchain AI companies, including Theoriq, PIN AI, and GAIB AI",
                    image: "/Headshotmarc.jpg",
                    linkedin: "https://www.linkedin.com/in/marc-ryan/",
                  },
                  {
                    name: "Paul van Mierlo",
                    role: "CTO",
                    description:
                      "Serial hackathon grand prize winner and solutions architect for privacy and payments applications. Co-founded the first privacy protocol on Starknet.",
                    image: "/Headshotpaul.jpg",
                    linkedin:
                      "https://www.linkedin.com/in/paul-van-mierlo-063b9417a/",
                  },
                ].map((member, i) => (
                  <div key={i} className="bg-white p-8 flex flex-col h-full">
                    <div className="w-full h-[600px] relative mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={member.image}
                        alt={`${member.name} headshot`}
                        width={1200}
                        height={800}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        priority
                        quality={100}
                        unoptimized={false}
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-xl font-medium mb-2 text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-emerald-600 font-medium mb-2 text-base">
                        {member.role}
                      </p>
                      <p className="text-gray-600 font-normal text-base leading-relaxed mb-4 flex-grow">
                        {member.description}
                      </p>
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center gap-2 mt-auto"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        Connect on LinkedIn
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-gray-200">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <CircleDollarSign className="h-5 w-5 text-emerald-600" />
              <Link
                href="/"
                className="text-sm font-medium hover:text-emerald-600 transition-colors"
              >
                Spout
              </Link>
            </div>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm font-semibold text-gray-600 hover:text-gray-900"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold text-gray-600 hover:text-gray-900"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm font-semibold text-gray-500">
              &copy; {new Date().getFullYear()} Spout Finance. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
