import React from "react";
import coin1 from '../../Utilities/odin-coin1.png'
import coin2 from '../../Utilities/odin-coin2.png'
import coin3 from '../../Utilities/odin-coin3.png'
import coin4 from '../../Utilities/odin-coin4.png'


import "./botsPage.css";

const botData = [
  { id: 1, title: "Holder booster bot", comment: "Boost your tokens holder count with cheapest solutions.", button: "Try Now", image: coin1 },
  { id: 2, title: "rank bot", comment: "Boost you tokens Rank by boosting transaction and makers count.", button: "Try Now", image: coin2 },
  { id: 3, title: "volume bot", comment: "Boost volume of your token with cheap price, get trending on dextools & dexscreener.", button: "Try Now", image: coin3 },
  { id: 4, title: "bundler bot", comment: "This bot is helpful for those who want to create, manage and launch tokens quick.", button: "Coming Soon", image: coin4 },
];

function BotsPage() {
  return (
    <div className="bots">
      <h5 className="ourbots">OUR BOTS</h5>
      <div className="botcontrol">
      {botData.map((bot) => (
        <div className="bot-card" key={bot.id}>
          <img src={bot.image} alt={bot.title} />
          <h3>{bot.title}</h3>
          <p>{bot.comment}</p>
          <button disabled={bot.button === "Coming Soon"} onClick={() => window.open('https://t.me/odin_tools_bot', '_blank')}>{bot.button}</button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default BotsPage;
