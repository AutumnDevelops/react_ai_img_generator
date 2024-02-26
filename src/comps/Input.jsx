import React from 'react'

const Input = ({handleInputChange, handleQuantityChange, generateImage, prompt,  quantity}) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      generateImage();
    }
  }
  return (
    <form>
        <div>
            <input type="text" placeholder = "Describe your image" id = "id" value={prompt} onChange={handleInputChange} onKeyPress={handleKeyPress} />
            <select value={quantity} onChange= {handleQuantityChange}>
                <option value="1">1 Image</option>
                <option value="2">2 Images</option>
                <option value="3">3 Images</option>
                <option value="4">4 Images</option>
            </select>
            <input type = "button" value = "Generate" id = "gen_button" onClick = {generateImage} />
        </div>
    </form>

  )
}

export default Input