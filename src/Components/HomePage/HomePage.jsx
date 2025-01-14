import React from 'react';
import './HomePage.css';
import HomePage1 from '../../Utilities/HomePage1.png';
import odinboss from '../../Utilities/odinboss1.png';
import odinback from '../../Utilities/odinboss.png'
import twitter from '../../Utilities/twitter 1.png';
import insta from '../../Utilities/insta 1.png';
import telegram from '../../Utilities/telegram 1.png'
import AboutPage from '../AboutPage/aboutPage'
import BotsPage from '../BotsPage/botsPage'
import TokenPage from '../TocenPage/TokenPage'
import RoadMap from '../RoadMapPage/RoadMap'
import FaqPage from '../FaqPage/faqPage'
import { useRef } from 'react';

function HomePage() {
    const aboutRef = useRef(null);
    const tokenRef = useRef(null);
    const roadmapRef = useRef(null);
    const botRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className="home-page">
            <div className='odindiv'>
                <img className='odinBoss' src={odinback} />
            </div>
            <header className="header">
                <button onClick={() => scrollToSection(aboutRef)}>About</button>
                <button onClick={() => scrollToSection(tokenRef)}>Tokenomiss</button>
                <img src={HomePage1} alt="Home Page Icon" />
                <button onClick={() => scrollToSection(roadmapRef)}>Roadmap</button>
                <button onClick={() => scrollToSection(botRef)}>Bots</button>
            </header>
            <main className="body">
                <div className='bodycontrol'>
                    <p className='title'>$ODIN</p>
                    <span>
                        Unbeatable performance and cost, forged in the fires of Asgard.
                    </span>
                    <div className="actions">
                        <button onClick={() => window.open('https://odin-6.gitbook.io/odin-tools', '_blank')}>
                            GITBOOK
                        </button>
                        <button onClick={() => window.open('https://jup.ag/swap/SOL-odinyvt9FgWWxw9BwZFjf7Agcch6Pk9mKubszw4izAG', '_blank')}>
                            BUY $ODIN
                        </button>
                        <button onClick={() => window.open('https://start-bot.com', '_blank')}>
                            START BOT
                        </button>
                        <button onClick={() => navigator.clipboard.writeText('Your Contract Address')}>
                            COPY CA
                        </button>
                    </div>

                    <div className="social-links">
                        <a href="https://t.me/odintoolsportal" target="_blank" rel="noopener noreferrer">
                            <img src={telegram} alt="telegram" width="24" height="24" />
                        </a>
                        <a href="https://x.com/odincoinsol" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="twitter" width="24" height="24" />
                        </a>
                        <a href="https://dexscreener.com/solana/chorix55usqyarkezem5wjcsjwbrrbdxusshfuz1rvmk" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="insta" width="24" height="24" />
                        </a>
                    </div>
                    <div className='textAdd'>
                        <p>CA:</p>
                        <p>odinyvt9FgWWxw9BwZFjf7Agcch6Pk9mKubszw4izAG</p>
                    </div>
                </div>
                <img className='odin' src={odinboss} alt="Odin Boss" />
            </main>
            <section ref={aboutRef} className="about-section">
                <AboutPage />
            </section>
            <section ref={botRef} className="bot-section">
                <BotsPage />
            </section>
            <section ref={tokenRef} className="token-section">
                <TokenPage />
            </section>

            <section ref={roadmapRef} className="roadmap-section">
                <RoadMap />
            </section>
            <section className='faq-section'>
                <FaqPage />
            </section>
        </div>
    );
}

export default HomePage;
