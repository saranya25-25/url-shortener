import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";

function Loader() {
    return (
        <div className="relative flex items-center justify-center min-h-[calc(100vh-64px)] overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-100">

            {/* Background Blur Effects */}
            <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-300/30 blur-3xl"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="z-10 flex flex-col items-center rounded-3xl bg-white/80 backdrop-blur-md shadow-2xl border border-white px-10 py-10"
            >
                <RotatingLines
                    visible={true}
                    height="70"
                    width="70"
                    color="#2563EB"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="loading"
                />

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-2xl font-bold text-slate-800"
                >
                    Loading...
                </motion.h2>

                <p className="mt-2 text-slate-600 text-center max-w-xs">
                    Please wait while we prepare your data.
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
                            className="h-3 w-3 rounded-full bg-blue-600"
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Loader;