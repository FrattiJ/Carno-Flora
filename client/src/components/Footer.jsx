import React from 'react';

const Footer = () => {
  return (
    <div className='w-full m-auto h-full w-full flex flex-col justify-center items-center bg-[#344E41]'>
      <div className='flex sm:text-xl text-lg pt-4 text-zinc-900'>Contact Information:</div>
      <ul className='flex sm:text-lg text-base justify-around items-center max-w-[600px] w-full pb-4 text-zinc-800'>
        <a href=""><li >example@example.com</li></a>
        <a href=""><li>(123) 456-7890</li></a>
      </ul>
    </div>
  );
};

export default Footer;
