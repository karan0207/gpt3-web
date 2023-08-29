import React from 'react'
import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import './header.css';
import ai2 from '../../assets/robo img.png';

const header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Embarking on a Journey of Creativity with GPT-3 by OpenAI</h1>
      <p>GPT-3 has given us the ability to give our characters life. We’re excited to combine an artist’s vision, AI, and emotional intelligence to create powerful narratives, and believe that one day, everyone will know a Virtual Being</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt='people'/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai2} alt='ai' />
    </div>
  </div>
    
  )
}

export default header
