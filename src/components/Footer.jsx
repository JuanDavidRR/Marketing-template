import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-10 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h3 className="text-3xl font-bold text-primary-green">LOGO</h3>
        <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique enim voluptatum ut. Fugiat mollitia aliquid modi reiciendis expedita tempora explicabo quod incidunt cumque repudiandae? Vero eaque omnis vel! Fuga.</p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30}/>
          <FaInstagramSquare size={30}/>
          <FaTwitterSquare size={30}/>
          <FaGithubSquare size={30}/>
          <FaDribbbleSquare size={30}/>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-around mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">SEO Optimization</li>
            <li className="py-2 text-sm">SEM Strategy</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">About Us</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">Start Now</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Contact</h6>
          <ul>
            <li className="py-2 text-sm">+1 456-345-4663</li>
            <li className="py-2 text-sm">jorden@marketing.com</li>
            <li className="py-2 text-sm">Angie@marketing.com</li>
            <li className="py-2 text-sm">Street 65 Av.56 Ch.Ill</li>
          </ul>
        </div>
      </div>
      <a href="#home" className="fixed bottom-8 right-8 text-primary-green"><BsFillArrowUpCircleFill size={35}/></a>
    </div>
    
  );
};

export default Footer;
