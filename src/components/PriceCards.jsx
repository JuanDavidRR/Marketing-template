import React from 'react'
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const PriceCards = () => {
  return (
    <div id="pricing" className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex-col p-4 my-4 rounded-lg text-center hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="Single" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <span className='inline-block font-bold w-[150px] mx-auto py-2 mb-4 text-primary-green border-primary-green border-b-2 border-solid'>Full Access</span>

                <p className='text-center text-3xl font-bold'>$49/Month</p>
                <div className='font-medium'>
                    <p className='py-2 border-b mx-8 mt-7'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    <p className='py-2 border-b mx-8 mb-5'>First 7 days free</p>
                </div>
                <button className='bg-primary-green font-bold w-[150px] mx-auto py-2 rounded-md mb-4 text-white'>Start your trial</button>
            </div>

            <div className='w-full shadow-xl bg-gray-100 flex-col p-4 my-8 md:my-0 rounded-lg text-center hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="Single" />
                <h2 className='text-2xl font-bold text-center py-8'>Small Company</h2>
                <span className='inline-block font-bold w-[150px] mx-auto py-2 mb-4 text-primary-green border-primary-green border-b-2 border-solid'>Full Access</span>
                <p className='text-center text-3xl font-bold'>$99/Month</p>
                <div className='font-medium'>
                    <p className='py-2 border-b mx-8 mt-7'>3 TB Storage</p>
                    <p className='py-2 border-b mx-8'>10 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
                    <p className='py-2 border-b mx-8 mb-5'>First 15 days free</p>
                </div>
                <button className='bg-primary-green font-bold w-[150px] mx-auto py-2 rounded-md mb-3'>Start your trial</button>
            </div>

            <div className='w-full shadow-xl flex-col p-4 my-4 rounded-lg text-center hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="Single" />
                <h2 className='text-2xl font-bold text-center py-8'>Full Package</h2>
                <span className='inline-block font-bold w-[150px] mx-auto py-2 mb-4 text-primary-green border-primary-green border-b-2 border-solid'>Full Access</span>

                <p className='text-center text-3xl font-bold'>$149/Month</p>
                <div className='font-medium'>
                    <p className='py-2 border-b mx-8 mt-7'>10 TB Storage</p>
                    <p className='py-2 border-b mx-8'>+25 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 20 GB</p>
                    <p className='py-2 border-b mx-8 mb-5'>First 30 days free</p>
                </div>
                <button className='bg-primary-green font-bold w-[150px] mx-auto py-2 rounded-md mb-4 text-white'>Start your trial</button>
            </div>
        </div>
    </div>
  )
}

export default PriceCards