import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const roles = [{
    title : "Software Development Engineer",
    org : "Credence Analytics · BFSI Treasury & Capital Markets Products",
    period : "June 2024 – Present · Mumbai",
    points : [
        "Architected fault-tolerant, queue-backed sync for the SBI decoupling initiative across 6 services, ~10K transactions/day with no data loss",
        "Delivered 7+ third-party integrations for SBI, ICICI, Yes Bank and Thomas Cook (TCIL)",
        "Migrated legacy forex and SWIFT credit-transfer modules (MT199, ISO 20022 pacs.008) into Node.js REST APIs and RPCs",
        "Built an AES/RSA encryption layer and the Encryption Watcher framework covering 60+ endpoints",
        "Resolved 100+ production defects with RCA; tuned Oracle queries from ~2s to under 1s",
        "Automated release-patch prep from over an hour to 4–5 minutes; authored Claude Code skills and hooks for team workflows",
    ]
},{
    title : "Technical Trainer",
    period : "January 2023 – May 2024 · Bangalore",
    points : [
        "Taught CS and mathematics to ~30 students while sharpening DSA and system design fundamentals",
    ]
},{
    title : "Software Development Intern",
    org : "Edureka",
    period : "June 2022 – December 2022 · Remote",
    points : [
        "Built a retail e-commerce app on Node.js, Express.js and MongoDB with a React.js storefront",
    ]
}]

export const Experience = ()=>{
    return(
        <section className="experience" id="experience">
            <Container>
                <h2>Experience</h2>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        {roles.map((role)=>(
                            <div className="exp-item" key={role.title}>
                                <h4>{role.title}</h4>
                                <div className="exp-meta">{[role.org, role.period].filter(Boolean).join(" · ")}</div>
                                <ul>
                                    {role.points.map((point)=><li key={point}>{point}</li>)}
                                </ul>
                            </div>
                        ))}
                        <div className="exp-item">
                            <h4>B.Tech, Computer Science & Engineering</h4>
                            <div className="exp-meta">Indian Institute of Information Technology, Trichy · 2021</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
