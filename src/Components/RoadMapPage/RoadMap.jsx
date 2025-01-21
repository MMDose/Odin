import React from "react";
import "./RoadMap.css";
import roadmapbr from "../../Utilities/roadmapbr.png";
import back from '../../Utilities/roadmapback.png'

function RoadMap() {
  return (
    <div className="roadmap">
      <img src={back} className="roadback" />
      <div className="gradient" />
      <div className="headerr">
        <h1>RoadMap</h1>
      </div>
      <div className="roadmap-items">
        <div className="roadmap-item">
          <h3>Phase 1</h3>
          <img src={roadmapbr} alt="Phase 1" />
          <ul>
            <li><s> Develop Rank and Volume Booster bots </s></li>
            <li><s>Launch a presale to secure initialfunding</s></li>
            <li><s>Launch Odin Coin.</s></li>
            <li><s>Deploy Holder Booster and Referral System bots</s></li>
            <li><s>Release Dexscreener Reaction Bot</s></li>
            <li>Launch a PumpFun Bundler</li>
            <li>Launch a Raydium Bundler</li>
            <li>Achieve 5+ daily customers.</li>
          </ul>
        </div>
        <div className="roadmap-item">
          <h3>Phase 2</h3>
          <img src={roadmapbr} alt="Phase 2" />
          <ul>
            <li>Launch PumpFun Volume Bot and offer it free for Odin holders</li>
            <li><s>Release Rank Tracker Bot</s></li>
            <li><s>Deploy BuyBack & Burn</s> </li>
            <li><s>Launch Bot Info Share for new users and active runs.</s></li>
            <li><s>Upgrade servers and RPC to handle a larger user base</s></li>
            <li>Burn 10% of Odin Coin liquidity</li>
            <li>Launch Profit Taker Bot (Odin Smart Trader). Integrate Odin Coin with bots.</li>
          </ul>
        </div>
        <div className="roadmap-item">
          <h3>Phase 3</h3>
          <img src={roadmapbr} alt="Phase 3" />
          <ul>
            <li>Launch advanced bots: CopyTrader, Whale Tracker</li>
            <li>Raid Bot, TaxToken Minter.</li>
            <li>Add website-integrated bots with wallet connectivity (e.g., Phantom, OKX).</li>
            <li>Burn another 10% of Odin Coin liquidity.</li>
            <li>Launch automatic Twitter Raider Bot.</li>
            <li>Advertise Odin through bots</li>
            <li>Share significant revenue with Odin holders</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
