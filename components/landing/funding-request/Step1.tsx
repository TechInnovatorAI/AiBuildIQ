'use client'
import * as React from "react"
import FormElement from "@/components/custome-ui/loan-request-form"

const FormList = [
  {
    question: "Type of Project",
    name: "type_of_project",
    required: true,
    type: 1,
    sub2: [
      { option: "Fix and Flip/Rehab" },
      { option: "Bridge Purchase" },
      { option: "Bridge Refinance" },
      { option: "Ground-Up Construction SF (1-4 Units)" },
      { option: "DSCR (Long Term Rentals)" },
    ],
    sub:[
      { option: "5 Units or More" },
      { option: "Bridge (12-24 Months)" },
      { option: "Other" },
    ],
    placeholder: "",
    width: "w-full"
  },
  {
    question: "Address of Property",
    name: "address_of_property",
    required: true,
    type: 2,
    sub: [],
    sub2: [],
    placeholder: "Enter Address of Property",
    width: "w-full"
  },
  {
    question: "Property Ownership",
    name: "property_ownership",
    required: true,
    type: 1,
    sub: [
      { option: "Own" },
      { option: "Purchasing" },
    ],
    sub2: [],
    placeholder: "",
    width: "w-full"
  },
]

interface Step1Props {
  formData: { [key: string]: string }
    handleInputChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }
      ) => void
    error: { [key: string]: string }
}

const Step1: React.FC<Step1Props> = ({
  formData,
  handleInputChange,
  error,
}) => {
  return (
    <div className="flex flex-wrap md:w-[50%] lg:w-full gap-y-4 py-4 gap-x-4" >
      {FormList.map((form, index) => (
        <div key={'question' + index + 1} className={`${form.width === 'w-1/2' ? 'lg:w-[48%] w-full' : 'w-full'}`}>
          <FormElement 
            questionForm={form}
            init={0}
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

export default Step1