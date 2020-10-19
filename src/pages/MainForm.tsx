import React, { FormEvent, useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

import Button from '../components/Button';

import '../styles/pages/mainform.css';

function MainForm() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [nacionality, setNacionality] = useState("");
    const [condition, setCondition] = useState("");
    const [objective, setObjective] = useState("");
    const [qualifications, setQualifications] = useState<string[]>([]);
    const [academicFormation, setAcademicFormation] = useState("");
    const [language, setLanguage] = useState("");
    const [tecnology, setTecnology] = useState("");
    const [experience, setExperience] = useState("");
    const [formation, setFormation] = useState("");

    function handleFormSubmit(event: FormEvent) {
        event.preventDefault();

        const doc = new jsPDF();

        doc.text(name, 20, 20);
        doc.text(address, 20, 30);
        doc.text(number, 20, 40);
        doc.text(email, 20, 50);
        doc.text(age, 20, 60);
        doc.text(nacionality, 20, 70);
        doc.text(condition, 20, 80);
        doc.text(objective, 20, 90);
        doc.text(qualifications, 20, 100);
        doc.save('curriculo.pdf');
    }

    function handlePlusClick() {
        let qualificationsTemp = qualifications;

        qualificationsTemp.push("");
        setQualifications(qualificationsTemp);
        console.log(qualifications);
    }

    function changeQualifications(text: string, index: number) {
        let qualificationsTemp = qualifications;
        
        qualificationsTemp[index] = text;
        setQualifications(qualificationsTemp);
    }

    

    return (
        <div id="generate-page">
            <header>
                <div>
                    <h1>Curriculum Generator</h1>
                    <h2>Informe os dados básicos para que o currículo seja gerado</h2>
                </div>
            </header>

            <main>
                <form action="" onSubmit={handleFormSubmit}>

                    <div className="input-block">
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="address">Endereço:</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="number">Telefone:</label>
                        <input
                            type="tel"
                            name="number"
                            id="number"
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="email">E-Mail:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="age">Idade:</label>
                        <input
                            type="number"
                            id="age"
                            value={age}
                            onChange={e => setAge(e.target.value)}
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="nacionality">Nacionalidade:</label>
                        <input
                            type="text"
                            id="nacionality"
                            value={nacionality}
                            onChange={e => setNacionality(e.target.value)}
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="condition">Condição Civil:</label>
                        <input
                            type="text"
                            id="condition"
                            value={condition}
                            onChange={e => setCondition(e.target.value)}
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="objective">Objetivo:</label>
                        <input
                            type="text"
                            id="objective"
                            value={objective}
                            onChange={e => setObjective(e.target.value)}
                        />
                    </div>

                    <div className="input-block">
                        <div>
                            <label htmlFor="qualifications">Qualificações:</label>
                            <button onClick={handlePlusClick} type="button">+</button>
                        </div>
                        {qualifications.map((text , index) => (
                            <input
                                key={text}
                                type="text"
                                id="qualifications"
                                value={text}
                                onChange={e => changeQualifications(e.target.value, index)}
                            />
                        ))}
                    </div>

                    <div className="input-block">
                        <label htmlFor="formations">Formação acadêmica:</label>
                        <textarea
                            name="formations"
                            id="formations"
                            cols={30}
                            rows={10}
                            value={academicFormation}
                            onChange={e => setAcademicFormation(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="input-block">
                        <label htmlFor="languages">Idioma:</label>
                        <textarea
                            name="languages"
                            id="languages"
                            cols={30}
                            rows={10}
                            value={language}
                            onChange={e => setLanguage(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="input-block">
                        <label htmlFor="informatic">Seu conhecimento em informática:</label>
                        <textarea
                            name="informatic"
                            id="informatic"
                            cols={30}
                            rows={10}
                            value={tecnology}
                            onChange={e => setTecnology(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="input-block">
                        <label htmlFor="experience">Experiência profissional:</label>
                        <textarea
                            name="experience"
                            id="experience"
                            cols={30}
                            rows={10}
                            value={experience}
                            onChange={e => setExperience(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="input-block">
                        <label htmlFor="complements">Formação complementar:</label>
                        <textarea
                            name="complements"
                            id="complements"
                            cols={30}
                            rows={10}
                            value={formation}
                            onChange={e => setFormation(e.target.value)}
                        ></textarea>
                    </div>

                    <Button buttonText="Gerar" />
                </form>
            </main>
        </div>
    );
}

export default MainForm;