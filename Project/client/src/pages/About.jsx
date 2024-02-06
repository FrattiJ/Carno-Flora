import React from 'react'

export default function About () {
  return (
    <div>
        <div>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda odio voluptatum ullam at earum temporibus? Unde dolorum quas nulla! Quaerat, quis. Dolorum, expedita fuga sed necessitatibus ducimus fugit repellat voluptates.</p>
        </div>
        <div>
            <h2>Contact Us</h2>
            <form action="">
                <div className='grid md:grid-col-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <input type="text"  name='Full name' placeholder='Full Name' className='border-2 rounded-lg p-3 flex border-gray-300'/>
                    </div>
                    <div className='flex flex-col'>
                        <input type="Email" name='Email' placeholder='Email' className='border-2 rounded-lg p-3 flex border-gray-300'/>
                    </div>
                    <div className='flex flex-col'>
                        <input type="text" name='Phone Number' placeholder='Phone Number' className='border-2 rounded-lg p-3 flex border-gray-300'/>
                    </div>
                    <div className='flex flex-col'>
                        <input type="text" name='Subject' placeholder='Subject' className='border-2 rounded-lg p-3 flex border-gray-300'/>
                    </div>
                    <div className='flex flex-col'>
                        <textarea rows={10} name='Message' placeholder='Message' className='border-2 rounded-lg p-3 flex border-gray-300'/>
                    </div>
                    <input type="submit" value="Submit" className='border-2 rounded-lg p-3 border-gray-300 cursor-pointer' />
                </div>
            </form>
        </div>
    </div>
  )
}
