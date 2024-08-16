import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className='bg-black py-20 px-5 xl:px-40 lg:px-10'>
      <div className="flex flex-col lg:flex-row gap-y-10 gap-x-20 xl:gap-x-20 md:gap-x-5 text-white">
        <div>
          <h1 className='text-xl-custom font-bold'>Reliable</h1>
          <p className='w-full lg:w-80 py-5'>Top-tier courier service excels in same-day and next-day delivery.</p>
          <div className="flex text-2xl gap-x-5">
            <FaFacebook className='text-yellow-500' aria-label="Facebook" />
            <FaYoutube className='text-yellow-500' aria-label="YouTube" />
            <FaInstagram className='text-yellow-500' aria-label="Instagram" />
            <FaTiktok className='text-yellow-500' aria-label="TikTok" />
            <FaTwitter className='text-yellow-500' aria-label="Twitter" />
          </div>
          <p className='mt-10 lg:mt-20'>© 2024. All rights reserved.</p>
        </div>

        <div>
          <h1 className='text-lg font-bold'>Efficient</h1>
          <p className='w-full lg:w-80 py-5'>Info@de-swift.com</p>
        </div>

        <div>
          <h1 className='text-lg font-bold mb-5'>Secure</h1>
          <label htmlFor="email-updates" className="block mb-2">Enter your email address for updates</label>
          <input
            id="email-updates"
            className='py-4 px-5 text-black w-full xl:w-96 lg:w-60 lg:text-sm outline-none rounded-lg'
            type="email"
            placeholder='Your email address here for updates'
            name="email"
            aria-label="Enter your email address for updates"
          />
          <button className='rounded-3xl bg-[#7a1212] py-3 px-5 text-sm mt-5 hover:bg-[#7a1212] transition'>
            Subscribe for Latest Updates
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
