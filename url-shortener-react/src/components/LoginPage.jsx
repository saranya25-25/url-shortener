import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import TextField from "./TextField";
import Loader from "./Loader";
import api from "../api/api";
import { useStoreContext } from "../contextApi/ContextApi";

const LoginPage = () => {
    const navigate = useNavigate();
    const { setToken } = useStoreContext();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
        mode: "onTouched",
    });

    const loginHandler = async (data) => {
        setLoading(true);

        try {
            const { data: response } = await api.post(
                "/api/auth/public/login",
                data
            );

            setToken(response.token);
            localStorage.setItem("JWT_TOKEN", response.token);

            toast.success("Login Successful!");
            reset();
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
            toast.error("Invalid username or password");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <Loader />;

    return (
        <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4">
            <form
                onSubmit={handleSubmit(loginHandler)}
                className="w-full max-w-md rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-lg"
            >
                <h1 className="text-center text-3xl font-bold text-slate-800">
                    Welcome Back 👋
                </h1>

                <p className="mt-2 text-center text-slate-500">
                    Sign in to continue to your LinkForge dashboard.
                </p>

                <div className="my-8 space-y-5">
                    <TextField
                        label="Username"
                        id="username"
                        type="text"
                        required
                        message="Username is required"
                        placeholder="Enter your username"
                        register={register}
                        errors={errors}
                    />

                    <TextField
                        label="Password"
                        id="password"
                        type="password"
                        required
                        message="Password is required"
                        placeholder="Enter your password"
                        register={register}
                        errors={errors}
                        min={6}
                    />
                </div>

                <div className="flex justify-end">
                    <Link
                        to="/forgot-password"
                        className="text-sm font-medium text-btnColor transition hover:underline"
                    >
                        Forgot Password?
                    </Link>
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full rounded-xl bg-custom-gradient py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
                >
                    Login
                </button>

                <p className="mt-6 text-center text-slate-600">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="font-semibold text-btnColor hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;