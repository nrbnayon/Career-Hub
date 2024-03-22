import React from "react";

const SectionTitle = ({ sectionTitle, sectionDesc }) => {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold ">{sectionTitle}</h2>
      <p className="text-xl">{sectionDesc}</p>
    </div>
  );
};

export default SectionTitle;
