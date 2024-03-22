import React from "react";

const SectionTitle = ({ sectionTitle, sectionDesc }) => {
  return (
    <div>
      <h2 className="text-5xl font-bold text-center">{sectionTitle}</h2>
      <p className="text-xl text-center">{sectionDesc}</p>
    </div>
  );
};

export default SectionTitle;
