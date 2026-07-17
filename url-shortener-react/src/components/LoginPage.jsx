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

    const [loader, setLoader] = useState(false);

    const { setToken } = useStoreContext();


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }

    } = useForm({

        defaultValues: {
            username: "",
            password: ""
        },

        mode: "onTouched"

    });



    const loginHandler = async (data) => {

        setLoader(true);

        try {

            const { data: response } = await api.post(
                "/api/auth/public/login",
                data
            );


            setToken(response.token);

            localStorage.setItem(
                "JWT_TOKEN",
                response.token
            );


            toast.success("Login Successful!");

            reset();

            navigate("/dashboard");


        } catch (error) {

            console.log(error);

            toast.error("Invalid username or password");

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

                onSubmit={handleSubmit(loginHandler)}

                className="sm:w-[450px] w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 px-8 py-10"

            >


                <h1 className="text-center text-3xl font-bold text-slate-800">
                    Welcome Back 👋
                </h1>


                <p className="text-center text-slate-500 mt-2 mb-6">
                    Sign in to access your LinkForge dashboard.
                </p>


                <hr className="mb-6" />


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



                {/* Forgot Password */}

                <div className="text-right mt-3">


                    <Link

                        to="/forgot-password"

                        className="text-sm font-semibold text-btnColor hover:underline"

                    >

                        Forgot Password?

                    </Link>


                </div>




                <button

                    type="submit"

                    className="w-full mt-6 py-3 rounded-xl bg-custom-gradient text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300"

                >

                    Login

                </button>




                <p className="text-center text-slate-600 mt-6">

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