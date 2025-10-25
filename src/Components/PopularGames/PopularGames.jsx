import React, { useEffect, useState } from "react";
import PopularGameCard from "./popularGameCard";
import Loading from "../../Pages/Loading";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router";
// import popularGameCard from './PopularGameCard';



const PopularGames = ({setLoading}) => {
  const [games, setGames] = useState([]);
  // const navigate = useNavigate();
// console.log(loading)
  useEffect(() => {
    fetch("/gamesdata.json")
      .then((res) => res.json())
      .then((data) => {
        setGames(data)
        setLoading(false)
      }
   
    )
      .catch((err) => toast.error("Failed to load games data:", err));
  }, []);

  // Sort by rating descending and select top 3
  const topGames = games
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, 6);
 
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 m-2">
      <h2 className="text-3xl font-bold mb-6 text-center">🎮 Popular Games</h2>

     <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {topGames.map((game) => (
          <PopularGameCard key={game.id} game={game}></PopularGameCard>
        ))}
      </div>
      
    </section>
  );
};

export default PopularGames;
