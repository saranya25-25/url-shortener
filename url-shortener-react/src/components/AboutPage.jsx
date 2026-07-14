import React from "react";
import {
  FaLink,
  FaShareAlt,
  FaEdit,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaLink className="text-blue-500 text-3xl" />,
    title: "Smart URL Shortening",
    description:
        "Convert long and complex links into clean, easy-to-share URLs within seconds. Our streamlined interface helps you create short links quickly while keeping them organized.",
  },
  {
    icon: <FaShareAlt className="text-green-500 text-3xl" />,
    title: "Detailed Link Analytics",
    description:
        "Monitor your shortened links with real-time analytics. View click statistics, visitor locations, traffic sources, and engagement trends to better understand your audience.",
  },
  {
    icon: <FaEdit className="text-purple-500 text-3xl" />,
    title: "Reliable Security",
    description:
        "Your links are safeguarded with modern security practices that help protect your data and provide a safe browsing experience for everyone who uses your shortened URLs.",
  },
  {
    icon: <FaChartLine className="text-red-500 text-3xl" />,
    title: "Fast & Dependable",
    description:
        "Built for speed and reliability, Linklytics ensures every redirect happens instantly. Enjoy consistent performance and high availability whenever your links are accessed.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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
      <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50">

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
        >

          {/* Heading */}
          <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="sm:text-5xl text-4xl font-extrabold text-slate-800 italic mb-5"
          >
            About Linklytics
          </motion.h1>

          {/* Description */}
          <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-gray-600 leading-8 xl:w-[65%] lg:w-[75%] sm:w-[90%] w-full mb-12 text-[15px]"
          >
            Linklytics is a modern URL shortening platform designed to make link
            sharing faster, smarter, and more efficient. Whether you're sharing
            content with friends, promoting your business, or tracking marketing
            campaigns, Linklytics provides an intuitive solution with reliable
            performance, insightful analytics, and secure link management—all in
            one place.
          </motion.p>

          {/* Feature Cards */}
          <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                    }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-2xl cursor-pointer"
                >
                  <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.2,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-5"
                  >
                    {feature.icon}
                  </motion.div>

                  <h2 className="text-2xl font-bold text-slate-800 mb-3">
                    {feature.title}
                  </h2>

                  <p className="text-gray-600 leading-7">
                    {feature.description}
                  </p>
                </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
  );
};

export default AboutPage;