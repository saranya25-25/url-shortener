import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";
import { RotatingLines } from "react-loader-spinner";

const ShortenUrlPage = () => {
    const { url } = useParams();

    useEffect(() => {
        if (url) {
            const timer = setTimeout(() => {
                window.location.href =
                    import.meta.env.VITE_BACKEND_URL + `/${url}`;
            }, 1200);

            return () => clearTimeout(timer);
        }
    }, [url]);

    return (
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100">
            {/* Background Blur Effects */}
            <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-300/30 blur-3xl"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white px-10 py-10 flex flex-col items-center"
            >
                <motion.div
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "linear",
                    }}
                    className="mb-6"
                >
                    <FaLink className="text-6xl text-blue-600" />
                </motion.div>

                <RotatingLines
                    visible={true}
                    height="60"
                    width="60"
                    color="#2563EB"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="redirect-loader"
                />

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-3xl font-bold text-slate-800"
                >
                    Redirecting...
                </motion.h1>

                <p className="mt-3 text-slate-600 text-center max-w-sm leading-7">
                    Please wait while we take you to your destination.
                    Your shortened link is being securely processed.
                </p>

                {/* Animated Dots */}
                <div className="flex gap-2 mt-6">
                    {[0, 1, 2].map((dot) => (
                        <motion.div
                            key={dot}
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 0.6,
                                delay: dot * 0.2,
                            }}
                            className="w-3 h-3 rounded-full bg-blue-600"
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ShortenUrlPage;