import React, { useState } from 'react';
import { Navigate } from 'react-router';
import Banner from '../Components/Banner';
import PopularGames from '../Components/PopularGames/PopularGames';
import NewsLetter from '../Components/NewsLetter';
import Loading from './Loading';

const Home = () => {
      const [loading, setLoading] = useState(true)

    //   if(loading == true){
    //    return <Loading></Loading>
    //   }

    return(
        <>
            {/* banner section  */}
        <section className="banner">
            <Banner></Banner>
        </section>
        {/* popular games section  */}
        {
            loading? <Loading></Loading>: ''
        }
        <section>
            <PopularGames setLoading={setLoading}></PopularGames>
        </section>
        <section className=" bg-linear-to-r from-[#28EBE8] to-[#468CE8] text-white py-16 px-4">
          <NewsLetter></NewsLetter>
        </section>
        </>
    )
};

export default Home;