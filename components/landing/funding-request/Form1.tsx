"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import * as React from "react"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

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

const lineButton = (opacity: number, width: string) => (
  <motion.svg width={width} height="4" viewBox="0 0 214 4" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: opacity }}>
    <motion.path d="M1.99609 1.93359H212.049" stroke="#004F8F" strokeWidth="2.5" strokeLinecap="round" />
  </motion.svg>
)

const lineButton_vertical = (opacity: number) => (
  <motion.svg width="4" height="130" viewBox="0 0 4 214" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ y: -130, opacity: 0 }} animate={{ y: 0, opacity: opacity }}>
    <motion.path d="M1.99609 1.93359V212.049" stroke="#004F8F" strokeWidth="2.5" strokeLinecap="round" />
  </motion.svg>
)

const stepList = [
  "Project Details",
  "Borrower Information",
  "Property Financials",
  "Portfolio & Rental Details",
  "Additional Information"
]

const formSchema = z.object({
  type_of_project: z.string(),
  address_of_property: z.string(),
  property_ownership: z.string(),

  borrower_broker: z.string(),
  name_of_borrower: z.string(),
  name_of_entity: z.string(),
  borrower_FICO: z.string(),
  borrower_liquidity: z.string(),
  borrower_experience: z.string(),

  purchase_price: z.string(),
  as_is_value: z.string(),
  prior_improvements: z.string(),
  number_of_units: z.string(),
  arv: z.string(),
  construction_budget: z.string(),

  real_estate_owned: z.string(),
  rental_properties: z.string(),
  monthly_rents: z.string(),
  monthly_hoa: z.string(),
  annual_taxes: z.string(),
  annual_insurance: z.string(),

  close_date: z.date({
    required_error: "A Closing date is required.",
  }),
  percentage_of_property: z.string(),
  additional_notes: z.string(),
})

type FormField = keyof z.infer<typeof formSchema>;

// type: 1 : radio
// type: 2 : input
// type: 3 : calendar
// type: 4 : textarea
const questionFormList = [
  {
    active: [
      {
        question: "Type of your Project",
        name: "type_of_project" as FormField,
        required: true,
        type: 1,
        sub: [
          { option: "Fix and Flip or Rehab" },
          { option: "Rental Purchase" },
          { option: "Refinance" },
          { option: "Ground-Up Construction SF (1-4 Units)" },
          { option: "DSCR (Long Term Rentals)" },
          { option: "Ground-Up Construction MF (More than 5 units)" },
          { option: "Short-Term Rentals" },
          { option: "Bridge (12-24 Months)" },
          { option: "Other" },
        ],
        placeholder: "",
        width: "w-full"
      },
      {
        question: "Address of Property",
        name: "address_of_property" as FormField,
        required: true,
        type: 2,
        sub: [],
        placeholder: "Enter Address of Property",
        width: "w-full"
      },
      {
        question: "Property Ownership",
        name: "property_ownership" as FormField,
        required: true,
        type: 1,
        sub: [
          { option: "Own" },
          { option: "Purchasing" },
        ],
        placeholder: "",
        width: "w-full"
      },
    ]
  },
  {
    active: [
      {
        question: "Borrower or Broker?",
        name: "borrower_broker" as FormField,
        required: true,
        type: 1,
        sub: [
          { option: "Borrower" },
          { option: "Broker" },
        ],
        placeholder: "",
        width: "w-full"
      },
      {
        question: "Name of Borrower",
        name: "name_of_borrower" as FormField,
        required: false,
        type: 2,
        sub: [],
        placeholder: "Enter Name of Borrower",
        width: "w-1/2"
      },
      {
        question: "Name of Entity",
        name: "name_of_entity" as FormField,
        required: false,
        type: 2,
        sub: [],
        placeholder: "Enter Name of Entity",
        width: "w-1/2"
      },
      {
        question: "Borrower FICO",
        name: "borrower_FICO" as FormField,
        required: true,
        type: 2,
        sub: [],
        placeholder: "Please enter a number greater than 600",
        width: "w-full"
      },
      {
        question: "Borrower Liquidity (Estimated Amount Available for Project Including Partners)",
        name: "borrower_liquidity" as FormField,
        required: true,
        type: 2,
        sub: [],
        placeholder: "The value must be a Number",
        width: "w-full"
      },
      {
        question: "Borrower Experience (Number of Similar Projects Completed in Last 3 Years)",
        name: "borrower_experience" as FormField,
        required: true,
        type: 1,
        sub: [
          { option: "None" },
          { option: "1" },
          { option: "2" },
          { option: "3" },
          { option: "4" },
          { option: "5 or More" },
        ]
      },
    ]
  },
  {
    active: [
      {
        question: "Purchase Price",
        name: "purchase_price" as FormField,
        required: true,
        type: 2,
        sub: [],
        placeholder: "The value must be a number",
        width: "w-1/2"
      },
      {
        question: "As-Is Value",
        name: "as_is_value" as FormField,
        required: false,
        type: 2,
        sub: [],
        placeholder: "Enter your answer",
        width: "w-1/2"
      },
      {
        question: "Prior improvements($Amount If Any)",
        name: "prior_improvements" as FormField,
        required: true,
        type: 2,
        sub: [],
        placeholder: "The value must be a number",
        width: "w-1/2"
      },
      {
        question: "Number of Units",
        name: "number_of_units" as FormField,
        required: true,
        type: 2,
        sub: [],
        placeholder: "The value must be a number",
        width: "w-1/2"
      },
      {
        question: "ARV",
        name: "arv" as FormField,
        required: true,
        type: 2,
        sub: [],
        placeholder: "The value must be a number",
        width: "w-1/2"
      },
      {
        question: "Construction Budget",
        name: "construction_budget" as FormField,
        required: true,
        type: 2,
        sub: [],
        placeholder: "The value must be a number",
        width: "w-1/2"
      },
    ]
  },
  {
    active: [
      {
        question: "Real Estate Owned (Investment Properties in Portfolio)",
        name: "real_estate_owned" as FormField,
        required: false,
        type: 2,
        sub: [],
        placeholder: "Enter your answer",
        width: "w-full"
      },
      {
        question: "Rental Properties",
        name: "rental_properties" as FormField,
        required: false,
        type: 1,
        sub: [
          { option: "Purchase" },
          { option: "Refinance" },
          { option: "MF (5+Units Portfolio)" },
          { option: "Short Term" },
        ],
        placeholder: "",
        width: "w-full"
      },
      {
        question: "Monthly Rents",
        name: "monthly_rents" as FormField,
        required: false,
        type: 2,
        sub: [],
        placeholder: "Enter your answer",
        width: "w-1/2"
      },
      {
        question: "Monthly HOA",
        name: "monthly_hoa" as FormField,
        required: false,
        type: 2,
        sub: [],
        placeholder: "Enter your answer",
        width: "w-1/2"
      },
      {
        question: "Annual Taxes",
        name: "annual_taxes" as FormField,
        required: false,
        type: 2,
        sub: [],
        placeholder: "Enter your answer",
        width: "w-1/2"
      },
      {
        question: "Annual Insurance",
        name: "annual_insurance" as FormField,
        required: false,
        type: 2,
        sub: [],
        placeholder: "Enter your answer",
        width: "w-1/2"
      },
    ]
  },
  {
    active: [
      {
        question: "Closing Date or Purchased Date",
        name: "close_date" as FormField,
        required: true,
        type: 3,
        sub: [],
        placeholder: "Select the Closing Date or Purchased Date",
        width: "w-full"
      },
      {
        question: "Percentage of Property Under Lease",
        name: "percentage_of_property" as FormField,
        required: false,
        type: 1,
        sub: [
          { option: "None" },
          { option: "Less than 50%" },
          { option: "51%~74%" },
          { option: "75%~89%" },
          { option: "90%~100%" },
        ],
        placeholder: "",
        width: "w-full"
      },
      {
        question: "Additional Notes",
        name: "additional_notes" as FormField,
        required: false,
        type: 4,
        sub: [],
        placeholder: "Enter answer",
        width: "w-full"
      },
    ]
  },
]

