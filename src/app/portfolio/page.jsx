import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  return (
   <section>
    {/* title  */}
<h1>Our Works</h1>
{/* content  */}
<div>
  {/* title  */}
  <h1>Choose a gallery</h1>
  {/* cards  */}
 <div>
  {/* card 1 */}
   <Link href='/' className='border-2 overflow-hidden' >
  <div className='relative w-full h-[300px]'>
    <Image src='/illustration.png'/>
  </div>
  <div>
    
  </div>
  </Link>
 </div>
</div>
   </section>
  )
}

export default Portfolio
