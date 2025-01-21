import React from "react";
import "./faqPage.css";
import twitterIcon from "../../Utilities/twitter 1.png";
import instagramIcon from "../../Utilities/insta 1.png";
import telegramIcon from "../../Utilities/telegram 1.png";

function FaqPage() {
  const faqs = [
    { id: 1, title: "HOW MUCH VOLUME ODIN CAN GENERATE?", text: "We offer most high volume generation witch cheap price. 3 SOL 180K Volume Volume depends on your Deposit as well. 10 SOL Deposit 3 SOL Spent can make you higher Volume then 3 SOL Deposit." },
    { id: 2, title: "HOW TO GET TRENDING ON DEXSCREENER?", text: "KEY factor is the Volume. But combined with Unique Makers and Holders. Also depends on visistor to Dexscreener page for your Coin. ODIN Bot covers 3/4 Requirements for Trending." },
    { id: 3, title: "ODIN Supports other chains?", text: "We are developing bots on SUI and BASE, XRP. Soon big announcements are going to be dropped." },
    { id: 4, title: "PRICE/QUALITY COMPARISON?", text: "Goal of the Odin project is to offer utilities that everyone can use. We are offering lowest prices on chain. Also we are taking one time fees per CA" },
    { id: 5, title: "HOW TO EARN WITH ODIN?", text: (<> REFERRAL BONUS. We are offering dynamic  referral  bonus  for  our users.<br /><br />1 User 10% fees from your referral<br /> 3 Users 20% fees from your referral </>) },
  ];

  return (
    <div className="faq-page">
      <h1 className="faq-title">FAQ</h1>
      <div className="faq-items">
        {faqs.map((faq) => (
          <div
            className={`faq-item ${faq.id === 5 ? "faq-item-special" : ""}`}
            key={faq.id}
          >
            <h3 className="faq-item-title">{faq.title}</h3>
            <p className="faq-item-text">{faq.text}</p>
          </div>
        ))}

      </div>
      <div className="social-section">
        <div className="social-icons">
          <a href="https://t.me/odintoolsportal" target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram" />
          </a>
          <a href="https://x.com/odincoinsol" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>

          <a href="https://dexscreener.com/solana/chorix55usqyarkezem5wjcsjwbrrbdxusshfuz1rvmk" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>

        </div>
        <p className="social-text">All rights reseverd contact@odincoin.xyz</p>
      </div>
    </div>
  );
}

export default FaqPage;
