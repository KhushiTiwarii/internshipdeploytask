import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const features = [
  {
    id: 1,
    image: 'https://printify.com/pfh/assets/legacy/custom-products.png',
    title: 'CREATE',
    subtitle: 'custom products',
    description: 'Easily add your designs to a wide range of products using our free tools.',
  },
  {
    id: 2,
    image: 'https://printify.com/pfh/assets/legacy/your-products.png',
    title: 'SELL',
    subtitle: 'on your terms',
    description: 'You choose the products, sale price, and where to sell.',
  },
  {
    id: 3,
    image: 'https://printify.com/pfh/assets/legacy/fullfillment.png',
    title: 'WE HANDLE',
    subtitle: 'fulfillment',
    description: 'Once an order is placed, we automatically handle all the printing and delivery logistics.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full p-10 bg-gray-100">
      {/* Desktop View */}
      <div className="hidden md:flex justify-between max-w-7xl mx-auto my-20">
        {features.map((feature) => (
          <div key={feature.id} className="text-center bg-transparent p-8 rounded shadow-md flex-1 mx-4">
            <img src={feature.image} alt={feature.subtitle} className="mx-auto mb-6 w-36 h-36" />
            <h3 className="text-green-600 text-xl font-bold mb-2">{feature.title}</h3>
            <h4 className="text-black text-lg font-semibold mb-4">{feature.subtitle}</h4>
            <p className="text-gray-600 text-md">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile View - Swiper Carousel */}
      <div className="md:hidden">
        <Swiper
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {features.map((feature) => (
            <SwiperSlide key={feature.id}>
              <div className="text-center bg-white p-8 rounded shadow-md">
                <img src={feature.image} alt={feature.subtitle} className="mx-auto mb-6 w-36 h-36" />
                <h3 className="text-green-600 text-xl font-bold mb-2">{feature.title}</h3>
                <h4 className="text-black text-lg font-semibold mb-4">{feature.subtitle}</h4>
                <p className="text-gray-600 text-md">{feature.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturesSection;
