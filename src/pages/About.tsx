import React, { useState } from 'react';
import { FaArrowCircleLeft, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../styles/pages/about.css';


interface Dev {
    name: string;
    github: string;
}

function About() {
    const [devs] = useState<Dev[]>(
        [{ name: 'Deivid Gabriel', github: 'https://github.com/Fukubi' },
        { name: 'Henrique Nitatori', github: 'https://github.com/henrique-nitatori' }])

    return (
        <div id="about-page">

            <div className="container">

                <header className="header-web">
                    <div>
                        <h1>Sobre o projeto</h1>
                    </div>
                    <section>
                        <Link to="/">
                            <FaArrowCircleLeft size={44} color="#FFF" />
                        </Link>
                    </section>
                </header>

                <header className="header-mobile">
                    <section>
                        <Link to="/">
                            <FaArrowCircleLeft size={44} color="#FFF" />
                        </Link>
                    </section>
                    <div>
                        <h1>Sobre o projeto</h1>
                    </div>
                </header>


                <main>
                    <div className="nerv">
                        <h2>NERV Open Source</h2>
                        <h4>Comunidade de desolvimento de projetos open source</h4>
                    </div>

                    <h4>Curriculum Generator</h4>
                    <p className="subtitle">
                        Esse projeto foi criado com o intuito de ajudar as pessoas que não tem tanto conhecimento em informática para criar
                        um currículo por si só ou para aqueles que estão procurando uma facilidade no processo de criação de um. Além de guiar
                        aqueles que não tem um conhecimento das etapas da criação dele.
                </p>
                    <hr className="divider" />
                    <div className="main-links">
                        <div>
                            <h3>Desenvolvedores</h3>
                            <ul>
                                {devs.map(dev => (
                                    <li>{dev.name} - <a href={dev.github} target="_blank" rel="noopener noreferrer">Github</a></li>))
                                }
                            </ul>
                        </div>
                        <div>
                            <h3>Repositório do projeto</h3>
                            <a className="repo-git" href="https://github.com/Fukubi/FreeCurriculumGenerator" target="_blank" rel="noopener noreferrer">
                                Github
                        </a>
                        </div>
                        <div className="nerv-community">
                            <h3>Comunidade</h3>
                            <a className="discord-link" href="https://discordapp.com/channels/765617045902589952/765756492711198740/766439436250382356" target="_blank" rel="noopener noreferrer">
                                <FaDiscord className="discord" size={30} color=" #1E5F74" />
                            NERV Open Source
                        </a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default About;