export default function ProfileForm() {

  const [activeStep, setActiveStep] = useState(1)
  const [progress, setProgress] = React.useState(30)
 
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(55), 500)
    return () => clearTimeout(timer)
  }, [])
 
  const form = useForm<z.infer<typeof formSchema>>({
    // context: formSchema, // Schema passed as context to the form.
    resolver: zodResolver(formSchema),
    defaultValues: {
      // type_of_project: "",
      // address_of_property: "",
      // property_ownership: "",

      // borrower_broker: "",

      name_of_borrower: "",
      name_of_entity: "",

      borrower_FICO: "",
      borrower_liquidity: "",
      borrower_experience: "",

      purchase_price: "",

      as_is_value: "",

      prior_improvements: "",
      number_of_units: "",
      arv: "",
      construction_budget: "",

      real_estate_owned: "",
      rental_properties: "",
      monthly_rents: "",
      monthly_hoa: "",
      annual_taxes: "",
      annual_insurance: "",

      close_date: new Date(),

      percentage_of_property: "",
      additional_notes: ""
    },
  })

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   // console.log('ok')
  //   // console.log(values)
  // }

  const onFormSubmit = async (values: z.infer<typeof formSchema>) => {
    const allValuesNotEmpty = Object.values(values).every(value => value !== "");
    if (!allValuesNotEmpty) {
      console.error("All fields must be filled in.");
      return;
    }

    try {
      console.log("Sending Data", values);
      const endpoint = `http://localhost:8000/api/loan-request`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: values }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Response from backend:", result);
        window.location.href = `/funding-request/success`;
      } else {
        console.error("Failed to connect to backend:", response.status);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="pt-8 mt-32 container  mx-auto px-2 mb-1 py-8">
      <div className="py-8">
        <h1 className="text-2xl pt-4 font-bold mb-4 text-center text-[#004F8F]">Loan Request <span className="text-black">Form</span></h1>
        <h3 className="text-md text-center">Please tell us your needs</h3>
      </div>

      <div className="bg-gray-100 rounded-lg p-4 px-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-8 flex flex-wrap gap-4 lg:flex-col md:flex-row sm:flex-col">
            <div className="border-4 border-white rounded-lg items-start md:w-[40%] lg:w-full lg:flex p-4 justify-center ">
              {stepList.map((step, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-start">
                  {index > 0 && (
                    <>
                      <div className="hidden lg:block pt-6 mr-2">
                        {index < activeStep ?
                          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                            {lineButton(1, 'w-[10%]')}
                          </motion.div> : 
                          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 0.35 }}>
                            {lineButton(0.35, 'w-[10%]')}
                          </motion.div>
                        }
                      </div>
                      <div className="flex flex-col pl-6 lg:hidden ">
                        {index < activeStep ?
                          lineButton_vertical(1) : lineButton_vertical(0.35)
                        }
                      </div>
                    </>
                  )}
                  <div className=" lg:justify-center flex items-center flex-row lg:flex-col">
                    {index > activeStep - 1 ?
                      stepButton(0.35) : stepButton(1)
                    }
                    <span className={`text-[#004F8F] whitespace-nowrap ${index > activeStep - 1 ? 'text-opacity-[0.35]' : 'text-opacity-[1]'}`}>{step}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap md:w-[50%] lg:w-full gap-x-[4%] gap-y-4 py-4">
              {questionFormList[activeStep - 1].active.map((questionForm, index) => (
                <div key={'question' + index + questionFormList.slice(0, activeStep - 1).reduce((acc, curr) => acc + curr.active.length, 0) + 1} className={`${questionForm.width === 'w-1/2' ? 'lg:w-[48%] w-full' : 'w-full'}`}>
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name={questionForm.name}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel required={questionForm.required}>
                            {activeStep > 1 ? index + questionFormList.slice(0, activeStep - 1).reduce((acc, curr) => acc + curr.active.length, 0) + 1 : index + 1}.
                            {questionForm.question}
                          </FormLabel>
                          <FormControl>
                            {questionForm.type === 1 ? (
                              <RadioGroup
                                // defaultValue={questionForm.sub[0].option}
                                className="flex flex-col sm:flex-row md:flex-wrap gap-x-8 gap-y-4 py-4"
                                // value={field.value ? String(field.value) : questionForm.sub[0].option}
                                value={String(field.value)}
                                onValueChange={field.onChange}
                              >
                                {questionForm.sub.map((que, index) => (
                                  <div key={'radio' + index} className="flex space-x-2">
                                    <RadioGroupItem value={que.option} className={`accent-accentColor ${field.value === que.option ? 'text-[#004F8F]' : 'text-gray-700'}`} />
                                    <Label className={`${field.value === que.option ? 'text-[#004F8F]' : 'text-gray-700'}`}>{que.option}</Label>
                                  </div>
                                ))}
                              </RadioGroup>
                            ) : questionForm.type === 2 ? (
                              <Input placeholder={questionForm.placeholder} className="rounded-full" {...field} value={field.value ? String(field.value) : ''} />
                            ) : questionForm.type === 3 ? (
                              <div>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-full rounded-full pl-3 text-left font-normal",
                                          !field.value && "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>{questionForm.placeholder}</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                      mode="single"
                                      selected={field.value ? new Date(field.value) : undefined}
                                      onSelect={field.onChange}
                                      // disabled={(date) =>
                                      //   date > new Date() || date < new Date("1900-01-01")
                                      // }
                                      initialFocus
                                    />
                                  </PopoverContent>
                                </Popover>
                              </div>
                            ) : questionForm.type === 4 ? (
                              <Textarea placeholder={questionForm.placeholder} className="rounded-xl" {...field} value={String(field.value)} />
                            ) : ''}
                          </FormControl>
                          <FormDescription>
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
            {activeStep === 5 && <p>You can print a copy of your answer after you submit.</p>}
            <div className={`${activeStep < 5 ? 'hidden' : ''} gap-4 w-full flex justify-end`}>
              <button onClick={() => setActiveStep(activeStep - 1)} className={`text-white bg-[#004F8F] rounded-full px-8 py-2 ${activeStep < 2 ? 'opacity-50 cursor-not-allowed' : ''}`}>Back</button>
              <button type="submit" className={`text-white bg-[#004F8F] rounded-full px-8 py-2 ${activeStep > 5 ? 'opacity-50 cursor-not-allowed' : ''}`}>Submit</button>
            </div>
          </form>
          <div className={`${activeStep == 5 ? 'hidden' : ''} gap-4 w-full flex justify-end`}>
            <button onClick={() => {
              if (activeStep > 1) {
                setActiveStep(activeStep - 1);
              }
            }} className={`text-white bg-[#004F8F] rounded-full px-8 py-2 ${activeStep < 2 ? 'opacity-50 cursor-not-allowed' : ''}`}>Back</button>
            <button onClick={() => {
              if (activeStep < 5) {
                setActiveStep(activeStep + 1);
              }
            }} className={`text-white bg-[#004F8F] rounded-full px-8 py-2 ${activeStep > 5 ? 'opacity-50 cursor-not-allowed' : ''}`}>Next</button>
          </div>
        </Form>
      </div>
    </div>
  )
}
