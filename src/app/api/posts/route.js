import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {

    try {
        await connect();
        const posts = await Post.find()
        return NextResponse.json(posts, { status: 200 });
    }
    catch (err) {
        return new NextResponse("DB error", { status: 500 })
    }
}


export async function POST(request) {
    try {
        await connect()
        const body = await request.json();
        const newPost = await Post.create(body);
        return NextResponse.json(newPost, { status: 201 });

    }
    catch (err) {
        return new NextResponse("DB error", { status: 500 });

    }
}