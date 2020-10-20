import React from 'react'

import '../styles/components/button.css'


interface Button {
  buttonText: string,
}

const Button: React.FC<Button & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ buttonText }, ...props) => {
  return (
    <div id="button-container">
      <button {...props}>{buttonText}</button>
    </div>

  );
}

export default Button;