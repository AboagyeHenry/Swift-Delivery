import Navigation from "./Navigation";
import Footer from "./Footer";

import walk from "../assets/Images/walk.png";
import map from "../assets/Images/map.png";
import truck from "../assets/Images/track-img.png";
import service from "../assets/Images/service.png";
import manRideCart from "../assets/Images/man-ride-cart.png";
import push from "../assets/Images/push-cart.png";
import manRide from "../assets/Images/man-ride.png";
import packaBoxes from "../assets/Images/packgeBoxes.png";

const Contact = () => {
  return (
    <div>
      <Navigation />

      {/* Contact Us Section */}
      <div className="mt-20 md:mt-40 px-4 md:px-0">
        <div className="text-center">
          <h1 className="text-3xl text-[#7a1212] sm:text-4xl md:text-5xl font-bold mb-4 mx-auto">
            Contact Us for Swift Delivery Services
          </h1>
          <p className="text-sm md:text-base mt-4">
            Reach out to us for reliable courier and delivery services today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-10 xl-custom: my-16 md:my-20 px-4 md:px-0">
          <div className="px-8 py-10 w-full lg:w-[30rem] md:w-[30rem] md:mx-20 rounded-xl bg-blue-50">
            <form>
              <div className="mb-4">
                <label className="block text-lg text-black mb-2">
                  Enter your full name here
                </label>
                <input
                  type="text"
                  className="w-full text-sm p-3 border md:w-96 rounded-lg focus:outline-none focus:border-purple-600"
                  placeholder="Swift Delivery"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg text-black mb-2">
                  Enter your email address*
                </label>
                <input
                  type="email"
                  className="w-full text-sm p-3 border md:w-96 rounded-lg focus:outline-none focus:border-purple-600"
                  placeholder="example@example.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-lg text-black mb-2">Message*</label>
                <textarea
                  className="w-full h-24 p-3 border md:w-96 text-sm rounded-lg focus:outline-none focus:border-purple-600"
                  rows={4}
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-52 bg-[#7a1212] text-white py-3 rounded-full hover:bg-[#7a1212] transition-colors duration-300"
              >
                Submit Form Now
              </button>
            </form>
          </div>

          <img
            src={walk}
            alt="walk"
            className="w-full md:w-[30rem] lg:w-auto rounded-xl"
          />
        </div>
      </div>

      {/* Location Section */}
      <div className="px-4 md:px-0 my-16 md:my-36 md:mx-44 lg:mx-10 xl:mx-56 xl-custom:mx-96">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-x-20">
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
            <img src={map} alt="Map" className="mx-auto lg:w-96 lg:mx-0 xl:w-[30rem]" />
          </div>
        </div>
      </div>

      {/* Swift Delivery Section */}
      <div className="container mx-auto my-10 px-4 md:px-0">
        <h1 className="text-3xl text-[#7a1212] sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Swift Delivery
        </h1>
        <p className="text-center mb-8 text-sm md:text-base">
          Top-tier courier service excels in same-day and next-day delivery
          service.
        </p>

        <div className="flex flex-col gap-y-5 items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
            <img className="rounded-lg w-full md:w-96 lg:w-72" src={truck} alt="truck" />
            <img className="rounded-lg w-full md:w-96 lg:w-72" src={manRide} alt="manRide" />
            <img className="rounded-lg w-full md:w-96 lg:w-72" src={service} alt="service" />
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
            <img className="rounded-lg w-full md:w-96 lg:w-72" src={push} alt="push" />
            <img className="rounded-lg w-full md:w-96 lg:w-72" src={manRideCart} alt="manRideCart" />
            <img className="rounded-lg w-full md:w-96 lg:w-72" src={packaBoxes} alt="packageBoxes" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
