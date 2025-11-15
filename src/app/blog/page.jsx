import React from 'react';
import AddPost from '../components/AddPost/AddPost';
import Link from 'next/link';
import Image from 'next/image';

// جلب البوستات من API
async function getPosts() {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
      next: { revalidate: 0 } // منع الكاش
    });

    if (!res.ok) {
      const text = await res.text(); // لو فيه خطأ نعرضه
      console.error("Error fetching posts:", text);
      return []; // نرجع مصفوفة فاضية بدل ما يكسر الصفحة
    }

    return await res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return []; // نرجع مصفوفة فاضية
  }
}

const Blog = async () => {
  const posts = await getPosts();

  return (
    <section className='px-100 flex flex-col gap-10 max-w-screen-lg py-10'>
      <div className='flex justify-between items-center'>
        <h1 className='text-4xl font-black'>Blog Posts</h1>
        <AddPost />
      </div>

      <div className='flex flex-col gap-10'>
        {posts.length === 0 && (
          <p className='text-red-500 text-xl'>No posts found or error fetching posts.</p>
        )}

        {posts.map((p) => (
          <Link
            href={`/blog/${p._id}`}
            key={p._id}
            className='flex flex-row gap-10 items-center'
          >
            <Image
              src={p.img}
              width={300}
              height={200}
              alt={p.title}
              className='w-[300px] h-[200px] object-cover'
            />
            <div className='w-[800px] space-y-4'>
              <p className='text-3xl font-bold'>{p.title}</p>
              <p className='text-textColor italic'>{p.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
