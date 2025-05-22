"use client"

import Image from "next/image"
import {
  Building,
  TrendingUp,
  Shield,
  Lock,
  ChevronRight,
  Layers,
  Briefcase,
  Building2,
  Building2Icon as BuildingOffice2,
  Factory,
  Landmark,
} from "lucide-react"
import BondEtfAnimation from "@/components/bond-etf-animation"
import RoadmapAnimation from "@/components/roadmap-animation"
import YieldAnimation from "@/components/yield-animation"
import { motion } from "framer-motion"

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] -mt-20">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/Citycombination.jpg"
            alt="City combination background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 relative h-full flex items-center">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-6">
              Our Vision for On-Chain Treasury Management
            </h1>
            <p className="text-xl font-semibold text-white/90 mb-12">
              Transforming how organizations manage their Real World Assets
              through transparent, secure, and privacy-preserving on-chain
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: What We're Doing */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white"
        id="what-we-do"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mb-4">
                What we are Doing
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Real-World Assets. <br />
                Fully On-Chain.
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                We are tokenizing traditional financial assets like U.S.
                corporate bonds and bringing them on-chain — so treasuries,
                funds, and institutions can earn real-world yield without
                leaving crypto infrastructure.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-lg p-8 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* City Skyline - Top */}
                  <div className="absolute top-0 left-0 right-0 h-32 flex items-end justify-center">
                    <div className="h-32 w-16 bg-blue-700 rounded-t-md flex items-center justify-center">
                      <Landmark className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  {/* Financial District Buildings */}
                  <div className="absolute top-8 left-1/4 transform -translate-x-1/2">
                    <div className="relative">
                      <div className="h-36 w-20 bg-blue-600 rounded-t-md flex items-center justify-center">
                        <Building2 className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -right-12 -top-4">
                        <div className="h-28 w-16 bg-slate-700 rounded-t-md flex items-center justify-center">
                          <BuildingOffice2 className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-12 right-1/4 transform translate-x-1/2">
                    <div className="relative">
                      <div className="h-32 w-18 bg-slate-800 rounded-t-md flex items-center justify-center">
                        <Building className="h-7 w-7 text-white" />
                      </div>
                      <div className="absolute -left-10 top-6">
                        <div className="h-24 w-14 bg-blue-800 rounded-t-md flex items-center justify-center">
                          <Factory className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Blockchain Platform */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-blue-500 rounded-lg flex items-center justify-center">
                    <div className="text-white text-xl font-bold flex items-center">
                      <Layers className="h-6 w-6 mr-2" />
                      On-Chain Platform
                    </div>
                  </div>
                  {/* Connection Lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 400 400"
                  >
                    <path
                      d="M 100,120 L 100,280"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="6,6"
                      fill="none"
                    />
                    <path
                      d="M 200,150 L 200,280"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="6,6"
                      fill="none"
                    />
                    <path
                      d="M 300,130 L 300,280"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="6,6"
                      fill="none"
                    />
                  </svg>
                  {/* Yield Indicator */}
                  <div className="absolute top-1/2 right-0 transform translate-y-1/4 bg-white rounded-lg shadow-md px-3 py-2 flex items-center">
                    <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm font-medium text-slate-700">
                      Real-World Yield
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 2: Where We're Starting */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white"
        id="where-we-start"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <BondEtfAnimation />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mb-4">
                Where We are Starting
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Launching With U.S. Corporate Bond ETFs
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Our first product is a tokenized version of AAA-rated corporate
                bond ETFs, like LQD and VCIT. It is a low-volatility,
                yield-bearing asset — fully backed, custodial, and transparent.
              </p>
              <p className="mt-4 text-lg text-slate-600">
                It is ideal for DAOs, crypto-native firms, and institutions
                seeking safer yield on-chain.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 3: Where We're Going Next */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white"
        id="roadmap"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mb-4">
                Where We are Going Next
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Expanding Access to TradFi Markets
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Soon, we will launch additional tokenized assets, including:
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <ChevronRight className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900">
                      U.S. T-Bills
                    </h3>
                    <p className="mt-1 text-slate-600">
                      Short-term, low-risk government securities
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <ChevronRight className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900">
                      S&amp;P 500 exposure
                    </h3>
                    <p className="mt-1 text-slate-600">
                      Broad market equity exposure
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <ChevronRight className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900">
                      Russell 2000
                    </h3>
                    <p className="mt-1 text-slate-600">
                      Small-cap equity exposure
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-lg text-slate-600">
                And eventually: REITs, commodities, structured products, and
                more.
              </p>
            </div>
            <div>
              <RoadmapAnimation />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 4: What Makes Us Different */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white"
        id="difference"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-square max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* DeFi Flow */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-xl shadow-md flex flex-col items-center justify-center">
                    <Layers className="h-10 w-10 text-blue-600 mb-2" />
                    <div className="text-sm font-medium text-slate-700 text-center">
                      DeFi Flow
                    </div>
                  </div>
                  {/* TradFi Discretion */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-slate-50 rounded-xl shadow-md flex flex-col items-center justify-center">
                    <Briefcase className="h-10 w-10 text-slate-600 mb-2" />
                    <div className="text-sm font-medium text-slate-700 text-center">
                      TradFi Discretion
                    </div>
                  </div>
                  {/* Privacy Shield */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full shadow-lg flex items-center justify-center">
                    <div className="text-center">
                      <Lock className="h-12 w-12 text-white mx-auto mb-2" />
                      <div className="text-sm font-medium text-white">
                        FHE Protected
                      </div>
                    </div>
                  </div>
                  {/* Connection Lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 400 400"
                  >
                    <path
                      d="M 80,80 L 200,200 L 320,320"
                      stroke="#94a3b8"
                      strokeWidth="4"
                      strokeDasharray="8,8"
                      fill="none"
                    />
                  </svg>
                  {/* Features */}
                  <div className="absolute top-1/4 right-1/4 bg-white rounded-lg shadow-md px-3 py-2 flex items-center">
                    <Shield className="h-4 w-4 text-slate-600 mr-2" />
                    <span className="text-xs font-medium text-slate-700">
                      Confidential Balances
                    </span>
                  </div>
                  <div className="absolute bottom-1/4 left-1/4 bg-white rounded-lg shadow-md px-3 py-2 flex items-center">
                    <Lock className="h-4 w-4 text-slate-600 mr-2" />
                    <span className="text-xs font-medium text-slate-700">
                      Encrypted Transfers
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mb-4">
                What Makes Us Different
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                DeFi Flow. TradFi Discretion.
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Unlike most tokenized RWA protocols, we built our system to
                preserve privacy.
              </p>
              <p className="mt-4 text-lg text-slate-600">
                With confidential balances and encrypted transfers using FHE,
                Spout is the first to combine on-chain composability with
                TradFi-grade discretion — ideal for DAOs, family offices, and
                crypto-rich institutions.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 5: Why It Matters */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white"
        id="why-it-matters"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mb-4">
                Why It Matters
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                On-Chain Capital Deserves Off-Chain Yield
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                There is over $25B sitting idle in DAO treasuries alone.
              </p>
              <p className="mt-4 text-lg text-slate-600">
                We make it easy to convert idle stablecoins or BTC into fully
                backed, yield-bearing assets — without leaving the crypto
                ecosystem.
              </p>
            </div>
            <div>
              <YieldAnimation />
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
