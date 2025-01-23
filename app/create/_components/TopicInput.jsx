import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function TopicInput() {
    return (
        <div>
            <h2>Enter topic or paste the content for which you want to generate study material</h2>
            <Textarea placeholder='Start writing here' className='mt-2' />
            <h2>Select the difficulty level</h2>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Difficuly level" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Moderate">Moderate</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                </SelectContent>
            </Select>

        </div>
    )
}

export default TopicInput