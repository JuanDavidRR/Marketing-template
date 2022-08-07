import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div id="about" className="w-full bg-white py-20 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-3" src={Laptop} alt="Grow Analitycs" />
        <div className="flex flex-col justify-center">
          <p className="text-primary-green uppercase font-extrabold">Data Analytics Dashboard</p>
          <h2 className="font-extrabold md:text-4xl sm:text-3xl text-2xl py-2">We Manage the Data for You</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores
            fuga repellendus expedita optio deserunt totam quisquam labore,
            dolor nam non alias quaerat, fugit dolorem? Assumenda asperiores
            veniam tenetur autem.
          </p>
          <button className="bg-primary-black font-bold w-[200px] mx-auto md:mx-0 py-3 my-10 rounded text-primary-green">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
