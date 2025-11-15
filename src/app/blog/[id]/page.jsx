import React from "react";
import { notFound } from "next/navigation";

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        notFound(); // هيرجع 404 لو مش موجود
    }

    const data = await res.json();

    // حماية إضافية لو الـ API رجع object فارغ
    if (!data || !data.content) {
        notFound();
    }

    return data;
}

const BlogPost = async ({ params }) => {
    const data = await getData(params.id);

    return (
        <section className="max-w-3xl mx-auto p-4">
            <div>
                <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            </div>
            <div>
                <p className="text-lg">{data.content}</p>
            </div>
        </section>
    );
};

export default BlogPost;
