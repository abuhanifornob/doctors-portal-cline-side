import React from "react";
import Banner from "../Banner/Banner";

import CardsInfo from "../CardInformation/CardsInfo/CardsInfo";
import Services from "../Services/Services";
import TeamInfo from "./TeamInfo/TeamInfo";

const Home = () => {
  return (
    <div className="p-5">
      <Banner></Banner>
      <CardsInfo></CardsInfo>
      <Services></Services>
      <TeamInfo></TeamInfo>
    </div>
  );
};

export default Home;
