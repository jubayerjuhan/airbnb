import React from "react";
import Categorybar from "../../components/CategoryBar/Categorybar";
import ListingSection from "../../components/ListingSection/ListingSection";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-[80px]">
        <Categorybar />
        <ListingSection />
      </div>
    </>
  );
};

export default Home;
