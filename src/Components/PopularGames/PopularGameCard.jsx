import React from 'react';
import { IoStar } from 'react-icons/io5';
import {  useNavigate } from 'react-router';

const PopularGameCard = ({game}) => {
    const navigate = useNavigate();
    return (
       <div
            key={game.id}
            className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
            onClick={() => navigate(`/games/${game.id}`)}
          >
            <figure>
              <img
                src={game.coverPhoto}
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
                <span className="text-yellow-500"><IoStar /></span>
              </div>
            </div>
          </div>
    );
};

export default PopularGameCard;