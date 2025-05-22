"use client"
import Link from "next/link"
import Image from "next/image"
import { CircleDollarSign } from "lucide-react"
import { Button } from "@/components/button"
import TreasuryAnimation from "@/components/treasuryanimation"
import ProductOverview from "@/components/overview"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex mt-28">
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-emerald-600 mb-6">
              Spout is transforming on-chain treasury management
            </h1>
            <p className="text-xl font-semibold text-gray-600 mb-12 max-w-3xl mx-auto">
              We provide secure, efficient solutions for organizations to manage
              Real World Assets through transparent on-chain treasury
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* Image with moving overlay text */}
      <section className="w-full flex mt-24">
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
                      Real World Assets securely
                      <br className="sm:hidden" /> with institutional-grade
                      on-chain treasury solutions.
                    </p>
                    <Link href="/learn">
                      <Button className="bg-emerald-600 text-white hover:bg-emerald-700 text-sm sm:text-base cursor-pointer">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-500px" }}
        transition={{ duration: 0.5 }}
        className="w-full py-16 md:pt-32 md:pb-8"
      >
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-extrabold text-emerald-600 mb-6">
                  Institutional-grade treasury management
                </h2>
                <p className="text-gray-600 font-semibold mb-6">
                  Spout provides a comprehensive suite of tools for
                  organizations to manage their Real World Assets with security,
                  compliance, and efficiency.
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
              <div className="relative h-[300px] md:h-auto rounded-lg md:overflow-hidden md:ml-34">
                <TreasuryAnimation />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Product Cards */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="w-full py-24 md:py-8 bg-gray-50 mt-10 md:mt-0"
      >
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
          <ProductOverview />
        </div>
      </motion.section>

      {/* About/Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        id="team"
        className="w-full py-16 md:py-24"
      >
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-extrabold text-emerald-600 mb-8">
              Our Team
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Marc Ryan",
                  role: "CEO",
                  description:
                    "Former tech investment banker at HSBC, covering fintech and software.  Founder of FlipVault, a web3 bartering platform. Angel investor in several blockchain AI companies, including Theoriq, PIN AI, and GAIB AI.",
                  image: "/HeadshotMarc.png",
                  linkedin: "https://www.linkedin.com/in/marc-ryan/",
                  email: "marc@spout.finance",
                },
                {
                  name: "Paul van Mierlo",
                  role: "CTO",
                  description:
                    "Serial hackathon grand prize winner and solutions architect for privacy and payments applications. Co-founded the first privacy protocol on Starknet.",
                  image: "/HeadshotPaul.jpg",
                  linkedin:
                    "https://www.linkedin.com/in/paul-van-mierlo-063b9417a/",
                  email: "paul@spout.finance",
                },
                {
                  name: "Paul Jan Reijn",
                  role: "CLO",
                  description:
                    "Legal counsel with years of experience in software. Architect of the legal framework for various succesful software products, such as payments and factory automation.",
                  image: "/HeadshotPJ.png",
                  linkedin:
                    "https://www.linkedin.com/in/paul-jan-reijn-70b635227/",
                  email: "pauljan@spout.finance",
                },
              ].map((member, i) => (
                <div key={i} className="bg-white p-6 flex flex-col h-full">
                  <div className="w-full h-[450px] md:h-[300px] relative mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name} headshot`}
                      width={800}
                      height={600}
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
                    <h3 className="text-lg font-medium mb-1 text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-emerald-600 font-medium mb-2 text-sm">
                      {member.role}
                    </p>
                    <p className="text-gray-600 font-normal text-sm leading-relaxed mb-4 flex-grow">
                      {member.description}
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-auto">
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600"
                      >
                        <svg
                          className="w-5 h-5 hover:text-emerald-700 transition-colors"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </Link>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-emerald-600"
                        onClick={(e) => {
                          e.preventDefault()
                          window.open(`mailto:${member.email}`, "_self")
                        }}
                      >
                        <svg
                          className="w-5 h-5 hover:text-emerald-700 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}
