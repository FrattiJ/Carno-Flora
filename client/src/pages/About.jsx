import React from 'react'

export default function About () {
  return (
    <div>
        <div className='flex flex-col items-center p-4 bg-[#A3B184]'>
            <h1 className='sm:text-3xl text-2xl font-bold text-neutral-800'>About Us</h1>
            <p className='flex justify-between items-center p-1 w-[75%] text-center sm:text-xl text-lg text-neutral-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda odio voluptatum ullam at earum temporibus? Unde dolorum quas nulla! Quaerat, quis. Dolorum, expedita fuga sed necessitatibus ducimus fugit repellat voluptates.</p>
        </div>
        <div className='p-4 bg-[#bfc4ac]'>
            <h2 className='sm:text-2xl text-xl font-bold text-neutral-800 p-2 text-center'>Contact Us</h2>
            <form action="">
                <div className='grid md:grid-col-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <input type="text"  name='Full name' placeholder='Full Name' className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#DAD7CD]'/>
                    </div>
                    <div className='flex flex-col'>
                        <input type="Email" name='Email' placeholder='Email' className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#DAD7CD]'/>
                    </div>
                    <div className='flex flex-col'>
                        <input type="text" name='Phone Number' placeholder='Phone Number' className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#DAD7CD]'/>
                    </div>
                    <div className='flex flex-col'>
                        <input type="text" name='Subject' placeholder='Subject' className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#DAD7CD]'/>
                    </div>
                    <div className='flex flex-col'>
                        <textarea rows={10} name='Message' placeholder='Message' className='border-2 rounded-lg p-3 flex border-gray-300 bg-[#DAD7CD]'/>
                    </div>
                    <input type="submit" value="Submit" className="bg-[#588157] text-white px-4 py-2 rounded hover:bg-[#3A5A40]" />
                </div>
            </form>
        </div>
    </div>
  )
}
