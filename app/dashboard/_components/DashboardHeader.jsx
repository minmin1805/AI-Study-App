import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function DashboardHeader() {
  return (
    <div>
      <div className='flex gap-2 items-center '>
        <Image src={'/logo.svg'} alt='logo' width={40} height={40} />
        <h2 className='font-bold text-2xl'>Pro Study</h2>
      </div>

      <div className='p-5 shadow-md flex justify-end'>


        <UserButton />



      </div>

    </div>
  )
}

export default DashboardHeader