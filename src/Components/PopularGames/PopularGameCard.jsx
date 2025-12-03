import React from 'react';
import { IoStar } from 'react-icons/io5';
import {  useNavigate } from 'react-router';
import { motion } from 'motion/react';

const PopularGameCard = ({game}) => {
    const navigate = useNavigate();
    return (
       <motion.div key={game.id}
            className="w-full card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
            
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            whileHover={{scale: 1.03,boxShadow: "0 10px 20px rgba(0,0,0,0.2)"}}
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
              <button onClick={() => navigate(`/games/${game.id}`)} className='text-right text-blue-500 hover:text-blue-700'>see more</button>
              <div className="mt-3 flex items-center gap-2">
                <span className="font-semibold">{game.ratings}</span>
                <span className="text-yellow-500"><IoStar /></span>
              </div>
            </div>
       </motion.div>
    );
};

export default PopularGameCard;