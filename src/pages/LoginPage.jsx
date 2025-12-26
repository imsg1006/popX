import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/* ---------------- Schema ---------------- */
const loginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage = ({ onNavigate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = () => {
    onNavigate("account");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Signin to your PopX account
        </h1>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div className="relative w-full">
            <span className="absolute -top-2.5 left-4 bg-white px-1 text-sm font-medium text-purple-600">
              Email Address
            </span>

            <input
              type="email"
              placeholder="Enter email address"
              {...register("email")}
              className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none
                ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-2 focus:ring-purple-600"
                }`}
            />

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative w-full">
            <span className="absolute -top-2.5 left-4 bg-white px-1 text-sm font-medium text-purple-600">
              Password
            </span>

            <input
              type="password"
              placeholder="Enter password"
              {...register("password")}
              className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none
                ${
                  errors.password
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-2 focus:ring-purple-600"
                }`}
            />

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-3 rounded-lg font-semibold transition
              ${
                isValid
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            Login
          </button>
        </form>

        <button
          onClick={() => onNavigate("landing")}
          className="mt-6 text-purple-600 hover:text-purple-700 font-medium text-sm"
        >
          ← Back to Welcome
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
