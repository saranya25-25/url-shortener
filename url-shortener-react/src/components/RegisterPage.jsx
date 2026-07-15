import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import TextField from "./TextField";
import Loader from "./Loader";
import api from "../api/api";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        mode: "onTouched",
    });

    const registerHandler = async (data) => {
        setLoader(true);

        try {
            await api.post("/api/auth/public/register", data);

            toast.success("Registration Successful!");

            reset();

            navigate("/login");
        } catch (error) {
            console.log(error);
            toast.error("Registration Failed!");
        } finally {
            setLoader(false);
        }
    };

    if (loader) {
        return <Loader />;
    }

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4">
            <form
                onSubmit={handleSubmit(registerHandler)}
                className="sm:w-[450px] w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 px-8 py-10"
            >
                {/* Heading */}
                <h1 className="text-center text-3xl font-bold text-slate-800">
                    Create Your Account 🚀
                </h1>

                <p className="text-center text-slate-500 mt-2 mb-6">
                    Join LinkForge and start managing your URLs smarter.
                </p>

                <hr className="mb-6" />

                {/* Form Fields */}
                <div className="flex flex-col gap-4">
                    <TextField
                        label="Username"
                        required
                        id="username"
                        type="text"
                        message="*Username is required"
                        placeholder="Enter your username"
                        register={register}
                        errors={errors}
                    />

                    <TextField
                        label="Email"
                        required
                        id="email"
                        type="email"
                        message="*Email is required"
                        placeholder="Enter your email"
                        register={register}
                        errors={errors}
                    />

                    <TextField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        message="*Password is required"
                        placeholder="Enter your password"
                        register={register}
                        min={6}
                        errors={errors}
                    />
                </div>

                {/* Register Button */}
                <button
                    type="submit"
                    className="w-full mt-6 py-3 rounded-xl bg-custom-gradient text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                    Create Account
                </button>

                {/* Login Link */}
                <p className="text-center text-slate-600 mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-semibold text-btnColor hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;