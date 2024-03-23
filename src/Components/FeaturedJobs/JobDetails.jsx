import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication, isJobApplied } from "../../Utils/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  const {
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;

  const [applied, setApplied] = useState(isJobApplied(parseInt(id)));

  const handleApplyJob = () => {
    if (!applied) {
      saveJobApplication(parseInt(id));
      setApplied(true);
      toast.success("Applied Successfully");
    } else {
      toast.info("Already Applied for this Job");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="flex space-x-4 gap-4 items-center text-3xl font-bold mb-4">
        {job_title} At <strong>{company_name}</strong>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">Job Details</h2>
          <p>
            <strong>Company:</strong> {company_name}
          </p>
          <p>
            <strong>Location:</strong> {location}
          </p>
          <p>
            <strong>Job Type:</strong> {job_type}
          </p>
          <p>
            <strong>Salary:</strong> {salary}
          </p>
          <p>
            <strong>Emote or Onsite:</strong> {remote_or_onsite}
          </p>
          <p>
            <strong>Experiences:</strong> {experiences}
          </p>
        </div>
        <div className="border p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">Job Description</h2>
          <p>{job_description}</p>
        </div>
      </div>
      <div className="mt-6 border p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-2">Job Responsibilities</h2>
        <ul className="list-disc list-inside">{job_responsibility}</ul>
      </div>
      <div className="mt-6 border p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-2">Educational Requirements</h2>
        <p>{educational_requirements}</p>
      </div>
      <div className="mt-6 border p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
        <ul className="list-disc list-inside">
          <li className="text-sm text-gray-700">
            <strong>Phone:</strong> {contact_information.phone}
          </li>
          <li className="text-sm text-gray-700">
            <strong>Email:</strong> {contact_information.email}
          </li>
          <li className="text-sm text-gray-700">
            <strong>Address:</strong> {contact_information.address}
          </li>
        </ul>
      </div>
      <div className="text-center my-6">
        <button
          onClick={handleApplyJob}
          className={`btn btn-warning w-1/2 mx-auto ${
            applied ? "cursor-not-allowed" : ""
          }`}
          disabled={applied}
        >
          {applied ? "Already Applied" : "Apply Now"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;

// import React from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { saveJobApplication } from "../../Utils/localStorage";

// const JobDetails = () => {
//   const jobs = useLoaderData();
//   const { id } = useParams();
//   const job = jobs.find((job) => job.id === parseInt(id));

//   const {
//     logo,
//     job_title,
//     company_name,
//     remote_or_onsite,
//     location,
//     job_type,
//     salary,
//     job_description,
//     job_responsibility,
//     educational_requirements,
//     experiences,
//     contact_information,
//   } = job;

//   const handleApplyJob = () => {
//     saveJobApplication(parseInt(id));
//     toast.success("Applied Successfully");
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="flex space-x-4 gap-4 items-center text-3xl font-bold mb-4">
//         {job_title} At <strong>{company_name}</strong>
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="border p-4 rounded-md shadow-md">
//           <h2 className="text-lg font-semibold mb-2">Job Details</h2>
//           <p>
//             <strong>Company:</strong> {company_name}
//           </p>
//           <p>
//             <strong>Location:</strong> {location}
//           </p>
//           <p>
//             <strong>Job Type:</strong> {job_type}
//           </p>
//           <p>
//             <strong>Salary:</strong> {salary}
//           </p>
//           <p>
//             <strong>Emote or Onsite:</strong> {remote_or_onsite}
//           </p>
//           <p>
//             <strong>Experiences:</strong> {experiences}
//           </p>
//         </div>
//         <div className="border p-4 rounded-md shadow-md">
//           <h2 className="text-lg font-semibold mb-2">Job Description</h2>
//           <p>{job_description}</p>
//         </div>
//       </div>
//       <div className="mt-6 border p-4 rounded-md shadow-md">
//         <h2 className="text-lg font-semibold mb-2">Job Responsibilities</h2>
//         <ul className="list-disc list-inside">{job_responsibility}</ul>
//       </div>
//       <div className="mt-6 border p-4 rounded-md shadow-md">
//         <h2 className="text-lg font-semibold mb-2">Educational Requirements</h2>
//         <p>{educational_requirements}</p>
//       </div>
//       <div className="mt-6 border p-4 rounded-md shadow-md">
//         <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
//         <ul className="list-disc list-inside">
//           <li className="text-sm text-gray-700">
//             <strong>Phone:</strong> {contact_information.phone}
//           </li>
//           <li className="text-sm text-gray-700">
//             <strong>Email:</strong> {contact_information.email}
//           </li>
//           <li className="text-sm text-gray-700">
//             <strong>Address:</strong> {contact_information.address}
//           </li>
//         </ul>
//       </div>
//       <div className="text-center my-6 ">
//         <button
//           onClick={handleApplyJob}
//           className="btn btn-warning w-1/2 mx-auto"
//         >
//           Apply Now
//         </button>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default JobDetails;
