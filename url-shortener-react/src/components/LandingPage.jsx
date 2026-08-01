import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";

const LandingPage = () => {
    const navigate = useNavigate();
    const { token } = useStoreContext();

    const manageLinksHandler = () => {
        navigate(token ? "/dashboard" : "/login");
    };

    const createShortLinkHandler = () => {
        if (token) {
            navigate("/dashboard", {
                state: { openPopup: true },
            });
        } else {
            navigate("/register");
        }
    };

    return (
        <div className="min-h-[calc(100vh-64px)] px-4 sm:px-8 lg:px-14">
            <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 pt-14 lg:py-8">
                <div className="flex-1">
                    <motion.h1
                        initial={{ opacity: 0, y: -80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight"
                    >
                        Simplify URL Sharing with
                        <span className="text-btnColor"> LinkForge</span>
                    </motion.h1>

                    <p className="mt-6 text-slate-600 leading-7">
                        LinkForge lets you create short, memorable, and secure URLs within
                        seconds. Organize links, monitor click analytics, and share them
                        effortlessly across websites, social media, emails, and messaging
                        platforms.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={manageLinksHandler}
                            className="bg-custom-gradient text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            Manage Links
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={createShortLinkHandler}
                            className="border-2 border-btnColor text-btnColor px-8 py-3 rounded-lg hover:bg-btnColor hover:text-white transition-all"
                        >
                            Create Short Link
                        </motion.button>
                    </div>
                </div>

                <div className="flex-1 flex justify-center">
                    <motion.img
                        src="/images/img2.png"
                        alt="LinkForge Illustration"
                        loading="lazy"
                        initial={{ opacity: 0, scale: 0.8, y: 40 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: [0, -12, 0],
                            rotate: [-2, 2, -2],
                        }}
                        transition={{
                            opacity: { duration: 0.8 },
                            scale: { duration: 0.8 },
                            y: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                            rotate: {
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                        whileHover={{
                            scale: 1.08,
                            rotate: 5,
                            transition: { duration: 0.3 },
                        }}
                        className="w-[360px] sm:w-[450px] lg:w-[500px] drop-shadow-2xl"
                    />
                </div>
            </section>

            <section className="pt-10 pb-8">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-bold text-center text-slate-800 max-w-3xl mx-auto"
                >
                    Trusted by individuals and teams for fast, secure, and reliable URL
                    management
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
                    <Card
                        title="Simple URL Shortening"
                        desc="Create short, memorable URLs in seconds with an intuitive interface designed for everyone."
                    />

                    <Card
                        title="Powerful Analytics"
                        desc="Track clicks, referral sources, and user engagement with a comprehensive analytics dashboard."
                    />

                    <Card
                        title="Enhanced Security"
                        desc="Protect your links with secure infrastructure and reliable access management."
                    />

                    <Card
                        title="Fast & Reliable"
                        desc="Experience lightning-fast redirects and dependable uptime for a seamless user experience."
                    />
                </div>
            </section>
        </div>
    );
};

export default LandingPage;