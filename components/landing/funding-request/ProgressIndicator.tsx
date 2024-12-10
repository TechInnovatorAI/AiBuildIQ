'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ProgressIndicatorProps {
  currentStep: number
  totalSteps: number
  steps: { title: string }[]
}

const stepButton = (opacity: number) => (
  <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity={opacity}>
      <g filter="url(#filter0_d_980_1471)">
        <circle cx="26.5977" cy="26.0254" r="15" fill="white" />
      </g>
      <circle cx="26.5965" cy="26.0252" r="8.39729" fill="#004F8F" />
    </g>
  </svg>
)

export default function ProgressIndicator({ currentStep, totalSteps, steps }: ProgressIndicatorProps) {
  const [prevStep, setPrevStep] = useState(currentStep)

  useEffect(() => {
    setPrevStep(currentStep)
  }, [currentStep])

  const isIncreasing = currentStep >= prevStep

  return (
    <div className="mb-8 border border-white rounded-xl border-2 p-4">
      <div className="flex lg:mx-16 px-8 flex-col lg:flex-row lg:items-center justify-between mb-2">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center flex-1 last:flex-none">
            <div className="flex flex-col lg:flex-row items-start w-full">
              <div className="flex flex-row lg:flex-col items-center justify-center ">
                <motion.div
                  className={`lg:justify-center flex items-center flex-row lg:flex-col}`}
                  initial={false}
                  animate={{
                    scale: index <= currentStep ? 1 : 0.8,
                    transition: { duration: 0.2 }
                  }}
                >
                  {index <= currentStep ? stepButton(1) : stepButton(0.5)}
                </motion.div>
                <span className={`text-lg lg:hidden ${index <= currentStep ? 'text-[#004F8F]' : 'text-[#004F8F] opacity-[50%]' } mt-2`}>{step.title}</span>
              </div>
              {index < totalSteps - 1 && (
                <div className={`lg:flex-1 h-[5vh] w-0.5 lg:w-full lg:h-0.5 ml-6 lg:mx-2 bg-[#004F8F] ${index < currentStep ? 'opacity-[100%]' : 'opacity-[50%]'} overflow-hidden lg:mt-6`}>
                  <motion.div
                    className="h-full bg-[#004F8F] hidden lg:block"
                    initial={isIncreasing ? { width: '0%' } : { width: '100%' }}
                    animate={index < currentStep ? { width: '100%' } : { width: '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="w-full bg-[#004F8F] lg:hidden"
                    initial={isIncreasing ? { height: '0%' } : { height: '100%' }}
                    animate={index < currentStep ? { height: '100%' } : { height: '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="hidden lg:grid  lg:grid-cols-5 justify-between">
        {steps.map((step, index) => (
          <span className={`text-lg ${index <= currentStep ? 'text-[#004F8F]' : 'text-[#004F8F] opacity-[50%]'} mt-2 text-center `}>{step.title}</span>
        ))}
      </div>
    </div>
  )
}

