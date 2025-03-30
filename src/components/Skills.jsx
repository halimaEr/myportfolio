import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import { SectionWrapper } from '../hoc'


const skillsData = [
  { name: "Web Development", value: 95 },
  { name: "Brand Identity", value: 80 },
  { name: "Logo Design", value: 90 },
  { name: "UI/UX Design", value: 85 },
  { name: "UI/UX Design", value: 85 },
  { name: "UI/UX Design", value: 85 },
  { name: "UI/UX Design", value: 85 },
  { name: "SEO Optimization", value: 75 },
];

const Skills = () => {
  return (
    <section className=" text-white py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <p className="text-gray-400 mb-8">
          Here are some of my top skills and expertise.
        </p>

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          className="w-full max-w-2xl"
        >
          {skillsData.map((skill, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-lg">
                <div className="w-24 h-24">
                  <CircularProgressbar
                    value={skill.value}
                    text={`${skill.value}%`}
                    styles={buildStyles({
                      textColor: "#fff",
                      pathColor: "#3B82F6", // Bleu
                      trailColor: "rgba(255, 255, 255, 0.2)",
                    })}
                  />
                </div>
                <p className="mt-4 text-lg">{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination avec Tailwind */}
        <div className="custom-pagination flex justify-center gap-2 mt-6 bg-slate-500 m-auto rounded-xl w-1/6"></div>
      </div>
    </section>
  );
};

export default SectionWrapper(Skills, "skills");