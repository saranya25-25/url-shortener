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
            console.error(error);

            toast.error(
                error?.response?.data || "Registration Failed! Please try again."
            );
        } finally {
            setLoader(false);
        }
    };

    if (loader) {
        return <Loader />;
    }

    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4">
            <form
                onSubmit={handleSubmit(registerHandler)}
                className="w-full max-w-md rounded-2xl border border-slate-200 bg-white px-8 py-10 shadow-2xl sm:w-[450px]"
            >
                <h1 className="text-center text-3xl font-bold text-slate-800">
                    Create Your Account 🚀
                </h1>

                <p className="mt-2 mb-6 text-center text-slate-500">
                    Join LinkForge and start managing your URLs smarter.
                </p>

                <hr className="mb-6" />

                <div className="flex flex-col gap-4">
                    <TextField
                        label="Username"
                        required
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        message="*Username is required"
                        register={register}
                        errors={errors}
                    />

                    <TextField
                        label="Email"
                        required
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        message="*Email is required"
                        register={register}
                        errors={errors}
                    />

                    <TextField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        message="*Password is required"
                        register={register}
                        min={6}
                        errors={errors}
                    />
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full rounded-xl bg-custom-gradient py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-95"
                >
                    Create Account
                </button>

                <p className="mt-6 text-center text-slate-600">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-semibold text-btnColor transition hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;