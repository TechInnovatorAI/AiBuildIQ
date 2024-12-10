'use client'
import * as React from "react"
import FormElement from "@/components/custome-ui/loan-request-form"

const FormList = [
  {
    question: "Real Estate Owned (Investment Properties in Portfolio)",
    name: "real_estate_owned",
    required: false,
    type: 2,
    sub: [],
    sub2: [],
    placeholder: "Enter your answer",
    width: "w-full"
  },
  {
    question: "Rental Properties",
    name: "rental_properties",
    required: false,
    type: 1,
    sub: [
      { option: "Purchase" },
      { option: "Refinance" },
      { option: "MF (5+Units Portfolio)" },
      { option: "Short Term" },
    ],
    sub2: [],
    placeholder: "",
    width: "w-full"
  },
  {
    question: "Monthly Rents",
    name: "monthly_rents",
    required: false,
    type: 2,
    sub: [],
    sub2: [],
    placeholder: "Enter your answer",
    width: "w-1/2"
  },
  {
    question: "Monthly HOA",
    name: "monthly_hoa",
    required: false,
    type: 2,
    sub: [],
    sub2: [],
    placeholder: "Enter your answer",
    width: "w-1/2"
  },
  {
    question: "Annual Taxes",
    name: "annual_taxes",
    required: false,
    type: 2,
    sub: [],
    sub2: [],
    placeholder: "Enter your answer",
    width: "w-1/2"
  },
  {
    question: "Annual Insurance",
    name: "annual_insurance",
    required: false,
    type: 2,
    sub: [],
    sub2: [],
    placeholder: "Enter your answer",
    width: "w-1/2"
  },
]

interface Step4Props {
  formData: { [key: string]: string }
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }
  ) => void
  error: { [key: string]: string }
}

const Step4: React.FC<Step4Props> = ({
  formData,
  handleInputChange,
  error,
}) => {
  return (
    <div className="flex flex-wrap md:w-[50%] lg:w-full gap-x-[4%] gap-y-4 py-4">
      {FormList.map((form, index) => (
        <div key={'question' + index + 1} className={`${form.width === 'w-1/2' ? 'lg:w-[48%] w-full' : 'w-full'}`}>
          <FormElement
            questionForm={form}
            init={15}
            index={index}
            formData={formData}
            handleInputChange={handleInputChange}
            errors={error}
          />
        </div >
      ))
      }
    </div >
  )
}

export default Step4