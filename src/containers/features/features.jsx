import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Natural Language Understanding and Generation',
    text: 'ChatGPT-3.5 can understand and generate text that is contextually relevant to the input provided, enabling more coherent and context-aware conversations.',
  },
  {
    title: 'Improved Coherency and Consistency',
    text: 'ChatGPT-3.5 generates fewer nonsensical or irrelevant answers compared to earlier versions, resulting in more coherent conversations.',
  },
  {
    title: ' Expanded Word Limit',
    text: 'This version allows for longer interactions, both in terms of input instructions and the generated responses.',
  },
  {
    title: 'Handling of Ambiguity and Clarification',
    text: 'The model can ask clarifying questions for ambiguous queries to better understand user intent, showing an improved ability to handle uncertainty.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;