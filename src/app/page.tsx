"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Shield,
  Lock,
  BarChart3,
  Building,
  Globe,
  ChevronRight,
  EyeOff,
} from "lucide-react"
import { Button } from "@/components/button"
import BeamInput from "@/components/beaminput"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"></header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                    Confidential Token Holdings for Real World Assets
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Secure, private, and compliant tokenization of real-world
                    assets with confidential holdings. Bringing traditional
                    assets to the blockchain with unparalleled privacy.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Start Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-white hover:bg-gray-800"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BeamInput />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Confidential RWA Tokenization
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform enables the tokenization of real-world assets
                  with complete privacy and security.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <EyeOff className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold">Confidential Holdings</h3>
                <p className="text-center text-gray-500">
                  Keep your token holdings private while maintaining compliance
                  with regulatory requirements.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Building className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold">Real World Assets</h3>
                <p className="text-center text-gray-500">
                  Tokenize real estate, commodities, securities, and other
                  traditional assets on the blockchain.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <BarChart3 className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold">Liquidity & Trading</h3>
                <p className="text-center text-gray-500">
                  Access global markets and liquidity while maintaining privacy
                  of your positions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform uses advanced cryptography to ensure your asset
                  holdings remain confidential.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Asset Verification</h3>
                </div>
                <p className="text-gray-500 pl-14">
                  Real-world assets are verified and validated by trusted
                  third-party auditors.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Tokenization</h3>
                </div>
                <p className="text-gray-500 pl-14">
                  Assets are tokenized on the blockchain with legal frameworks
                  ensuring ownership rights.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                    3
                  </div>
                  <h3 className="text-xl font-bold">
                    Confidential Transactions
                  </h3>
                </div>
                <p className="text-gray-500 pl-14">
                  Your transactions are fully private and cannot be read by
                  anyone on the network other than you.
                </p>
              </div>
              <div className="relative h-[400px] w-full rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="space-y-6 text-left text-white">
                    <div className="flex items-center space-x-2">
                      <Lock className="h-5 w-5 text-emerald-400" />
                      <div className="h-2 w-32 rounded-full bg-emerald-400/30"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-emerald-400" />
                      <div className="h-2 w-48 rounded-full bg-emerald-400/30"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-5 w-5 text-emerald-400" />
                      <div className="h-2 w-40 rounded-full bg-emerald-400/30"></div>
                    </div>
                    <div className="mt-8 space-y-2">
                      <div className="h-3 w-3/4 rounded-full bg-white/20"></div>
                      <div className="h-3 w-2/3 rounded-full bg-white/20"></div>
                      <div className="h-3 w-1/2 rounded-full bg-white/20"></div>
                    </div>
                    <div className="mt-8">
                      <div className="h-10 w-32 rounded-md bg-emerald-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="security" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Security
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Enterprise-Grade Security
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform is built with the highest security standards to
                  protect your assets and privacy.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Security illustration"
                className="mx-auto rounded-xl object-cover"
              />
              <div className="flex flex-col space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Zero-Knowledge Proofs</h3>
                  <p className="text-gray-500">
                    Our platform uses zero-knowledge cryptography to verify
                    transactions without revealing sensitive information.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Multi-Layer Encryption</h3>
                  <p className="text-gray-500">
                    All data is protected with multiple layers of encryption to
                    ensure maximum security.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Regulatory Compliance</h3>
                  <p className="text-gray-500">
                    Our platform is designed to meet global regulatory
                    requirements while maintaining privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                  Ready to secure your Real World Assets?
                </h2>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  Join the future of private, secure asset tokenization today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-gray-800"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex gap-2 items-center text-lg font-semibold">
            <Shield className="h-5 w-5 text-emerald-600" />
            <span>SecureRWA</span>
          </div>
          <p className="text-center text-sm text-gray-500 md:text-left">
            © {new Date().getFullYear()} SecureRWA. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
