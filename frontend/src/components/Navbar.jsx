import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            T
          </div>

          <div>

            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Team Task Manager
            </h1>

            <p className="text-sm text-gray-500">
              Manage projects & tasks efficiently
            </p>

          </div>

        </div>

        <div className="flex flex-wrap items-center gap-3">

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-700 px-5 py-2.5 rounded-xl font-medium transition-all duration-300"
          >
            Dashboard
          </button>

          <button
            onClick={() => navigate("/projects")}
            className="bg-violet-100 hover:bg-violet-600 hover:text-white text-violet-700 px-5 py-2.5 rounded-xl font-medium transition-all duration-300"
          >
            Projects
          </button>

          <button
            onClick={() => navigate("/tasks")}
            className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-700 px-5 py-2.5 rounded-xl font-medium transition-all duration-300"
          >
            Tasks
          </button>

          <button
            onClick={() => navigate("/create-project")}
            className="bg-green-100 hover:bg-green-600 hover:text-white text-green-700 px-5 py-2.5 rounded-xl font-medium transition-all duration-300"
          >
            Create Project
          </button>

          <button
            onClick={() => navigate("/create-task")}
            className="bg-yellow-100 hover:bg-yellow-500 hover:text-black text-yellow-700 px-5 py-2.5 rounded-xl font-medium transition-all duration-300"
          >
            Create Task
          </button>

          <button
            onClick={logout}
            className="bg-red-100 hover:bg-red-600 hover:text-white text-red-700 px-5 py-2.5 rounded-xl font-medium transition-all duration-300"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Navbar;