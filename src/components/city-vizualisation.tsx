"use client"

import { motion } from "framer-motion"
import {
  Building,
  TrendingUp,
  Layers,
  Landmark,
  Building2,
  Building2Icon as BuildingOffice2,
  Factory,
} from "lucide-react"

export default function CityVisualizationAnimation() {
  return (
    <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-lg p-8 flex items-center justify-center">
      <div className="relative w-full h-full">
        {/* City Skyline - Top */}
        <div className="absolute top-0 left-0 right-0 h-32 flex items-end justify-around">
          <motion.div
            className="h-24 w-12 bg-slate-800 rounded-t-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="h-28 w-14 bg-slate-700 rounded-t-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.div
            className="h-32 w-16 bg-blue-700 rounded-t-md flex items-center justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Landmark className="h-6 w-6 text-white" />
            </motion.div>
          </motion.div>
          <motion.div
            className="h-20 w-12 bg-slate-600 rounded-t-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.div
            className="h-26 w-14 bg-slate-800 rounded-t-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>

        {/* Financial District Buildings */}
        <div className="absolute top-8 left-1/4 transform -translate-x-1/2">
          <div className="relative">
            <motion.div
              className="h-36 w-20 bg-blue-600 rounded-t-md flex items-center justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              >
                <Building2 className="h-8 w-8 text-white" />
              </motion.div>
            </motion.div>
            <div className="absolute -right-12 -top-4">
              <motion.div
                className="h-28 w-16 bg-slate-700 rounded-t-md flex items-center justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.div
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 0.7,
                  }}
                >
                  <BuildingOffice2 className="h-6 w-6 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute top-12 right-1/4 transform translate-x-1/2">
          <div className="relative">
            <motion.div
              className="h-32 w-18 bg-slate-800 rounded-t-md flex items-center justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2.3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.9,
                }}
              >
                <Building className="h-7 w-7 text-white" />
              </motion.div>
            </motion.div>
            <div className="absolute -left-10 top-6">
              <motion.div
                className="h-24 w-14 bg-blue-800 rounded-t-md flex items-center justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.div
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2.1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 1.1,
                  }}
                >
                  <Factory className="h-5 w-5 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Blockchain Platform */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-24 bg-blue-500 rounded-lg flex items-center justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="text-white text-xl font-bold flex items-center"
            animate={{
              textShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 8px rgba(255,255,255,0.5)",
                "0 0 0px rgba(255,255,255,0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="mr-2"
            >
              <Layers className="h-6 w-6" />
            </motion.div>
            On-Chain Platform
          </motion.div>
        </motion.div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
          <motion.path
            d="M 100,120 L 100,280"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="6,6"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, strokeDashoffset: [0, -24] }}
            transition={{
              pathLength: { duration: 1, delay: 1 },
              strokeDashoffset: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "linear",
              },
            }}
          />
          <motion.path
            d="M 200,150 L 200,280"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="6,6"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, strokeDashoffset: [0, -24] }}
            transition={{
              pathLength: { duration: 1, delay: 1.2 },
              strokeDashoffset: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "linear",
              },
            }}
          />
          <motion.path
            d="M 300,130 L 300,280"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="6,6"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, strokeDashoffset: [0, -24] }}
            transition={{
              pathLength: { duration: 1, delay: 1.4 },
              strokeDashoffset: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "linear",
              },
            }}
          />
        </svg>

        {/* Data packets flowing along the lines */}
        <motion.div
          className="absolute w-3 h-3 bg-blue-600 rounded-full"
          style={{ left: "100px", top: "50%" }}
          initial={{ opacity: 0, y: -80 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-80, 80],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
            delay: 2,
          }}
        />

        <motion.div
          className="absolute w-3 h-3 bg-blue-600 rounded-full"
          style={{ left: "200px", top: "50%" }}
          initial={{ opacity: 0, y: -80 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-80, 80],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
            delay: 2.3,
          }}
        />

        <motion.div
          className="absolute w-3 h-3 bg-blue-600 rounded-full"
          style={{ left: "300px", top: "50%" }}
          initial={{ opacity: 0, y: -80 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-80, 80],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
            delay: 2.6,
          }}
        />

        {/* Yield Indicator */}
        <motion.div
          className="absolute top-1/2 right-0 transform translate-y-1/4 bg-white rounded-lg shadow-md px-3 py-2 flex items-center"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.05, backgroundColor: "#f0f9ff" }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <motion.div
            animate={{
              y: [0, -2, 0],
              color: ["#22c55e", "#16a34a", "#22c55e"],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
          </motion.div>
          <motion.span
            className="text-sm font-medium text-slate-700"
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          >
            Real-World Yield
          </motion.span>
        </motion.div>
      </div>
    </div>
  )
}
