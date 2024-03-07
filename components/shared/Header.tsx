import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import NavItems from './NavItems'
import { Button } from '../ui/button'
const Header = () => {
  return (
    <header className='w-full border-b bg-header-color'>
        <div className='wrapper flex items-center justify-between'>
        <Link href="/" className='w-36  ml-4'>
              <Image src="/assets/images/logo_transparent.png" className='cover' width={70} height={60} alt="logo">
             </Image> 
        </Link>
        <nav className='md:flex-between hidden w-full max-w-xs mr-20'> 
          <NavItems/>
        </nav>
        <div className='p-2'>
          
        </div>
        </div>
    </header>
  )
}

export default Header
