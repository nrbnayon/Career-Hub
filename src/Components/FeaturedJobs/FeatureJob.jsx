import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const FeatureJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card bg-base-100 shadow-xl">
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
        <NavLink to={`/job/${id}`} className="btn btn-info my-2">
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default FeatureJob;
