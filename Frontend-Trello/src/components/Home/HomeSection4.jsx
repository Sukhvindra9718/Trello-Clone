import React from 'react'
import PriceCard from './PriceCard'
import '../../styles/Home.css'

const priceCards = [
  {
    planType: "Free",
    price: 0,
    smallDesc: "Free for your whole team",
    largeDesc: "For individuals or teams looking to organize any project.",
    buttonTitle: "Get started",
    otherLink: false,
    otherLinkTitle: ""
  },
  {
    planType: "Standard",
    price: 5,
    smallDesc: "Per user/month if billed annually ($6 billed monthly)",
    largeDesc: "For small teams that need to manage work and scale collaboration.",
    buttonTitle: "Sign up now",
    otherLink: true,
    otherLinkTitle: "Learn more about Standard"
  },
  {
    planType: "Premium",
    price: 10,
    smallDesc: "Per user/month if billed annually ($12.50 billed monthly)",
    largeDesc: "For teams that need to track and visualize multiple projects in several ways, including boards, timelines, calendars, etc.",
    buttonTitle: "Try for free",
    otherLink: true,
    otherLinkTitle: "Learn more about Premium"
  },
  {
    planType: "Enterprise",
    price: 17.50,
    smallDesc: "Per user/month - billed annually ($210.00 annual price per user)",
    largeDesc: "For organizations that need to connect work across teams with more security and controls.",
    buttonTitle: "Contact sales",
    otherLink: true,
    otherLinkTitle: "Learn more about Enterprise"
  }

]
function HomeSection4() {
  const [activePlan, setActivePlan] = React.useState(priceCards[2].planType);
  const handleActivePlan = (plan) => {
    setActivePlan(plan)
  }
  return (
    <div className='home-section4'>
      <div className='price-description-container'>
        <h1>Trello priced your way</h1>
        <p>Trusted by millions, Trello powers teams all around the world.</p>
        <button>Compare plans</button>
      </div>
      <div className='price-cards'>
        {priceCards.map((card, index) => (
          <div key={index} onClick={()=>handleActivePlan(card.planType)}>
            <PriceCard
              key={index}
              planType={card.planType}
              price={card.price}
              smallDesc={card.smallDesc}
              largeDesc={card.largeDesc}
              buttonTitle={card.buttonTitle}
              otherLink={card.otherLink}
              otherLinkTitle={card.otherLinkTitle}
              activePlan={activePlan}
            />
          </div>

        ))}
      </div>
      <div className='brand'>
        <p> Join over 2,000,000 teams worldwide that are using Trello to get more done.</p>
        <img src='https://images.ctfassets.net/rz1oowkt5gyp/19rAABnbk8KNNuh3zJzsmr/210fb8ee51dea14595462f844b7c9beb/logos-horizontal-visa-coinbase-john-deere-zoom-grand-hyatt-fender.svg' alt='logos' />
      </div>
      <div className='subscribe-container'>
        <div className='subscribe-form'>
          <h1>Get started with Trello today</h1>
          <div className='input-container'>
            <input type='email' placeholder='Enter email address' />
            <button>Sign up - It's free!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSection4