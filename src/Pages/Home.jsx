import React from 'react';
import { Navigate } from 'react-router';
import Banner from '../Components/Banner';
import PopularGames from '../Components/PopularGames/PopularGames';
import NewsLetter from '../Components/NewsLetter';

const Home = () => {
    return(
        <>
            {/* banner section  */}
        <section className="banner">
            <Banner></Banner>
        </section>
        {/* popular games section  */}
        <section>
            <PopularGames></PopularGames>
        </section>
        <section className=" bg-linear-to-r from-[#28EBE8] to-[#468CE8] text-white py-16 px-4">
          <NewsLetter></NewsLetter>
        </section>
        </>
    )
};

export default Home;