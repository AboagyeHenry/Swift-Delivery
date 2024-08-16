import Navigation from "./Navigation";
import Footer from "./Footer";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

import womanSmile from "../assets/Images/womanSmile.png";
import food from "../assets/Images/foodOnDelivery.png";
import uberEats from "../assets/Images/uberEats.jpg";
import manSmile from "../assets/Images/manSmile.jpg"
import delivered from "../assets/Images/delivered-goods.jpg"

const Service: React.FC = () => {
  return (
    <div>
      <Navigation />

      {/* Hero Section */}
      <div className="testimonials-bg-img">
      <div className="text-center mt-40 mb-16 px-4 md:px-0 text-black">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7a1212]">Reliable Courier Service</h1>
        <p className="w-full md:w-[30rem] mt-4 sm:mt-6 lg:mt-8 mx-auto text-sm md:text-base text-white">
          Swift Delivery offers top-tier courier service with diverse fleet for secure international and domestic deliveries.
        </p>
      </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100 py-12 md:py-20 px-4 md:px-0">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-5 font-bold text-[#7a1212]">Swift Delivery Services</h1>
          <p className="text-sm md:text-base md:w-[30rem] mx-auto text-gray-700">
            Top-tier courier service excelling in same-day and next-day delivery with exceptional customer service.
          </p>
        </div>

        <div className="flex flex-col md:flex-col lg:flex-row lg:mx-10 justify-center items-center gap-8 md:gap-20">
          <div className="w-full md:w-auto">
            <img src={womanSmile} alt="Smiling woman" className="rounded-3xl w-full xl:w-[40rem] md:w-96" />
          </div>
          <div className="flex flex-col md:ml-24 lg:ml-0 xl:ml-0 gap-6 md:gap-10">
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-[#7a1212]">On-Demand Delivery Services</h1>
              <p className="text-sm sm:text-base w-full md:w-[30rem] mt-2 text-gray-700">
                Meeting growing demands with on-demand delivery solutions for various courier and package services.
              </p>
            </div>

            <div>
              <h1 className="text-lg sm:text-xl font-bold text-[#7a1212]">E-commerce Delivery Services</h1>
              <p className="text-sm sm:text-base w-full md:w-[30rem] mt-2 text-gray-700">
                Specializing in efficient and reliable e-commerce delivery solutions for domestic and international needs.
              </p>
            </div>

            <div>
              <h1 className="text-lg sm:text-xl font-bold text-[#7a1212]">Food Delivery Services</h1>
              <p className="text-sm sm:text-base w-full md:w-[30rem] mt-2 text-gray-700">
                Providing secure and timely food delivery services with a diverse fleet of skilled riders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="px-4 md:px-0 mb-12 md:mb-20">
        <div className="text-center my-12 md:my-16">
          <h1 className="text-3xl text-[#7a1212] sm:text-4xl lg:text-5xl mb-4 sm:mb-5 font-bold text-text-[#7a1212]">Additional Services</h1>
          <p className="text-sm md:text-base text-gray-700">
            Top-tier courier service excels in same-day and next-day delivery.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mx-auto">
            <div className="flex flex-col gap-4">
              <img src={food} alt="Food delivery" className="rounded-3xl xl:w-[35rem] md:w-96 lg:w-96" />
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg sm:text-xl-custom font-bold text-[#7a1212]">Package delivery services</h1>
                  <FaArrowRight className="text-red-600" />
                </div>
                <p className="text-sm sm:text-base w-full md:w-96 mt-2 text-gray-700">
                  Specializing in efficient and reliable food delivery solutions for customers.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <img src={uberEats} alt="Uber Eats" className="rounded-3xl xl:w-[35rem] md:w-96 lg:w-96" />
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg sm:text-xl-custom font-bold text-[#7a1212]">Express messenger services</h1>
                  <FaArrowRight className="text-text-[#7a1212]" />
                </div>
                <p className="text-sm sm:text-base w-full md:w-96 mt-2 text-gray-700">
                  Providing secure and timely grocery delivery options for convenience.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mx-auto">
            <div className="flex flex-col gap-4">
              <img src={delivered} alt="delivered" className="rounded-3xl xl:w-[35rem] md:w-96 lg:w-96" />
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg sm:text-xl-custom font-bold text-[#7a1212]">Courier delivery services
                  </h1>
                  <FaArrowRight className="text-text-[#7a1212]" />
                </div>
                <p className="text-sm sm:text-base w-full md:w-96 mt-2 text-gray-700">
                  Delivering online orders promptly and securely for customer satisfaction.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <img src={manSmile} alt="man-smile" className="rounded-3xl xl:w-[35rem] md:w-96 lg:w-96" />
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg sm:text-xl-custom font-bold text-[#7a1212]">⁠Grocery delivery service</h1>
                  <FaArrowRight className="text-[#7a1212]" />
                </div>
                <p className="text-sm sm:text-base w-full md:w-96 mt-2 text-gray-700">
                  Offering flexible and convenient on-demand delivery solutions for various needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Service;
