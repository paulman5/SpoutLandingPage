"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Shield,
  TrendingUp,
  LinkIcon,
  Building2,
  ChevronRight,
  ChevronLeft,
  BarChart4,
  Layers,
  FileCheck,
  ShieldCheck,
  Globe,
} from "lucide-react"

const features = [
  {
    id: "backed",
    title: "Fully Backed by AAA-Rated ETFs",
    description:
      "Each token is backed 1:1 by investment-grade bond ETFs like LQD or VCIT, held by a qualified U.S. custodian",
    icon: <Shield className="h-6 w-6" />,
    color: "bg-blue-500",
    lightColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    id: "yield",
    title: "Stable, Transparent Yield",
    description:
      "Earn 4.5-5.5% net yield with daily NAV updates, verifiable asset reports, and optional rebasing or claim models",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "bg-green-500",
    lightColor: "bg-green-100",
    textColor: "text-green-600",
  },
  {
    id: "onchain",
    title: "On-Chain, Pharos-Native",
    description:
      "Issued directly on Pharos, enabling low-fee, high-performance minting, redeeming, and integration with native DeFi protocols",
    icon: <LinkIcon className="h-6 w-6" />,
    color: "bg-purple-500",
    lightColor: "bg-purple-100",
    textColor: "text-purple-600",
  },
  {
    id: "treasuries",
    title: "Designed for Treasuries",
    description:
      "Composable, stable, and programmable – ideal for DAOs, Web3 companies, and public firms with crypto on their balance sheets",
    icon: <Building2 className="h-6 w-6" />,
    color: "bg-amber-500",
    lightColor: "bg-amber-100",
    textColor: "text-amber-600",
  },
]

