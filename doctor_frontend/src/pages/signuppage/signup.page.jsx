import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  mobNumber: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Invalid mobile number"),
  exp: yup
    .number()
    .required("Experience is required")
    .positive("Experience must be a positive number"),
  specialization: yup.string().required("Specialization is required"),
  workingHrs: yup
    .number()
    .required("Working hours is required")
    .positive("Working hours must be a positive number"),
});

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    await axios
      .post("http://localhost:5000/api/v1/doctor/signup", data)
      .then(function (response) {
        console.log(response.status);
        if (response.status === 201) navigate("/");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up for an account{" "}
          </h2>{" "}
        </div>{" "}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="fullName" className="sr-only">
                Full Name{" "}
              </label>{" "}
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                placeholder="Full Name"
                {...register("fullName")}
              />{" "}
              {errors.fullName && (
                <p className="mt-2 text-sm text-red-600">
                  {" "}
                  {errors.fullName.message}{" "}
                </p>
              )}{" "}
            </div>{" "}
            <div>
              <label htmlFor="email" className="sr-only">
                Email{" "}
              </label>{" "}
              <input
                id="email"
                name="email"
                type="email"
                required
                className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                placeholder="Your Email"
                {...register("email")}
              />{" "}
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {" "}
                  {errors.email.message}{" "}
                </p>
              )}{" "}
            </div>{" "}
            <div>
              <label htmlFor="mobNumber" className="sr-only">
                Mobile Number{" "}
              </label>{" "}
              <input
                id="mobNumber"
                name="mobNumber"
                type="text"
                required
                className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
                  errors.mobNumber ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                placeholder="Mobile Number"
                {...register("mobNumber")}
              />{" "}
              {errors.mobNumber && (
                <p className="mt-2 text-sm text-red-600">
                  {" "}
                  {errors.mobNumber.message}{" "}
                </p>
              )}{" "}
            </div>{" "}
            <div>
              <label htmlFor="specialization" className="sr-only">
                Specialization{" "}
              </label>{" "}
              <input
                id="specialization"
                name="specialization"
                type="text"
                required
                className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
                  errors.specialization ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                placeholder="Specialization"
                {...register("specialization")}
              />{" "}
              {errors.specialization && (
                <p className="mt-2 text-sm text-red-600">
                  {" "}
                  {errors.specialization.message}{" "}
                </p>
              )}{" "}
            </div>{" "}
            <div className="flex justify-between space-x-4">
              <div className="w-1/2">
                <label htmlFor="workingHrs" className="sr-only">
                  Working hours{" "}
                </label>{" "}
                <input
                  id="workingHrs"
                  name="workingHrs"
                  type="text"
                  required
                  className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
                    errors.workingHrs ? "border-red-500" : "border-gray-300"
                  } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  placeholder="Working hours"
                  {...register("workingHrs")}
                />{" "}
                {errors.workingHrs && (
                  <p className="mt-2 text-sm text-red-600">
                    {" "}
                    {errors.workingHrs.message}{" "}
                  </p>
                )}{" "}
              </div>{" "}
              <div className="w-1/2">
                <label htmlFor="experience" className="sr-only">
                  Experience{" "}
                </label>{" "}
                <input
                  id="experience"
                  name="experience"
                  type="text"
                  required
                  className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
                    errors.exp ? "border-red-500" : "border-gray-300"
                  } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  placeholder="Experience"
                  {...register("exp")}
                />{" "}
                {errors.exp && (
                  <p className="mt-2 text-sm text-red-600">
                    {" "}
                    {errors.exp.message}{" "}
                  </p>
                )}{" "}
              </div>{" "}
            </div>{" "}
            <div>
              <label htmlFor="password" className="sr-only">
                Password{" "}
              </label>{" "}
              <input
                id="password"
                name="password"
                type="password"
                required
                className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                placeholder="Password"
                {...register("password")}
              />{" "}
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">
                  {" "}
                  {errors.password.message}{" "}
                </p>
              )}{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex justify-end">
            <a
              href="/"
              className="font-medium text-indigo-600 hover:text-indigo-500 "
            >
              Have an account ?
            </a>{" "}
          </div>{" "}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up{" "}
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default SignupPage;
