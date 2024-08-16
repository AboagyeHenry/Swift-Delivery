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
          <img
            src={helmet}
            alt="Helmet"
            className="mx-auto rounded-2xl md:mx-0"
          />
        </div>
      </div>

      {/* Mission, Vision, and Extension Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 md:mx-12 lg:mx-48 my-16">
  <h1 className="text-3xl text-[#7a1212] sm:text-4xl md:text-5xl font-bold mb-6 text-center">
    Our Mission, Vision, and Extension
  </h1>
  <div className="flex flex-col lg:flex-row justify-center gap-10 md:gap-x-20">
    
    <div className="lg:w-1/2 xl:w-1/2">
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">Vision</h2>
      <p className="text-sm md:text-base text-center">
        To become the preferred courier service known for our swiftness,
        reliability, and commitment to customer’s satisfaction, fostering
        growth and convenience in every delivery.
        <br />
        <br />
        To extend our service beyond the borders of Ghana by providing
        quality delivery service to the doorsteps of our cherished
        customers.
      </p>
    </div>

    <div className="lg:w-1/2 xl:w-1/2">
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">Mission</h2>
      <p className="text-sm md:text-base text-center">
        To provide efficient and dependable courier service, connecting
        businesses and individuals with seamless and rapid delivery
        experience.
      </p>
    </div>

  </div>
</div>

      {/* Location Section */}
      <div className="px-4 md:px-0 my-16 md:my-36 md:mx-44 lg:mx-10 xl-custom:mx-40 flex justify-center">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-x-10  mx-auto">
          <div className="w-full">
            <h1 className="text-3xl text-[#7a1212] sm:text-4xl md:text-5xl lg:text-start font-bold text-center">
              Location Title
            </h1>
            <p className="text-sm md:text-base lg:text-start text-center">
              Swift Delivery is strategically located to serve both domestic and
              international courier needs with efficiency and reliability.
            </p>
            <h3 className="font-bold text-lg lg:text-start sm:text-xl mt-6 md:mt-10 text-center">
              Service
            </h3>
            <p className="mb-6 md:mb-10 lg:text-start text-sm md:text-base text-center">
              123 Main Street, City
            </p>
            <h3 className="font-bold lg:text-start text-lg sm:text-xl mt-6 md:mt-10 text-center">
              Hours
            </h3>
            <p className="text-sm lg:text-start md:text-base text-center">
              Mon-Fri: 9am-5pm
            </p>
          </div>
          <div className="w-full md:w-auto">
            <div className="w-72 md:w-[28rem] lg:w-[30rem] xl-custom:w-[35rem] mx-auto">
              <iframe
                width="100%"
                height="350"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=550&amp;height=350&amp;hl=en&amp;q=Accra+(De-Swift)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps devices</a>
              </iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 md:py-20 px-4 md:px-0 md:mx-12 lg:mx-48">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-3xl text-[#7a1212] sm:text-4xl md:text-5xl font-bold">
            Top Courier
          </h1>
          <p className="text-sm md:text-base">
            Leading courier service excelling in same-day and next-day
            deliveries with exceptional customer service.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-x-5">
          <div className="w-full lg:w-[40rem] h-72 border border-none py-8 px-8 bg-blue-50">
            <div className="text-xs text-yellow-500 md:text-xl mb-4 font-semibold">
              ★★★★★
            </div>
            <p className="mb-12 text-sm md:text-base">
              Fast and efficient service. Jess Express Limited always delivers
              on time.
            </p>
            <div className="flex gap-4 items-center">
              <img
                src={helmet}
                alt="Satisfied Client"
                className="w-12 sm:w-14 rounded-full"
              />
              <div>
                <h3 className="font-bold text-sm md:text-base">
                  Satisfied Client
                </h3>
                <p className="text-xs md:text-sm">Los Angeles</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[40rem] h-72 border border-none py-8 px-8 bg-blue-50">
            <div className="text-xs text-yellow-500 md:text-xl mb-4 font-semibold">
              ★★★★★
            </div>
            <p className="mb-12 text-sm md:text-base">
              Fast and efficient service. Jess Express Limited always delivers
              on time.
            </p>
            <div className="flex gap-4 items-center">
              <img
                src={helmet}
                alt="Happy Customer"
                className="w-12 sm:w-14 rounded-full"
              />
              <div>
                <h3 className="font-bold text-sm md:text-base">
                  Happy Customer
                </h3>
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
