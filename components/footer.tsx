import { socialMedia } from '@/data';
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full py-10" id="contact">
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
        {socialMedia.map(({ id, img, name, link }) => (
          <a key={id} href={link} className="flex md:max-w-60 max-w-32 gap-2">
            <img src={img} alt={name} className="md:w-10 w-5" />
          </a>
        ))}
      </div>

      <div className='flex mt-10 md:flex-row flex-col justify-center items-center'>
        <p className='font-mono text-sm font-light md:font-normal'>Copyright © 2025 Jesse</p>
      </div>
    </footer>
  );
};

export default Footer