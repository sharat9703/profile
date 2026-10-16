import React from "react";
import { Download, GeoAlt } from "react-bootstrap-icons";
import { RESUME } from "../links";
import photo from "../assets/img/sharat.jpg";

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
                <div>
                    <p className="status"><span className="dot"/>Open to backend and FinTech roles</p>
                    <h1>Hi, I'm Sharat.</h1>
                    <p className="tagline">I build the backend services banks move money through.</p>
                    <p className="lede">Software Development Engineer at Credence Analytics with 2+ years building secure, high-volume Node.js services for SBI, ICICI, Yes Bank and Thomas Cook, including SWIFT and ISO 20022 payment messaging. I own features end to end, from design and microservices through deployment and production support.</p>
                    <p className="where"><GeoAlt aria-hidden="true"/> Mumbai, India</p>
                    <div className="actions">
                        <a href="#contact" className="btn btn-brass">Get in touch</a>
                        <a href={RESUME} download className="btn btn-quiet"><Download aria-hidden="true"/> Download resume</a>
                    </div>
                </div>
                <img className="portrait" src={photo} alt="Sharat Yaragatti" width="520" height="650"/>
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
