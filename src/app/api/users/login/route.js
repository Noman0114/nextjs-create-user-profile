import { connect } from "@/dbConfig/dbConfig"; // Import the database connection
import user from "@/models/userModel"; // Import the user model
import bcryptjs from "bcryptjs"; // Import bcryptjs for password comparison
import { NextResponse } from "next/server"; // Import NextResponse for handling server responses
import jwt from "jsonwebtoken"; // Import jwt for creating JSON Web Tokens

connect(); // Connect to the database

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;
    console.log(body);

 
    const User = await user.findOne({ email });
    if (!User) {
      return NextResponse.json({ error: "User does not exist" }); // Return error if user doesn't exist
    }
    console.log('user exits');
    


    const checkPassword = await bcryptjs.compare(password, User.password);
    if (!checkPassword) {
      return NextResponse.json({ error: "Invalid credentials" }); 
    }

    const tokenData = {
      id: User._id, // Use User._id, not user._id
      email: User.email,
      name: User.name
    };

  
    const token = jwt.sign(tokenData, process.env.SECRET_TOKEN, {
      expiresIn: "1d",
    });

   
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true, 
     
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" });
  }
}
