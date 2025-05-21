import Link from "next/link"
import Image from "next/image"
import { CircleDollarSign } from "lucide-react"
import { Button } from "@/components/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      {/* Header */}
      <header className="w-full py-6">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CircleDollarSign className="h-6 w-6 text-emerald-600" />
              <span className="text-xl font-bold">Spout Finance</span>
            </div>
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex gap-8"></nav>
              <div className="flex items-center gap-4"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-emerald-600 mb-6">
                Spout Finance is transforming on-chain treasury management
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                We provide secure, efficient solutions for organizations to
                manage digital assets through transparent on-chain treasury
                operations.
              </p>
            </div>
          </div>
        </section>

        {/* Image with moving overlay text */}
        <section className="w-full py-16 md:py-24">
          <div className="relative overflow-hidden rounded-lg w-full">
            <div className="min-w-full overflow-hidden">
              <div className="relative left-1/2 -translate-x-1/2 w-[1420px] h-[740px]">
                <Image
                  src="/Bankcombination.jpg"
                  alt="City Skyline"
                  width={1920}
                  height={950}
                  className="object-cover brightness-75 rounded-2xl"
                />

                {/* ✅ Container to make text behave like institutional section */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center sm:justify-end">
                  <div className="container mx-auto px-4 sm:px-6 pb-12">
                    <div className="w-[90%] sm:w-[80%] md:max-w-2xl text-white mx-auto text-center flex flex-col items-center sm:items-start sm:mx-0 sm:text-left">
                      <div className="mb-4">
                        <CircleDollarSign className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                        Introducing
                        <br className="sm:hidden" /> Treasury Vault
                      </h2>
                      <p className="text-base sm:text-lg text-gray-100 mb-6">
                        Spout Finance Treasury Vault helps
                        <br className="sm:hidden" /> organizations manage their
                        digital assets securely
                        <br className="sm:hidden" /> with institutional-grade
                        on-chain treasury solutions.
                      </p>
                      <Button className="bg-emerald-600 text-white hover:bg-emerald-700 text-sm sm:text-base">
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
                  <h2 className="text-3xl font-bold text-emerald-600 mb-6">
                    Institutional-grade treasury management
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Spout Finance provides a comprehensive suite of tools for
                    organizations to manage their digital assets with security,
                    compliance, and efficiency.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-emerald-100 p-1 mt-1">
                        <CircleDollarSign className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700">
                        Multi-signature governance and controls
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-emerald-100 p-1 mt-1">
                        <CircleDollarSign className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700">
                        Transparent on-chain operations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-emerald-100 p-1 mt-1">
                        <CircleDollarSign className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700">
                        Automated yield optimization
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
              <h2 className="text-3xl font-bold text-emerald-600 mb-8">
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
                      <h3 className="text-xl font-bold mb-2">{title}</h3>
                      <p className="text-gray-600 mb-4">
                        {title === "Treasury Vault"
                          ? "Secure multi-signature treasury management for digital assets."
                          : title === "Yield Optimizer"
                          ? "Automated strategies to maximize returns on treasury assets."
                          : "Customizable governance frameworks for treasury operations."}
                      </p>
                      <Button
                        variant="outline"
                        className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50"
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
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-gray-200">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <CircleDollarSign className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium">Spout Finance</span>
            </div>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Spout Finance. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
