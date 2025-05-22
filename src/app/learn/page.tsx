"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { CircleDollarSign, Shield } from "lucide-react"

export default function LearnPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh]">
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

      {/* Privacy-First Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="rounded-full bg-emerald-100 p-3 w-fit mx-auto mb-6 relative z-10">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-emerald-600 mb-4">
                Privacy by Design for Real World Assets
              </h2>
              <p className="text-lg text-gray-600 font-medium">
                While public blockchains offer transparency, they also expose
                sensitive financial data. Spout is building a platform with
                privacy directly into our RWA tokens to protect your assets and
                operations.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Encrypted Data on Chain
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Our platform ensures sensitive financial data remains
                  protected through robust encryption while still being stored
                  on-chain. This approach maintains the benefits of blockchain
                  transparency while safeguarding your confidential information.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Selective Disclosure
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Choose exactly what information to reveal and to whom. Our
                  system allows for granular control over asset visibility,
                  enabling compliance with regulations while protecting
                  sensitive business information.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-full bg-emerald-100 p-3 w-fit mb-6">
                <CircleDollarSign className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Transparency Through Blockchain
              </h2>
              <p className="text-gray-600 font-medium leading-relaxed">
                We believe in complete transparency for treasury operations
                while maintaining privacy where needed. By leveraging blockchain
                technology with privacy-preserving features, we enable
                organizations to maintain a clear, immutable record of all
                treasury activities, ensuring accountability and trust without
                compromising sensitive information.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-full bg-emerald-100 p-3 w-fit mb-6">
                <CircleDollarSign className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Institutional-Grade Security
              </h2>
              <p className="text-gray-600 font-medium leading-relaxed">
                Our platform implements multi-signature governance and advanced
                security protocols to ensure that treasury assets are protected
                at all times, meeting the highest standards of institutional
                security while maintaining privacy through encrypted data
                storage and selective disclosure mechanisms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="rounded-full bg-emerald-100 p-3 w-fit mb-6">
                <CircleDollarSign className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Real World Asset Integration
              </h2>
              <p className="text-gray-600 font-medium leading-relaxed">
                We are bridging the gap between traditional finance and DeFi by
                enabling seamless integration of Real World Assets into on-chain
                treasury operations. Our privacy-preserving infrastructure
                ensures that sensitive asset details remain protected while
                still benefiting from blockchain&apos;s efficiency and
                transparency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="rounded-full bg-emerald-100 p-3 w-fit mb-6">
                <CircleDollarSign className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                DeFi Protocol Interoperability
              </h2>
              <p className="text-gray-600 font-medium leading-relaxed">
                Our platform is designed to work seamlessly with any on-chain
                DeFi protocol while maintaining privacy controls. This allows
                organizations to maximize their treasury efficiency through
                automated yield generation and liquidity management without
                exposing sensitive financial data.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="bg-emerald-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-emerald-600 mb-4">
                Ready to Transform Your Treasury Management?
              </h2>
              <p className="text-gray-600 font-medium mb-8">
                Join us in revolutionizing how organizations manage their assets
                on-chain with enterprise-grade privacy and security.
              </p>
              <Link
                href="/"
                className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
