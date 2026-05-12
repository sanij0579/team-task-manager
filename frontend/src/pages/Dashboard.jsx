import { useEffect, useState } from "react";

import API from "../api/axios";
import Navbar from "../components/Navbar";

function Dashboard() {

  const [stats, setStats] = useState({});

  useEffect(() => {

    fetchStats();

  }, []);

  const fetchStats = async () => {

    try {

      const res = await API.get(
        "/dashboard/stats/"
      );

      setStats(res.data);

    } catch (err) {

      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
              Dashboard
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              Track your projects, tasks and team performance
            </p>

          </div>

          <div className="bg-white shadow-lg rounded-3xl px-6 py-5 border border-gray-100">

            <p className="text-sm text-gray-500">
              Productivity Overview
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              {stats.total_tasks || 0} Tasks
            </h2>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 group">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 font-medium">
                  Total Tasks
                </p>

                <h2 className="text-5xl font-bold text-gray-900 mt-4">
                  {stats.total_tasks || 0}
                </h2>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center text-2xl">
                📋
              </div>

            </div>

            <div className="mt-6 h-2 rounded-full bg-gray-100 overflow-hidden">

              <div className="h-full w-full bg-linear-to-r from-violet-500 to-indigo-600 rounded-full"></div>

            </div>

          </div>

          <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 group">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 font-medium">
                  Completed
                </p>

                <h2 className="text-5xl font-bold text-green-600 mt-4">
                  {stats.done_tasks || 0}
                </h2>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">
                ✅
              </div>

            </div>

            <div className="mt-6 h-2 rounded-full bg-gray-100 overflow-hidden">

              <div className="h-full w-[75%] bg-linear-to-r from-green-400 to-green-600 rounded-full"></div>

            </div>

          </div>

          <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 group">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 font-medium">
                  In Progress
                </p>

                <h2 className="text-5xl font-bold text-yellow-500 mt-4">
                  {stats.in_progress_tasks || 0}
                </h2>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center text-2xl">
                🚀
              </div>

            </div>

            <div className="mt-6 h-2 rounded-full bg-gray-100 overflow-hidden">

              <div className="h-full w-[60%] bg-linear-to-r from-yellow-400 to-orange-500 rounded-full"></div>

            </div>

          </div>

          <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 group">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 font-medium">
                  Overdue
                </p>

                <h2 className="text-5xl font-bold text-red-500 mt-4">
                  {stats.overdue_tasks || 0}
                </h2>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-2xl">
                ⏰
              </div>

            </div>

            <div className="mt-6 h-2 rounded-full bg-gray-100 overflow-hidden">

              <div className="h-full w-[35%] bg-linear-to-r from-red-400 to-red-600 rounded-full"></div>

            </div>

          </div>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10">

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Team Performance
            </h2>

            <div className="space-y-6">

              <div>

                <div className="flex justify-between mb-2">

                  <span className="text-gray-600">
                    Task Completion
                  </span>

                  <span className="font-semibold text-gray-900">
                    75%
                  </span>

                </div>

                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">

                  <div className="h-full w-[75%] bg-linear-to-r from-violet-500 to-indigo-600 rounded-full"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between mb-2">

                  <span className="text-gray-600">
                    Productivity
                  </span>

                  <span className="font-semibold text-gray-900">
                    82%
                  </span>

                </div>

                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">

                  <div className="h-full w-[82%] bg-linear-to-r from-green-400 to-green-600 rounded-full"></div>

                </div>

              </div>

            </div>

          </div>

          <div className="bg-linear-to-br from-violet-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl">

            <p className="text-violet-100 font-medium">
              Workspace Insights
            </p>

            <h2 className="text-4xl font-bold mt-4 leading-tight">
              Stay productive and manage tasks smarter
            </h2>

            <p className="mt-5 text-violet-100 leading-relaxed">
              Organize projects, assign responsibilities and monitor progress with a clean workflow experience.
            </p>

            <button
              className="mt-8 bg-white text-violet-700 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition"
            >
              Explore Workspace
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;