import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Autoplay } from "swiper/modules"; // Import Autoplay from modules
import "swiper/css"; // Import Swiper core styles
import "swiper/css/effect-fade"; // Optional: import effect-fade if you want the fade effect

import Image2 from "../assets/design2.png"; // Image 2
import Image3 from "../assets/design3.png"; // Image 3
import Image4 from "../assets/design4.png"; // Image 4

const images = [Image2, Image3, Image4]; // List of images

const GifAnimation = () => {
  return (
    <div className="absolute top-24 left-[6.5rem] w-28 h-28">
      <Swiper
        modules={[Autoplay]} // Using the Autoplay module
        autoplay={{
          delay: 2000, // Delay of 2 seconds
          disableOnInteraction: false, // Keeps autoplay active even after user interaction
        }}
        loop={true} // Loop the images infinitely
        spaceBetween={10} // Space between the slides
        slidesPerView={1} // Show 1 image at a time
        speed={800} // Adjust the transition speed to 800ms for a smooth scroll effect
        effect="slide" // Using the slide effect to create a scrolling feeling
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Design ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GifAnimation;
