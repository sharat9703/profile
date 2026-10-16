import React from "react";
import { Download, GeoAlt } from "react-bootstrap-icons";
import { RESUME } from "../links";

// The hero's signature: a profile written as a SWIFT MT103 customer credit transfer.
const message = [
    ["{1:", "F01SHARATYAINBB}"],
    [":20:", "SY-PROFILE-2026"],
    [":23B:", "CRED"],
    [":50K:", "/SHARAT YARAGATTI"],
    ["", "SDE BACKEND, MUMBAI"],
    [":59:", "/YOUR ENGINEERING TEAM"],
    [":70:", "NODE.JS TYPESCRIPT ORACLE"],
    ["", "RABBITMQ DOCKER NGINX"],
    [":71A:", "OUR"],
    ["-}", ""],
];

const stats = [
    ["~10K", "transactions a day through queue-backed sync"],
    ["60+", "endpoints behind the AES/RSA encryption layer"],
    ["100+", "production defects closed with root cause"],
    ["<1s", "Oracle reporting queries, down from ~2s"],
];

export const Banner = ()=>{
    return (
        <section className="hero" id="top">
            <div className="wrap hero-grid">
                <div className="hero-copy">
                    <p className="status"><span className="dot"/>Open to backend and FinTech roles</p>
                    <h1>I build the backend services banks move money through.</h1>
                    <p className="lede">Software Development Engineer at Credence Analytics. Two years of Node.js and TypeScript on BFSI treasury platforms: SWIFT and ISO 20022 payment messaging, forex, KYC and the integrations that hold them together.</p>
                    <p className="where"><GeoAlt aria-hidden="true"/> Mumbai, India</p>
                    <div className="actions">
                        <a href="#contact" className="btn btn-brass">Get in touch</a>
                        <a href={RESUME} download className="btn btn-quiet"><Download aria-hidden="true"/> Download resume</a>
                    </div>
                </div>
                <figure className="mt">
                    <figcaption>Outgoing MT103</figcaption>
                    <pre aria-label="Profile summary formatted as a SWIFT MT103 message">
                        {message.map(([tag, value], i)=>(
                            <span className="mt-line" style={{"--i": i}} key={i}><b>{tag}</b>{value}</span>
                        ))}
                    </pre>
                    <div className="mt-status" style={{"--i": message.length}}>
                        <span>Status</span><strong>ACSC</strong><span>Settled</span>
                    </div>
                </figure>
            </div>
            <div className="wrap">
                <dl className="stats">
                    {stats.map(([figure, label])=>(
                        <div key={figure}><dt>{figure}</dt><dd>{label}</dd></div>
                    ))}
                </dl>
                <p className="clients">Shipped for <span>SBI</span><span>ICICI Bank</span><span>Yes Bank</span><span>Thomas Cook</span></p>
            </div>
        </section>
    )
}
