import React from "react";
import CourseCard from "./CourseCard";

function FullStackDevelopment({ courseData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-screen-lg place-content-center mx-6 sm:mx-auto my-10">
      {courseData
        .filter((element) => element.tag == "fsd")
        .map((val, index) => (
          <CourseCard key={index} val={val} />
        ))}
    </div>
  );
}

export default FullStackDevelopment;
