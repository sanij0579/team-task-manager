import { useEffect, useState } from "react";

import API from "../api/axios";
import Navbar from "../components/Navbar";

function Tasks() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    fetchTasks();

  }, []);

  const fetchTasks = async () => {

    try {

      const res = await API.get(
        "/tasks/my-tasks/"
      );

      setTasks(res.data);

    } catch (err) {

      console.log(err);
    }
  };

  const updateStatus = async (id, status) => {

    try {

      await API.patch(
        `/tasks/update-status/${id}/`,
        {
          status,
        }
      );

      fetchTasks();

    } catch (err) {

      console.log(err);
    }
  };

  const getPriorityStyle = (priority) => {

    if (priority === "high") {
      return "bg-red-100 text-red-700";
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

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
              My Tasks
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              Track, manage and update your assigned tasks
            </p>

          </div>

          <div className="bg-white px-6 py-5 rounded-3xl shadow-sm border border-gray-100">

            <p className="text-sm text-gray-500">
              Total Tasks
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              {tasks.length}
            </h2>

          </div>

        </div>

        {tasks.length === 0 ? (

          <div className="bg-white rounded-3xl p-16 text-center shadow-sm border border-gray-100">

            <div className="text-7xl mb-6">
              📝
            </div>

            <h2 className="text-4xl font-bold text-gray-900">
              No Tasks Available
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              Your assigned tasks will appear here
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-7">

            {tasks.map((task) => (

              <div
                key={task.id}
                className="group bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >

                <div className="absolute top-0 right-0 w-40 h-40 bg-violet-100 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition"></div>

                <div className="relative z-10">

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">

                    <div>

                      <div className="flex items-center gap-3 mb-4">

                        <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-violet-500 to-indigo-600 flex items-center justify-center text-white text-2xl shadow-lg">
                          📌
                        </div>

                        <div>

                          <h2 className="text-3xl font-bold text-gray-900 group-hover:text-violet-600 transition">
                            {task.title}
                          </h2>

                          <p className="text-sm text-gray-400 mt-1">
                            Task ID #{task.id}
                          </p>

                        </div>

                      </div>

                      <p className="text-gray-600 leading-relaxed text-lg">
                        {task.description}
                      </p>

                    </div>

                    <div className="flex flex-wrap gap-3">

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

                  <div className="mt-8 pt-6 border-t border-gray-100">

                    <p className="text-sm text-gray-400 mb-4">
                      Update Status
                    </p>

                    <div className="flex flex-wrap gap-4">

                      <button
                        onClick={() =>
                          updateStatus(
                            task.id,
                            "todo"
                          )
                        }
                        className="bg-gray-200 hover:bg-gray-900 hover:text-white px-5 py-3 rounded-2xl font-medium transition-all duration-300"
                      >
                        To Do
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(
                            task.id,
                            "in_progress"
                          )
                        }
                        className="bg-yellow-100 hover:bg-yellow-500 hover:text-white text-yellow-700 px-5 py-3 rounded-2xl font-medium transition-all duration-300"
                      >
                        In Progress
                      </button>

                      <button
                        onClick={() =>
                          updateStatus(
                            task.id,
                            "done"
                          )
                        }
                        className="bg-green-100 hover:bg-green-600 hover:text-white text-green-700 px-5 py-3 rounded-2xl font-medium transition-all duration-300"
                      >
                        Done
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Tasks;