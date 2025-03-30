import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const educationData = [
  { year: "2021-2022", title: "Baccalaureate in Physical Sciences", platform: "El Amria High School" },
  { year: "2022-2023", title: "1st Year DUT Computer Engineering", platform: "EST" },
  { year: "2023-2024", title: "2nd Year DUT Computer Engineering", platform: "EST" },
  { year: "2024-2025", title: "1st Year Engineering Cycle GIIA", platform: "ENSA" },
];

const experienceData = [
  { year: "2023", title: "Web Development Internship", duration: "1 month", platform: "Oum Er-Rbia Hydraulic Basin Agency" },
  { year: "2023", title: "Web Development Internship", duration: "2 months", platform: "Oum Er-Rbia Hydraulic Basin Agency" },
];

function EducationSection() {
  const [activeTab, setActiveTab] = useState("education");
  const data = activeTab === "education" ? educationData : experienceData;

  return (
    <div className="text-white p-6 rounded-lg w-full max-w-5xl mx-auto">
      {/* <h2 className="text-2xl font-bold text-center mb-6">My Journey</h2> */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 mx-2 rounded-xl text-white border-2 border-indigo-700 ${activeTab === "education" ? "bg-indigo-700" : "bg-transparent"}`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-xl text-white border-2 border-indigo-700 ${activeTab === "experience" ? "bg-indigo-700" : "bg-transparent"}`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="border-2 border-indigo-950 p-4 rounded-xl shadow-lg flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg font-semibold m-2">{item.year}</h3>
            <p className="text-sm text-gray-400">{item.title}</p>
            {item.duration && <p className="text-sm text-gray-300">Duration: {item.duration}</p>}
            <span className="text-xs text-gray-500">{item.platform}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(EducationSection, "education");
