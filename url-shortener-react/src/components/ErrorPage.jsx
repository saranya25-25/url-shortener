import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ message }) => {
    const navigate = useNavigate();

    return (
        <div className="relative flex items-center justify-center min-h-[calc(100vh-64px)] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100 px-6">

            {/* Background Decorations */}
            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-200 opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-purple-300 opacity-30 blur-3xl"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 max-w-lg w-full rounded-3xl bg-white/80 backdrop-blur-md shadow-2xl border border-white p-10 text-center"
            >
                {/* Animated Icon */}
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, -5, 5, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                    }}
                    className="flex justify-center"
                >
                    <FaExclamationTriangle className="text-7xl text-red-500 drop-shadow-lg" />
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-4xl font-extrabold text-slate-800"
                >
                    Oops!
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                    className="mt-2 text-xl font-semibold text-slate-700"
                >
                    Something went wrong
                </motion.h2>

                {/* Message */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-5 text-gray-600 leading-7"
                >
                    {message
                        ? message
                        : "An unexpected error occurred. Please try again later or return to the homepage."}
                </motion.p>

                {/* Button */}
                <motion.button
                    whileHover={{
                        scale: 1.05,
                        y: -3,
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                    transition={{ type: "spring", stiffness: 250 }}
                    onClick={() => navigate("/")}
                    className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
                >
                    ← Back to Home
                </motion.button>
            </motion.div>
        </div>
    );
};

export default ErrorPage;