import React from "react";
import "./styles.css";
import { FiPhoneCall } from "react-icons/fi";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
const Header = () => {
    return (
        <header className="header-section">
            <h1>ERINFOLAMI PETER</h1>
            <div className="header__section-title">
                <div className="centering-line"></div>
                <h4>FULL STACK DEVELOPER</h4>
                <div className="centering-line"></div>
            </div>
            <section className="header__section-contact">
                <div className="contact-email">
                    <FaEnvelopeOpenText />
                    <span className="contact-title">Email</span>
                    <span>
                        <a
                            href="mailto:petersp2000@gmail.com"
                            style={{
                                color: "var(--mild-color)",
                                textDecoration: "none",
                            }}
                        >
                            petersp2000@gmail.com
                        </a>
                    </span>
                </div>
                <div className="contact-phone">
                    <FiPhoneCall />
                    <span className="contact-title">Phone</span>
                    <span>
                        <a
                            href="tel:+2348159918440"
                            style={{
                                color: "var(--mild-color)",
                                textDecoration: "none",
                            }}
                        >
                            +234 81 599 18 440
                        </a>
                    </span>
                </div>
                <div className="contact-website">
                    <BsGlobe />
                    <span className="contact-title">Website</span>
                    <span>
                        <a
                            href="https://c-e-e-j-a-y.netlify.app/"
                            style={{
                                color: "var(--mild-color)",
                                textDecoration: "none",
                            }}
                        >
                            https://c-e-e-j-a-y.netlify.app/
                        </a>
                    </span>
                </div>
            </section>
        </header>
    );
};

export default Header;
