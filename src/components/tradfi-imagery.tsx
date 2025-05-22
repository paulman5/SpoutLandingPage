"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Building2,
  TrendingUp,
  BarChart4,
  Globe,
  LineChart,
} from "lucide-react"

export default function TradFiImagery() {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % 2)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      <div className="aspect-[16/9] relative rounded-xl overflow-hidden shadow-xl">
        {/* NYSE Image */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: activeImage === 0 ? 1 : 0 }}
          animate={{ opacity: activeImage === 0 ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          {/* Using a placeholder image that will definitely load */}
          <div className="w-full h-full bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
            <div className="text-center p-8">
              <Building2 className="h-16 w-16 text-white/80 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white">
                New York Stock Exchange
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 max-w-md mx-auto">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white/10 p-3 rounded-lg">
                    <div className="text-xs text-white/70">NYSE:{i}00</div>
                    <div className="text-sm font-medium text-white mt-1">
                      ${(Math.random() * 100 + 50).toFixed(2)}
                    </div>
                    <div
                      className={`text-xs ${
                        i % 2 === 0 ? "text-green-400" : "text-red-400"
                      } mt-1`}
                    >
                      {i % 2 === 0 ? "+" : "-"}
                      {(Math.random() * 2).toFixed(2)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <div className="flex items-center text-white">
              <Building2 className="h-5 w-5 mr-2" />
              <span className="font-medium">New York Stock Exchange</span>
            </div>
          </div>
        </motion.div>

        {/* London Stock Exchange Image */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: activeImage === 1 ? 1 : 0 }}
          animate={{ opacity: activeImage === 1 ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          {/* Using a placeholder image that will definitely load */}
          <div className="w-full h-full bg-gradient-to-r from-indigo-900 to-indigo-700 flex items-center justify-center">
            <div className="text-center p-8">
              <Building2 className="h-16 w-16 text-white/80 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white">
                London Stock Exchange
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 max-w-md mx-auto">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white/10 p-3 rounded-lg">
                    <div className="text-xs text-white/70">LSE:{i}00</div>
                    <div className="text-sm font-medium text-white mt-1">
                      £{(Math.random() * 100 + 50).toFixed(2)}
                    </div>
                    <div
                      className={`text-xs ${
                        i % 2 === 0 ? "text-green-400" : "text-red-400"
                      } mt-1`}
                    >
                      {i % 2 === 0 ? "+" : "-"}
                      {(Math.random() * 2).toFixed(2)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <div className="flex items-center text-white">
              <Building2 className="h-5 w-5 mr-2" />
              <span className="font-medium">London Stock Exchange</span>
            </div>
          </div>
        </motion.div>

        {/* Overlay with financial data visualization */}
        <div className="absolute top-0 right-0 p-4 z-20">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 flex items-center space-x-3">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <div className="text-sm font-medium text-gray-800">
              Market: Open
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
          <button
            className={`w-2 h-2 rounded-full ${
              activeImage === 0 ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setActiveImage(0)}
          />
          <button
            className={`w-2 h-2 rounded-full ${
              activeImage === 1 ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setActiveImage(1)}
          />
        </div>
      </div>

      {/* TradFi credentials section */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
          <Globe className="h-6 w-6 text-blue-600 mb-2" />
          <div className="text-sm font-medium text-gray-800">
            Global Market Access
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
          <BarChart4 className="h-6 w-6 text-blue-600 mb-2" />
          <div className="text-sm font-medium text-gray-800">
            Institutional Grade
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
          <LineChart className="h-6 w-6 text-blue-600 mb-2" />
          <div className="text-sm font-medium text-gray-800">Market Data</div>
        </div>
      </div>
    </div>
  )
}
