import React, {useState} from "react";
import {Link} from "react-router-dom";
export default function VerifyOtp(){
    const [otp,setOtp]=useState("");
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-950">
            <div className="bg-gray-900 p-8 rounded-xl w-96">
                <h1 className="text-white text-2xl font-bold text-center mb-5">
                    Verify OTP
                </h1>
                <input
                    value={otp}
                    onChange={(e)=>setOtp(e.target.value)}
                    placeholder="Enter 8 digit OTP"
                    className="w-full p-3 bg-gray-800 text-white rounded-lg mb-4"
                />
                <button className="w-full bg-green-600 text-white p-3 rounded-lg">
                    Verify Code
                </button>
                <button className="w-full mt-3 text-blue-400">
                    Resend Code
                </button>
                <Link
                    to="/login"
                    className="block text-center mt-5 text-gray-400">Back
                </Link>
            </div>
        </div>
    )
}