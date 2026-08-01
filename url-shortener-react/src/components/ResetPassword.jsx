// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import api from "../api/api";
// const ResetPassword = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const email = location.state?.email;
//     const [newPassword, setNewPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [showNewPassword, setShowNewPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const [loading, setLoading] = useState(false);
//     useEffect(() => {
//         if (!email) {
//             toast.error("Please verify your OTP first.");
//             navigate("/forgot-password");
//         }
//     }, [email, navigate]);
//     const resetPasswordHandler = async (e) => {
//         e.preventDefault();
//         if (!newPassword || !confirmPassword) {
//             toast.error("Please fill all fields");
//             return;
//         }
//         if (newPassword !== confirmPassword) {
//             toast.error("Passwords do not match");
//             return;
//         }
//         if (newPassword.length < 8) {
//             toast.error("Password must contain at least 8 characters");
//             return;
//         }
//         setLoading(true);
//         try {
//             const response = await api.post(
//                 "/api/auth/public/reset-password",
//                 {
//                     email,
//                     newPassword,
//                     confirmPassword,
//                 }
//             );
//             toast.success(response.data);
//             setNewPassword("");
//             setConfirmPassword("");
//             setTimeout(() => {
//                 navigate("/login");
//             }, 1500);
//         } catch (error) {
//             console.log(error);
//             toast.error(
//                 error?.response?.data?.message ||
//                 error?.response?.data ||
//                 "Failed to reset password"
//             );
//         } finally {
//             setLoading(false);
//         }
//     };
//     return (
//         <div className="min-h-screen flex justify-center items-center bg-slate-100">
//             <form
//                 onSubmit={resetPasswordHandler}
//                 className="bg-white p-8 rounded-2xl shadow-2xl w-[420px]"
//             >
//                 <h1 className="text-3xl font-bold text-center">
//                     Reset Password 🔐
//                 </h1>
//                 <p className="text-center text-gray-500 mt-2">
//                     Create your new password
//                 </p>
//                 {/* New Password */}
//                 <div className="relative mt-6">
//                     <input
//                         type={showNewPassword ? "text" : "password"}
//                         placeholder="Enter new password"
//                         value={newPassword}
//                         onChange={(e) => setNewPassword(e.target.value)}
//                         className="border p-3 pr-12 w-full rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <button
//                         type="button"
//                         onClick={() => setShowNewPassword(!showNewPassword)}
//                         className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-colors"
//                     >
//                         {showNewPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
//                     </button>
//                 </div>
//                 {/* Confirm Password */}
//                 <div className="relative mt-4">
//                     <input
//                         type={showConfirmPassword ? "text" : "password"}
//                         placeholder="Confirm new password"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         className="border p-3 pr-12 w-full rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <button
//                         type="button"
//                         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                         className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-colors"
//                     >
//                         {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
//                     </button>
//                 </div>
//                 <button
//                     type="submit"
//                     disabled={loading}
//                     className={`w-full py-3 mt-6 rounded-lg font-semibold text-white ${
//                         loading
//                             ? "bg-blue-300 cursor-not-allowed"
//                             : "bg-blue-600 hover:bg-blue-700"
//                     }`}
//                 >
//                     {loading ? "Updating Password..." : "Reset Password"}
//                 </button>
//             </form>
//         </div>
//     );
// };
// export default ResetPassword;