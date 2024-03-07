import Link from 'next/link';
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className='flex flex-row gap-8 p-4 justify-center'>
  <div className='socials rounded-full'>
    <Link href="https://www.facebook.com/profile.php?id=100063829291527"  target='_blank'>
      <FaFacebook fontSize={"1.5rem"} className='rounded-full'/>
    </Link>
  </div>
  <div className='socials rounded-full'>
    <Link href="https://www.instagram.com/oregalofficiel/" target='_blank'>
      <FaInstagram fontSize={"1.5rem"} className='rounded-full'/>
    </Link>
  </div>
</div>
  )
}

export default SocialMedia
