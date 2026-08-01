import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, desc }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -12, scale: 1.03 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 120,
            }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-md p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer group"
        >
            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-blue-100 transition-all duration-500 group-hover:scale-125 group-hover:bg-violet-200"></div>

            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500"></div>

            <motion.h2
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="relative mb-4 text-2xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-blue-600"
            >
                {title}
            </motion.h2>

            <p className="relative text-[15px] leading-7 text-slate-600">
                {desc}
            </p>

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