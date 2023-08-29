import React from 'react';
// import possibilityImage from '../../assets/possibility.png';
import './possibility.css';
import aiimg from '../../assets/ai img.png';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={aiimg} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>The capabilities presented by GPT-3 are nothing short of remarkable, transcending the boundaries of conventional human-computer interaction. Its potential is virtually limitless, stretching far beyond the confines of our current imagination. GPT-3's astounding natural language understanding and generation prowess opens up a realm of possibilities across industries and disciplines.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;