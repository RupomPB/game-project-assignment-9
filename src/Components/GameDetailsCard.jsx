import React, { useEffect } from "react";
import { IoIosStar } from "react-icons/io";

const GameDetailsCard = ({ games }) => {
  console.log(games);

      useEffect(() => {
      document.title = `${games.title} - My Game Site`;
    }, [games.title]);
  
  return (
    <div className=" ">
    
      <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] rounded-2xl overflow-hidden shadow-lg">
        <img src={games.coverPhoto} className="w-full h-full object-cover rounded-2xl" />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-6 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            {games.title}
          </h1>
        </div>
      </div>
      {/* game description */}

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8 bg-gray-800/40 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg ">
        <div className="space-y-2">
          <h3 className="font-semibold text-xl text-white">Category:</h3>
          <p className="text-gray-200">{games.category}</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-xl text-white">Developer:</h3>
          <p className="text-gray-200">{games.developer}</p>
        </div>

        <div className="space-y-2">
            <p className="font-semibold">{games.description}</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-xl text-white">Ratings:</h3>
          <p className="text-yellow-400 font-bold flex items-center gap-2">{games.ratings} <IoIosStar /></p>
        </div>
      </div>

      <div className="mt-8">
        <a
          href={games.downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-linear-to-r from-[#28EBE8] to-[#468CE8] text-white"
        >
          Download Game
        </a>
      </div>
    </div>
  );
};

export default GameDetailsCard;
