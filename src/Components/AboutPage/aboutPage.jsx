import './about.css'
import background from '../../Utilities/about-back.png'
import odinmaleficent from '../../Utilities/odin-maleficent 2.png'
import about1 from '../../Utilities/about1.png'
import about2 from '../../Utilities/about2.png'
import about3 from '../../Utilities/about3.png'
import about4 from '../../Utilities/about4.png'

function AboutPage() {

  return (
    <div className='aboutpage'>
      <div className='imgs'>
        <img src={background} />
        <img src={odinmaleficent} className='odinmaleficent' /> 
        </div>
      <div className='text'>  
      <p>ABOUT</p>
      <span>
        At $ODIN, we’re here to dominate. <br/>
        Our vision is clear: deliver game-changing utility at the most efficient cost while building <br />
        a tight-knit, Viking-inspired community that stands stronger than ever
        <img src={about1} />
        We’re not just offering tools and bots; we’re giving you the power to thrive and crush in this <br /> space. And here’s where we have the real edge: ODIN himself. Just look at him - he’s a beast, a <br /> god of thunder and war, yet there’s something undeniably charming and even cute about him.
        <img src={about2} />
        He’s a perfect mix of raw, unstoppable power and an infectious energy that draws you in Our <br /> Viking narrative is more than just a backstory – it’s an ethos, a way of life <br />
        that fuels everything we do
        <img src={about3} />
        It’s about strength, loyalty, and a relentless pursuit of greatness. It’s the fire behind our <br /> community, the reason why we don’t just want to compete – we want to dominate
        <img src={about4} />
        We’re not just dominating in numbers, we’re tapping into something deeper. The team is <br />dedicated, and we expect nothing less from our community
      </span>
      </div>
    </div>
  )
}

export default AboutPage;
