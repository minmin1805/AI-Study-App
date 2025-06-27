import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function DashboardHeader() {
  return (
    <div>
      <div className='flex gap-2 items-center '>
      </div>

      <div className='p-5 shadow-md flex justify-end'>


        <UserButton />



      </div>

    </div>
  )
}

export default DashboardHeader