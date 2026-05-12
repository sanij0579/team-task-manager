import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import API from "../api/axios";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post(
        "/accounts/login/",
        form
      );

      localStorage.setItem(
        "token",
        res.data.access
      );

      navigate("/dashboard");

    } catch (err) {

      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl max-w-5xl w-full">

        <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-violet-600 to-indigo-700 text-white p-14">

          <div>

            <div className="w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl font-bold mb-8 shadow-lg">
              T
            </div>

            <h1 className="text-5xl font-bold leading-tight">
              Welcome Back
            </h1>

            <p className="mt-6 text-lg text-violet-100 leading-relaxed">
              Manage your team projects, tasks, deadlines and collaboration in one modern workspace.
            </p>

            <div className="mt-10 space-y-4">

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
                ✔ Track project progress easily
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
                ✔ Assign & manage tasks efficiently
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
                ✔ Real-time workflow management
              </div>

            </div>

          </div>

        </div>

        <div className="p-8 sm:p-12 flex flex-col justify-center">

          <div className="mb-10">

            <h2 className="text-4xl font-bold text-gray-900">
              Login
            </h2>

            <p className="text-gray-500 mt-3">
              Enter your credentials to continue
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className="w-full border border-gray-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none px-5 py-4 rounded-2xl transition-all duration-300"
              />

            </div>

            <div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                className="w-full border border-gray-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none px-5 py-4 rounded-2xl transition-all duration-300"
              />

            </div>

            <button
              className="w-full bg-gray-900 hover:bg-violet-600 text-white py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-violet-200"
            >
              Login
            </button>

          </form>

          <p className="mt-8 text-center text-gray-600">

            Don&apos;t have an account?

            <Link
              to="/signup"
              className="text-violet-600 font-semibold ml-2 hover:text-violet-800 transition"
            >
              Signup
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;