import React from 'react'
import DashboardHeader from '../dashboard/_components/DashboardHeader'

function CourseViewLayout({ children }) {
    return (
        <div>
            <DashboardHeader className='mx-10 md:mx-36 lg:px-60 mt-10' />
            <div>
                {children}
            </div>
        </div>
    )
}

export default CourseViewLayout