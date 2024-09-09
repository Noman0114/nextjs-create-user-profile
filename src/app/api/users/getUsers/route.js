import { connect } from '@/dbConfig/dbConfig'; // Adjust path if necessary
import User from '@/models/userModel'; // Adjust path if necessary
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

connect();

export async function GET(request) {
  try {
    // Get the token from cookies
    const token = request.cookies.get('token')?.value || '';

    // Verify the token and decode it to get the user ID
    // This depends on your authentication setup
    const userId = decodeToken(token); // Replace with actual logic to decode token

    if (!userId) {
      return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }

    // Fetch the user data from the database
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ message: 'Error fetching user data' }, { status: 500 });
  }
}

// Function to decode token (implement based on your authentication setup)
function decodeToken(token) {
  // Example implementation; replace with your actual decoding logic
  try {
   
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    return decoded.id;
} catch (error) {
    throw new Error(error.message);
}

}
