import Navigation from "./Navigation";
import Footer from "./Footer";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import womanSmile from "../assets/Images/womanSmile.png";
import food from "../assets/Images/foodOnDelivery.png";
import uberEats from "../assets/Images/uberEats.jpg";
import manSmile from "../assets/Images/manSmile.jpg";
import delivered from "../assets/Images/delivered-goods.jpg";
import FadeInSection from "./FadeInSection";

const Service: React.FC = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <Navigation />

      {/* Hero Section */}
      <FadeInSection className="testimonials-bg-img" fadeDelay={200}>
        <div className="text-center mt-16 md:mt-32 lg:mt-40 mb-16 px-4 md:px-8 lg:px-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#7a1212]">
            Reliable Courier Service
          </h1>
          <p className="mt-4 sm:mt-6 lg:mt-8 mx-auto text-sm md:text-base lg:text-lg max-w-2xl text-white">
            Swift Delivery offers top-tier courier service with diverse fleet for secure international and domestic deliveries.
          </p>
        </div>
      </FadeInSection>

      {/* Services Section */}
      <FadeInSection fadeDelay={400}>
        <div className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5 font-bold text-[#7a1212]">
              Swift Delivery Services
            </h1>
            <p className="text-sm md:text-base lg:text-lg mx-auto text-gray-700 dark:text-gray-300 max-w-2xl">
              Top-tier courier service excelling in same-day and next-day delivery with exceptional customer service.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-8 md:gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <img src={womanSmile} alt="Smiling woman" className="rounded-3xl w-full lg:w-auto max-w-full" loading="lazy" />
            </div>
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 lg:w-1/2">
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#7a1212]">
                  On-Demand Delivery Services
                </h1>
                <p className="text-sm sm:text-base mt-2 text-gray-700 dark:text-gray-300">
                  Meeting growing demands with on-demand delivery solutions for various courier and package services.
                </p>
              </div>

              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#7a1212]">
                  E-commerce Delivery Services
                </h1>
                <p className="text-sm sm:text-base mt-2 text-gray-700 dark:text-gray-300">
                  Specializing in efficient and reliable e-commerce delivery solutions for domestic and international needs.
                </p>
              </div>

              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#7a1212]">
                  Food Delivery Services
                </h1>
                <p className="text-sm sm:text-base mt-2 text-gray-700 dark:text-gray-300">
                  Providing secure and timely food delivery services with a diverse fleet of skilled riders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Additional Services Section */}
      <div className="px-4 md:px-8 lg:px-16 mb-12 md:mb-16 lg:mb-20">
        <div className="text-center my-12 md:my-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5 font-bold text-[#7a1212]">
            Additional Services
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300">
            Top-tier courier service excels in same-day and next-day delivery.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12 lg:gap-16 grid-cols-1 md:grid-cols-2">
          <FadeInSection className="flex flex-col gap-4" fadeDelay={600}>
            <img src={food} alt="Food delivery" className="rounded-3xl max-w-full" loading="lazy" />
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md transition-colors duration-300">
              <div className="flex justify-between items-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#7a1212]">
                  Package delivery services
                </h1>
                <FaArrowRight className="text-red-600 transition-transform transform hover:scale-105 hover:text-red-500 duration-300" />
              </div>
              <p className="text-sm sm:text-base mt-2 text-gray-700 dark:text-gray-300">
                Specializing in efficient and reliable food delivery solutions for customers.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection className="flex flex-col gap-4" fadeDelay={800}>
            <img src={uberEats} alt="Uber Eats" className="rounded-3xl max-w-full" loading="lazy" />
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md transition-colors duration-300">
              <div className="flex justify-between items-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#7a1212]">
                  Express messenger services
                </h1>
                <FaArrowRight className="text-[#7a1212] transition-transform transform hover:scale-105 hover:text-red-500 duration-300" />
              </div>
              <p className="text-sm sm:text-base mt-2 text-gray-700 dark:text-gray-300">
                Providing secure and timely grocery delivery options for convenience.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection className="flex flex-col gap-4" fadeDelay={1000}>
            <img src={delivered} alt="Delivered goods" className="rounded-3xl max-w-full" loading="lazy" />
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md transition-colors duration-300">
              <div className="flex justify-between items-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#7a1212]">
                  Courier delivery services
                </h1>
                <FaArrowRight className="text-[#7a1212] transition-transform transform hover:scale-105 hover:text-red-500 duration-300" />
              </div>
              <p className="text-sm sm:text-base mt-2 text-gray-700 dark:text-gray-300">
                Delivering online orders promptly and securely for customer satisfaction.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection className="flex flex-col gap-4" fadeDelay={1200}>
            <img src={manSmile} alt="Man smiling" className="rounded-3xl max-w-full" loading="lazy" />
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md transition-colors duration-300">
              <div className="flex justify-between items-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#7a1212]">
                  Grocery delivery service
                </h1>
                <FaArrowRight className="text-[#7a1212] transition-transform transform hover:scale-105 hover:text-red-500 duration-300" />
              </div>
              <p className="text-sm sm:text-base mt-2 text-gray-700 dark:text-gray-300">
                Offering flexible and convenient on-demand delivery solutions for various needs.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Service;
