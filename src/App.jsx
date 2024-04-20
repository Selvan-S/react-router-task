import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import All from "./Components/All";
import Career from "./Components/Career";
import CyberSecurity from "./Components/CyberSecurity";
import DataScience from "./Components/DataScience";
import FullStackDevelopment from "./Components/FullStackDevelopment";
import NavBar from "./Components/NavBar";

function App() {
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    fetch("./course-data.json")
      .then((res) => res.json())
      .then((data) => {
        setCourseData(data);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<All courseData={courseData} />} />
        <Route
          exact
          path="/fsd"
          element={<FullStackDevelopment courseData={courseData} />}
        />
        <Route
          exact
          path="/cs"
          element={<CyberSecurity courseData={courseData} />}
        />
        <Route
          exact
          path="/ds"
          element={<DataScience courseData={courseData} />}
        />
        <Route exact path="/career" element={<Career />} />
      </Routes>
    </>
  );
}

export default App;
