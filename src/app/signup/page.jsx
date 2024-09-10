"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';

export default function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignup = async () => {
    try {
      const response = await axios.post("/api/users/signup", user);
      console.log(response.data);
      router.push(`/login`);
    } catch (error) {
      console.log('on click ' + error);
    }
    console.log('no enter');
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4 bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6 animate-fadeIn">Signup</h1>

      <input
        className="border border-gray-600 p-3 rounded-lg w-full max-w-md placeholder-gray-400 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        type="text"
        placeholder="Name"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        required
      />

      <input
        className="border border-gray-600 p-3 rounded-lg w-full max-w-md placeholder-gray-400 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        type="email"
        placeholder="Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />

      <input
        className="border border-gray-600 p-3 rounded-lg w-full max-w-md placeholder-gray-400 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        type="password"
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        required
      />

      <button
        onClick={onSignup}
        className="bg-blue-600 w-full max-w-md py-3 rounded-lg text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      >
        Signup
      </button>
    </div>
  );
}
