import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const TextField = ({
                       label,
                       id,
                       type,
                       errors,
                       register,
                       required,
                       message,
                       className,
                       min,
                       placeholder,
                   }) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col gap-2">

            {/* Label */}
            <label
                htmlFor={id}
                className={`${className ? className : ""} text-sm font-semibold text-slate-700`}
            >
                {label}
            </label>

            {/* Input + Eye Icon */}
            <div className="relative">

                <input
                    id={id}
                    type={
                        type === "password"
                            ? (showPassword ? "text" : "password")
                            : type
                    }
                    placeholder={placeholder}
                    className={`
                        ${className ? className : ""}
                        w-full
                        px-4
                        pr-12
                        py-3
                        rounded-xl
                        border
                        bg-slate-50
                        text-slate-700
                        placeholder:text-slate-400
                        outline-none
                        transition-all
                        duration-300
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-100
                        ${
                        errors[id]
                            ? "border-red-500 focus:ring-red-100"
                            : "border-slate-300 focus:border-blue-500"
                    }
                    `}
                    {...register(id, {
                        required: {
                            value: required,
                            message,
                        },

                        minLength: min
                            ? {
                                value: min,
                                message: `Minimum ${min} characters are required`,
                            }
                            : undefined,

                        pattern:
                            type === "email"
                                ? {
                                    value:
                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
                                    message: "Please enter a valid email address",
                                }
                                : type === "url"
                                    ? {
                                        value:
                                            /^(https?:\/\/)?(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(:\d{2,5})?(\/[^\s]*)?$/,
                                        message: "Please enter a valid URL",
                                    }
                                    : undefined,
                    })}
                />

                {type === "password" && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600 transition-colors"
                    >
                        {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                    </button>
                )}

            </div>

            {/* Error Message */}
            {errors[id] && (
                <p className="text-sm text-red-600 font-medium flex items-center gap-1">
                    ⚠ {errors[id].message}
                </p>
            )}

        </div>
    );
};

export default TextField;