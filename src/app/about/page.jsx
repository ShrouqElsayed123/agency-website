import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <section className='flex flex-col p-10 w-full'>
            {/* banner */}
            <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden">
                {/* الخلفية (الصورة) */}
                <Image
                    src="/banner.jpeg" // غيّري المسار حسب الصورة عندك
                    alt="Digital Storytellers background"
                    fill
                    className="object-cover brightness-75 grayscale filter"
                    priority
                />

                {/* النص فوق الصورة */}
                <div className="absolute bottom-4 left-6 md:left-10">
                    <div className="bg-mainColor bg-opacity-90 text-white p-4 md:p-6 rounded-sm max-w-md">
                        <h2 className="text-lg md:text-2xl font-bold">
                            Digital Storytellers
                        </h2>
                        <p className="text-sm md:text-base">
                            Handcrafting award winning digital experiences
                        </p>
                    </div>
                </div>

            </div>
            {/* text  */}
            <div className='flex flex-col md:flex-row justify-between gap-24 items-stretch mt-2 '>
                {/* part 1 */}
                <div className='flex flex-col justify-between gap-5 text-textColor'>
                    <p>We are a team of passionate designers, developers, and storytellers dedicated to crafting digital experiences that inspire.</p>
                    <p>At Agency, we believe great design is more than just visuals — it’s about creating meaningful connections between people and technology.</p>
                    <p>We combine creativity, strategy, and innovation to turn ideas into impactful solutions that help businesses grow and stand out.</p>
                </div>
                {/* part 2 */}
                <div className='flex flex-col justify-between gap-5 text-textColor'>
                    <p>we bring together a talented multidisciplinary team that builds user-focused, accessible, and high-performing products.</p>
                    <p>We turn bold ideas into digital realities — blending design, innovation, and human emotion to craft experiences that last.</p>
                    <button className="bg-mainColor w-fit text-white px-5 py-2  rounded-sm cursor-pointer hover:bg-mainColorDark font-medium transition-colors">
                        Contact
                    </button>
                </div>

            </div>
        </section>
    )
}

export default About
