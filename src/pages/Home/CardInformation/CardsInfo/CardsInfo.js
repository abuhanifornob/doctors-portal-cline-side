import React from "react";
import clock from "../../../../assets/icons/clock.svg";
import location from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";
import CardInfo from "../CardInfo/CardInfo";

const CardsInfo = () => {
  const cardData = [
    {
      id: 1,
      title: "Opening Hours",
      discribtion: "Lorem Ipsum is simply dummy text of the pri",
      icon: clock,
      bgCalss: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      id: 2,
      title: "Visit our location",
      discribtion: "LBrooklyn, NY 10036, United States",
      icon: location,
      bgCalss: "bg-gradient-to-r from-neutral to-indigo-500",
    },
    {
      id: 3,
      title: "Contact us now",
      discribtion: "+000 123 456789",
      icon: phone,
      bgCalss: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
      {cardData.map((card) => (
        <CardInfo key={card.id} card={card}></CardInfo>
      ))}
    </div>
  );
};

export default CardsInfo;
