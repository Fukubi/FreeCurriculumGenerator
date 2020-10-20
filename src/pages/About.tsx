import React from 'react';
import { FaArrowCircleLeft, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../styles/pages/about.css';

function About() {
    return (
        <div id="about-page">
            <header>
                <div>
                    <h1>Sobre o projeto</h1>
                </div>
                <Link to="/">
                    <FaArrowCircleLeft size={44} color="#FFF" />
                </Link>
            </header>

            <main>
                <p>
                    Esse projeto foi criado com o intuito de ajudar as pessoas que não tem tanto conhecimento em informatica para criar
                    um currículo por si só ou para aqueles que estão procurando uma facilidade no processo de criação de um. Além de guiar
                    aqueles que não tem um conhecimento das etapas da criação dele.
                </p>

                <div className="main-links">
                    <div>
                        <h3>Desenvolvedores</h3>
                        <ul>
                            <li>Fukubi - <a href="https://github.com/Fukubi" target="_blank" rel="noopener noreferrer">Github</a></li>
                            <li>Henrique Nitatori - <a href="https://github.com/henrique-nitatori" target="_blank" rel="noopener noreferrer">Github</a></li>
                        </ul>
                    </div>
                    <div>
                        <a className="discord-link" href="https://discordapp.com/channels/765617045902589952/765756492711198740/766439436250382356" target="_blank" rel="noopener noreferrer">
                            <FaDiscord className="discord" size={50} color="#000" />
                            <h2>NERV open source</h2>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default About;