import React from 'react';
import './HomePage.css';
import HomePage1 from '../../Utilities/HomePage1.svg';
import odinboss from '../../Utilities/odinboss1.png';
import odinback from '../../Utilities/odinboss.png'
import twitter from '../../Utilities/twitter 1.svg';
import insta from '../../Utilities/insta 1.svg';
import telegram from '../../Utilities/telegram 1.svg'
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
            <img className='odinBoss' src={odinback}/>
            <header className="header">
                <button onClick={() => scrollToSection(aboutRef)}>About</button>
                <button onClick={() => scrollToSection(tokenRef)}>Tokenomiss</button>
                <img src={HomePage1} alt="Home Page Icon" />
                <button onClick={() => scrollToSection(roadmapRef)}>Roadmap</button>
                <button onClick={() => scrollToSection(botRef)}>Bots</button>
            </header>

            <main className="body">
                <div className='bodycontrol'>
                <p>$ODIN</p>
                <span>
                    Unbeatable performance and cost, forged in the fires of Asgard.
                </span>
                <div className="actions">
                    <button>BUY $ODIN</button>
                    <button>START BOT</button>
                    <button>COPY CA</button>
                </div>
                <div className="social-links">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={telegram} alt="telegram" width="24" height="24" />
                    </a>
                    <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="twitter" width="24" height="24" />
                    </a>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                        <img src={insta} alt="insta" width="24" height="24" />
                    </a>
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
                <FaqPage/>
            </section>
        </div>
    );
}

export default HomePage;
