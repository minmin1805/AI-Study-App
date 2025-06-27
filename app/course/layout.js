import React from 'react'
import DashboardHeader from '../dashboard/_components/DashboardHeader'
import Link from 'next/link'

function CourseViewLayout({ children }) {
    return (
        <div>
            <div>
            <DashboardHeader className='mx-10 md:mx-36 lg:px-60 mt-10 relative' />
            <Link href={'/dashboard'}>
            <button className='absolute top-3 left-5 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-all duration-300'>Home</button>
            </Link>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default CourseViewLayout