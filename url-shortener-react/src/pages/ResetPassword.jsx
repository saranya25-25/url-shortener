import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
export default function ResetPassword(){
    const navigate=useNavigate();
    const [password,setPassword]=useState("");
    const [confirm,setConfirm]=useState("");
    const handleReset=(e)=>{
        e.preventDefault();
        if(password!==confirm){
            alert("Passwords do not match");
            return;
        }
// Later backend API
        navigate("/login");
    };
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-950">
            <div className="bg-gray-900 p-8 rounded-xl w-96">
                <h1 className="text-white text-2xl font-bold mb-5 text-center">
                    Reset Password
                </h1>
                <form onSubmit={handleReset}>
                    <input
                        type="password"
                        placeholder="New password"
                        onChange={(e)=>setPassword(e.target.value)}
                        className="w-full p-3 bg-gray-800 text-white rounded-lg mb-3"
                    />
                    <input
                        type="password"
                        placeholder="Confirm password"
                        onChange={(e)=>setConfirm(e.target.value)}
                        className="w-full p-3 bg-gray-800 text-white rounded-lg mb-4"
                    />
                    <button
                        className="w-full bg-blue-600 text-white p-3 rounded-lg"
                    >
                        Change Password
                    </button>
                </form>
            </div>
        </div>
    )
}