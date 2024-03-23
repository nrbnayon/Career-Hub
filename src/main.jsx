import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import Blogs from "./Components/Blogs/Blogs";
import Statistics from "./Components/Statistics/Statistics";
import Jobs from "./Components/Jobs/Jobs";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import Home from "./Components/Home/Home";
import JobDetails from "./Components/FeaturedJobs/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/job/:id",
        loader: () => fetch("../jobs.json"),
        element: <JobDetails />,
      },
      {
        path: "/applied",
        loader: () => fetch("/jobs.json"),
        element: <AppliedJobs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
