import React from 'react'
import './possibility.css'
import possibilityImg from '../../assets/assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibilities'>
      <div className='gpt3__possibility-img'>
        <img src={possibilityImg} alt='possibility'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts exercize blessing indulgence way everything joy attention boisterous the attachment. Party we years to order allow asked of</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility