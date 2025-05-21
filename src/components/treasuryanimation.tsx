"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Key,
  Lock,
  Shield,
  ArrowUpRight,
  Database,
  CheckCircle2,
  Link,
  Layers,
  FileCheck,
  Building,
  Briefcase,
  BadgeIcon as Certificate,
} from "lucide-react"

export default function TreasuryAnimation() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[500px] w-full max-w-[500px] mx-auto">
      <div className="absolute top-4 left-4 right-4 flex justify-between">
        <div className="flex items-center space-x-2">
          <div
            className={`h-3 w-3 rounded-full ${
              activeSection === 0 ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
          <div
            className={`h-3 w-3 rounded-full ${
              activeSection === 1 ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
          <div
            className={`h-3 w-3 rounded-full ${
              activeSection === 2 ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        </div>
        <div className="text-sm font-medium text-gray-500">
          {activeSection === 0 && "Multi-signature governance"}
          {activeSection === 1 && "DeFi protocol interoperability"}
          {activeSection === 2 && "Off-chain collateral proofs"}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeSection === 0 && (
          <motion.div
            key="multi-sig"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[300px]">
              <motion.div
                className="absolute top-0 left-0 w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center"
                animate={{
                  x: [0, 100, 100],
                  y: [0, 0, 100],
                  rotate: [0, 0, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  times: [0, 0.5, 1],
                }}
              >
                <Key className="h-10 w-10 text-blue-600" />
              </motion.div>

              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-indigo-100 rounded-lg flex items-center justify-center"
                animate={{
                  x: [0, -100, -100],
                  y: [0, 0, 100],
                  rotate: [0, 0, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  times: [0, 0.5, 1],
                }}
              >
                <Key className="h-10 w-10 text-indigo-600" />
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-blue-500 rounded-lg flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0.5)",
                    "0 0 0 15px rgba(59, 130, 246, 0)",
                    "0 0 0 0 rgba(59, 130, 246, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              >
                <Lock className="h-12 w-12 text-white" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  times: [0, 0.5, 1],
                }}
              >
                <Shield className="h-8 w-8 text-blue-600" />
              </motion.div>
            </div>
          </motion.div>
        )}

        {activeSection === 1 && (
          <motion.div
            key="interoperability"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[350px] h-[300px]">
              {/* Central hub */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0.5)",
                    "0 0 0 15px rgba(59, 130, 246, 0)",
                    "0 0 0 0 rgba(59, 130, 246, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              >
                <div className="text-white font-bold text-lg">Spout</div>
              </motion.div>

              {/* Protocol nodes */}
              {[
                {
                  icon: <Layers className="h-8 w-8 text-white" />,
                  color: "bg-purple-500",
                  label: "Lending",
                },
                {
                  icon: <ArrowUpRight className="h-8 w-8 text-white" />,
                  color: "bg-green-500",
                  label: "DEX",
                },
                {
                  icon: <Database className="h-8 w-8 text-white" />,
                  color: "bg-orange-500",
                  label: "Staking",
                },
                {
                  icon: <Link className="h-8 w-8 text-white" />,
                  color: "bg-teal-500",
                  label: "Bridge",
                },
              ].map((protocol, i) => {
                const angle = (i * Math.PI) / 2
                const x = Math.cos(angle) * 120
                const y = Math.sin(angle) * 120

                return (
                  <motion.div
                    key={i}
                    className={`absolute w-20 h-20 ${protocol.color} rounded-lg flex flex-col items-center justify-center`}
                    style={{
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% + ${y}px - 40px)`,
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                  >
                    {protocol.icon}
                    <span className="text-xs text-white mt-1">
                      {protocol.label}
                    </span>
                  </motion.div>
                )
              })}

              {/* Connection lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: 0 }}
              >
                {[0, 1, 2, 3].map((i) => {
                  const angle = (i * Math.PI) / 2
                  const x1 = "50%"
                  const y1 = "50%"
                  const x2 = `${50 + Math.cos(angle) * 24}%`
                  const y2 = `${50 + Math.sin(angle) * 24}%`

                  return (
                    <motion.line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#3b82f6"
                      strokeWidth="3"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: 1,
                        opacity: 1,
                        strokeDashoffset: [0, -20],
                      }}
                      transition={{
                        delay: i * 0.2 + 0.5,
                        duration: 0.5,
                        strokeDashoffset: {
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 1,
                          ease: "linear",
                        },
                      }}
                    />
                  )
                })}
              </svg>

              {/* Data packets */}
              {[0, 1, 2, 3].map((i) => {
                const angle = (i * Math.PI) / 2
                const radius = 120

                return (
                  <motion.div
                    key={`packet-${i}`}
                    className="absolute w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
                    initial={{
                      x: `calc(50% + ${Math.cos(angle) * radius}px - 12px)`,
                      y: `calc(50% + ${Math.sin(angle) * radius}px - 12px)`,
                      opacity: 0,
                    }}
                    animate={{
                      x: [
                        `calc(50% + ${Math.cos(angle) * radius}px - 12px)`,
                        `calc(50% - 12px)`,
                        `calc(50% + ${
                          Math.cos((((i + 2) % 4) * Math.PI) / 2) * radius
                        }px - 12px)`,
                      ],
                      y: [
                        `calc(50% + ${Math.sin(angle) * radius}px - 12px)`,
                        `calc(50% - 12px)`,
                        `calc(50% + ${
                          Math.sin((((i + 2) % 4) * Math.PI) / 2) * radius
                        }px - 12px)`,
                      ],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.5 + 1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 1,
                    }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}

        {activeSection === 2 && (
          <motion.div
            key="collateral"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[350px] h-[300px]">
              {/* Off-chain assets */}
              <motion.div
                className="absolute left-[40px] top-[60px] w-[120px] h-[180px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-sm font-medium text-gray-700 mb-4">
                  Off-chain Assets
                </div>

                <motion.div
                  className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  <Building className="h-8 w-8 text-blue-600" />
                </motion.div>

                <motion.div
                  className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 1.5,
                    delay: 0.3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  <Briefcase className="h-8 w-8 text-indigo-600" />
                </motion.div>
              </motion.div>

              {/* On-chain representation */}
              <motion.div
                className="absolute right-[40px] top-[60px] w-[120px] h-[180px] bg-blue-500 rounded-lg shadow-lg flex flex-col items-center justify-center p-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-sm font-medium text-white mb-4">
                  On-chain Tokens
                </div>

                <motion.div
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 1.5,
                    delay: 0.2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  <Database className="h-8 w-8 text-white" />
                </motion.div>

                <motion.div
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  <Link className="h-8 w-8 text-white" />
                </motion.div>
              </motion.div>

              {/* Proof certificates */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`cert-${i}`}
                  className="absolute w-[180px] h-[40px] bg-white rounded-lg shadow-md flex items-center px-3 gap-2"
                  style={{
                    left: "50%",
                    top: 80 + i * 60,
                    transform: "translateX(-50%)",
                    zIndex: 10,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    backgroundColor: ["#ffffff", "#f0f9ff", "#ffffff"],
                  }}
                  transition={{
                    delay: i * 0.3 + 0.6,
                    duration: 1,
                    backgroundColor: {
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    },
                  }}
                >
                  <Certificate className="h-5 w-5 text-blue-500" />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-gray-700">
                      Proof #{i + 1}
                    </span>
                    <span className="text-[10px] text-gray-500">
                      Verified {new Date().toLocaleDateString()}
                    </span>
                  </div>
                  <FileCheck className="h-5 w-5 text-green-500 ml-auto" />
                </motion.div>
              ))}

              {/* Connection lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: 0 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.path
                    key={`path-${i}`}
                    d={`M 100 ${100 + i * 60} L 250 ${100 + i * 60}`}
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{
                      pathLength: 1,
                      strokeDashoffset: [0, -20],
                    }}
                    transition={{
                      delay: i * 0.3 + 0.4,
                      duration: 0.5,
                      strokeDashoffset: {
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 1,
                        ease: "linear",
                      },
                    }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
