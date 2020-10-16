import React from 'react';

import '../styles/pages/mainform.css';

function MainForm() {
    return (
        <div id="container">
            <header>
                <div>
                    <h1>Curriculum Generater</h1>
                    <h2>Gere o seu curriculo de forma Online</h2>
                </div>
            </header>

            <main>
                <form action="">

                    <div className="input-block">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="address">Endereço:</label>
                        <input type="text" id="address" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="number">Telefone:</label>
                        <input type="tel" name="number" id="number" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="email">E-Mail:</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="age">Idade:</label>
                        <input type="number" id="age" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="nacionality">Nacionalidade:</label>
                        <input type="text" id="nacionality" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="condition">Condição Civil:</label>
                        <input type="text" id="condition" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="objective">Objetivo:</label>
                        <input type="text" id="objective" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="qualifications">Qualificações:</label>
                        <textarea name="qualifications" id="qualifications" cols={30} rows={10}></textarea>
                    </div>

                    <div className="input-block">
                        <label htmlFor="formations">Formação acadêmica:</label>
                        <textarea name="formations" id="formations" cols={30} rows={10}></textarea>
                    </div>

                    <div className="input-block">
                        <label htmlFor="languages">Idioma:</label>
                        <textarea name="languages" id="languages" cols={30} rows={10}></textarea>
                    </div>

                    <div className="input-block">
                        <label htmlFor="informatic">Seu conhecimento em informática:</label>
                        <textarea name="informatic" id="informatic" cols={30} rows={10}></textarea>
                    </div>

                    <div className="input-block">
                        <label htmlFor="experience">Experiência profissional:</label>
                        <textarea name="experience" id="experience" cols={30} rows={10}></textarea>
                    </div>

                    <div className="input-block">
                        <label htmlFor="complements">Formação complementar:</label>
                        <textarea name="complements" id="complements" cols={30} rows={10}></textarea>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default MainForm;