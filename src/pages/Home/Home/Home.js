import React from "react";
import Banner from "../Banner/Banner";

import CardsInfo from "../CardInformation/CardsInfo/CardsInfo";
import ContactUs from "../ContactUs/ContactUs";
import MakeApoinment from "../MakeApoinment/MakeApoinment";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import TeamInfo from "./TeamInfo/TeamInfo";

const Home = () => {
  return (
    <div className="p-5">
      <Banner></Banner>
      <CardsInfo></CardsInfo>
      <Services></Services>
      <TeamInfo></TeamInfo>
      <MakeApoinment></MakeApoinment>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
