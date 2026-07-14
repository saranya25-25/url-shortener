import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, desc }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            whileHover={{
                y: -10,
                scale: 1.03,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 120,
            }}
            className="
        relative
        overflow-hidden
        rounded-2xl
        border border-slate-200
        bg-white/90
        backdrop-blur-md
        p-6
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
        cursor-pointer
        group
      "
        >
            {/* Decorative Gradient Circle */}
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-all duration-500"></div>

            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500"></div>

            {/* Title */}
            <motion.h2
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="relative text-2xl font-bold text-slate-800 mb-4"
            >
                {title}
            </motion.h2>

            {/* Description */}
            <p className="relative text-slate-600 leading-7 text-[15px]">
                {desc}
            </p>

            {/* Bottom Hover Line */}
            <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
            />
        </motion.div>
    );
};

export default Card;