import Image from 'next/image'
import React from 'react'

function MaterialCardItem({item}) {
  return (
    <div>
      <Image src={item.icon} alt={item.name} width={50} height={50} />

    </div>
  )
}

export default MaterialCardItem