import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purple-400 to-blue-500 text-white">
      <h3 className="text-4xl font-extrabold mb-8 text-center">
        Oops! 404 Page Not Found
      </h3>
      <NavLink to="/" className="btn">
        <button className="px-6 py-3 bg-white text-blue-500 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Back to Home Page
        </button>
      </NavLink>
      <p className="mt-4 text-sm opacity-80">
        Or explore some amazing content:
      </p>
      <div className="flex mt-4">
        <NavLink to="/blogs" className="mr-4 btn">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            Blogs
          </button>
        </NavLink>
        <NavLink to="/jobs" className="btn">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            Jobs
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
