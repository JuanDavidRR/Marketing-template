import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ clientName, quote }) => {
  return (
      <article className="relative m-2 border-2 boder-solid border-primary-green p-4 rounded-md">
        <FaQuoteLeft size={50}/>
        <h4 className="text-primary-green font-extrabold w-full">{clientName}</h4>
        <blockquote className="w-full">
            {quote}
        </blockquote>
      </article>
  );
};

export default TestimonialCard;
