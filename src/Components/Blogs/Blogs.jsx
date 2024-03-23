import React from "react";
import SectionTitle from "../Home/SectionTitle/SectionTitle";

const Blogs = () => {
  return (
    <div className="container mx-auto py-8">
      <SectionTitle
        sectionTitle="Latest Blogs"
        sectionDesc="Discover our latest blog posts and stay updated."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Blog Post 1</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            Read More
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Blog Post 2</h3>
          <p className="text-gray-700">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            Read More
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Blog Post 3</h3>
          <p className="text-gray-700">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
