import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Updated import

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <div className="flex flex-col md:flex-row">
        <div className="w-full text-4xl font-bold mb-6 text-gray-900">
          Trusted by over 8M sellers around the world
        </div>
        <div className="w-full text-lg font-semibold text-gray-600 mb-12 p-10">
          Whether you are just getting started or run an enterprise-level
          e-commerce business, we do everything we can to ensure a positive
          merchant experience.
        </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {/* Testimonial 1 */}
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-md p-6 mx-5">
              <div className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://th.bing.com/th/id/OIP.Y-RGBqybuZiPyl3Qh-uksgAAAA?pid=ImgDet&w=179&h=179&c=7&dpr=1.3"
                  alt="Nikki"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold">Nikki</h3>
                  <a href="#" className="text-green-500">
                    Store link
                  </a>
                  <div className="flex mt-1 text-yellow-400">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                Printify has been an amazing partner to work with as we grow our
                business, from the range of merch we can make for our customers
                to working with our Customer Service team (Hi Martin!). It's
                truly made the whole process a breeze.
              </p>
            </div>
          </SwiperSlide>

          {/* Testimonial 2 */}
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-md p-6 mx-5">
              <div className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://th.bing.com/th/id/OIP.Y-RGBqybuZiPyl3Qh-uksgAAAA?pid=ImgDet&w=179&h=179&c=7&dpr=1.3"
                  alt="Spencer, Brett, and Kyle"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold">
                    Spencer, Brett, and Kyle
                  </h3>
                  <a href="#" className="text-green-500">
                    Store link
                  </a>
                  <div className="flex mt-1 text-yellow-400">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                Using Printify has been a great experience. Customer service is
                always very quick to respond and handle any issues that our
                customers may have. The premium account has more than paid for
                itself and has increased our margins significantly.
              </p>
            </div>
          </SwiperSlide>

           {/* Testimonial 1 */}
           <SwiperSlide>
            <div className="bg-white rounded-lg shadow-md p-6 mx-5">
              <div className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://th.bing.com/th/id/OIP.Y-RGBqybuZiPyl3Qh-uksgAAAA?pid=ImgDet&w=179&h=179&c=7&dpr=1.3"
                  alt="Nikki"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold">Nikki</h3>
                  <a href="#" className="text-green-500">
                    Store link
                  </a>
                  <div className="flex mt-1 text-yellow-400">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                Printify has been an amazing partner to work with as we grow our
                business, from the range of merch we can make for our customers
                to working with our Customer Service team (Hi Martin!). It's
                truly made the whole process a breeze.
              </p>
            </div>
          </SwiperSlide>

                    
            {/* Testimonial 2 */}
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-md p-6 mx-5">
              <div className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://th.bing.com/th/id/OIP.Y-RGBqybuZiPyl3Qh-uksgAAAA?pid=ImgDet&w=179&h=179&c=7&dpr=1.3"
                  alt="Spencer, Brett, and Kyle"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold">
                    Spencer, Brett, and Kyle
                  </h3>
                  <a href="#" className="text-green-500">
                    Store link
                  </a>
                  <div className="flex mt-1 text-yellow-400">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                Using Printify has been a great experience. Customer service is
                always very quick to respond and handle any issues that our
                customers may have. The premium account has more than paid for
                itself and has increased our margins significantly.
              </p>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlide components for more testimonials */}
        </Swiper>

        {/* Swiper Pagination Dots */}
        <div className="">
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
