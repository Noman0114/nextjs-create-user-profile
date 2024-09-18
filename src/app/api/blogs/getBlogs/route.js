import { connect } from '@/dbConfig/dbConfig';
import blogData from '@/models/blogModel';
import { NextResponse } from 'next/server';


export async function GET() {
    try {
connect();
        // Fetch all blog posts from the database
        const blogs = await blogData.find({});
        
        // Return the blogs as a JSON response
        return NextResponse.json(blogs);
    } catch (error) {
        console.error('Error fetching blog data:', error);
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}
