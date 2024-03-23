import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  getStoredJobApplication,
  removeJobApplication,
} from "../../Utils/localStorage";
import AppliedJobList from "./AppliedJobList";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  // const { id } = useParams();
  // console.log(jobs, id);

  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobId = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) => storedJobId.includes(job.id));
      // console.log(jobs, storedJobId, jobsApplied);
      const jobsApplied = [];
      for (const id of storedJobId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
    }
  }, []);
  return (
    <div>
      <h3 className="text-center text-3xl font-bold my-4">
        Applied Jobs: {appliedJobs.length}{" "}
      </h3>
      <div>
        {appliedJobs.map((job) => (
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
