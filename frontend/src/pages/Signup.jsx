import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import API from "../api/axios";

function Signup() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "member",
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

      await API.post(
        "/accounts/register/",
        form
      );

      alert("Account created");

      navigate("/");

    } catch (err) {

      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="grid lg:grid-cols-2 bg-white rounded-4xl overflow-hidden shadow-2xl max-w-6xl w-full">

        <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-violet-600 to-indigo-700 text-white p-14 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            <div className="w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl font-bold mb-8 shadow-lg">
              T
            </div>

            <h1 className="text-5xl font-bold leading-tight">
              Join Team Workspace
            </h1>

            <p className="mt-6 text-lg text-violet-100 leading-relaxed">
              Create your account and start collaborating with your team on projects, tasks and productivity workflows.
            </p>

            <div className="mt-10 space-y-5">

              <div className="bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/10">

                <h3 className="font-bold text-xl">
                  🚀 Project Management
                </h3>

                <p className="text-violet-100 mt-2">
                  Organize and manage team projects efficiently
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/10">

                <h3 className="font-bold text-xl">
                  👥 Team Collaboration
                </h3>

                <p className="text-violet-100 mt-2">
                  Assign tasks and collaborate with team members
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/10">

                <h3 className="font-bold text-xl">
                  📊 Productivity Tracking
                </h3>

                <p className="text-violet-100 mt-2">
                  Monitor progress and task completion easily
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden">

          <div className="absolute top-0 right-0 w-52 h-52 bg-violet-100 rounded-full blur-3xl opacity-40"></div>

          <div className="relative z-10">

            <div className="mb-10">

              <h2 className="text-4xl font-bold text-gray-900">
                Create Account
              </h2>

              <p className="text-gray-500 mt-3 text-lg">
                Signup to access your workspace
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  onChange={handleChange}
                  className="w-full border border-gray-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none px-5 py-4 rounded-2xl transition-all duration-300"
                />

              </div>

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
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

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="Create a strong password"
                  onChange={handleChange}
                  className="w-full border border-gray-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none px-5 py-4 rounded-2xl transition-all duration-300"
                />

              </div>

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Role
                </label>

                <select
                  name="role"
                  onChange={handleChange}
                  className="w-full border border-gray-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none px-5 py-4 rounded-2xl transition-all duration-300 bg-white"
                >

                  <option value="member">
                    Member
                  </option>

                  <option value="admin">
                    Admin
                  </option>

                </select>

              </div>

              <button
                className="w-full bg-linear-to-r from-violet-600 to-indigo-600 hover:scale-[1.01] transition-all duration-300 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-violet-300 mt-4"
              >
                Create Account
              </button>

            </form>

            <p className="mt-8 text-center text-gray-600 text-lg">

              Already have an account?

              <Link
                to="/"
                className="text-violet-600 font-semibold ml-2 hover:text-violet-800 transition"
              >
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;