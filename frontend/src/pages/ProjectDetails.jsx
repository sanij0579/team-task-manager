import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API from "../api/axios";
import Navbar from "../components/Navbar";

function ProjectDetails() {

  const { id } = useParams();

  const [project, setProject] = useState({});
  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    fetchProject();

  }, []);

  const fetchProject = async () => {

    try {

      const res = await API.get(
        `/projects/${id}/`
      );

      setProject(res.data.project);

      setTasks(res.data.tasks);

    } catch (err) {

      console.log(err);
    }
  };

  const getPriorityStyle = (priority) => {

    if (priority === "high") {
      return "bg-red-100 text-red-600";
    }

    if (priority === "medium") {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-green-100 text-green-700";
  };

  const getStatusStyle = (status) => {

    if (status === "done") {
      return "bg-green-100 text-green-700";
    }

    if (status === "in_progress") {
      return "bg-blue-100 text-blue-700";
    }

    return "bg-gray-200 text-gray-700";
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 overflow-hidden relative">

          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-100 rounded-full blur-3xl opacity-40"></div>

          <div className="relative z-10">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              <div>

                <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                  🚀 Active Project
                </div>

                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  {project.title}
                </h1>

                <p className="mt-5 text-gray-600 text-lg max-w-3xl leading-relaxed">
                  {project.description}
                </p>

              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 min-w-55">

                <p className="text-gray-500 font-medium">
                  Total Tasks
                </p>

                <h2 className="text-5xl font-bold text-gray-900 mt-4">
                  {tasks.length}
                </h2>

                <div className="mt-6 h-3 bg-gray-200 rounded-full overflow-hidden">

                  <div className="h-full w-[75%] bg-linear-to-r from-violet-500 to-indigo-600 rounded-full"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="flex items-center justify-between mt-12 mb-8">

          <div>

            <h2 className="text-4xl font-bold text-gray-900">
              Project Tasks
            </h2>

            <p className="text-gray-500 mt-2">
              Manage and track all assigned tasks
            </p>

          </div>

          <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100">

            <span className="text-gray-500">
              Total:
            </span>

            <span className="ml-2 font-bold text-gray-900">
              {tasks.length}
            </span>

          </div>

        </div>

        {tasks.length === 0 ? (

          <div className="bg-white rounded-3xl p-14 text-center shadow-sm border border-gray-100">

            <div className="text-6xl mb-5">
              📂
            </div>

            <h2 className="text-3xl font-bold text-gray-900">
              No Tasks Yet
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              Tasks created for this project will appear here
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {tasks.map((task) => (

              <div
                key={task.id}
                className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
              >

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-violet-600 transition">
                      {task.title}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {task.description}
                    </p>

                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-2xl">
                    📝
                  </div>

                </div>

                <div className="flex flex-wrap gap-3 mt-8">

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusStyle(task.status)}`}
                  >
                    {task.status}
                  </span>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${getPriorityStyle(task.priority)}`}
                  >
                    {task.priority}
                  </span>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default ProjectDetails;