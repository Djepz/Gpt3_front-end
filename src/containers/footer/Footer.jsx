import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into future before others?</h1>
      </div>
      <div className='gpt3__footer-button'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gtp3__footer_logo'>
          <img src={gpt3Logo} alt='logo'/>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Address</p>
          <p>Phone Number</p>
          <p>E-mail</p>
        </div>
      </div>
    </div>
  )
}

export default Footer