import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../hoc";
import stage1 from "../components/files/stage1.jpg";
import stage2 from "../components/files/stage2.jpg";

const educationData = [
  { year: "2021-2022", title: "Baccalaureate in Physical Sciences", platform: "El Amria High School" },
  { year: "2022-2023", title: "1st Year DUT Computer Engineering", platform: "EST" },
  { year: "2023-2024", title: "2nd Year DUT Computer Engineering", platform: "EST" },
  { year: "2024-2025", title: "1st Year Engineering Cycle GIIA", platform: "ENSA" },
];

const experienceData = [
  {
    year: "2023",
    title: "Web Development Internship",
    duration: "1 month",
    platform: "Oum Er-Rbia Hydraulic Basin Agency",
    attestation: stage1,
  },
  {
    year: "2023",
    title: "Web Development Internship",
    duration: "2 months",
    platform: "Oum Er-Rbia Hydraulic Basin Agency",
    attestation: stage2,
  },
];

function EducationSection() {
  const [activeTab, setActiveTab] = useState("education");
  const [selectedAttestation, setSelectedAttestation] = useState(null);
  const data = activeTab === "education" ? educationData : experienceData;

  return (
    <div className="text-white p-6 rounded-lg w-full max-w-5xl mx-auto">
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
            {item.duration && (
              <p className="text-sm text-gray-300">Duration: {item.duration}</p>
            )}
            <span className="text-xs text-gray-500">{item.platform}</span>

            {activeTab === "experience" && item.attestation && (
              <button
                onClick={() => setSelectedAttestation(item.attestation)}
                className="mt-3 px-4 py-1.5 text-sm text-white bg-purple-600 hover:bg-purple-700 rounded-lg"
              >
                View Attestation
              </button>
            )}
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
  {selectedAttestation && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative bg-black p-4 rounded-lg max-w-4xl w-full mx-4">
        <img
          src={selectedAttestation}
          alt="Attestation"
          className="w-full h-auto max-h-[75vh] rounded-lg object-contain mx-auto"
        />
        <button
          onClick={() => setSelectedAttestation(null)}
          className="absolute top-10 right-2 bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full"
        >
          ✕
        </button>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
}

export default SectionWrapper(EducationSection, "education");
