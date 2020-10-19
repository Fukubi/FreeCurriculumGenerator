import React from 'react';
import { useHistory } from 'react-router-dom'

import DeskImg from '../images/desk-illustration.svg';
import { FaDiscord } from 'react-icons/fa';
import Button from '../components/Button'

import '../styles/pages/landing.css';


//<a href='https://www.freepik.com/vectors/banner'>Banner vector created by freepik - www.freepik.com</a>
function Landing() {
    let history = useHistory()
    
    function handleRedirectCreateCurriculum() {
        history.push('/curriculum')
    }

    return (
        <div id="landing-page">
          <main> 
            <header className="nerv">
            <a href="https://discordapp.com/channels/765617045902589952/765756492711198740/766439436250382356" target="_blank" rel="noopener noreferrer">
                <FaDiscord size={32} color="#FFF"/>
                <h2>NERV open source</h2>
             </a>
            </header>
            <h1>Free Curriculum Generator</h1>
            <section className="curriculum-info">
                <p>Gere seu currículo de forma totalmente gratuita</p>
                <span>Deixe o documento com a gente, apenas informe os dados!</span>
            </section>
            <section className="curriculum-buttons">
                <Button buttonText="Gerar curriculo" fn={handleRedirectCreateCurriculum}/>
                <a href="https://github.com/Fukubi/FreeCurriculumGenerator" target="_blank" rel="noopener noreferrer" >Sobre o projeto</a>
            </section>
            <img src={DeskImg} alt="Imagem de um computador."/>
          </main>
        </div>
    )
}

export default Landing;