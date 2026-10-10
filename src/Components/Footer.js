import React from "react";
import { Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { LINKEDIN, GITHUB, STACKOVERFLOW, RESUME } from "../links";

export const Footer = ()=>{
    return(
        <footer className="footer">
            <Container>
                <h3>Let's build something reliable.</h3>
                <p>Open to backend and FinTech engineering roles. The best way to reach me is on LinkedIn.</p>
                <div className="social-icon">
                    <a href={LINKEDIN} target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn"/></a>
                    <a href={GITHUB} target="_blank" rel="noreferrer"><img src={navIcon2} alt="GitHub"/></a>
                    <a href={STACKOVERFLOW} target="_blank" rel="noreferrer"><img src={navIcon3} alt="Stack Overflow"/></a>
                </div>
                <a href={RESUME} download className="btn btn-outline-light resume-link">Download Resume</a>
                <small>© {new Date().getFullYear()} Sharat Yaragatti</small>
            </Container>
        </footer>
    )
}
