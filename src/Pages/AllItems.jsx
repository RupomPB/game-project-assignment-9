import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PopularGameCard from "../Components/PopularGames/popularGameCard";

const AllItems = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/gamesdata.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        toast.error("Failed to load games data");
        setLoading(false);
      });
  }, []);

  // Filter games based on search term
  const filteredGames = games
    .filter((game) => {
      if (!game.title) return false; // safety check
      return game.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings));

  if (loading) {
    return (
      <div className="text-center py-10 text-xl font-semibold">
        Loading All Games...
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 m-2">
      <h2 className="text-3xl font-bold mb-6 text-center">🎮 All Games</h2>

      {/* Search input */}
      <div className="text-center mb-6">
        <input
          type="text"
          placeholder="Search games..."
          className="input input-bordered w-full max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredGames.map((game) => (
          <PopularGameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
};

export default AllItems;
