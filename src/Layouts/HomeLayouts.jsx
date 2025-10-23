import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import PopularGames from "../Components/PopularGames/PopularGames";
import Footer from "../Components/Footer";
import NewsLetter from "../Components/NewsLetter";
import { Outlet } from "react-router";

const HomeLayouts = () => {
  return (
    <div className=" bg-base-300">
      <header>
        <Navbar></Navbar>
      </header>
      <main  className="min-h-screen">
      <section>
        <Outlet></Outlet>
      </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayouts;
