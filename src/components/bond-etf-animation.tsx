"use client"

import { motion } from "framer-motion"
import { Shield, Building, TrendingUp, BarChart3 } from "lucide-react"

export default function BondEtfAnimation() {
  return (
    <div className="aspect-square max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center">
      <div className="relative w-full h-full">
        {/* ETF Visualization */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-20 bg-blue-50 rounded-lg shadow-md flex flex-col items-center justify-center"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-sm font-medium text-slate-700">
            Corporate Bond ETFs
          </div>
          <motion.div
            className="mt-2 flex space-x-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.9, 1.05, 1] }}
            transition={{
              duration: 1,
              times: [0, 0.7, 1],
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
            }}
          >
            <div className="bg-blue-100 px-3 py-1 rounded text-xs font-medium text-blue-700">
              LQD
            </div>
            <div className="bg-blue-100 px-3 py-1 rounded text-xs font-medium text-blue-700">
              VCIT
            </div>
          </motion.div>
        </motion.div>

        {/* Token Visualization */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-20 bg-blue-500 rounded-lg shadow-md flex flex-col items-center justify-center"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-sm font-medium text-white">
            Tokenized Version
          </div>
          <motion.div
            className="mt-2 flex space-x-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.9, 1.05, 1] }}
            transition={{
              duration: 1,
              times: [0, 0.7, 1],
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
              delay: 1.5,
            }}
          >
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs font-medium text-white">
              spLQD
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs font-medium text-white">
              spVCIT
            </div>
          </motion.div>
        </motion.div>

        {/* Connection */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
          <motion.path
            d="M 200,80 L 200,320"
            stroke="#3b82f6"
            strokeWidth="4"
            strokeDasharray="8,8"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, strokeDashoffset: [0, -32] }}
            transition={{
              pathLength: { duration: 1, delay: 0.4 },
              strokeDashoffset: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "linear",
              },
            }}
          />
        </svg>

        {/* Data packets flowing along the line */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full"
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-100, 100],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
            delay: 1,
          }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-blue-500"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 1, 0],
            y: [100, -100],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
            delay: 2,
          }}
        />

        {/* Features */}
        <motion.div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4 space-y-3"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-sm px-3 py-2 flex items-center"
            whileHover={{ scale: 1.05, backgroundColor: "#f0f9ff" }}
          >
            <Shield className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-xs font-medium text-slate-700">
              Fully Backed
            </span>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-sm px-3 py-2 flex items-center"
            whileHover={{ scale: 1.05, backgroundColor: "#f0f9ff" }}
          >
            <Building className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-xs font-medium text-slate-700">
              Custodial
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 space-y-3"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-sm px-3 py-2 flex items-center"
            whileHover={{ scale: 1.05, backgroundColor: "#f0f9ff" }}
          >
            <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-xs font-medium text-slate-700">
              Yield-Bearing
            </span>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-sm px-3 py-2 flex items-center"
            whileHover={{ scale: 1.05, backgroundColor: "#f0f9ff" }}
          >
            <BarChart3 className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-xs font-medium text-slate-700">
              Low-Volatility
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
