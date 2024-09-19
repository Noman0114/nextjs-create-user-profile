import { connect } from '@/dbConfig/dbConfig';
import blogData from '@/models/blogModel';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        // Wait for the database to connect
        await connect();

        // Fetch all blog posts from the database
        const blogs = await blogData.find({});
        
        // Return the blogs as a JSON response
        return NextResponse.json(blogs);
    } catch (error) {
        console.error('Error fetching blog data:', error.message);
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}
