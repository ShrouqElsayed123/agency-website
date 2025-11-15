import connect from "@/utils/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(request, { params }) {
    const { id } = params;

    try {
        await connect(); // اتأكد من اتصالك بالـ DB

        // تحقق من صحة الـ ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({ message: "Post not found" }, { status: 404 });
        }

        const post = await Post.findById(id);

        if (!post) {
            return NextResponse.json({ message: "Post not found" }, { status: 404 });
        }

        return NextResponse.json(post);
    } catch (err) {
        console.error("Server error:", err);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
