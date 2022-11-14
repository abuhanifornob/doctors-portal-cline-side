import React from "react";
import Banner from "../Banner/Banner";

import CardsInfo from "../CardInformation/CardsInfo/CardsInfo";

const Home = () => {
  return (
    <div className="p-5">
      <Banner></Banner>
      <CardsInfo></CardsInfo>
    </div>
  );
};

export default Home;
