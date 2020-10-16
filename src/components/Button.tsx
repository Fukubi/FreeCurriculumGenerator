import React from 'react'


import '../styles/components/button.css'

interface Button {
    buttonText: string,
}

const Button: React.FC<Button> = ({ buttonText }) => {
  return (
      <div id="button-container">
        <button>{buttonText}</button>
      </div>
      
  );
}

export default Button;