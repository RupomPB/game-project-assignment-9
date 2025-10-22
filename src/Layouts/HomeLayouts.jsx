import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import PopularGames from "../Components/PopularGames/PopularGames";
import Footer from "../Components/Footer";
import NewsLetter from "../Components/NewsLetter";

const HomeLayouts = () => {
  return (
    <div className=" bg-base-300">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
      {/* banner section  */}
        <section className="banner">
            <Banner></Banner>
        </section>
        {/* popular games section  */}
        <section>
            <PopularGames></PopularGames>
        </section>
        <section>
        <h1>All Games </h1>
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

export default HomeLayouts;
