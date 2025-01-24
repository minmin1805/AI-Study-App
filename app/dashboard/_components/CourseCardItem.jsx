import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RefreshCw } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function CourseCardItem({ course }) {

    const courseSummary = course?.courseLayout?.summary || course?.courseLayout?.course_summary;

    return (
        <div className='border rounded-lg shadow-md p-4'>
            <div>
                <div className='flex justify-between items-center'>
                    <Image src={'/knowledge.png'} alt='Course' width={50} height={50} />
                    <h2 className='text-[10px] bg-gray-200 p-1 px-2 rounded-full'>
                        20 Dec 2024
                    </h2>
                </div>
                <h2 className='mt-3 font-medium text-lg'>{course?.courseLayout.course_title}</h2>
                <p className='text-xs text-gray-500 mt-1 line-clamp-2'>{courseSummary}</p>

                <div className='mt-3'>
                    <Progress value={50} />
                </div>

                <div className='mt-3 flex justify-end'>
                   {course?.status=='Generating' ?
                   <h2 className='text-sm p-1 px-2 rounded-full bg-gray-200 flex gap-2 items-center'>
                   <RefreshCw className='h-4 w-4'/>
                   Generating...</h2>
                   :
                   <Link href={'/course/' + course?.courseId}>
                   <Button>View</Button>
                   </Link>}
                </div>

            </div>
        </div>
    );
}

export default CourseCardItem;