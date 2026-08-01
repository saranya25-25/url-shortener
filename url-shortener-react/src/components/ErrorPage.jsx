import React from "react";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ message }) => {
    const navigate = useNavigate();

    return (
        <div className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100 px-6">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-xl rounded-3xl border border-white/40 bg-white/80 p-10 text-center shadow-2xl backdrop-blur-lg"
            >
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, -6, 6, 0],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                    }}
                    className="flex justify-center"
                >
                    <FaExclamationTriangle className="text-7xl text-red-500 drop-shadow-lg" />
                </motion.div>

                <h1 className="mt-6 text-6xl font-extrabold text-slate-800">
                    404
                </h1>

                <h2 className="mt-3 text-2xl font-bold text-slate-700">
                    Page Not Found
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                    {message ||
                        "The page you're looking for doesn't exist or may have been moved. Please return to the homepage and continue exploring LinkForge."}
                </p>

                <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    onClick={() => navigate("/")}
                    className="mt-8 rounded-xl bg-custom-gradient px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                    ← Back to Home
                </motion.button>
            </motion.div>
        </div>
    );
};

export default ErrorPage;