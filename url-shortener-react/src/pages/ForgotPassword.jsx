import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        // Later connect backend API
        // navigate("/verify-otp")
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950">
            <div className="bg-gray-900 p-8 rounded-xl w-96 shadow-lg">
                <h1 className="text-2xl text-white font-bold text-center mb-6">
                    Forgot Password
                </h1>
                <p className="text-gray-400 text-sm mb-5 text-center">
                    Enter your registered email to receive OTP
                </p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none mb-4"
                        required
                    />
                    <button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                    >
                        Send OTP
                    </button>
                </form>
                <Link
                    to="/login"
                    className="block text-center text-blue-400 mt-5">
                    Back to Login
                </Link>
            </div>
        </div>
    );
}