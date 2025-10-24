import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import NewsLetter from './../Components/NewsLetter';
import Footer from './../Components/Footer';
import GameDetailsCard from '../Components/GameDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const GamesDetails = () => {
    const data  = useLoaderData();
    const {id} = useParams();
    const [games, setGames] = useState({})

    // console.log(data, id, games)

 

    useEffect(()=>{
        const gamesDetails = data.find((singleGame)=> singleGame.id == id);
        setGames(gamesDetails);

    },[data, id]);

    return (
        <div className=" bg-base-300">
      <header>
        <Navbar></Navbar>
      </header>
      <main className=''>
    
        <section className='max-w-7xl mx-auto py-16 '>
            <h1 className=' font-bold text-xl pb-5'>Games Details</h1>
            <GameDetailsCard games={games}></GameDetailsCard>
        </section>
        <section className=" bg-linear-to-r from-[#28EBE8] to-[#468CE8] text-white py-16 px-4">
            <NewsLetter></NewsLetter>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
    );
};

export default GamesDetails;