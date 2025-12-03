import React from 'react';
import promoImage from '../assets/promo.jpg'

const Promo = () => {
    return (
        <section className="relative bg-base-100 rounded-lg overflow-hidden max-w-7xl mx-auto my-16 shadow-lg">
      {/* Background Image */}
      <img
        src={promoImage}
        alt="Promotional Banner"
        className="w-full h-64 sm:h-96 object-cover brightness-75"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-16 text-white">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          🎮 Limited Time Offer!
        </h2>
        <p className="mb-6 max-w-lg text-lg sm:text-xl">
          Get 50% off on selected top games. Don’t miss the chance to grab your
          favorite titles at a discounted price!
        </p>
        <a
          href="/all-items"
          className="bg-secondary hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
        >
          Explore Games
        </a>
      </div>
    </section>
    );
};

export default Promo;