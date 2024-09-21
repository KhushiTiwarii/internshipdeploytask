import React from 'react';

const SellingCard = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side: Text & Information */}
        <div className="bg-[#0C2337] text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-4">
            Make Money, Risk-Free
          </h2>
          <p className="text-lg mb-6">
            You pay for fulfillment only when you make a sale
          </p>
          <div className="bg-[#102D42] p-6 rounded-lg mb-6">
            <div className="flex justify-between mb-2">
              <span>You sell a t-shirt</span>
              <span>$30</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>You pay for its production</span>
              <span>$12</span>
            </div>
            <hr className="my-4 border-gray-600" />
            <div className="flex justify-between font-bold text-lg">
              <span>Your profit</span>
              <span className="text-green-500">$18</span>
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md">
            Start selling
          </button>
          <p className="text-sm text-gray-300 mt-4">
            100% Free to use · 900+ Products · Largest print network
          </p>
        </div>

        {/* Right Side: Embed GIF */}
        <div className="flex justify-center md:justify-end">
          <iframe
            src="https://giphy.com/embed/Utn90mvtYHF3hUvtRl"
            width="429"
            height="480"
            frameBorder="0"
            className="giphy-embed hidden md:block"
            allowFullScreen
            title="Gif of girl watering plants"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SellingCard;
