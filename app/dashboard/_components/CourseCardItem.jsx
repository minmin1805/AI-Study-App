import Image from 'next/image'
import React from 'react'

function CourseCardItem() {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <Image src={'/knowledge.png'} alt='other' width={50} height={50} />
                    <h2 className='text-[10px] p-1 px-2 rounded-full'>20 Dec 2024</h2>
                </div>
                <h2>{}</h2>
            </div>
        </div>
    )
}

export default CourseCardItem