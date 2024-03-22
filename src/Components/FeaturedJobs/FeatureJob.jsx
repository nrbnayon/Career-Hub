import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";

const FeatureJob = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card md:w-96 bg-base-100 shadow-xl">
      <figure className="p-4 mt-6 self-start">
        <img src={logo} className="rounded-xl" />
      </figure>
      <div className="p-4 space-y-3">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex gap-4">
          <p className="btn btn-outline">{remote_or_onsite}</p>
          <p className="btn btn-outline">{job_type}</p>
        </div>
        <div className="flex gap-6">
          <p className="flex items-center gap-1">
            {<IoLocationOutline />} {location}
          </p>
          <p className="flex items-center gap-1">
            {<CiDollar />} Salary: {salary}
          </p>
        </div>
        <button className="btn btn-info my-2">View Details</button>
      </div>
    </div>
  );
};

export default FeatureJob;
