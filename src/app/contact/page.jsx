import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <section className='px-100 flex items-center flex-col gap-10 max-w-screen-lg py-10'>
            {/* title  */}
            <h1 className='text-4xl font-black'>Let's Keep In Touch</h1>
            {/* content  */}
            <div className='flex justify-between gap-28 w-full'>
                {/* image  */}
                <Image src='/contact.png' width={400} height={300} alt='' />
                {/* inputs  */}
                <div className='flex flex-col flex-grow justify-between  '>
                    <input type="text" placeholder='Name' className='border-2 border-gray-200 rounded-sm p-1' />
                    <input type="email" placeholder='E-mail' className='border-2 border-gray-200 rounded-sm p-1' />
                    <textarea name="Message" rows={10} id="" placeholder='Message' className='border-2 border-gray-200 rounded-sm p-1 w-full' />
                    <button className="bg-mainColor text-white px-5 py-2 mt-5 rounded-sm cursor-pointer hover:bg-mainColorDark font-medium transition-colors">
                       Send
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contact
