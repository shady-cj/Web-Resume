import React from "react";
import "./styles.css";
const Skills = () => {
    const skillset = [
        {
            name: "HTML/HTML5",
            level: "90",
        },
        {
            name: "Javacript",
            level: "80",
        },
        {
            name: "CSS/CSS3",
            level: "90",
        },
        {
            name: "Python",
            level: "80",
        },
        {
            name: "Django",
            level: "70",
        },
        {
            name: "DRF",
            level: "70",
        },
        {
            name: "React",
            level: "75",
        },
        {
            name: "JQuery",
            level: "80",
        },
        {
            name: "NextJS",
            level: "70",
        },
        {
            name: "Sass",
            level: "80",
        },
        {
            name: "Git/Github",
            level: "80",
        },
        {
            name: "SQL",
            level: "70",
        },
    ];
    return (
        <div className="skill-section">
            <header className="skill__section-header section__header-title">
                <h2>SKILLS</h2>
            </header>
            <div className="skill__section-content section__main-content">
                {skillset.map((skill, index) => (
                    <div key={index} className="skill__section-content-item">
                        <div className="skill-name">{skill.name}</div>
                        <div
                            className={`skill-strength skill-strength-${skill.level}`}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
