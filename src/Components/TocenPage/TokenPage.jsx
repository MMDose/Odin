import React from "react";
import "./TokenPage.css";
import tokenback from "../../Utilities/tokenback.png";
import tokenodin1 from "../../Utilities/tokenodin1.png";
import tokenodin2 from "../../Utilities//tokenodin2.png";
import tokenbr from "../../Utilities/tokenbrr.png";

function TokenPage() {
  return (
    <div className="token-page">
      <div className="section-1">
        <img src={tokenback} alt="Token" />
      </div>

      <div className="section-2">
        <div className="left-side">
          <img src={tokenodin1} className="ce-side" alt="Image 2" />
        </div>
        <div className="center-content">
          <h2>TOKENOMICS</h2>
          <p>CA:</p>
          <p>odinyvt9FgWWxw9BwZFjf7Agcch6Pk9mKubszw4izAG</p>
          <p>SUPPLY: 1,000,000,000 $ODIN</p>
          <p>LIQUIDITY: 20%</p>
          <p>PRESALE: 23%</p>
          <p>LOCKED 20%</p>
        </div>
        <div className="right-side">
          <img src={tokenodin2} className="ce-side" alt="Image 3" />
        </div>
      </div>

      <div className="section-3">
        <img src={tokenbr} alt="Token End" />
      </div>
    </div>
  );
}

export default TokenPage;
