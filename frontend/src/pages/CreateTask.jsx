import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../api/axios";
import Navbar from "../components/Navbar";

function CreateTask() {

  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    due_date: "",
    priority: "medium",
    project: "",
    assigned_to: "",
  });

  useEffect(() => {

    fetchProjects();

  }, []);

  const fetchProjects = async () => {

    try {

      const res = await API.get(
        "/projects/"
      );

      setProjects(res.data);

    } catch (err) {

      console.log(err);
    }
  };

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.name === "project" ||
        e.target.name === "assigned_to"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/tasks/create/",
        form
      );

      alert("Task created");

      navigate("/tasks");

    } catch (err) {

      alert("Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>

            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full font-semibold text-sm mb-6">
              🚀 Task Workspace
            </div>

            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Create & Assign Tasks Easily
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              Organize your workflow, assign responsibilities and manage project progress with a clean task management experience.
            </p>

            <div className="mt-10 space-y-5">

              <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">
                  ✅
                </div>

                <div>

                  <h3 className="font-bold text-gray-900 text-lg">
                    Smart Task Tracking
                  </h3>

                  <p className="text-gray-500">
                    Monitor project progress efficiently
                  </p>

                </div>

              </div>

              <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
                  👥
                </div>

                <div>

                  <h3 className="font-bold text-gray-900 text-lg">
                    Team Collaboration
                  </h3>

                  <p className="text-gray-500">
                    Assign tasks to team members easily
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-4xl shadow-xl border border-gray-100 p-8 lg:p-10 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-100 rounded-full blur-3xl opacity-40"></div>

            <div className="relative z-10">

              <div className="mb-8">

                <h2 className="text-4xl font-bold text-gray-900">
                  Create Task
                </h2>

                <p className="text-gray-500 mt-3">
                  Fill in the details below to create a new task
                </p>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Task Title
                  </label>

                  <input
                    type="text"
                    name="title"
                    placeholder="Enter task title"
                    onChange={handleChange}
                    className="w-full border border-gray-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none px-5 py-4 rounded-2xl transition-all duration-300"
                  />

                </div>

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description
                  </label>

                  <textarea
                    name="description"
                    placeholder="Enter task description"
                    onChange={handleChange}
                    rows="4"
                    className="w-full border border-gray-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none px-5 py-4 rounded-2xl transition-all duration-300 resize-none"
                  />

                </div>

                <div className="grid md:grid-cols-2 gap-5">

                  <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Due Date
                    </label>

                    <input
                      type="date"
                      name="due_date"
                      onChange={handleChange}
                      className="w-full border border-gray-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none px-5 py-4 rounded-2xl transition-all duration-300"
                    />

                  </div>

                  <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Priority
                    </label>

                    <select
                      name="priority"
                      onChange={handleChange}
                      className="w-full border border-gray-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none px-5 py-4 rounded-2xl transition-all duration-300 bg-white"
                    >

                      <option value="low">
                        Low
                      </option>

                      <option value="medium">
                        Medium
                      </option>

                      <option value="high">
                        High
                      </option>

                    </select>

                  </div>

                </div>

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Project
                  </label>

                  <select
                    name="project"
                    onChange={handleChange}
                    className="w-full border border-gray-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none px-5 py-4 rounded-2xl transition-all duration-300 bg-white"
                  >

                    <option>
                      Select Project
                    </option>

                    {projects.map((project) => (

                      <option
                        key={project.id}
                        value={project.id}
                      >
                        {project.title}
                      </option>

                    ))}

                  </select>

                </div>

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Assign User ID
                  </label>

                  <input
                    type="number"
                    name="assigned_to"
                    placeholder="Enter user ID"
                    onChange={handleChange}
                    className="w-full border border-gray-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none px-5 py-4 rounded-2xl transition-all duration-300"
                  />

                </div>

                <button
                  className="w-full bg-linear-to-r from-violet-600 to-indigo-600 hover:scale-[1.01] transition-all duration-300 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-violet-300 mt-4"
                >
                  Create Task
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CreateTask;