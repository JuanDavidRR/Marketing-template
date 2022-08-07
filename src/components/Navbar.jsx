import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
const [active, setactive] = useState(false)

const handleNav = () =>{
    setactive(!active)
}
  return (
    <div className='text-white flex justify-between items-center max-w-[1240px] m-auto px-5 h-20'>
        <h1 className='text-3xl font-bold text-primary-green'>LOGO</h1>
        <ul className='hidden md:flex gap-5'>
            <li className='hover:text-primary-green transition duration-500'><a href="#home">Home</a></li>
            <li className='hover:text-primary-green transition duration-500'><a href="#about">About Us</a></li>
            <li className='hover:text-primary-green transition duration-500'><a href="#services">Services</a></li>
            <li className='hover:text-primary-green transition duration-500'><a href="#pricing">Pricing</a></li>
            <li className='hover:text-primary-green transition duration-500'><a href="#clients">Clients</a></li>
        </ul>
        <a href='#start' className='hidden md:block m-4 bg-primary-green font-extrabold px-5 py-2 rounded-md'>Cotizar ahora</a>        <div onClick={handleNav} className="block md:hidden">
            {active 
            ? <AiOutlineClose size={20}/>
            : <AiOutlineMenu size={20}/> }
            
        </div>
        <div className={active 
        ? 'fixed left-0 top-0 w-[75%] h-full border-r border-r-gray-800 ease-in-out duration-500 bg-primary-black'
        : 'fixed left-[-100%] h-full top-0 ease-in-out duration-500'
        }>
            <ul className='pt-10 uppercase'>
            <h1 className='text-3xl font-bold text-primary-green m-5 mb-10'>LOGO</h1>
            <li className='border-b border-gray-600 p-5'><a href="/">Inicio</a></li>
            <li className='border-b border-gray-600 p-5'><a href="/">Nosotros</a></li>
            <li className='border-b border-gray-600 p-5'><a href="/">Servicios</a></li>
            <li className='border-b border-gray-600 p-5 '><a href="/">Precios</a></li>
            <li className='p-5 mb-10'><a href="/">Clientes</a></li>
            <li><a href='#start' className='m-5 bg-primary-green font-extrabold px-5 py-2 rounded-md'>Cotizar ahora</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar