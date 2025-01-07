import React from "react";
import "./faqPage.css";
import twitterIcon from "../../Utilities/twitter 1.svg";
import instagramIcon from "../../Utilities/insta 1.svg";
import telegramIcon from "../../Utilities/telegram 1.svg";

function FaqPage() {
  const faqs = [
    { id: 1, title: "HOW TO BUY $ODIN?", text: "This bot is helpful for those who want to create, manage and launch tokens quick." },
    { id: 2, title: "HOW TO BUY $ODIN?", text: "This bot is helpful for those who want to create, manage and launch tokens quick." },
    { id: 3, title: "HOW TO BUY $ODIN?", text: "This bot is helpful for those who want to create, manage and launch tokens quick." },
    { id: 4, title: "HOW TO BUY $ODIN?", text: "This bot is helpful for those who want to create, manage and launch tokens quick." },
    { id: 5, title: "HOW TO BUY $ODIN?", text: "This bot is helpful for those who want to create, manage and launch tokens quick." },
    { id: 6, title: "HOW TO BUY $ODIN?", text: "This bot is helpful for those who want to create, manage and launch tokens quick." },
  ];

  return (
    <div className="faq-page">
      <h1 className="faq-title">FAQ</h1>
      <div className="faq-items">
        {faqs.map((faq) => (
          <div className="faq-item" key={faq.id}>
            <h3 className="faq-item-title">{faq.title}</h3>
            <p className="faq-item-text">{faq.text}</p>
          </div>
        ))}
      </div>
      <div className="social-section">
        <div className="social-icons">
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
         
        </div>
        <p className="social-text">All rights reseverd contact@odincoin.xyz</p>
      </div>
    </div>
  );
}

export default FaqPage;
