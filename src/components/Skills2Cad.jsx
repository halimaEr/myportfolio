
mport React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { styles } from "../styles";

function Skills2Cad() {
  return (
    <section className="">
         <h2 className=' my-8 text-white font-black   xs:text-[40px] text-[30px]p-2 text-center'>Skills</h2>
    <div className="mt-20 flex flex-wrap gap-10 max-w-[800px] m-auto justify-center">
      <div
        className="xs:w-[350px] w-full bg-tertiary rounded-[20px]
    py-5 px-8 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <h3> Front End</h3>
        <div className="grid grid-cols-2 gap-8">
          <p className="whitespace-nowrap">
            <FontAwesomeIcon icon={faCheckCircle} className="text-gray-500 text-xl mr-2" />
            HTML
          </p>
          <p className="whitespace-nowrap">
            <FontAwesomeIcon icon={faCheckCircle} className="text-gray-500 text-xl mr-2" />
            CSS
          </p>
          <p className="whitespace-nowrap">
            <FontAwesomeIcon icon={faCheckCircle} className="text-gray-500 text-xl mr-2" />
            JavaScript
          </p>
          <p className="whitespace-nowrap">
            <FontAwesomeIcon icon={faCheckCircle} className="text-gray-500 text-xl mr-2" />
            React JS
          </p>
          <p className="whitespace-nowrap">
            <FontAwesomeIcon icon={faCheckCircle} className="text-gray-500 text-xl mr-2" />
            Tailwind CSS
          </p>
        </div>
      </div>

      {/* Backend Card */}
      <div
        className="xs:w-[350px] w-full bg-tertiary rounded-[20px]
    py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <h3> Back End</h3>
        <div className="grid grid-cols-2 gap-8">
          <p className="whitespace-nowrap">
            <FontAwesomeIcon icon={faCheckCircle} className="text-gray-500 text-xl mr-2" />
            Java
          </p>
          <p className="whitespace-nowrap">
            <FontAwesomeIcon icon={faCheckCircle} className="text-gray-500 text-xl mr-2" />
            JEE
          </p>
          <p className="whitespace-nowrap">
            <FontAwesomeIcon icon={faCheckCircle} className="text-gray-500 text-xl mr-2" />
            Spring Boot
          </p>
          <p className="whitespace-nowrap">
            <FontAwesomeIcon icon={faCheckCircle} className="text-gray-500 text-xl mr-2" />
            SQL
          </p>
          <p className="whitespace-nowrap">
            <FontAwesomeIcon icon={faCheckCircle} className="text-gray-500 text-xl mr-2" />
            MYSQL
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Skills2Cad;
