import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    await axios
      .post("http://localhost:5000/api/v1/doctor/signin", data)
      .then(function (response) {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.id);
        navigate("/dashboard");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome doctor login first to start your day!
          </h2>{" "}
        </div>{" "}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address{" "}
              </label>{" "}
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Email address"
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
              <label htmlFor="password" className="sr-only">
                Password{" "}
              </label>{" "}
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
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
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password ?
              </a>{" "}
            </div>{" "}
            <div className="text-sm">
              <a
                href="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                New Doctor ?
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {" "}
                {/* <!-- Heroicon name: solid/lock-closed --> */}{" "}
              </span>
              Log in
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default LoginPage;
