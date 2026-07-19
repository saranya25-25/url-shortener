
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const ForgotPassword = () => {
    const navigate = useNavigate();

    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [verifyLoading, setVerifyLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const getErrorMessage = (error) => {
        return (
            error?.response?.data?.message ||
            error?.response?.data?.error ||
            "Failed to send OTP"
        );
    };

    const sendOtpHandler = async (data) => {
        setLoading(true);

        try {
            const response = await api.post(
                "/api/auth/public/forgot-password",
                {
                    email: data.email
                }
            );

            setEmail(data.email);
            setOtpSent(true);

            toast.success(response.data);

        } catch (error) {
            console.log(error);
            toast.error(getErrorMessage(error));

        } finally {
            setLoading(false);
        }
    };

    const resendOtpHandler = async () => {
        setResendLoading(true);

        try {
            await api.post(
                "/api/auth/public/forgot-password",
                {
                    email
                }
            );

            toast.success("OTP resent successfully");

        } catch (error) {
            console.log(error);
            toast.error(getErrorMessage(error));

        } finally {
            setResendLoading(false);
        }
    };

    const verifyOtpHandler = async () => {

        if (otp.length !== 6) {
            toast.error("Enter a valid 6-digit OTP");
            return;
        }

        setVerifyLoading(true);

        try {

            toast.success("OTP Verified Successfully 🎉");

            navigate("/reset-password", {
                state: {
                    email
                }
            });

        } catch (error) {

            toast.error(getErrorMessage(error));

        } finally {

            setVerifyLoading(false);

        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-slate-100">

            <form
                onSubmit={handleSubmit(sendOtpHandler)}
                className="bg-white p-8 rounded-2xl shadow-2xl w-[420px]"
            >

                <h1 className="text-3xl font-bold text-center">
                    Forgot Password 🔐
                </h1>

                <p className="text-center text-gray-500 mt-2">
                    Enter your registered email
                </p>

                <input
                    type="email"
                    placeholder="Enter Email"
                    className="border p-3 w-full mt-6 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("email", {
                        required: "Email is required"
                    })}
                />

                {errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                        {errors.email.message}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 mt-5 rounded-lg font-semibold ${
    loading
        ? "bg-blue-300 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700 text-white"
}`}
                >
                    {loading ? "Sending OTP..." : "Send OTP"}
                </button>

                {otpSent && (
                    <div className="mt-6">

                        <p className="text-green-600 text-center font-semibold">
                            ✅ OTP Sent Successfully
                        </p>

                        <p className="text-center text-gray-500 mt-2">
                            OTP sent to
                            <br />
                            <b>{email}</b>
                        </p>

                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            maxLength={6}
                            onChange={(e) =>
                                setOtp(
                                    e.target.value
                                        .toUpperCase()
                                        .replace(/[^A-Z0-9]/g, "")
                                )
                            }
                            className="border p-3 w-full mt-5 rounded-lg text-center text-xl tracking-[8px]"
                        />

                        <button
                            type="button"
                            onClick={verifyOtpHandler}
                            disabled={verifyLoading}
                            className="w-full py-3 mt-5 rounded-lg font-semibold bg-green-600 hover:bg-green-700 text-white"
                        >
                            {verifyLoading ? "Verifying..." : "Verify Code"}
                        </button>

                        <button
                            type="button"
                            onClick={resendOtpHandler}
                            disabled={resendLoading}
                            className="w-full py-3 mt-3 rounded-lg font-semibold bg-gray-700 hover:bg-gray-800 text-white"
                        >
                            {resendLoading ? "Resending..." : "Resend Code"}
                        </button>

                        <p className="text-center text-gray-500 text-sm mt-5">
                            📩 Check Inbox, Spam & Promotions folder
                        </p>

                    </div>
                )}

            </form>

        </div>
    );
};

export default ForgotPassword;

