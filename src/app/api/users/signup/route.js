import {connect} from '@/dbConfig/dbConfig';
import user from '@/models/userModel';
import bcryptjs from 'bcryptjs';
import { NextResponse } from 'next/server';



connect();

export async function POST(request) {
    try{
    const body = await request.json();
    const { name, email, password } = body;
    console.log(body);

    const User = await user.findOne({email});
    if(User){
        return NextResponse.json({error: "User already exists"});


    }
    
    const hashedPassword = await bcryptjs.hash(password, 12);
    const newUser = await user({
        name,
        email,
        password: hashedPassword,
    });
    const savedUser = await newUser.save();
    console.log(savedUser);
    
    return NextResponse.json(newUser);
}catch(error){
    console.log('error');
    
}
}