import React from 'react'
import PriceCard from './PriceCard'
import '../../styles/Home.css'
function HomeSection4() {
  return (
    <div className='home-section4'>
      <div className='price-description-container'>
        <h1>Trello priced your way</h1>
        <p>Trusted by millions, Trello powers teams all around the world.</p>
        <button>Compare plans</button>
      </div>
      <div className='price-cards'>
        <PriceCard 
          planType={"Free"} 
          price={0} 
          smallDesc={"Free for your whole team"} 
          largeDesc={"For individuals or teams looking to organize any project."}
          buttonTitle={"Get started"}
          otherLink={false}
          otherLinkTitle={""}
        />
        <PriceCard 
          planType={"Standard"} 
          price={5} 
          smallDesc={"Per user/month if billed annually ($6 billed monthly)"} 
          largeDesc={"For small teams that need to manage work and scale collaboration."}
          buttonTitle={"Sign up now"}
          otherLink={true}
          otherLinkTitle={"Learn more about Standard"}
        />
        <PriceCard 
          planType={"Premium"} 
          price={10} 
          smallDesc={"Per user/month if billed annually ($12.50 billed monthly)"} 
          largeDesc={"For teams that need to track and visualize multiple projects in several ways, including boards, timelines, calendars, etc."}
          buttonTitle={"Try for free"}
          otherLink={true}
          otherLinkTitle={"Learn more about Premium"}
        />
        <PriceCard 
          planType={"Enterprise"} 
          price={17.50} 
          smallDesc={"Per user/month - billed annually ($210.00 annual price per user)"} 
          largeDesc={"For organizations that need to connect work across teams with more security and controls."}
          buttonTitle={"Contact sales"}
          otherLink={true}
          otherLinkTitle={"Learn more about Enterprise"}
        />
      </div>
      <div className='brand'>
      <p></p> Join over 2,000,000 teams worldwide that are using Trello to get more done.
        <img src='https://images.ctfassets.net/rz1oowkt5gyp/19rAABnbk8KNNuh3zJzsmr/210fb8ee51dea14595462f844b7c9beb/logos-horizontal-visa-coinbase-john-deere-zoom-grand-hyatt-fender.svg' alt='logos' />
      </div>
    </div>
  )
}

export default HomeSection4