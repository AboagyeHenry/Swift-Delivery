import Navigation from "./Navigation";
import Footer from "./Footer";

//Imported Images
import deliveryMan from "../assets/Images/delivery-man.png";
import deliveryPackage from "../assets/Images/delivery-package.png";
import deliveryBoat from "../assets/Images/boat-delivery.png";
import image from "../assets/Images/image.png";
import victorianBuildings from "../assets/Images/Victorian-Buildings-London.jpg";
import pharmacyDelivery from "../assets/Images/Pharmacy-delivery.jpg";
import truck from "../assets/Images/track-img.png";
import service from "../assets/Images/service.png";
import manRideCart from "../assets/Images/man-ride-cart.png";
import push from "../assets/Images/push-cart.png";
import manRide from "../assets/Images/man-ride.png";
import packaBoxes from "../assets/Images/packgeBoxes.png";
import offload from "../assets/Images/Offload-Goods.mp4";

const Home: React.FC = () => {
  return (
    <div>
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-cover mb-44 md:mb-56 pt-20 bg-center h-[150vh] xl-custom:h-[110vh]">
        <video
          className="absolute top-0 left-0 w-full h-[170vh] md:h-[190vh] xl-custom:h-[110vh] object-cover"
          autoPlay
          loop
          muted
        >
          <source src={offload} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto h-full flex flex-col lg:flex lg:flex-row items-center justify-around px-4 md:px-12">
          {/* Text Section */}
          <div className="text-white mt-5 max-w-lg md:mx-40 lg:mx-10 mb-12 md:mb-0">
            <div className="text-xs md:text-xl xl-custom:text-xl-custom font-semibold text-yellow-500">★★★★★</div>
            <p className="w-full md:w-72 text-sm md:text-base mb-3">
              Trusted choice for international and domestic courier needs.
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-5xl xl-custom:text-7xl font-bold mb-4 text-[#7a1212]">
              Swift Delivery: Reliable Courier Services
            </h1>

            <div className="mt-6 md:mt-12">
              <p className="text-sm md:text-base w-full md:w-4/5 mb-6 md:mb-10">
                Top-tier courier service excelling in same-day and next-day
                delivery with a diverse fleet of skilled riders.
              </p>

              <button
                type="submit"
                className="w-44 xl-custom:w-65 md:w-52 text-lg md:text-xl bg-[#7a1212] text-white py-1 xl-custom:py-4 rounded-full hover:bg-orange-red transition-colors duration-300"
              >
                Get
              </button>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-slate-400 bg-opacity-20 p-8 rounded-lg shadow-lg w-full md:mt-10 md:w-96 xl-custom:w-[30rem] max-w-7xl">
  <h2 className="text-white text-xl md:text-xl-custom mb-4">
    Swift Delivery Form Section
  </h2>
  <form>
    <div className="mb-4">
      <label htmlFor="name" className="block text-sm md:text-sm xl-custom:text-lg text-white mb-2">
        Enter your name here
      </label>
      <input
        id="name"
        type="text"
        name="name"
        className="w-full md:w-80 text-base lg:w-80 lg:text-sm md:text-sm xl-custom:w-[26rem] xl-custom:text-lg p-3 border rounded-lg focus:outline-none focus:border-red-600"
        placeholder="Your Name"
        required
        minLength={2}
        maxLength={50}
      />
      <p className="text-red-500 text-xs hidden" id="name-error">Name must be between 2 and 50 characters long.</p>
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm xl-custom:text-lg text-white mb-2">
        Email Address*
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="w-full md:w-80 text-base lg:w-80 lg:text-sm md:text-sm xl-custom:w-[26rem] xl-custom:text-lg p-3 border rounded-lg focus:outline-none focus:border-red-600"
        placeholder="Your Email"
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        aria-describedby="email-error"
      />
      <p className="text-red-500 text-xs hidden" id="email-error">Please enter a valid email address.</p>
    </div>
    <div className="mb-4">
      <label htmlFor="phone" className="block text-sm xl-custom:text-lg text-white mb-2">
        Phone number*
      </label>
      <input
        id="phone"
        type="tel"
        name="phone"
        className="w-full md:w-80 text-base lg:w-80 lg:text-sm md:text-sm xl-custom:w-[26rem] xl-custom:text-lg p-3 border rounded-lg focus:outline-none focus:border-red-600"
        placeholder="Your Phone Number"
        required
        pattern="[0-9]{10,15}"
        aria-describedby="phone-error"
      />
      <p className="text-red-500 text-xs hidden" id="phone-error">Phone number must be between 10 and 15 digits.</p>
    </div>
    <div className="mb-6">
      <label htmlFor="message" className="block text-sm xl-custom:text-lg text-white mb-2">
        Message*
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full md:w-80 h-20 p-3 border text-base lg:w-80 lg:text-sm xl-custom:w-[26rem] xl-custom:text-lg  md:text-lg rounded-lg focus:outline-none focus:border-red-600"
        rows={4}
        placeholder="Your Message"
        required
        minLength={10}
        maxLength={500}
        aria-describedby="message-error"
      ></textarea>
      <p className="text-red-500 text-xs hidden" id="message-error">Message must be between 10 and 500 characters long.</p>
    </div>
    <button
      type="submit"
      className="w-56 lg:py-3 md:w-56 md:mx-12 lg:mx-4 bg-transparent border-2 border-white text-white py-2 rounded-full hover:bg-red-600 transition-colors duration-300"
    >
      Submit Form Now
    </button>
  </form>
</div>

        </div>
      </div>

      {/* Swift Delivery Your Trusted Service */}
      <div className="bg-white mt-32 px-5 md:py-20 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-start lg:flex flex-row lg:justify-center md:text-center gap-10">
            <h1 className="text-3xl md:text-5xl font-bold text-[#7a1212]">
              Swift Delivery: Your Trusted Courier Service
            </h1>
            <div>
              <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 max-w-xl-custom mx-auto">
                Providing top-tier courier services for same-day and next-day
                delivery. Our diverse fleet ensures reliability for all your
                delivery needs, both domestic and international.
              </p>
              <div className="mt-8 md:mt-12 flex justify-center space-x-8">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-[#7a1212]">
                    150+
                  </p>
                  <p className="mt-2 text-lg text-gray-600">
                    Efficient Solutions
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-[#7a1212]">
                    15
                  </p>
                  <p className="mt-2 text-lg text-gray-600">
                    Reliable and Secure
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 mb-5 ">
            <img className="rounded-xl-custom md:h-full mx-auto" src={image} alt="image" />
          </div>
        </div>
      </div>

      {/* Swift Delivery Service Section */}
      <div className="bg-[#e8f0fe] py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl md:mx-44 lg:mx-14 xl-custom:mx-56 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7a1212]">
            Swift Delivery Services
          </h2>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Top-tier courier service excels in same-day and next-day delivery.
            Diverse fleet ensures reliability.
          </p>
          <div className="mt-8 md:mt-12 flex flex-col lg:flex-row gap-y-10 gap-8">
            {/* Card 1 */}
            <div className="overflow-hidden">
              <img
                src={deliveryMan}
                alt="deliveryMan"
                className="w-full h-80 rounded-lg object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-start font-semibold text-gray-900">
                  E-commerce Delivery Services
                </h3>
                <p className="mt-2 text-start text-gray-600">
                  Specializing in efficient and reliable e-commerce delivery
                  solutions for domestic and international needs.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={deliveryBoat}
                alt="deliveryBoat"
                className="w-full h-80 rounded-lg object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-start font-semibold text-gray-900">
                  Package Delivery Services
                </h3>
                <p className="mt-2 text-start text-gray-600">
                  Providing secure and timely package delivery solutions for
                  various courier needs and requirements.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={deliveryPackage}
                alt="deliveryPackage-img"
                className="w-full lg:w-[900px] h-80 rounded-lg object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-start font-semibold text-gray-900">
                  Secure Courier Delivery
                </h3>
                <p className="mt-2 text-start text-gray-600">
                  Express Messenger Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {/* Testimonials */}
      <div className="bg-[#6e727a] py-10 md:py-20 px-4 md:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 text-center">
            <div className="flex justify-center">
              <div className="flex flex-col items-center">
                <div className="text-xl md:text-3xl text-[#7a1212] font-semibold mb-1">
                  ★★★★★
                </div>
                <p className="text-sm w-46 mt-2 mb-4 ">
                  Reliable and efficient service, always on time with
                  deliveries. Highly recommend Swift Delivery for all your
                  courier needs.
                </p>
                <img
                  className="w-16 h-16 rounded-full"
                  src={victorianBuildings}
                  alt=""
                />
                <p>Satisfied Customer</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-col items-center">
                <div className="text-xl md:text-3xl text-[#7a1212] font-semibold mb-1">
                  ★★★★★
                </div>
                <p className="text-sm w-46 mt-2 mb-4 ">
                  Reliable and efficient service, always on time with
                  deliveries. Highly recommend Swift Delivery for all your
                  courier needs.
                </p>
                <img
                  className="w-16 h-16 rounded-full"
                  src={pharmacyDelivery}
                  alt=""
                />
                <p>Satisfied Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Swift Delivery */}
      <div className="container mx-auto my-10 p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Swift Delivery</h1>
        <p className="text-center mb-8">
          Top-tier courier service excels in same-day and next-day delivery
          service.
        </p>

        <div className="flex flex-col items-center gap-y-5">
          {/* First Row */}
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex lg:flex-row lg:flex-nowrap justify-center items-center gap-5">
            <img
              className="rounded-lg w-full lg:w-72 xl:w-96 md:w-1/3"
              src={truck}
              alt="truck"
            />
            <img
              className="rounded-lg w-full lg:w-72 xl:w-96 md:w-1/3"
              src={manRide}
              alt="manRide"
            />
            <img
              className="rounded-lg w-full lg:w-72 xl:w-96 md:w-1/3"
              src={service}
              alt="service"
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex lg:flex-row lg:flex-nowrap justify-center items-center gap-5">
            <img className="rounded-lg w-full md:w-1/3 lg:w-72 xl:w-96" src={push} alt="push" />
            <img
              className="rounded-lg w-full md:w-1/3 lg:w-72 xl:w-96"
              src={manRideCart}
              alt="manRideCart"
            />
            <img
              className="rounded-lg w-full md:w-1/3 lg:w-72 xl:w-96"
              src={packaBoxes}
              alt="packageBoxes"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
