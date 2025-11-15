import React from 'react'
import AddPost from '../components/AddPost/AddPost'
import Link from 'next/link';
import Image from 'next/image';
async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store"
  });
  return res.json();
}
const Blog = async () => {
  const posts = await getPosts();
  return (
    <section className='px-100 flex  flex-col gap-10 max-w-screen-lg py-10'>
      <div className='flex justify-between items-center'>
        <h1 className='text-4xl font-black'>Blog Posts</h1>
        <AddPost />
      </div>
      <div className='flex flex-col gap-10'>
        {
          posts.map((p) => (
            <Link href='/' key={p._id} className='flex flex-row gap-10 items-center'>
              <Image src={p.img} width={300} height={100} alt={p.title} className='w-[300px] h-[200px] object-cover' />
              <div className='w-[800px] space-y-4'>
                <p className='text-3xl font-bold'>{p.title}</p>
                <p className='text-textColor italic'>{p.desc}</p>
              </div>

            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default Blog
