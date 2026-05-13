import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
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
      const res = await API.post("/accounts/login/", {
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", res.data.access);

      navigate("/dashboard");

    } catch (err) {
      alert("Invalid credentials");
      console.log(err.response?.data);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl max-w-5xl w-full">

        <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-violet-600 to-indigo-700 text-white p-14">
          <h1 className="text-5xl font-bold">Welcome Back</h1>
          <p className="mt-6 text-lg text-violet-100">
            Login to manage your tasks and projects
          </p>
        </div>

        <div className="p-8 sm:p-12 flex flex-col justify-center">

          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block mb-2 text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
                className="w-full border px-5 py-4 rounded-2xl"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                className="w-full border px-5 py-4 rounded-2xl"
                required
              />
            </div>

            <button className="w-full bg-black text-white py-4 rounded-2xl hover:bg-violet-600 transition">
              Login
            </button>

          </form>

          <p className="mt-6 text-center text-gray-600">
            Don&apos;t have an account?
            <Link to="/signup" className="text-violet-600 ml-2">
              Signup
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Login;