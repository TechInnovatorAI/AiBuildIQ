'use client'
import * as React from "react"
import FormElement from "@/components/custome-ui/loan-request-form"

const FormList = [
  {
    question: "Purchase Price",
    name: "purchase_price",
    required: true,
    type: 2,
    sub: [],
    sub2: [],
    placeholder: "The value must be a number",
    width: "w-1/2"
  },
  {
    question: "As-Is Value",
    name: "as_is_value",
    required: false,
    type: 2,
    sub: [],
    sub2: [],
    placeholder: "Enter your answer",
    width: "w-1/2"
  },
  {
    question: "Prior improvements($Amount If Any)",
    name: "prior_improvements",
    required: true,
    type: 2,
    sub: [],
    sub2: [],
    placeholder: "The value must be a number",
    width: "w-1/2"
  },
  {
    question: "Number of Units",
    name: "number_of_units",
    required: true,
    type: 2,
    sub: [],
    sub2: [],
    placeholder: "The value must be a number",
    width: "w-1/2"
  },
  {
    question: "ARV",
    name: "arv",
    required: true,
    type: 2,
    sub: [],
    sub2: [],
    placeholder: "The value must be a number",
    width: "w-1/2"
  },
  {
    question: "Construction Budget",
    name: "construction_budget",
    required: true,
    type: 2,
    sub: [],
    sub2: [],
    placeholder: "The value must be a number",
    width: "w-1/2"
  },
]

interface Step3Props {
  formData: { [key: string]: string }
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }
  ) => void
  error: { [key: string]: string }
}

const Step3: React.FC<Step3Props> = ({
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
            init={9}
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

export default Step3