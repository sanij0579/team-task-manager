import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../api/axios";
import Navbar from "../components/Navbar";

function Projects() {

  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

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

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
              Projects
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              Organize, manage and monitor all team projects
            </p>

          </div>

          <button
            onClick={() => navigate("/create-project")}
            className="bg-linear-to-r from-violet-600 to-indigo-600 hover:scale-105 transition-all duration-300 text-white px-7 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-violet-300"
          >
            + Create Project
          </button>

        </div>

        {projects.length === 0 ? (

          <div className="bg-white rounded-3xl p-16 text-center shadow-sm border border-gray-100">

            <div className="text-7xl mb-6">
              📂
            </div>

            <h2 className="text-4xl font-bold text-gray-900">
              No Projects Found
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              Start by creating your first project workspace
            </p>

            <button
              onClick={() => navigate("/create-project")}
              className="mt-8 bg-gray-900 hover:bg-violet-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
            >
              Create Project
            </button>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

            {projects.map((project) => (

              <div
                key={project.id}
                onClick={() =>
                  navigate(`/projects/${project.id}`)
                }
                className="group bg-white rounded-3xl p-7 shadow-sm border border-gray-100 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative"
              >

                <div className="absolute top-0 right-0 w-40 h-40 bg-violet-100 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition"></div>

                <div className="relative z-10">

                  <div className="flex items-center justify-between mb-6">

                    <div className="w-16 h-16 rounded-2xl bg-linear-to-r from-violet-500 to-indigo-600 flex items-center justify-center text-white text-2xl shadow-lg">
                      📁
                    </div>

                    <span className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full">
                      Active
                    </span>

                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 group-hover:text-violet-600 transition leading-tight">
                    {project.title}
                  </h2>

                  <p className="mt-5 text-gray-600 leading-relaxed min-h-18">
                    {project.description || "No description available for this project."}
                  </p>

                  <div className="mt-8 flex items-center justify-between">

                    <div>

                      <p className="text-sm text-gray-400">
                        Project ID
                      </p>

                      <h3 className="font-bold text-gray-900 mt-1">
                        #{project.id}
                      </h3>

                    </div>

                    <button
                      className="bg-gray-900 group-hover:bg-violet-600 text-white px-5 py-3 rounded-2xl font-medium transition-all duration-300"
                    >
                      View Details
                    </button>

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

export default Projects;