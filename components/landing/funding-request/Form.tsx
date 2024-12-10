'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import Success from './Success'
import ProgressIndicator from './ProgressIndicator'
import { z } from 'zod'

const steps = [
  {
    title: "Project Details",
    component: Step1,
    schema: z.object({
      type_of_project: z.string(),
      address_of_property: z.string(),
      property_ownership: z.string(),
    })
  },
  {
    title: "Borrower Information",
    component: Step2,
    schema: z.object({
      borrower_broker: z.string(),
      name_of_borrower: z.string().optional(),
      name_of_entity: z.string().optional(),
      borrower_FICO: z.string(),
      borrower_liquidity: z.string(),
      borrower_experience: z.string(),
    })
  },
  {
    title: "Property Financials",
    component: Step3,
    schema: z.object({
      purchase_price: z.string(),
      as_is_value: z.string(),
      prior_improvements: z.string(),
      number_of_units: z.string(),
      arv: z.string(),
      construction_budget: z.string(),
    })
  },
  {
    title: "Portfolio & Rental Details",
    component: Step4,
    schema: z.object({
      real_estate_owned: z.string().optional(),
      rental_properties: z.string().optional(),
      monthly_rents: z.string().optional(),
      monthly_hoa: z.string().optional(),
      annual_taxes: z.string().optional(),
      annual_insurance: z.string().optional(),
    })
  },
  {
    title: "Additional Information",
    component: Step5,
    schema: z.object({
      close_date: z.date({
        required_error: "A Closing date is required.",
      }),
      percentage_of_property: z.string().optional(),
      additional_notes: z.string().optional(),
    })
  },
]

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [prevStep, setPrevStep] = useState(0)
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setPrevStep(currentStep)
  }, [currentStep])

  const handleNext = () => {
    const currentSchema = steps[currentStep].schema
    const parsedData = parseFormData(formData)
    try {
      currentSchema.parse(parsedData)
      setErrors({})
      if (currentStep < steps.length - 1) {
        setPrevStep(currentStep)
        setCurrentStep(currentStep + 1)
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.flatten().fieldErrors)
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setPrevStep(currentStep)
      setCurrentStep(currentStep - 1)
      setErrors({})
      setFormData(parseFormData(formData))
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }) => {
    const { name, value } = event.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value.trim() === '' ? undefined : value
    }))
  }

  const parseFormData = (data: Record<string, any>) => {
    return Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== undefined && value !== '')
    )
  }

  const handleSubmit = async () => {
    // console.log(formData)
    const parsedData = parseFormData(formData)
    try {
      const endpoint = `http://localhost:8000/api/loan-request`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedData),
      })

      if (response.ok) {
        const responseData = await response.json();
        const id = responseData.id
        window.sessionStorage.setItem("fundingRequestId", id);
        window.location.href = "/funding-request/success";
        // Reset form or redirect to a success page
      } else {
        alert('Form submission failed. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again.')
    }
  }

  const CurrentStepComponent = steps[currentStep].component

  return (
    <div className="mt-32 pt-8 pb-6">
      <div className="py-8">
        <h1 className="text-2xl pt-4 font-bold mb-4 text-center text-[#004F8F]">Loan Request <span className="text-black">Form</span></h1>
        <h3 className="text-md text-center">Please tell us your needs</h3>
      </div>
      <Card className="w-full container  mx-auto bg-gray-200">
        <CardHeader>
          {/* <CardTitle>{steps[currentStep].title}</CardTitle> */}
        </CardHeader>
        <CardContent className="md:flex md:flex-row lg:flex-col gap-4">
          <ProgressIndicator currentStep={currentStep} totalSteps={steps.length} steps={steps} />
          <CurrentStepComponent
            formData={formData}
            handleInputChange={handleInputChange}
            error={errors}
          />
        </CardContent>
        <CardFooter className="flex justify-end gap-8">
          <Button className="rounded-full  bg-white text-[#004F8F] px-4 hover:bg-gray-500" onClick={handlePrevious} disabled={currentStep === 0}>
            Previous
          </Button>
          {currentStep === steps.length - 1 ? (
            <Button className="rounded-full  bg-[#004F8F] text-white px-4" onClick={handleSubmit}>Submit</Button>
          ) : (
            <Button className="rounded-full  bg-[#004F8F] text-white px-4" onClick={handleNext}>Next</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

