import React from "react";

const CardInfo = ({ card }) => {
  const { discribtion, id, title, icon, bgCalss } = card;
  return (
    <div className={`card card-side shadow-xl p-6 ${bgCalss}`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {title} </h2>
        <p> {discribtion}</p>
      </div>
    </div>
  );
};

export default CardInfo;
