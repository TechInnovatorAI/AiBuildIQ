'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

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

interface FormElementProps {
    questionForm: {
        question: string
        name: string
        required: boolean
        type: number
        sub: { option: string }[]
        placeholder: string
        width: string
    }
    index: number
    formData: { [key: string]: string }
    handleInputChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }
      ) => void
    errors: { [key: string]: string }
    init: number
}

const FormElement: React.FC<FormElementProps> = ({
    questionForm,
    index,
    formData,
    handleInputChange,
    errors,
    init
}) => {

    const [date, setDate] = React.useState<Date | undefined>(formData.close_date ? new Date(formData.close_date) : undefined)

    return (
        <div>
            <Label required={questionForm.required} className="font-bold">
                {index + init + 1}.
                {questionForm.question}
            </Label>
            {questionForm.type === 1 ? (
                <RadioGroup
                    className="flex flex-col sm:flex-row md:flex-wrap gap-x-8 gap-y-4 py-4"
                    value={formData[questionForm.name] || ''}
                    onValueChange={(value) => handleInputChange({ target: { name: questionForm.name, value } })}
                    name={questionForm.name}
                >
                    {questionForm.sub.map((que, index) => (
                        <div key={'radio' + index} className="flex space-x-2">
                            <RadioGroupItem value={que.option} className={`accent-accentColor ${formData[questionForm.name] === que.option ? 'text-[#004F8F] border-[#004F8F]' : 'text-gray-700'}`} />
                            <Label className={`${formData[questionForm.name] === que.option ? 'text-[#004F8F]' : 'text-gray-700'}`}>{que.option}</Label>
                        </div>
                    ))}
                </RadioGroup>
            ) : questionForm.type === 2 ? (
                <Input
                    name={questionForm.name}
                    placeholder={questionForm.placeholder}
                    className="rounded-full"
                    value={formData[questionForm.name] ? String(formData[questionForm.name]) : ''}
                    onChange={handleInputChange}
                />
            ) : questionForm.type === 3 ? (
                <div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !formData[questionForm.name] && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {formData[questionForm.name] ? format(formData[questionForm.name], "PPP") : <span>{questionForm.placeholder}</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align='start'>
                            <Calendar
                                mode="single"
                                // name={questionForm.name}
                                selected={formData[questionForm.name] ? new Date(formData[questionForm.name]) : undefined}
                                onSelect={(newDate) => {
                                    setDate(newDate);
                                    handleInputChange
                                    ({
                                        target: { name: questionForm.name, value: newDate?.toISOString() },
                                    });
                                }}
                                initialFocus
                                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))} // Disable past dates
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            ) : questionForm.type === 4 ? (
                <Textarea placeholder={questionForm.placeholder}
                    name={questionForm.name}
                    className="rounded-xl"
                    value={formData[questionForm.name] ? String(formData[questionForm.name]) : ''}
                    onChange={handleInputChange} />
            ) : ''}
            {errors[questionForm.name] && <p className="text-red-500 text-sm mt-1">{errors[questionForm.name]}</p>}
        </div>
    );
};

export default FormElement;







