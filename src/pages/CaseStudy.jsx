import caseStudyData from "@/data/caseStudies";
import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";

const CaseStudy = () => {
  const { caseStudy } = useParams();

  // Check if the caseStudy exists in the data
  const study = caseStudyData[caseStudy];

  // If the caseStudy does not exist, redirect to error page
  if (!study) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-5xl font-bold text-theme mb-4">{study.name}</h1>
      <h3 className="text-4xl font-light text-theme">#{study.index}</h3>
      <div className="flex space-x-4 mt-2">
        {study.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-theme font-semibold text-black py-1 px-3 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-4 text-theme">{study.description}</p>

      <div className="flex gap-4 mt-8">
        {study.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Case study ${study.name}`}
            className="w-40 h-40 object-cover"
          />
        ))}
      </div>
      <Link
        to={study.link}
        className="flex items-center gap-2 mt-4 px-4 py-2 bg-theme w-fit font-semibold text-black rounded-lg"
      >
        <p>Read more</p>
      </Link>
    </div>
  );
};

export default CaseStudy;
