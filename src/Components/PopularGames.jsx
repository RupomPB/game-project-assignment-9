import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";


const PopularGames = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/gamesdata.json")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Failed to load games data:", err));
  }, []);

  // Sort by rating descending and select top 3
  const topGames = games
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 ">
      <h2 className="text-3xl font-bold mb-6 text-center">🎮 Popular Games</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {topGames.map((game) => (
          <div
            key={game.id}
            className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
            onClick={() => navigate(`/games/${game.id}`)}
          >
            <figure>
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-full h-52 object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{game.title}</h2>
              <p className="text-sm text-gray-500">{game.category}</p>
              <p className="text-gray-700 mt-2 line-clamp-3">
                {game.description}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="font-semibold">{game.ratings}</span>
                <span className="text-yellow-400">⭐</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularGames;
