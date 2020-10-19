import React, { FormEvent, useState } from 'react';
import { jsPDF } from 'jspdf';
import { Link } from 'react-router-dom';

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
    const [qualifications, setQualifications] = useState<string[]>([""]);
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

    function handleAddQualification() {
        setQualifications([...qualifications, ""]);
        console.log(qualifications);
    }

    function handleRemoveQualification(index: number) {
        let qualificationsTemp = qualifications;
        delete qualificationsTemp[index];
        setQualifications(qualificationsTemp);
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
                </div>
            </header>

            <main>
                <h1>Gere o seu currículo de forma Online</h1>
                <form onSubmit={handleFormSubmit}>

                    <div className="input-block-name">
                        <div className="input-container">
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="name">Sobrenome</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
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
                        <select
                            name="condition"
                            id="condition"
                            value={condition}
                            onChange={e => setCondition(e.target.value)}
                        >
                            <option value="solteiro(a)">solteiro(a)</option>
                            <option value="casado">casado(a)</option>
                            <option value="divorciado (a)">divorciado(a)</option>
                            <option value="viúvo(a)">viúvo(a)</option>
                        </select>
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

                    <div className="input-block-academic">
                        <h1>Formação acadêmica</h1>
                        <div className="input-academic-container">
                            <div className="input-container">
                                <label htmlFor="course">Curso</label>
                                <input type="text" />
                            </div>
                            <div className="date-container">
                                <div className="input-container">
                                    <label htmlFor="course">Inicio</label>
                                    <input type="date" />
                                </div>
                                <div className="input-container">
                                    <label htmlFor="course">Termino</label>
                                    <input type="date" />
                                </div>
                            </div>
                            <div className="input-container">
                                <label htmlFor="course">Instituição</label>
                                <input type="text" />
                            </div>
                            <div className="button-container">
                                <button type="button">+</button>
                            </div>
                        </div>
                    </div>

                    <div className="input-block-language">
                        <h1>Idioma</h1>
                        <div className="input-language-container">
                            <div className="inputs-container">
                                <div className="input-container">
                                    <label htmlFor="course">Idioma</label>
                                    <input type="text" />
                                </div>
                                <div className="input-container">
                                    <label htmlFor="course">Nível</label>
                                    <select name="course" id="level">
                                        <option value="Básico">Básico</option>
                                        <option value="Intermediário">Intermediário</option>
                                        <option value="Avançado">Avançado</option>
                                    </select>
                                </div>
                            </div>
                            <div className="button-container">
                                <button type="button">+</button>
                            </div>
                        </div>
                    </div>

                    <div className="input-block-academic">
                        <h1>Experiência profissional</h1>
                        <div className="input-academic-container">
                            <div className="input-container">
                                <label htmlFor="course">Empresa</label>
                                <input type="text" />
                            </div>
                            <div className="date-container">
                                <div className="input-container">
                                    <label htmlFor="course">Inicio</label>
                                    <input type="date" />
                                </div>
                                <div className="input-container">
                                    <label htmlFor="course">Termino</label>
                                    <input type="date" />
                                </div>
                            </div>
                            <div className="input-container">
                                <label htmlFor="course">Atividade exercida</label>
                                <textarea cols={30} rows={6} />
                            </div>
                            <div className="button-container">
                                <button type="button">+</button>
                            </div>
                        </div>
                    </div>

                    <div className="input-block-academic">
                        <h1>Formação acadêmica</h1>
                        <div className="input-academic-container">
                            <div className="input-container">
                                <label htmlFor="course">Curso</label>
                                <input type="text" />
                            </div>
                            <div className="date-container">
                                <div className="input-container">
                                    <label htmlFor="course">Inicio</label>
                                    <input type="date" />
                                </div>
                                <div className="input-container">
                                    <label htmlFor="course">Termino</label>
                                    <input type="date" />
                                </div>
                            </div>
                            <div className="input-container">
                                <label htmlFor="course">Instituição</label>
                                <input type="text" />
                            </div>
                            <div className="button-container">
                                <button type="button">+</button>
                            </div>
                        </div>
                    </div>

                    <div className="generate-cancel-container">
                        <Button buttonText="Gerar currículo" />
                        <Link to="/">
                        Cancelar
                        </Link>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default MainForm;