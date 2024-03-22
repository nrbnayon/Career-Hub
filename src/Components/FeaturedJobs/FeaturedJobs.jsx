import React, { useEffect, useState } from "react";
import SectionTitle from "../Home/SectionTitle/SectionTitle";
import FeatureJob from "./FeatureJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <SectionTitle
        sectionTitle={"Featured Jobs"}
        sectionDesc={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, vero doloribus laboriosam reiciendis molestiae ducimus omnis obcaecati, soluta unde, odio rem sit hic reprehenderit? Veniam provident amet quasi iusto assumenda?"
        }
      />
      <div>
        {/* <p className="text-center">Available Jobs: {jobs.length}</p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          {jobs.map((job) => (
            <FeatureJob key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
