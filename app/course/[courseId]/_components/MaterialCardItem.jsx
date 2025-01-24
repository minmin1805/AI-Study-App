import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function MaterialCardItem({item}) {
  return (
    <div className='border shadow-md rounded-lg p-5 flex flex-col items-center'>
      <Image src={item.icon} alt={item.name} width={50} height={50} />
      <h2 className='font-medium mt-3'>{item.name}</h2>
      <p className='text-gray-500 text-sm text-center'>{item.desc}</p>


      <Button className='mt-3'>View</Button>
    </div>
  )
}

export default MaterialCardItem