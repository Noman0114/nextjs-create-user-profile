import { connect } from '@/dbConfig/dbConfig';
import blogData from '@/models/blogModel';
import { NextResponse } from 'next/server';

connect();

export async function POST(request) {
    try {
        const body = await request.json();
        const { blogTitle, blogValue } = body;

        console.log(body);
        console.log('In a blog route');
        
        // Create and save the new blog post
        const newBlog = new blogData({
            blogTitle,
            blogValue,
        });
        const savedBlog = await newBlog.save();

        console.log(savedBlog);
        
        return NextResponse.json(savedBlog);  // Return the saved blog

    } catch (error) {
        console.log('Error:', error);  // Log the actual error message
        console.log('Error in catch block');
        
        return NextResponse.json({ error: 'An error occurred while saving the blog' }, { status: 500 });  // Return error response
    }
}
