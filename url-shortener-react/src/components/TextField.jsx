import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const TextField = ({
                       label,
                       id,
                       type = "text",
                       errors,
                       register,
                       required,
                       message,
                       className = "",
                       min,
                       placeholder,
                   }) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType =
        type === "password" ? (showPassword ? "text" : "password") : type;

    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={id}
                className={`text-sm font-semibold text-slate-700 ${className}`}
            >
                {label}
            </label>

            <div className="relative">
                <input
                    id={id}
                    type={inputType}
                    placeholder={placeholder}
                    autoComplete={type === "password" ? "current-password" : "off"}
                    className={`w-full rounded-xl border bg-slate-50 px-4 py-3 pr-12 text-slate-700 placeholder:text-slate-400 outline-none transition-all duration-300 focus:bg-white focus:ring-4 ${
                        errors[id]
                            ? "border-red-500 focus:ring-red-100"
                            : "border-slate-300 focus:border-blue-500 focus:ring-blue-100"
                    } ${className}`}
                    {...register(id, {
                        required: required
                            ? {
                                value: true,
                                message,
                            }
                            : false,
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
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors hover:text-blue-600"
                    >
                        {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                    </button>
                )}
            </div>

            {errors[id] && (
                <p className="flex items-center gap-1 text-sm font-medium text-red-600">
                    ⚠ {errors[id].message}
                </p>
            )}
        </div>
    );
};

export default TextField;