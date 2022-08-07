import React from "react";
import CardEmployee from "./CardEmployee";
import { AiFillCheckCircle, AiTwotonePieChart } from "react-icons/ai";
import { FaUsers, FaBusinessTime } from "react-icons/fa";

const Team = () => {
  return (
    <section className="text-white mt-10 mb-20 text-center">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0 md:flex gap-20">
        <div className="flex-1">
          <h2 className="text-primary-green font-extrabold md:text-5xl sm:text-4xl text-3xl md:py-6">
            Our Team
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae distinctio, voluptatum rerum sint at eum fuga dicta
            nobis corporis veritatis quod itaque fugiat reiciendis laboriosam
            laborum aliquid, asperiores, quae earum fugiat reiciendis laboriosam!
          </p>
          <h3 className="text-primary-green font-extrabold md:text-3xl sm:text-4xl text-3xl py-8">What can we do for you?</h3>
          <ul className="grid grid-cols-2 justify-between my-5">
              <li>
                <AiFillCheckCircle className="mx-auto" size={50} />
                <p>Confidence</p>
              </li>
              <li>
                <AiTwotonePieChart className="mx-auto" size={50} />Traffic
              </li>
              <li>
                <FaBusinessTime className="mx-auto" size={50} />Productivity
              </li>
              <li>
                <FaUsers className="mx-auto" size={50} />Leads
              </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center flex-col">
          <div className="lg:flex">
            <CardEmployee employeeName="Hernán Gutierrez" job="CEO" />
            <CardEmployee employeeName="Hernán Gutierrez" job="CEO" />
          </div>
          <div className="hidden lg:flex">
            <CardEmployee employeeName="Hernán Gutierrez" job="CEO" />
            <CardEmployee employeeName="Hernán Gutierrez" job="CEO" />
            <CardEmployee employeeName="Hernán Gutierrez" job="CEO" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
