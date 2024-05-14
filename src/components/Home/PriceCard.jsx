import React from 'react'
import '../../styles/Home.css'
import { Link } from 'react-router-dom'
function PriceCard(props) {
    return (
        <div>
            <div className='price-card'>
                <h1>{props.planType}</h1>
                <h2>$<span>{props.price}</span>USD</h2>
                <div className='desc-container'>
                    <p className='small-desc'>{props.smallDesc}</p>
                    <p className='large-desc'>{props.largeDesc}</p>
                </div>

                <button>{props.buttonTitle}</button>
                {props.otherLink ? <Link to='/' className='link-btn'><span>{props.otherLinkTitle}</span></Link> : null}
            </div>
        </div>
    )
}

export default PriceCard