import React from "react";
import SectionTitle from "../Home/SectionTitle/SectionTitle";

const Statistics = () => {
  return (
    <div className="container mx-auto py-8">
      <SectionTitle
        sectionTitle="Statistics"
        sectionDesc="Explore our latest statistics and insights."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Users</h3>
          <p className="text-gray-700">Total Users: 1000</p>
          <p className="text-gray-700">Active Users: 800</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Products</h3>
          <p className="text-gray-700">Total Products: 500</p>
          <p className="text-gray-700">New Products: 50</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Sales</h3>
          <p className="text-gray-700">Total Sales: $100,000</p>
          <p className="text-gray-700">Monthly Sales: $20,000</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
