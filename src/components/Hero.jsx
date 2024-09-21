import React from 'react'
import GifAnimation from './GifAnimation'
import TshirtImage from "../assets/tshirt.png"; // placeholder for your t-shirt image
import GirlImage from "../assets/girl-pointing.png"; // image of girl pointing
const Hero = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between mt-10 max-w-7xl mx-auto md:mt-32 px-6 relative">
        <div className="md:w-full  ">
          <h2 className="md:text-7xl text-4xl font-bold mb-4">Create and sell custom products</h2>
          <ul className="list-none space-y-2">
            <li className="flex items-center">
              <span className="text-green-600">✔</span>
              <span className="ml-2">100% Free to use</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600">✔</span>
              <span className="ml-2">900+ High-Quality Products</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600">✔</span>
              <span className="ml-2">Largest global print network</span>
            </li>
          </ul>
          <div className="mt-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded mr-4">Start for free</button>
            <button className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded">How it works?</button>
          </div>
        </div>

        {/* T-Shirt Image with Scrolling Animation */}
        <div className="md:w-1/2 relative flex justify-center items-center">
          <div className="relative w-80 h-80 mt-14 md:mt-0">
            <img src={TshirtImage} alt="Tshirt" className="w-full h-full object-contain" />
            {/* Animated GIF Overlay */}
            <GifAnimation />
          </div>
          {/* Girl Image - positioned pointing at the t-shirt */}
          <div className="absolute bottom-[-60px] left-52 z-50">
            <img src={GirlImage} alt="Girl Pointing" className="girl-pointing w-96" />
          </div>
        </div>
      </section>

      {/* New Section with Features */}
      <div className="flex mt-20 max-w-7xl mx-auto my-20 mt-36 px-6 space-y-6 md:space-y-0 md:flex-row md:space-x-6 flex items-center justify-between flex-col">
        {/* Feature 1 */}
        <div className="text-center">
          <div className="mb-4">
            <img src="https://printify.com/pfh/assets/legacy/higher-profits.svg" alt="Higher Profits" className="mx-auto w-36 h-36" />
          </div>
          <h3 className="text-xl font-bold">Higher Profits</h3>
          <p className="text-gray-600 mt-2 text-lg">
            We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center">
          <div className="mb-4">
            <img src="https://printify.com/pfh/assets/legacy/robust-scaling.svg" alt="Robust Scaling" className="mx-auto w-36 h-36" />
          </div>
          <h3 className="text-xl font-bold">Robust Scaling</h3>
          <p className="text-gray-600 mt-2 text-lg">
            Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-center">
          <div className="mb-4">
            <img src="https://printify.com/pfh/assets/legacy/best-selection.svg" alt="Best Selection" className="mx-auto w-36 h-36" />
          </div>
          <h3 className="text-xl font-bold">Best Selection</h3>
          <p className="text-gray-600 mt-2 text-lg">
            With 900+ products and top quality brands, you can choose the best products for your business.
          </p>
        </div>
      </div>
    </>
  )
}

export default Hero
