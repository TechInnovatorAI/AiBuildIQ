'use client'
import * as React from "react"
import FormElement from "@/components/custome-ui/loan-request-form"

const FormList = [
  {
    question: "Closing Date or Purchased Date",
    name: "close_date",
    required: true,
    type: 3,
    sub: [],
    sub2: [],
    placeholder: "Select the Closing Date or Purchased Date",
    width: "w-full"
  },
  {
    question: "Percentage of Property Under Lease",
    name: "percentage_of_property",
    required: false,
    type: 1,
    sub: [
      { option: "None" },
      { option: "Less than 50%" },
      { option: "51%~74%" },
      { option: "75%~89%" },
      { option: "90%~100%" },
    ],
    sub2: [],
    placeholder: "",
    width: "w-full"
  },
  {
    question: "Additional Notes",
    name: "additional_notes",
    required: false,
    type: 4,
    sub: [],
    sub2: [],
    placeholder: "Enter answer",
    width: "w-full"
  },
]

interface Step5Props {
  formData: { [key: string]: string }
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }
  ) => void
  error: { [key: string]: string }
}

const Step5: React.FC<Step5Props> = ({
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
            init={21}
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

export default Step5