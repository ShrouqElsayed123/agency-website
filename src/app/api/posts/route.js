import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {

    try {
        await connect();
        const posts = await Post.find()
        return new NextResponse(posts, { status: 200 })
    }
    catch (err) {
        return new NextResponse("DB error", { status: 500 })
    }
}
