import React from 'react'


import '../styles/components/button.css'

interface Button {
    buttonText: string,
    fn: () => void
}

const Button: React.FC<Button> = ({ buttonText, fn }) => {
  return (
      <div id="button-container">
        <button onClick={fn}>{buttonText}</button>
      </div>
      
  );
}

export default Button;