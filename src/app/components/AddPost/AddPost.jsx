"use client";

import { useState } from "react";

export default function AddPost() {
    const [showForm, setShowForm] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        desc: "",
        img: "",
        content: "",
        username: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const createPost = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        console.log("Created Post:", data);

        alert("Post Added Successfully!");

        setFormData({
            title: "",
            desc: "",
            img: "",
            content: "",
            username: "",
        });

        setShowForm(false); // اقفلي الفورم
    };

    return (
        <div className="p-6">
            {/* Add Button */}
            <button
                onClick={() => setShowForm(true)}
                className="bg-mainColor text-white px-4 py-2 rounded-md"
            >
                Add Post
            </button>

            {/* Modal */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        >
                            ✕
                        </button>

                        <h2 className="text-xl font-bold mb-4">Add New Post</h2>

                        <form onSubmit={createPost} className="grid grid-cols-1 gap-4">
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Title"
                                className="p-2 border rounded"
                                required
                            />
                            <input
                                type="text"
                                name="desc"
                                value={formData.desc}
                                onChange={handleChange}
                                placeholder="Description"
                                className="p-2 border rounded"
                                required
                            />
                            <input
                                type="text"
                                name="img"
                                value={formData.img}
                                onChange={handleChange}
                                placeholder="Image URL"
                                className="p-2 border rounded"
                                required
                            />
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                placeholder="Content"
                                className="p-2 border rounded"
                                required
                            />
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Username"
                                className="p-2 border rounded"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-mainColor text-white px-4 py-2 rounded-md"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
