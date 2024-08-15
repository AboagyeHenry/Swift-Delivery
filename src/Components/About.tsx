import Navigation from "./Navigation";
import Footer from "./Footer";

import helmet from "../assets/Images/helmet.png";
import map from "../assets/Images/map.png";

const About = () => {
  return (
    <div>
      <Navigation />

      {/* Introduction Section */}
      <div className="flex flex-col md:flex-col lg:flex-row lg:mx-10 xl-custom:mx-[12rem] items-center justify-center gap-10 md:gap-x-24 my-24 md:my-32 px-4 md:px-0">
        <div className="text-center md:text-left">
          <h1 className="text-3xl text-[#7a1212] sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug">
            Swift Delivery - Reliable Courier Service
          </h1>
          <p className="w-full md:w-[30rem] md:mx-auto md:text-center lg:text-start lg:mx-0 text-sm md:text-base">
            Swift Delivery is a top-tier courier service, excels in same-day and
            next-day delivery service. Committed to exceptional customer service
            and secure deliveries, we’re the trusted choice for international
            and domestic courier needs.
          </p>
          <button className="border-[1px] border-black py-2 px-4 md:mx-56 lg:mx-0 w-48 mt-5 rounded-full">
            Contact
          </button>
        </div>
        <div className="w-full md:w-auto">
          <img src={helmet} alt="Helmet" className="mx-auto md:mx-0" />
        </div>
      </div>

      {/* Location Section */}
      <div className="px-4 md:px-0 md:mx-12 lg:mx-48 my-16">
        <div className="flex flex-col lg:flex-col xl:flex-row gap-10 md:gap-x-20">
          <div>
            <h1 className="text-3xl text-[#7a1212] sm:text-4xl md:text-5xl font-bold">
              Location Title
            </h1>
            <p className="w-full md:w-[30rem] my-4 text-sm md:text-base">
              Swift Delivery is strategically located to serve both domestic and
              international courier needs with efficiency and reliability.
            </p>
            <h3 className="font-bold text-lg sm:text-xl mt-6 md:mt-10">
              Service
            </h3>
            <p className="mb-6 md:mb-10 text-sm md:text-base">
              123 Main Street, City
            </p>
            <h3 className="font-bold text-lg sm:text-xl mt-6 md:mt-10">
              Hours
            </h3>
            <p className="text-sm md:text-base">Mon-Fri: 9am-5pm</p>
          </div>
          <div className="w-full md:w-auto">
            <img src={map} alt="Map" className="mx-auto lg:mx-0" />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 md:py-20 px-4 md:px-0 md:mx-12 lg:mx-48">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-3xl text-[#7a1212] sm:text-4xl md:text-5xl font-bold">Top Courier</h1>
          <p className="text-sm md:text-base">
            Leading courier service excelling in same-day and next-day
            deliveries with exceptional customer service.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-x-5">
          <div className="w-full lg:w-[40rem] h-72 border border-none py-8 px-8 bg-blue-50">
            <div className="text-xs text-[#7a1212] md:text-xl mb-4 font-semibold">★★★★★</div>
            <p className="mb-12 text-sm md:text-base">
              Fast and efficient service. Jess Express Limited always delivers
              on time.
            </p>
            <div className="flex gap-4 items-center">
              <img src={helmet} alt="Satisfied Client" className="w-12 sm:w-14 rounded-full" />
              <div>
                <h3 className="font-bold text-sm md:text-base">Satisfied Client</h3>
                <p className="text-xs md:text-sm">Los Angeles</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[40rem] h-72 border border-none py-8 px-8 bg-blue-50">
            <div className="text-xs text-[#7a1212] md:text-xl mb-4 font-semibold">★★★★★</div>
            <p className="mb-12 text-sm md:text-base">
              Fast and efficient service. Jess Express Limited always delivers
              on time.
            </p>
            <div className="flex gap-4 items-center">
              <img src={helmet} alt="Happy Customer" className="w-12 sm:w-14 rounded-full" />
              <div>
                <h3 className="font-bold text-sm md:text-base">Happy Customer</h3>
                <p className="text-xs md:text-sm">New York</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
