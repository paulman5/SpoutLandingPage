"use client"

import { motion } from "framer-motion"
import { Shield, Layers } from "lucide-react"

export default function YieldAnimation() {
  return (
    <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-lg p-8 flex items-center justify-center">
      <div className="relative w-full h-full">
        {/* Idle Capital */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-24 bg-slate-100 rounded-lg shadow-md flex flex-col items-center justify-center"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-sm font-medium text-slate-700 mb-2">
            Idle Treasury Capital
          </div>
          <motion.div
            className="text-xl font-bold text-slate-900"
            animate={{
              scale: [1, 1.05, 1],
              color: ["#0f172a", "#334155", "#0f172a"],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 1,
            }}
          >
            $25B+
          </motion.div>
        </motion.div>

        {/* Yield-Bearing Assets */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-24 bg-blue-500 rounded-lg shadow-md flex flex-col items-center justify-center"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-sm font-medium text-white mb-2">
            Yield-Bearing Assets
          </div>
          <motion.div
            className="text-xl font-bold text-white"
            animate={{
              scale: [1, 1.1, 1],
              textShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 10px rgba(255,255,255,0.5)",
                "0 0 0px rgba(255,255,255,0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 1,
            }}
          >
            4.5-5.5% APY
          </motion.div>
        </motion.div>

        {/* Arrow */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
          <motion.path
            d="M 200,100 L 200,300"
            stroke="#3b82f6"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.polygon
            points="190 290, 210 290, 200 310"
            fill="#3b82f6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          />
        </svg>

        {/* Animated data flow along the arrow */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full"
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-100, 100],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0.5,
            delay: 1.5,
          }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"
          initial={{ opacity: 0, y: -80 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-80, 80],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0.5,
            delay: 2,
          }}
        />

        {/* Benefits */}
        <motion.div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-3"
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
        </motion.div>

        <motion.div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-3"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-sm px-3 py-2 flex items-center"
            whileHover={{ scale: 1.05, backgroundColor: "#f0f9ff" }}
          >
            <Layers className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-xs font-medium text-slate-700">
              Stay On-Chain
            </span>
          </motion.div>
        </motion.div>

        {/* Pulsing effect around the conversion */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-blue-500"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>
    </div>
  )
}
