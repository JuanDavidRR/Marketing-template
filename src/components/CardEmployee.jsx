import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const CardEmployee = ({ employeeName, job}) => {
  return (
    <div className="inline-block cursor-pointer relative m-2">
      <img
        className="w-full h-auto block"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt="Employee"
      />

      <div className="absolute top-0 left-0 w-full h-full hover:bg-primary-green opacity-0 hover:opacity-100 transition duration-300 border-solid border-primary-green border-2">
        <div className="whitespace-normal text-white md:text-base font-bold flex justify-center gap-3 h-full flex-col items-center text-center">
          <p className="font-extrabold uppercase">{employeeName}</p>
          <p>{job}</p>
          <ul className="flex gap-5">
            <li>
              <a href="/">
                <FaFacebookSquare size={20} />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTwitterSquare size={20} />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagramSquare size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardEmployee;
