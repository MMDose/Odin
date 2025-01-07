import React from "react";
import coin1 from '../../Utilities/odin-coin1.svg'
import coin2 from '../../Utilities/odin-coin2.svg'
import coin3 from '../../Utilities/odin-coin3.svg'
import coin4 from '../../Utilities/odin-coin4.svg'
import coin5 from '../../Utilities/odin-coin5.svg'
import coin6 from '../../Utilities/odin-coin6.svg'
import coin7 from '../../Utilities/odin-coin7.svg'

import "./botsPage.css"; 

const botData = [
  { id: 1, title: "booster bot", comment: "This bot is helpful for those who want to create, manage and launch tokens quick.", button: "Try Now", image: coin1 },
  { id: 2, title: "rank bot", comment: "This bot is used to rise your coin to the top, adds volume and increase the activity.", button: "Try Now", image: coin2 },
  { id: 3, title: "volume bot ", comment: "This bot is helpful for those who want to create, manage and launch tokens quick.", button: "Try Now", image: coin3 },
  { id: 4, title: "bundler bot", comment: "This bot is helpful for those who want to create, manage and launch tokens quick.", button: "Try Now", image: coin4 },
  { id: 5, title: "BerserK bot", comment: "This bot is used to rise your coin to the top, adds volume and increase the activity.", button: "Coming Soon", image: coin5 },
  { id: 6, title: "raid bot", comment: "This bot is helpful for those who want to create, manage and launch tokens quick.", button: "Coming Soon", image: coin6 },
  { id: 7, title: "smart profit bot", comment: "This bot is helpful for those who want to create, manage and launch tokens quick.", button: "Coming Soon", image: coin7 },
];

function BotsPage() {
  return (
    <div className="bots">
      <h5 className="ourbots">OUR BOTS</h5>
      {botData.map((bot) => (
        <div className="bot-card" key={bot.id}>
          <img src={bot.image} alt={bot.title} />
          <h3>{bot.title}</h3>
          <p>{bot.comment}</p>
          <button disabled={bot.button === "Coming Soon"}>{bot.button}</button>
        </div>
      ))}
    </div>
  );
}

export default BotsPage;
