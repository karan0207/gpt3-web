import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatgpt3.css';

const Whatgpt3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Given any text prompt like a phrase or a sentence, GPT-3 returns a text completion in natural language. Developers can “program” GPT-3 by showing it just a few examples or “prompts”. We have designed the API to be both simple for anyone to use but also flexible enough to make machine learning teams more productive." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="GPT-3 powered chatbots are sophisticated AI programs that simulate human-like conversations. Leveraging the Generative Pre-trained Transformer 3 model, they can understand context, provide responses." />
      <Feature title="Knowledgebase" text="It serves as a vast virtual knowledge base, capable of understanding and generating human-like text across a wide array of topics. It can provide information, answer questions, and assist with various language-related tasks." />
      <Feature title="Education" text=" It's an AI language model that aids learning by providing explanations, answering queries, generating content, offering language practice, and simulating discussions. It can enhance understanding, critical thinking." />
    </div>
  </div>
  )
}

export default Whatgpt3;
