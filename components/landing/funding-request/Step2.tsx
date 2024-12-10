'use client'
import * as React from "react"
import FormElement from "@/components/custome-ui/loan-request-form"

const FormList = [
  {
    question: "Borrower or Broker?",
    name: "borrower_broker",
    required: true,
    type: 1,
    sub: [
      { option: "Borrower" },
      { option: "Broker" },
    ],
    sub2: [],
    placeholder: "",
    width: "w-full"
  },
  {
    question: "Name of Borrower",
    name: "name_of_borrower",
    required: false,
    type: 2,
    sub: [],
    sub2: [],
    placeholder: "Enter Name of Borrower",
    width: "w-1/2"
  },
  {
    question: "Name of Entity",
    name: "name_of_entity",
    required: false,
    type: 2,
    sub: [],
    sub2: [],
    placeholder: "Enter Name of Entity",
    width: "w-1/2"
  },
  {
    question: "Borrower FICO",
    name: "borrower_FICO",
    required: true,
    type: 2,
    sub: [],
    sub2: [],
    placeholder: "Please enter a number greater than 600",
    width: "w-full"
  },
  {
    question: "Borrower Liquidity (Estimated Amount Available for Project Including Partners)",
    name: "borrower_liquidity",
    required: true,
    type: 2,
    sub: [],
    sub2: [],
    placeholder: "The value must be a Number",
    width: "w-full"
  },
  {
    question: "Borrower Experience (Number of Similar Projects Completed in Last 3 Years)",
    name: "borrower_experience",
    required: true,
    type: 1,
    sub: [
      { option: "None" },
      { option: "1" },
      { option: "2" },
      { option: "3" },
      { option: "4" },
      { option: "5 or More" },
    ],
    sub2: [],
    placeholder: "",
    width: "w-full"
  },
]

interface Step2Props {
  formData: { [key: string]: string }
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }
  ) => void
  error: { [key: string]: string }
}

const Step2: React.FC<Step2Props> = ({
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
            init={3}
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

export default Step2