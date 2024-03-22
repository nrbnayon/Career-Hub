import React from "react";
import Banner from "./Banner/Banner";
import SectionTitle from "./SectionTitle/SectionTitle";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import CategoryList from "../CategoryList/CategoryList";

const Home = () => {
  return (
    <div className="space-y-4">
      <SectionTitle
        sectionTitle={"Welcome to our Job Portal"}
        sectionDesc={"Find your dream job with us!"}
      />
      <Banner />
      <FeaturedJobs />
      <CategoryList />
    </div>
  );
};

export default Home;
