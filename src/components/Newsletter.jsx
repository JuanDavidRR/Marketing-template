import React from 'react'

const Newsletter = () => {
  return (
    <div id='start' className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h3 className="md:text-4xl sm:text-3xl text-xl font-extrabold">Do you want to get more leads?</h3>
                <p>Sign up to our news letter en start to grop your capital</p>
            </div>
            <div className="my-4 lg:col-span-1">
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='py-2 w-full rounded-md text-black' type="email" placeholder='Enter your email' />
                    <button className="bg-primary-green font-extrabold w-full md:w-[150px] mx-auto py-2 rounded-md md:ml-5 text-white mt-5 md:mt-0">Notify me</button>
                </div>
    
            </div>
            <p>We care about the protection of your data. You can consult our <span className='text-primary-green'>privacy policy</span></p>
        </div>
    </div>
  )
}

export default Newsletter