import React from "react";
import { motion } from "framer-motion";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-100">
            <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-violet-300/30 blur-3xl"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 flex flex-col items-center rounded-3xl border border-white/40 bg-white/80 px-10 py-10 shadow-2xl backdrop-blur-lg"
            >
                <RotatingLines
                    visible
                    height="72"
                    width="72"
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

                <p className="mt-2 max-w-xs text-center text-slate-600">
                    Preparing your experience. This will only take a moment.
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

export default Loader;