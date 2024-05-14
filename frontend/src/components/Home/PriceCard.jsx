import React from 'react'
import '../../styles/Home.css'
import { Link } from 'react-router-dom'
function PriceCard(props) {
    return (
        <div className={props.activePlan === props.planType ? 'price-card-active price-card' : 'price-card'}>
            <h1>{props.planType}</h1>
            <h2>$<span>{props.price}</span>USD</h2>
            <div className='desc-container'>
                <p className='small-desc'>{props.smallDesc}</p>
                <p className='large-desc'>{props.largeDesc}</p>
            </div>

            <button className={props.activePlan === props.planType ? 'btn-active' : ''}>{props.buttonTitle}</button>
            {props.otherLink ? <Link to='/' className='link-btn'><span>{props.otherLinkTitle}</span></Link> : null}
        </div>
    )
}

export default PriceCard