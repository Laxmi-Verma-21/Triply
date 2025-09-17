import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menuOptions=[
      {
            name:'Home',
            path:'/'
      },
      {
            name:'Pricing',
            path:'/pricing'
      },
      {
            name:'Contact us',
            path:'/contact-us'
      }
]

function Header() {
  return (
    <div className='flex justify-between items-center'>
      {/* Logo  */}
      <div className='flex gap-2  items-center'>
            <Image src="/logo.png" alt="logo" width={70} height={50} />
            <h2 className='font-bold text-2xl '>Travelly</h2>
      </div>

      {/* Menu Options */}
      <div className='flex gap-5 items-center'>
            {menuOptions.map((menu, index)=>(
                  <Link href={menu.path} key={menu.path || index}>
                        <h2 className='text-lg hover:scale-105 transition-all hover:text-primary'>{menu.name}</h2>
                  </Link>
            ))}
      </div>

      {/*get started button*/}
      <Button>Get Gtarted</Button>
      
    </div>
  )
}

export default Header