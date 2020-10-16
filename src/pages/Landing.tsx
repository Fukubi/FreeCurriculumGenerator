import React from 'react';

import DeskImg from '../images/desk-illustration.svg';
import { FaDiscord } from 'react-icons/fa';

import '../styles/pages/landing.css';

//<a href='https://www.freepik.com/vectors/banner'>Banner vector created by freepik - www.freepik.com</a>
function Landing() {
    return (
        <div id="container">
            <div id="content">
                <div id="credits">
                    <a href="https://discordapp.com/channels/765617045902589952/765756492711198740/766439436250382356" target="_blank" rel="noopener noreferrer">
                        <FaDiscord size={50} /> NERV Open Source
                    </a>
                </div>
                <header>
                    <h1>Free Curriculum Generator</h1>
                    <h1>Gere seu currico de forma totalmente gratuita</h1>
                </header>

                <main>
                    <div id="content">
                        <div id="description">
                            <p>Deixe o documento com a gente, apenas informe os dados!</p>
                            <div id="linkButtons">
                                <a href="" id="generate">Gerar Curriculo</a>
                                <a href="" id="about">Sobre o projeto</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <img src={DeskImg} alt="desk" />
        </div>
    )
}

export default Landing;