export default function ProductOverview() {
  const [activeFeature, setActiveFeature] = useState(0)

  const nextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % features.length)
  }

  const prevFeature = () => {
    setActiveFeature((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <div className="w-full ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-600">
            Bridging Traditional Finance & Digital Assets
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Spout provides institutional-grade treasury management for
            organizations operating in global financial markets.
          </p>
        </div>

        {/* Feature navigation */}
        <div className="hidden md:flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeFeature === index
                    ? `${feature.color} text-white`
                    : "text-gray-600 hover:text-gray-900 cursor-pointer"
                }`}
              >
                {feature.title.split(",")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="flex md:hidden justify-between items-center mb-6">
          <button
            onClick={prevFeature}
            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="text-center">
            <span className="text-sm font-medium text-gray-600">
              {activeFeature + 1} of {features.length}
            </span>
            <h3 className="text-lg font-semibold text-gray-900">
              {features[activeFeature].title}
            </h3>
          </div>

          <button
            onClick={nextFeature}
            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Feature content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Feature description */}
            <div className="p-8 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={features[activeFeature].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div
                    className={`inline-flex items-center justify-center p-3 rounded-xl ${features[activeFeature].lightColor}`}
                  >
                    <div className={features[activeFeature].textColor}>
                      {features[activeFeature].icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    {features[activeFeature].title}
                  </h3>

                  <p className="text-lg text-gray-600">
                    {features[activeFeature].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Feature animation */}
            <div
              className={`${features[activeFeature].lightColor} relative overflow-hidden`}
            >
              <AnimatePresence mode="wait">
                {activeFeature === 0 && (
                  <FullyBackedAnimation
                    key="backed"
                    color={features[activeFeature].color}
                  />
                )}

                {activeFeature === 1 && (
                  <YieldAnimation
                    key="yield"
                    color={features[activeFeature].color}
                  />
                )}

                {activeFeature === 2 && (
                  <OnChainAnimation
                    key="onchain"
                    color={features[activeFeature].color}
                  />
                )}

                {activeFeature === 3 && (
                  <TreasuriesAnimation
                    key="treasuries"
                    color={features[activeFeature].color}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile feature dots */}
        <div className="flex md:hidden justify-center mt-6">
          <div className="flex space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeFeature === index
                    ? features[activeFeature].color
                    : "bg-gray-300"
                } cursor-pointer`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Animation components
function FullyBackedAnimation({ color }: { color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative w-[300px] h-[300px]">
        {/* ETF visualization */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[120px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-4"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-sm font-medium text-gray-700 mb-2">
            AAA-Rated ETFs
          </div>
          <div className="grid grid-cols-2 gap-2 w-full">
            <div className="bg-blue-100 p-2 rounded text-center">
              <div className="text-xs font-medium text-blue-800">LQD</div>
              <div className="text-sm font-bold text-blue-600">$110.25</div>
            </div>
            <div className="bg-blue-100 p-2 rounded text-center">
              <div className="text-xs font-medium text-blue-800">VCIT</div>
              <div className="text-sm font-bold text-blue-600">$85.40</div>
            </div>
          </div>
        </motion.div>

        {/* Token visualization */}
        <motion.div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[120px] ${color} rounded-lg shadow-lg flex flex-col items-center justify-center p-4`}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-sm font-medium text-white mb-2">
            Spout Tokens
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded w-full text-center">
            <div className="text-xs font-medium text-white">1:1 Backed</div>
            <div className="text-sm font-bold text-white">
              100% Collateralized
            </div>
          </div>
        </motion.div>

        {/* Custodian */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-gray-100 rounded-full shadow-lg flex items-center justify-center"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-center">
            <Building2 className="h-8 w-8 text-gray-600 mx-auto" />
            <div className="text-xs font-medium text-gray-700 mt-1">
              U.S. Custodian
            </div>
          </div>
        </motion.div>

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <motion.path
            d="M 150 120 L 150 180"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeDasharray="6,6"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <motion.path
            d="M 150 120 C 150,120 200,150 250,150"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeDasharray="6,6"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </svg>

        {/* 1:1 indicator */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg h-12 w-12 flex items-center justify-center z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 1,
          }}
        >
          <div className="text-sm font-bold text-blue-600">1:1</div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function YieldAnimation({ color }: { color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative w-[320px] h-[300px]">
        {/* Yield chart */}
        <motion.div
          className="absolute inset-0 bg-white rounded-lg shadow-lg p-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm font-medium text-gray-700">
              Yield Performance
            </div>
            <div
              className={`text-sm font-bold ${color.replace("bg-", "text-")}`}
            >
              +5.2% APY
            </div>
          </div>

          <div className="relative h-[180px] w-full">
            {/* Chart grid */}
            <div className="absolute inset-0 border-b border-l border-gray-200" />
            <div className="absolute left-0 right-0 top-1/4 border-b border-dashed border-gray-200" />
            <div className="absolute left-0 right-0 top-1/2 border-b border-dashed border-gray-200" />
            <div className="absolute left-0 right-0 top-3/4 border-b border-dashed border-gray-200" />

            {/* Yield line */}
            <svg className="absolute inset-0" viewBox="0 0 300 180">
              <motion.path
                d="M 0,140 C 20,140 40,130 60,125 C 80,120 100,115 120,110 C 140,105 160,100 180,95 C 200,90 220,85 240,80 C 260,75 280,70 300,65"
                fill="none"
                stroke={color.replace("bg-", "stroke-").replace("500", "400")}
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
              />
              <motion.path
                d="M 0,140 C 20,140 40,130 60,125 C 80,120 100,115 120,110 C 140,105 160,100 180,95 C 200,90 220,85 240,80 C 260,75 280,70 300,65"
                fill="none"
                stroke={color.replace("bg-", "stroke-")}
                strokeWidth="3"
                strokeDasharray="6,6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
              />
            </svg>

            {/* Data points */}
            {[65, 95, 110, 125, 140].map((y, i) => (
              <motion.div
                key={i}
                className={`absolute w-3 h-3 ${color} rounded-full`}
                style={{
                  left: `${i * 75}px`,
                  top: `${y}px`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              />
            ))}
          </div>

          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <div>Jan</div>
            <div>Feb</div>
            <div>Mar</div>
            <div>Apr</div>
            <div>May</div>
          </div>
        </motion.div>

        {/* NAV update indicator */}
        <motion.div
          className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2 flex items-center space-x-2 z-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className={`h-2 w-2 rounded-full ${color} animate-pulse`} />
          <span className="text-xs font-medium text-gray-700">
            Daily NAV Updates
          </span>
        </motion.div>

        {/* Verification badge */}
        <motion.div
          className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-2 flex items-center space-x-2 z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <FileCheck className="h-4 w-4 text-green-500" />
          <span className="text-xs font-medium text-gray-700">
            Verifiable Reports
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}

function OnChainAnimation({ color }: { color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative w-[300px] h-[300px]">
        {/* Pharos network visualization */}
        <div className="absolute inset-0">
          {/* Central node */}
          <motion.div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 ${color} rounded-full flex items-center justify-center z-20`}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              boxShadow: [
                "0 0 0 0 rgba(147, 51, 234, 0.4)",
                "0 0 0 10px rgba(147, 51, 234, 0)",
                "0 0 0 0 rgba(147, 51, 234, 0)",
              ],
            }}
            transition={{
              scale: { duration: 0.5 },
              boxShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                repeatDelay: 0.5,
              },
            }}
          >
            <div className="text-white font-bold">Pharos</div>
          </motion.div>

          {/* Network nodes */}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i * Math.PI) / 3
            const radius = 120
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            return (
              <motion.div
                key={i}
                className="absolute w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center"
                style={{
                  left: `calc(50% + ${x}px - 20px)`,
                  top: `calc(50% + ${y}px - 20px)`,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 * i + 0.5 }}
              >
                <div className={color.replace("bg-", "text-")}>
                  {i % 3 === 0 ? (
                    <LinkIcon className="h-5 w-5" />
                  ) : i % 3 === 1 ? (
                    <Layers className="h-5 w-5" />
                  ) : (
                    <BarChart4 className="h-5 w-5" />
                  )}
                </div>
              </motion.div>
            )
          })}

          {/* Connection lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 10 }}
          >
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const angle = (i * Math.PI) / 3
              const radius = 120
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <motion.line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${x}px)`}
                  y2={`calc(50% + ${y}px)`}
                  stroke={color.replace("bg-", "stroke-")}
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                    strokeDashoffset: [0, -20],
                  }}
                  transition={{
                    pathLength: { delay: 0.1 * i + 0.5, duration: 0.5 },
                    opacity: { delay: 0.1 * i + 0.5, duration: 0.5 },
                    strokeDashoffset: {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1,
                      ease: "linear",
                      delay: 0.1 * i + 1,
                    },
                  }}
                />
              )
            })}
          </svg>
        </div>

        {/* Feature indicators */}
        <motion.div
          className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-2 flex items-center space-x-2 z-30"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex items-center space-x-1">
            <div className="h-2 w-2 bg-green-500 rounded-full" />
            <span className="text-xs text-gray-700">Low Fees</span>
          </div>
          <div className="w-px h-4 bg-gray-200" />
          <div className="flex items-center space-x-1">
            <div className="h-2 w-2 bg-blue-500 rounded-full" />
            <span className="text-xs text-gray-700">High Performance</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function TreasuriesAnimation({ color }: { color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative w-[300px] h-[300px]">
        {/* Treasury visualization */}
        <motion.div
          className="absolute top-4 left-1/2 -translate-x-1/2 w-[250px] h-[80px] bg-white rounded-lg shadow-lg flex items-center p-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mr-4">
            <Building2 className="h-10 w-10 text-gray-400" />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-800">
              Treasury Management
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Balance Sheet Optimization
            </div>
          </div>
        </motion.div>

        {/* Organization types */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[280px] grid grid-cols-3 gap-3">
          {[
            { name: "DAOs", icon: <Layers className="h-6 w-6" /> },
            { name: "Web3 Companies", icon: <Globe className="h-6 w-6" /> },
            { name: "Public Firms", icon: <BarChart4 className="h-6 w-6" /> },
          ].map((org, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * i + 0.7 }}
            >
              <div className={color.replace("bg-", "text-")}>{org.icon}</div>
              <div className="text-xs font-medium text-gray-700 mt-2 text-center">
                {org.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-3">
          {[
            { name: "Composable", icon: <Layers className="h-5 w-5" /> },
            { name: "Stable", icon: <ShieldCheck className="h-5 w-5" /> },
            { name: "Programmable", icon: <LinkIcon className="h-5 w-5" /> },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className={`${color} rounded-lg shadow-md p-3 flex flex-col items-center`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.2 * i + 1,
              }}
            >
              <div className="text-white">{feature.icon}</div>
              <div className="text-xs font-medium text-white mt-2">
                {feature.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <motion.path
            d="M 150,84 L 150,130"
            stroke="#d1d5db"
            strokeWidth="2"
            strokeDasharray="4,4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.path
            d="M 150,170 L 150,216"
            stroke="#d1d5db"
            strokeWidth="2"
            strokeDasharray="4,4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
        </svg>
      </div>
    </motion.div>
  )
}
