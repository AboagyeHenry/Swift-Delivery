import Navigation from "./Navigation";
import Footer from "./Footer";
import FadeInSection from "./FadeInSection";

import walk from "../assets/Images/walk.png";
import truck from "../assets/Images/track-img.png";
import service from "../assets/Images/service.png";
import manRideCart from "../assets/Images/man-ride-cart.png";
import push from "../assets/Images/push-cart.png";
import maskedMan from "../assets/Images/masked-man.jpg";
import packaBoxes from "../assets/Images/packgeBoxes.png";

import { FormEvent, useState } from 'react';


interface Errors {
  fullName?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = ():Errors => {
    const errors:Errors = {};
    if (!fullName) {
      errors.fullName = 'Please enter your full name';
    }
    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!message) {
      errors.message = 'Please enter a message';
    }
    return errors;
  };

  const handleSubmit = (event:  FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Form is valid, submit it
      console.log('Form submitted:', { fullName, email, message });
      // Clear inputs
      setFullName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <div>
      <Navigation />

      {/* Contact Us Section */}
      <FadeInSection className="testimonials-bg-img" fadeDelay={200}>
        <div className="text-center mt-40 mb-16 px-4 md:px-0 text-black">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Contact De-Swift
          </h1>
          <p className="w-full md:w-[30rem] mt-4 sm:mt-6 lg:mt-8 mx-auto text-sm md:text-base text-white">
          </p>
        </div>
      </FadeInSection>
      
      <div className="mt-20 md:mt-40 xl px-4 md:px-0">
        <div className="text-center">
          <h1 className="text-3xl text-[#7a1212] sm:text-4xl md:text-5xl font-bold mb-4 mx-auto">
            Contact Us for Swift Delivery Services
          </h1>
          <p className="text-sm md:text-base mt-4">
            Reach out to us for reliable courier and delivery services today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-8 xl-custom: my-16 md:my-20 px-4 xl:mr-36 md:px-0">
          <FadeInSection className="px-8 py-10 w-full lg:w-[30rem] md:w-[30rem] md:mx-20 rounded-xl bg-blue-50" fadeDelay={400}>
            <form action="https://formspree.io/f/myzgpqrq" method="POST" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-lg text-black mb-2">
                  Enter your full name here
                </label>
                <input
                  type="text"
                  name="name"
                  className={`w-full text-sm p-3 border md:w-96 rounded-lg focus:outline-none focus:border-purple-600 ${
                    errors.fullName ? 'border-red-500' : ''
                  }`}
                  placeholder="Swift Delivery"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-lg text-black mb-2">
                  Enter your email address*
                </label>
                <input
                  type="email"
                  name="email"
                  className={`w-full text-sm p-3 border md:w-96 rounded-lg focus:outline-none focus:border-purple-600 ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="example@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                )}
              </div>
              <div className="mb-6">
                <label className="block text-lg text-black mb-2">
                  Message*
                </label>
                <textarea
                  className={`w-full h-24 p-3 border md:w-96 text-sm rounded-lg focus:outline-none focus:border-purple-600 ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                  rows={4}
                  placeholder="Your Message"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full md:w-52 bg-[#7a1212] text-white py-3 rounded-full hover:bg-[#7a1212] transition-colors duration-300"
              >
                Submit Form Now
              </button>
            </form>
          </FadeInSection>

          <FadeInSection fadeDelay={600}>
            <img
              src={walk}
              alt="walk"
              className="w-full md:w-[30rem] lg:w-auto rounded-xl"
            />
          </FadeInSection>
        </div>
      </div>

      {/* Location Section */}
      <FadeInSection className="px-4 md:px-0 my-16 md:my-36 md:mx-44 lg:mx-10 xl-custom:mx-40 flex justify-center" fadeDelay={800}>
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
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?width=550&amp;height=350&amp;hl=en&amp;q=Accra+(De-Swift)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps devices</a>
              </iframe>
            </div>
          </div>
        </div>
      </FadeInSection>

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
            <FadeInSection fadeDelay={1000}>
              <img
              className="rounded-lg w-full lg:w-72 xl:w-[22rem] md:w-96"
              src={truck}
              alt="truck"
            />
            </FadeInSection>

            <FadeInSection fadeDelay={1200}>
            <img
                            className="rounded-lg w-full lg:w-72 xl:w-[22rem] md:w-96"
                            src={maskedMan}
                            alt="maskedMan"
                          />
                          </FadeInSection>
              
                          <FadeInSection fadeDelay={1400}>
                          <img
                            className="rounded-lg w-full lg:w-72 xl:w-[22rem] md:w-96"
                            src={service}
                            alt="service"
                          />
                          </FadeInSection>
                        </div>
              
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
                        <FadeInSection fadeDelay={1600}>
                          <img
                            className="rounded-lg w-full lg:w-72 xl:w-[22rem] md:w-96"
                            src={push}
                            alt="push"
                          />
                          </FadeInSection>
              
                          <FadeInSection fadeDelay={1800}>
                          <img
                            className="rounded-lg w-full lg:w-72 xl:w-[22rem] md:w-96"
                            src={manRideCart}
                            alt="manRideCart"
                          />
                          </FadeInSection>
              
                          <FadeInSection fadeDelay={2000}>
                          <img
                            className="rounded-lg w-full lg:w-72 xl:w-[22rem] md:w-96"
                            src={packaBoxes}
                            alt="packaBoxes"
                          />
                          </FadeInSection>
                        </div>
                      </div>
                    </div>
              
                    <Footer />
                  </div>
                );
              };
              
              export default Contact;