import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {

  return (
    <section id="clients" className="bg-white text-black py-10">
      <div className="max-w-[1240px] mx-auto mb-10">
        <h3 className="text-primary-green font-extrabold md:text-5xl sm:text-4xl text-3xl md:py-6">Our Clients</h3>
        <div className="releative flex  items-center group max-w-[1240px] mx-auto relative">
          <div
            id={"slider"}
            className="w-full h-full grid lg:grid-cols-4 md:grid-cols-3 gap-5"
          >
            <TestimonialCard
              clientName="Pepe Sierra"
              quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"
            />
            <TestimonialCard
              clientName="Pepe Sierra"
              quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"
            />
            <TestimonialCard
              clientName="Pepe Sierra"
              quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"
            />
            <TestimonialCard
              clientName="Pepe Sierra"
              quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"
            />
            <TestimonialCard
              clientName="Pepe Sierra"
              quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"
            />
            <TestimonialCard
              clientName="Pepe Sierra"
              quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"
            />
            <TestimonialCard
              clientName="Pepe Sierra"
              quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"
            />
            <TestimonialCard
              clientName="Pepe Sierra"
              quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
