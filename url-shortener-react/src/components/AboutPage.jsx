import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaEdit, FaLink, FaShareAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaLink className="text-3xl text-blue-500" />,
    title: "Smart URL Shortening",
    description:
        "Convert long URLs into clean, memorable links within seconds using a fast and intuitive interface.",
  },
  {
    icon: <FaShareAlt className="text-3xl text-green-500" />,
    title: "Detailed Analytics",
    description:
        "Track clicks, visitor locations, referral sources, and engagement with real-time analytics.",
  },
  {
    icon: <FaEdit className="text-3xl text-purple-500" />,
    title: "Secure Link Management",
    description:
        "Manage and protect your links with modern security practices and reliable infrastructure.",
  },
  {
    icon: <FaChartLine className="text-3xl text-red-500" />,
    title: "Fast & Reliable",
    description:
        "Experience lightning-fast redirects and high availability for a seamless sharing experience.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const AboutPage = () => {
  return (
      <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-slate-50 via-white to-blue-50 px-5 py-14 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
          >
            <h1 className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl">
              About LinkForge
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-8 text-slate-600">
              LinkForge is a modern URL shortening platform built to simplify link
              sharing while providing powerful analytics, secure management, and
              lightning-fast redirects. Whether you're an individual creator,
              business, or marketing team, LinkForge helps you organize and track
              every link effortlessly.
            </p>
          </motion.div>

          <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mt-14 grid gap-8 md:grid-cols-2"
          >
            {features.map((feature) => (
                <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 220 }}
                    className="group rounded-3xl border border-white/30 bg-white/80 p-7 shadow-lg backdrop-blur-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-50">
                    {feature.icon}
                  </div>

                  <h2 className="mb-3 text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h2>

                  <p className="leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
  );
};

export default AboutPage;