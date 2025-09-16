import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
      {/* Logo  */}
      <div className='flex gap-2  items-center'>
            <Image src="/logo.png" alt="logo" width={70} height={50} />
            <h2 className='font-bold text-2xl '>Travelly</h2>
      </div>
      
    </div>
  )
}

export default Header