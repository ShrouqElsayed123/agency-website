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

        // امسحي البيانات بعد الإضافة
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
                onClick={() => setShowForm(!showForm)}
                className="bg-mainColor text-white px-4 py-2 rounded-md"
            >
                {showForm ? "Close" : "Add Post"}
            </button>

            {/* FORM */}
            {showForm && (
                <form
                    onSubmit={createPost}
                    className="mt-4 grid grid-cols-1 gap-4 bg-gray-100 p-4 rounded-lg"
                >
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
            )}
        </div>
    );
}
