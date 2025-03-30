import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import cu from './E.png'
import {
  img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  im1,im2,im3,im4,im5,im6,im7
    
} from "../assets";

const projects = [
  {
    title: "Educational Website",
    description: "Educational Institution Management Website of EST Fquih Ben Salah",
    images: [img1,img2,img4,img3,img5,img6,img7,img8,img9,img10,img11,img12,img17,
      img18,
      img19,
      img20,
      img21,
      img13,
      img14,
      img15,
      img16,
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
    images: [im1,im2,im3,im4,im5,im6,im7],
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md relative">
            <h3 className="text-lg font-semibold text-center">{selectedProject.title}</h3>

            <div className="mt-4 flex justify-center items-center relative">
              <button
                className="absolute left-0 bg-gray-700 p-2 rounded-full"
                onClick={prevImage}
              >
                ◀
              </button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedProject.images[currentIndex]}
                  src={selectedProject.images[currentIndex]}
                  alt="Project"
                  className="rounded-lg w-full"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              <button
                className="absolute right-0 bg-gray-700 p-2 rounded-full"
                onClick={nextImage}
              >
                ▶
              </button>
            </div>

            <button
              className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
