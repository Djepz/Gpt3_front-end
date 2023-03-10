import React from 'react'
import './header.css'
import people from '../../assets/assets/people.png'
import ai from '../../assets/assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'> Let's Build Something amazing with GPT-3 OpenAi</h1>
        <p>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts exercize blessing indulgence way everything joy attention boisterous the attachment. Party we years to order allow asked of</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your email'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1600 requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-img'>
          <img src={ai} alt='ai'/>
        </div>
    </div>
  )
}

export default Header