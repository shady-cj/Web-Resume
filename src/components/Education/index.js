import React from "react";
import "./styles.css";

const Education = () => {
    const educationHists = [
        {
            title: "BACHELOR OF ENGINEERING",
            school: "Federal University of Technoly, Akure",
            year: "2018 - present",
            course: "Mining Engineering",
        },
        {
            title: "CS50 WEB PROGRAMMING",
            school: "Havard University",
            year: "2020 - 2022",
            course: "Web Programming with Python and Javascript",
        },
    ];
    return (
        <div className="education-section">
            <header className="education__section-header section__header-title">
                <h2>EDUCATION HISTORY</h2>
            </header>
            <section className="education__section-content section__main-content">
                {educationHists.map((educationHist, index) => (
                    <div
                        key={index}
                        className="education__section-content-item"
                    >
                        <div className="education-item-title">
                            <h3>{educationHist.year}</h3>
                            <h3 style={{ lineHeight: "1.4" }}>
                                {educationHist.title}
                            </h3>
                        </div>
                        <div className="education-item-description">
                            <p>
                                {educationHist.school},<br />
                                {educationHist.course}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Education;
