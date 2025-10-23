import React from "react";

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

  return (
    <div className=" max-w-7xl mx-auto mt-6 rounded-2xl  m-2 ">
      <div className="carousel w-full m-2 rounded-2xl">
        {games.map((game, index) => (
          <div
            id={`slide${index + 1}`}
            key={game.id}
            className="carousel-item relative w-full m-2"
          >
            <img src={game.img} className="w-full h-[600px] object-cover"/>
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>

            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold drop-shadow-lg">
                {game.title}
              </h2>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
              <a
                href={`#slide${index === 0 ? games.length : index}`}
                className="btn btn-circle bg-black/40 border-none text-white hover:bg-black/60"
              >
                ❮
              </a>
              <a
                href={`#slide${index + 2 > games.length ? 1 : index + 2}`}
                className="btn btn-circle bg-black/40 border-none text-white hover:bg-black/60"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
