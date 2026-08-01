import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";
import { RotatingLines } from "react-loader-spinner";

const ShortenUrlPage = () => {
    const { url } = useParams();

    useEffect(() => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;

        if (!url || !backendUrl) {
            return;
        }

        const timer = setTimeout(() => {
            window.location.replace(`${backendUrl}/${url}`);
        }, 1200);

        return () => clearTimeout(timer);
    }, [url]);

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100">
            <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-300/30 blur-3xl"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 flex flex-col items-center rounded-3xl border border-white bg-white/80 px-10 py-10 shadow-2xl backdrop-blur-md"
            >
                <motion.div
                    animate={{ rotate: [0, 360] }}
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
                    visible
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

                <p className="mt-3 max-w-sm text-center leading-7 text-slate-600">
                    Please wait while we securely redirect you to your destination.
                </p>

                <div className="mt-6 flex gap-2">
                    {[0, 1, 2].map((dot) => (
                        <motion.div
                            key={dot}
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 0.6,
                                delay: dot * 0.2,
                            }}
                            className="h-3 w-3 rounded-full bg-blue-600"
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ShortenUrlPage;