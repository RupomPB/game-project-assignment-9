import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "motion/react"; 

const Banner = () => {
  const games = [
    {
      id: 1,
      title: "PlayerUnknown's Battlegrounds (PUBG)",
      img: "https://i.ibb.co/Y4mG5PpL/pubg.jpg",
    },
    {
      id: 2,
      title: "Call of Duty: Warzone",
      img: "https://i.ibb.co/ZRzgvRGn/call-of-duty.jpg",
    },
    {
      id: 3,
      title: "Apex Legends",
      img: "https://i.ibb.co/j7xxwZB/apex-legends.jpg",
    },
    {
      id: 4,
      title: "Valorant",
      img: "https://i.ibb.co/9fRyF1g/valorant.jpg",
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    const timer = setInterval(()=>{
      setCurrentIndex((result)=>(result + 1)% games.length); 
    }, 5000);
    return ()=> clearInterval(timer);
  },[games.length])

  return (
        <div className=" mt-6 rounded-2xl overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.img
          key={games[currentIndex].id}
          src={games[currentIndex].img}
          alt={games[currentIndex].title}
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover rounded-2xl"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

   
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

      <motion.div
        key={games[currentIndex].title}
        className="absolute bottom-6 sm:bottom-10 left-4 sm:left-8 text-white max-w-[90%] sm:max-w-[70%]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3  }}
      >
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg leading-tight">
          {games[currentIndex].title}
        </h2>
      </motion.div>

      {/* arrow buttons */}
      <div className="absolute flex justify-between w-full top-1/2 -translate-y-1/2 px-4">
        <button
          onClick={() => setCurrentIndex((result) => (result- 1 + games.length) % games.length)}
          className="btn btn-circle bg-black/40 border-none text-white hover:bg-gray-900 w-10 h-10"
        >
          ❮
        </button>
        <button
          onClick={() => setCurrentIndex((result) => (result+ 1) % games.length)}
          className="btn btn-circle bg-black/40 border-none text-white hover:bg-gray-900 w-10 h-10"
        >
          ❯
        </button>
      </div>
    </div>

  );
};

export default Banner;
