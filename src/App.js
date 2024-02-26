import React, { useState } from 'react';
import "./styles/main.scss";
import Header from "./comps/Header";
import Input from "./comps/Input";
import Img from "./comps/Img";
import axios from "axios";

function App() {
  const [prompt, setPrompt] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [imgComp, setImgComp] = useState(false);
  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  }
  const generateImage = async () => {
    if (prompt === "") {
      alert("Please enter a description.");
      return;
    }
    try{
      const response = await axios.post(
        'https://api.openai.com/v1/images/generations',
        {
          prompt: prompt,
          n: parseInt(quantity)
        },
        {
          headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer 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`
          }
        });
    setGeneratedImages(response.data.data.map(item => item.url));
    setImgComp(true);
    }catch (error) {
      console.error('Error fetching data: ', error);
    }
 };

  return (
    <div className="App">
      <header>
        <Header />
        <Input handleInputChange={handleInputChange} handleQuantityChange = {handleQuantityChange} generateImage={generateImage} prompt = {prompt} quantity = {quantity} />
      </header>
      <section id="generated_area">
      {prompt === "" ? (
          <h4>Please describe your image.</h4>
        ):(
          imgComp &&  <Img generatedImages={generatedImages} />
        )}
      </section>
    </div>
  );
}

export default App;