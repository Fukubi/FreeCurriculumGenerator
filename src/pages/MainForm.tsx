import React, { FormEvent, useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import { Link } from 'react-router-dom';

import Button from '../components/Button';

import '../styles/pages/mainform.css';

interface CourseInterface {
    name: string,
    start: string,
    end: string,
    institution: string,
}

interface LanguageInterface {
    name: string,
    level: string,
}

interface ExperienceInterface {
    company: string,
    start: string,
    end: string,
    activity: string,
}

interface AcademicInterface {
    name: string,
    start: string,
    end: string,
    institution: string,
}

function MainForm() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [nacionality, setNacionality] = useState("");
    const [condition, setCondition] = useState("");
    const [objective, setObjective] = useState("");
    const [courses, setCourses] = useState<CourseInterface[]>([]);
    const [languages, setLanguages] = useState<LanguageInterface[]>([]);
    const [experiences, setExperiences] = useState<ExperienceInterface[]>([]);
    const [academics, setAcademics] = useState<AcademicInterface[]>([]);

    function handleFormSubmit(event: FormEvent) {
        event.preventDefault();

        const doc = new jsPDF();

        doc.text(`${name} ${lastName}`, 105, 20, { align: "center" });
        doc.text(address, 105, 30, { align: "center" });
        doc.text(`${number} | ${email}`, 105, 40, { align: "center" });
        doc.text(`Idade ${age} | ${nacionality} | ${condition}`, 105, 50, { align: "center" });
        doc.text(objective, 105, 60, { align: "center" });
        doc.line(40, 65, 170, 65);

        if (courses.length !== 0) {
            let dataCourses: string[][] = [];
            courses.forEach(course => {
                dataCourses.push([course.name, course.start, course.end, course.institution]);
            });
            autoTable(doc, {
                head: [["Curso", "Início", "Término", "Instituição"]],
                body: dataCourses,
                margin: { top: 70, left: 20 }
            });
        }

        if (languages.length !== 0) {
            let dataLanguages: string[][] = [];
            languages.forEach(language => {
                dataLanguages.push([language.name, language.level]);
            });
            autoTable(doc, {
                head: [["Idioma", "Nível"]],
                body: dataLanguages,
                margin: { top: 80, left: 20 }
            });
        }

        if (experiences.length !== 0) {
            let dataExperiences: string[][] = [];
            experiences.forEach(experience => {
                dataExperiences.push([experience.company, experience.start, experience.end, experience.activity]);
            });
            autoTable(doc, {
                head: [["Empresa", "Início", "Término", "Atividade Exercida"]],
                body: dataExperiences,
                margin: { top: 90, left: 20 }
            });
        }

        if (academics.length !== 0) {
            let dataAcademics: string[][] = [];
            academics.forEach(academic => {
                dataAcademics.push([academic.name, academic.start, academic.end, academic.institution]);
            });
            autoTable(doc, {
                head: [["Curso", "Início", "Término", "Instituição"]],
                body: dataAcademics,
                margin: { top: 100, left: 20 }
            });
        }

        doc.save('curriculo.pdf');
    }

    /*
    {START COURSES FUNCTIONS}
    */
    function handleClickCourses() {
        setCourses([...courses, { name: "", start: "", end: "", institution: "" }])
    }

    function handleChangeCourseName(value: string, index: number) {
        let tempArray = [...courses];

        tempArray[index].name = value;
        setCourses(tempArray);
    }

    function handleChangeCourseStart(value: string, index: number) {
        let tempArray = [...courses];

        tempArray[index].start = value;
        setCourses(tempArray);
    }

    function handleChangeCourseEnd(value: string, index: number) {
        let tempArray = [...courses];

        tempArray[index].end = value;
        setCourses(tempArray);
    }

    function handleChangeCourseInstitution(value: string, index: number) {
        let tempArray = [...courses];

        tempArray[index].institution = value;
        setCourses(tempArray);
    }
    /*
    {END COURSES FUNCTIONS}
    */

    /*
    {START LANGUAGE FUNCTIONS}
    */
    function handleClickLanguagues() {
        setLanguages([...languages, { name: "", level: "" }])
    }

    function handleChangeLanguageName(value: string, index: number) {
        let tempArray = [...languages];

        tempArray[index].name = value;
        setLanguages(tempArray);
    }

    function handleChangeLanguageLevel(value: string, index: number) {
        let tempArray = [...languages];

        tempArray[index].level = value;
        setLanguages(tempArray);
    }
    /*
    {END LANGUAGE FUNCTIONS}
    */

    /*
    {START EXPERIENCE FUNCTIONS}
    */
    function handleClickExperience() {
        setExperiences([...experiences, { company: "", start: "", end: "", activity: "" }]);
    }

    function handleChangeExperienceCompany(value: string, index: number) {
        let tempArray = [...experiences];

        tempArray[index].company = value;
        setExperiences(tempArray);
    }

    function handleChangeExperienceStart(value: string, index: number) {
        let tempArray = [...experiences];

        tempArray[index].start = value;
        setExperiences(tempArray);
    }

    function handleChangeExperienceEnd(value: string, index: number) {
        let tempArray = [...experiences];

        tempArray[index].end = value;
        setExperiences(tempArray);
    }

    function handleChangeExperienceActivity(value: string, index: number) {
        let tempArray = [...experiences];

        tempArray[index].activity = value;
        setExperiences(tempArray);
    }
    /*
    {END LANGUAGE FUNCTIONS}
    */

    /*
    {START LANGUAGE FUNCTIONS}
    */
    function handleClickAcademic() {
        setAcademics([...academics, { name: "", start: "", end: "", institution: "" }])
    }

    function handleChangeAcademicName(value: string, index: number) {
        let tempArray = [...academics];

        tempArray[index].name = value;
        setAcademics(tempArray);
    }

    function handleChangeAcademicStart(value: string, index: number) {
        let tempArray = [...academics];

        tempArray[index].start = value;
        setAcademics(tempArray);
    }

    function handleChangeAcademicEnd(value: string, index: number) {
        let tempArray = [...academics];

        tempArray[index].end = value;
        setAcademics(tempArray);
    }

    function handleChangeAcademicInstitution(value: string, index: number) {
        let tempArray = [...academics];

        tempArray[index].institution = value;
        setAcademics(tempArray);
    }
    /*
     {END LANGUAGE FUNCTIONS}
    */


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
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="name">Sobrenome</label>
                            <input
                                type="text"
                                id="name"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                                required
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
                            required
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
                            required
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
                            required
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="age">Idade:</label>
                        <input
                            type="number"
                            id="age"
                            value={age}
                            onChange={e => setAge(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="nacionality">Nacionalidade:</label>
                        <input
                            type="text"
                            id="nacionality"
                            value={nacionality}
                            onChange={e => setNacionality(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="condition">Condição Civil:</label>
                        <select
                            name="condition"
                            id="condition"
                            value={condition}
                            onChange={e => setCondition(e.target.value)}
                            required
                        >
                            <option value="">Selecione sua condição civil</option>
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
                            required
                        />
                    </div>

                    <div className="input-block-academic">
                        <h1>Formação acadêmica</h1>
                        <div className="input-academic-container">
                            {courses.map((course, index) => (
                                <>
                                    <div className="input-container">
                                        <label htmlFor="course">Curso</label>
                                        <input type="text"
                                            value={course.name}
                                            onChange={e => { handleChangeCourseName(e.target.value, index) }}
                                        />
                                    </div>
                                    <div className="date-container">
                                        <div className="input-container">
                                            <label htmlFor="course">Inicio</label>
                                            <input
                                                type="date"
                                                value={course.start}
                                                onChange={e => { handleChangeCourseStart(e.target.value, index) }}
                                            />
                                        </div>
                                        <div className="input-container">
                                            <label htmlFor="course">Termino</label>
                                            <input
                                                type="date"
                                                value={course.end}
                                                onChange={e => { handleChangeCourseEnd(e.target.value, index) }}
                                            />
                                        </div>
                                    </div>
                                    <div className="input-container">
                                        <label htmlFor="course">Instituição</label>
                                        <input
                                            type="text"
                                            value={course.institution}
                                            onChange={e => { handleChangeCourseInstitution(e.target.value, index) }}
                                        />
                                    </div>
                                </>
                            ))}
                            <div className="button-container">
                                <button type="button" onClick={handleClickCourses}>+</button>
                            </div>
                        </div>
                    </div>

                    <div className="input-block-language">
                        <h1>Idioma</h1>
                        <div className="input-language-container">

                            {languages.map((language, index) => (
                                <>
                                    <div className="inputs-container">
                                        <div className="input-container">
                                            <label htmlFor="course">Idioma</label>
                                            <input
                                                type="text"
                                                value={language.name}
                                                onChange={e => { handleChangeLanguageName(e.target.value, index) }}
                                            />
                                        </div>
                                        <div className="input-container">
                                            <label htmlFor="course">Nível</label>
                                            <select name="course" id="level" value={language.level} onChange={e => { handleChangeLanguageLevel(e.target.value, index) }}>
                                                <option value="">Selecione o seu nível</option>
                                                <option value="Básico">Básico</option>
                                                <option value="Intermediário">Intermediário</option>
                                                <option value="Avançado">Avançado</option>
                                            </select>
                                        </div>
                                    </div>
                                </>
                            ))}

                            <div className="button-container">
                                <button type="button" onClick={handleClickLanguagues}>+</button>
                            </div>
                        </div>
                    </div>

                    <div className="input-block-academic">
                        <h1>Experiência profissional</h1>
                        <div className="input-academic-container">
                            {experiences.map((experience, index) => (
                                <>
                                    <div className="input-container">
                                        <label htmlFor="course">Empresa</label>
                                        <input
                                            type="text"
                                            value={experience.company}
                                            onChange={e => { handleChangeExperienceCompany(e.target.value, index) }}
                                        />
                                    </div>
                                    <div className="date-container">
                                        <div className="input-container">
                                            <label htmlFor="course">Inicio</label>
                                            <input
                                                type="date"
                                                value={experience.start}
                                                onChange={e => { handleChangeExperienceStart(e.target.value, index) }}
                                            />
                                        </div>
                                        <div className="input-container">
                                            <label htmlFor="course">Termino</label>
                                            <input
                                                type="date"
                                                value={experience.end}
                                                onChange={e => { handleChangeExperienceEnd(e.target.value, index) }}
                                            />
                                        </div>
                                    </div>
                                    <div className="input-container">
                                        <label htmlFor="course">Atividade exercida</label>
                                        <textarea
                                            cols={30}
                                            rows={6}
                                            value={experience.activity}
                                            onChange={e => { handleChangeExperienceActivity(e.target.value, index) }}
                                        />
                                    </div>
                                </>
                            ))}
                            <div className="button-container">
                                <button type="button" onClick={handleClickExperience}>+</button>
                            </div>
                        </div>
                    </div>

                    <div className="input-block-academic">
                        <h1>Formação complementar</h1>
                        <div className="input-academic-container">
                            {academics.map((academic, index) => (
                                <>
                                    <div className="input-container">
                                        <label htmlFor="course">Curso</label>
                                        <input
                                            type="text"
                                            value={academic.name}
                                            onChange={e => { handleChangeAcademicName(e.target.value, index) }}
                                        />
                                    </div>
                                    <div className="date-container">
                                        <div className="input-container">
                                            <label htmlFor="course">Inicio</label>
                                            <input
                                                type="date"
                                                value={academic.start}
                                                onChange={e => { handleChangeAcademicStart(e.target.value, index) }}
                                            />
                                        </div>
                                        <div className="input-container">
                                            <label htmlFor="course">Termino</label>
                                            <input
                                                type="date"
                                                value={academic.end}
                                                onChange={e => { handleChangeAcademicEnd(e.target.value, index) }}
                                            />
                                        </div>
                                    </div>
                                    <div className="input-container">
                                        <label htmlFor="course">Instituição</label>
                                        <input
                                            type="text"
                                            value={academic.institution}
                                            onChange={e => { handleChangeAcademicInstitution(e.target.value, index) }}
                                        />
                                    </div>
                                </>
                            ))}
                            <div className="button-container">
                                <button type="button" onClick={handleClickAcademic}>+</button>
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