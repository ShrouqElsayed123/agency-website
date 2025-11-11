import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className=' flex justify-between '>
      <h1>@2025 , All Rights Reserved</h1>
      <ul className='flex gap-5'>
        <li><Image width={20} height={20} src='/1.png' alt='' /></li>
        <li><Image width={20} height={20} src='/2.png' alt='' /></li>
        <li><Image width={20} height={20} src='/3.png' alt='' /></li>
        <li><Image width={20} height={20} src='/4.png' alt='' /></li>
      </ul>
    </div>
  )
}

export default Footer
