import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Dashboard from "./pages/Dashboard";

import Projects from "./pages/Projects";
import CreateProject from "./pages/CreateProject";
import ProjectDetails from "./pages/ProjectDetails";

import Tasks from "./pages/Tasks";
import CreateTask from "./pages/CreateTask";

function App() {

  return (
    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        }
      />

      <Route
        path="/create-project"
        element={
          <ProtectedRoute>
            <CreateProject />
          </ProtectedRoute>
        }
      />

      <Route
        path="/projects/:id"
        element={
          <ProtectedRoute>
            <ProjectDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <Tasks />
          </ProtectedRoute>
        }
      />

      <Route
        path="/create-task"
        element={
          <ProtectedRoute>
            <CreateTask />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;