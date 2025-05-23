"use client"

import { motion } from "framer-motion"
import { DollarSign, LineChart, BarChart3, Globe } from "lucide-react"

export default function RoadmapAnimation() {
  return (
    <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-lg p-8">
      <motion.div
        className="grid grid-cols-2 gap-6 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* T-Bills */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{
            y: -5,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4"
            whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(74, 222, 128, 0)",
                "0 0 0 10px rgba(74, 222, 128, 0)",
              ],
            }}
            transition={{
              boxShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                repeatDelay: 1,
              },
            }}
          >
            <DollarSign className="h-6 w-6 text-green-600" />
          </motion.div>
          <h3 className="text-sm font-medium text-slate-900">U.S. T-Bills</h3>
          <motion.div
            className="mt-2 text-xs text-green-600 font-medium"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 2,
            }}
          >
            Coming Q3 2023
          </motion.div>
        </motion.div>

        {/* S&P 500 */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{
            y: -5,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <motion.div
            className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
            whileHover={{ scale: 1.1, backgroundColor: "#dbeafe" }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(59, 130, 246, 0)",
                "0 0 0 10px rgba(59, 130, 246, 0)",
              ],
            }}
            transition={{
              boxShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                repeatDelay: 1,
                delay: 0.5,
              },
            }}
          >
            <LineChart className="h-6 w-6 text-blue-600" />
          </motion.div>
          <h3 className="text-sm font-medium text-slate-900">S&P 500</h3>
          <motion.div
            className="mt-2 text-xs text-blue-600 font-medium"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 2,
              delay: 0.5,
            }}
          >
            Coming Q4 2023
          </motion.div>
        </motion.div>

        {/* Russell 2000 */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{
            y: -5,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <motion.div
            className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4"
            whileHover={{ scale: 1.1, backgroundColor: "#f3e8ff" }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(147, 51, 234, 0)",
                "0 0 0 10px rgba(147, 51, 234, 0)",
              ],
            }}
            transition={{
              boxShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                repeatDelay: 1,
                delay: 1,
              },
            }}
          >
            <BarChart3 className="h-6 w-6 text-purple-600" />
          </motion.div>
          <h3 className="text-sm font-medium text-slate-900">Russell 2000</h3>
          <motion.div
            className="mt-2 text-xs text-purple-600 font-medium"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 2,
              delay: 1,
            }}
          >
            Coming Q1 2024
          </motion.div>
        </motion.div>

        {/* More */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{
            y: -5,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <motion.div
            className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4"
            whileHover={{ scale: 1.1, backgroundColor: "#fef3c7" }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(245, 158, 11, 0)",
                "0 0 0 10px rgba(245, 158, 11, 0)",
              ],
            }}
            transition={{
              boxShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                repeatDelay: 1,
                delay: 1.5,
              },
            }}
          >
            <Globe className="h-6 w-6 text-amber-600" />
          </motion.div>
          <h3 className="text-sm font-medium text-slate-900">And More</h3>
          <motion.div
            className="mt-2 text-xs text-amber-600 font-medium"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 2,
              delay: 1.5,
            }}
          >
            REITs, Commodities...
          </motion.div>
        </motion.div>

        {/* Connecting lines (optional) */}
      </motion.div>
    </div>
  )
}
