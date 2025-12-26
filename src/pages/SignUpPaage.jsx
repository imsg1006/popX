import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/* ---------------- Schema ---------------- */
const signupSchema = yup.object({
  fullName: yup.string().required("Full name is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number")
    .required("Phone number is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  companyName: yup.string(),
  isAgency: yup.string().required(),
});

const SignupPage = ({ onNavigate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      isAgency: "yes",
    },
  });

  const onSubmit = () => {
    onNavigate("account");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Create your PopX account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {[
            ["Full Name", "fullName", "text"],
            ["Phone Number", "phoneNumber", "tel"],
            ["Email Address", "email", "email"],
            ["Password", "password", "password"],
            ["Company Name", "companyName", "text"],
          ].map(([label, name, type]) => (
            <div key={name} className="relative w-full">
              <span className="absolute -top-2.5 left-4 bg-white px-1 text-sm font-medium text-purple-600">
                {label}
              </span>

              <input
                type={type}
                placeholder={`Enter ${label.toLowerCase()}`}
                {...register(name)}
                className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none
                  ${
                    errors[name]
                      ? "border-red-500"
                      : "border-gray-300 focus:ring-2 focus:ring-purple-600"
                  }`}
              />

              {errors[name] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[name].message}
                </p>
              )}
            </div>
          ))}

          {/* Agency */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Are you an Agency?*
            </label>

            <div className="flex gap-4">
              {["yes", "no"].map((val) => (
                <label key={val} className="flex items-center gap-2">
                  <input
                    type="radio"
                    value={val}
                    {...register("isAgency")}
                    className="w-4 h-4 text-purple-600"
                  />
                  <span className="text-gray-700 capitalize">{val}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-3 rounded-lg font-semibold transition mt-6
              ${
                isValid
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            Create Account
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

export default SignupPage;
