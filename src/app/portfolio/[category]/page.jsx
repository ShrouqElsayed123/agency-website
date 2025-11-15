import React from 'react'
import { items } from './data';
import { notFound } from 'next/navigation';
import Image from 'next/image';


const getData = (cat) => {
    const data = items[cat];
    if (data) {
        return data;
    }
    return notFound();

}
const Category = async ({ params }) => {


    const { category } = await params;


    const data = getData(category)
    return (
        <section className='px-100 flex items-left flex-col gap-10 max-w-screen-lg py-10'>
            <div className='mb-10'>
                <h1 className='text-5xl font-black pb-3'>Our Works</h1>
                <p className='text-mainColor text-xl'>{category}</p>
            </div>
            <div className='flex flex-col gap-12'>
                {
                    data.map((item) => (
                        <div key={item.id} className={`flex justify-between
                     ${item.id % 2 == 1 ? 'flex-row' : 'flex-row-reverse'}`}>
                            <div className='w-1/2 self-center '>
                                <h1 className='text-3xl font-bold pb-7'>{item.title}</h1>
                                <p className='text-textColor italic text-lg'>{item.desc}</p>
                            </div>
                            <Image src={item.image} width={400} height={300} alt={item.title}
                                className="h-[300px] w-[400px] object-center"
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Category
