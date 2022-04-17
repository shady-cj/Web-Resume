import React from "react";
import "./styles.css";
const Work = () => {
    return (
        <div className="work-section">
            <header className="work__section-header section__header-title">
                <h2>WORK EXPERIENCE</h2>
            </header>
            <section className="work__section-content section__main-content">
                <div className="work__section-content-item">
                    <div className="work-item-title">
                        <h3>FULL STACK DEVELOPER</h3>
                        <h5>2021 - Present</h5>
                        <h3>UPWORK(FREELANCING)</h3>
                    </div>
                    <div className="work-item-description">
                        <p>
                            Designed,Developed and managed highly secured web
                            applications for clients and also collaborated with
                            other developers.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Work;
