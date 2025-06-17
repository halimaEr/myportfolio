import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {

  page1,p2,p3,p4,p5,p6,
  a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,login,
  e1,e2,e3,e4,e5,
  im1, im2, im3, im4, im5, im6, im7

} from "../assets";


const projects = [
  {
    title: "Educational Website",
    description: "Educational Institution Management Website of EST Fquih Ben Salah",
    images: [page1,p2,p3,p4,p5,p6,
      a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,login,
      e1,e2,e3,e4,e5
    ],
  },
  {
    title: "Email Management Website",
    description: "Email Management Website in ABHOER Beni mellal",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7301000073331531776/"
  },
  {
    title: "School document management website",
    description: "Simple website for managing school documents at ENSA Safi",
    images: [im1, im2, im3, im4, im5, im6, im7],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" text-white p-6 rounded-lg w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold  text-center mb-10">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="border-2 border-indigo-950 p-4 rounded-xl shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg font-semibold m-5">{project.title}</h3>
            <p className="text-sm text-gray-400">{project.description}</p>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 text-white hover:bg-blue-600 border-2 border-indigo-700 p-4 rounded-xl"
              >
                View on LinkedIn
              </a>
            ) : (
              <button
                className="mt-4 px-4 py-2 text-white hover:bg-blue-600 border-2 border-indigo-700 p-4 rounded-xl"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentIndex(0);
                }}
              >
                View More
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {selectedProject && selectedProject.images && (
        <div className="fixed inset-0 z-50 bg-black-100 backdrop-blur-sm flex justify-center items-center">
          <motion.div
            className="bg-white text-black p-6 rounded-2xl shadow-2xl w-[90%] max-w-2xl relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-bold text-center mb-4 text-indigo-800">
              {selectedProject.title}
            </h3>

            <div className="relative w-full h-72 sm:h-96 flex justify-center items-center overflow-hidden rounded-xl">
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-indigo-700 hover:bg-indigo-800 text-white p-2 rounded-full z-10 shadow-md"
                onClick={prevImage}
              >
                ◀
              </button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedProject.images[currentIndex]}
                  src={selectedProject.images[currentIndex]}
                  alt="Project"
                  className="object-contain w-full h-full rounded-xl shadow-md"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>

              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-700 hover:bg-indigo-800 text-white p-2 rounded-full z-10 shadow-md"
                onClick={nextImage}
              >
                ▶
              </button>
            </div>
            {/* <div className="flex justify-center mt-4 gap-2">
              {selectedProject.images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full ${currentIndex === idx ? 'bg-indigo-700' : 'bg-gray-300'
                    }`}
                ></div>
              ))}
            </div> */}

            <div className="mt-6 flex justify-center">
              <button
                className="w-1/4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}
