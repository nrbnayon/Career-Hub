import React from "react";
import { Link } from "react-router-dom";

const AppliedJobList = ({ job, onCancelApply }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  const handleCancelApply = () => {
    onCancelApply(job.id);
  };

  return (
    <div className="max-w-full mx-auto my-4 bg-white rounded-lg overflow-hidden shadow-md">
      <div className="flex items-center justify-between p-4 bg-gray-200">
        <img src={logo} alt="Company Logo" className="w-16 h-16 rounded-full" />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{company_name}</h2>
          <p className="text-sm text-gray-600">{remote_or_onsite}</p>
        </div>
      </div>
      <div className="p-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">{job_title}</h3>
          <p className="text-gray-700">{location}</p>
          <p className="text-sm text-gray-600">{job_type}</p>
          <p className="text-sm text-gray-600">{salary}</p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to={`/job/${job.id}`}
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Show Details
          </Link>
          <button
            onClick={handleCancelApply}
            className="inline-block px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Cancel Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobList;
