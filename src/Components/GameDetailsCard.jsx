import React from 'react';

const GameDetailsCard = ({games}) => {
    console.log(games)
    return (
        <div>
            <div >
                <img src={games.coverPhoto} className='w-full h-full object-cover'/>
                <div>
                    <h1>{games.title}</h1>
                </div>
            </div>
        </div>
    );
};

export default GameDetailsCard;