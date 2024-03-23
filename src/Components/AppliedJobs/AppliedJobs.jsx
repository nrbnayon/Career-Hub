import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getStoredJobApplication,
  removeJobApplication,
} from "../../Utils/localStorage";
import AppliedJobList from "./AppliedJobList";
import { TbArrowsSort } from "react-icons/tb";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect(() => {
    const storedJobId = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobId.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  return (
    <div>
      <h3 className="text-center text-3xl font-bold my-4">
        Applied Jobs: {appliedJobs.length}{" "}
      </h3>
      <div className="flex items-center justify-center space-x-6">
        <div className="relative dropdown">
          <button className="btn" onClick={() => handleJobsFilter("all")}>
            All
          </button>
          <div className="dropdown-content flex justify-between w-52 bg-base-100 rounded-box shadow-lg mt-4">
            <button className="btn" onClick={() => handleJobsFilter("remote")}>
              Remote
            </button>
            <button className="btn" onClick={() => handleJobsFilter("onsite")}>
              Onsite
            </button>
          </div>
        </div>
        <div
          className="btn"
          onClick={() => setDisplayJobs([...displayJobs].reverse())}
        >
          Sort <TbArrowsSort />
        </div>
      </div>
      <div>
        {displayJobs.map((job) => (
          <AppliedJobList
            key={job.id}
            job={job}
            onCancelApply={removeJobApplication}
          />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;

// import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import {
//   getStoredJobApplication,
//   removeJobApplication,
// } from "../../Utils/localStorage";
// import AppliedJobList from "./AppliedJobList";
// import { TbArrowsSort } from "react-icons/tb";

// const AppliedJobs = () => {
//   const jobs = useLoaderData();

//   const [appliedJobs, setAppliedJobs] = useState([]);
//   const [displayJobs, setDisplayJobs] = useState([]);

//   useEffect(() => {
//     const storedJobId = getStoredJobApplication();
//     if (jobs.length > 0) {
//       // const jobsApplied = jobs.filter((job) => storedJobId.includes(job.id));
//       // console.log(jobs, storedJobId, jobsApplied);
//       const jobsApplied = [];
//       for (const id of storedJobId) {
//         const job = jobs.find((job) => job.id === id);
//         if (job) {
//           jobsApplied.push(job);
//         }
//       }
//       setAppliedJobs(jobsApplied);
//       setDisplayJobs(jobsApplied);
//     }
//   }, []);

//   const handleJobsFilter = (filter) => {
//     if (filter === "all") {
//       setDisplayJobs(appliedJobs);
//     } else if (filter === "remote") {
//       const remoteJobs = appliedJobs.fill(
//         (job) => job.remote_or_onsite === "Remote"
//       );
//       setDisplayJobs(remoteJobs);
//     } else if (filter === "onsite") {
//       const onsiteJobs = appliedJobs.fill(
//         (job) => job.remote_or_onsite === "Onsite"
//       );
//       setDisplayJobs(onsiteJobs);
//     }
//   };

//   return (
//     <div>
//       <h3 className="text-center text-3xl font-bold my-4">
//         Applied Jobs: {appliedJobs.length}{" "}
//       </h3>
//       <details className="dropdown">
//         <summary className="m-1 btn">
//           Sort <TbArrowsSort />
//         </summary>
//         <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
//           <li onClick={() => handleJobsFilter("all")}>
//             <a>Remote</a>
//           </li>
//           <li onClick={() => handleJobsFilter("onsite")}>
//             <a>Onsite</a>
//           </li>
//           <li onClick={() => handleJobsFilter("remote")}>
//             <a>All</a>
//           </li>
//         </ul>
//       </details>
//       <div>
//         {displayJobs.map((job) => (
//           <AppliedJobList
//             key={job.id}
//             job={job}
//             onCancelApply={removeJobApplication}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AppliedJobs;
