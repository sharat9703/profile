import React from "react";
import { Linkedin, Github, StackOverflow, Download, ArrowUpRight } from "react-bootstrap-icons";
import { LINKEDIN, GITHUB, STACKOVERFLOW, RESUME } from "../links";

const channels = [
    [Linkedin, "LinkedIn", "in/sharat-yaragatti", LINKEDIN],
    [Github, "GitHub", "sharat9703", GITHUB],
    [StackOverflow, "Stack Overflow", "users/18186931/sharat", STACKOVERFLOW],
];

export const Contact = ()=>{
    return (
        <>
            <section className="section" id="contact">
                <div className="wrap">
                    <div className="contact">
                        <div>
                            <h2>Hiring for a backend or FinTech team?</h2>
                            <p>I'm open to full-time roles. LinkedIn is the fastest way to reach me, and the resume has the full detail.</p>
                            <div className="actions">
                                <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn btn-brass">Message me on LinkedIn</a>
                                <a href={RESUME} download className="btn btn-quiet"><Download aria-hidden="true"/> Download resume</a>
                            </div>
                        </div>
                        <ul className="channels">
                            {channels.map(([Icon, name, handle, url])=>(
                                <li key={name}>
                                    <a href={url} target="_blank" rel="noreferrer">
                                        <Icon aria-hidden="true" className="ch-icon"/>
                                        <span><small>{name}</small>{handle}</span>
                                        <ArrowUpRight aria-hidden="true"/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="wrap">© {new Date().getFullYear()} Sharat Yaragatti</div>
            </footer>
        </>
    )
}
