import React from "react";

const roles = [{
    title : "Software Development Engineer",
    org : "Credence Analytics",
    detail : "BFSI treasury & capital markets products, Mumbai",
    period : "Jun 2024 – now",
    points : [
        "Architected fault-tolerant, queue-backed sync for the SBI decoupling initiative across 6 services, ~10K transactions/day with no data loss",
        "Delivered 7+ third-party integrations for SBI, ICICI, Yes Bank and Thomas Cook (TCIL): Video KYC, APIGEE OTP/SMS, GST E-Invoice, Razorpay refunds",
        "Migrated legacy forex and SWIFT credit-transfer modules (MT199, ISO 20022 pacs.008) into Node.js REST APIs and RPCs",
        "Built an AES/RSA encryption layer and the Encryption Watcher framework covering 60+ endpoints",
        "Resolved 100+ production defects with RCA; tuned Oracle queries from ~2s to under 1s",
        "Automated release-patch prep from over an hour to 4–5 minutes; authored Claude Code skills and hooks for team workflows",
    ],
    stack : ["Node.js", "TypeScript", "Oracle", "RabbitMQ", "SWIFT / ISO 20022", "Docker"]
},{
    title : "Technical Trainer",
    detail : "Bangalore",
    period : "Jan 2023 – May 2024",
    points : [
        "Taught CS and mathematics to ~30 students while sharpening DSA and system design fundamentals",
    ]
},{
    title : "Software Development Intern",
    org : "Edureka",
    detail : "Remote",
    period : "Jun 2022 – Dec 2022",
    points : [
        "Built a retail e-commerce app on Node.js, Express.js and MongoDB with a React.js storefront",
    ],
    stack : ["Node.js", "Express.js", "MongoDB", "React"]
},{
    title : "B.Tech, Computer Science & Engineering",
    org : "IIIT Trichy",
    period : "2021",
}]

export const Experience = ()=>{
    return (
        <section className="section" id="experience">
            <div className="wrap">
                <h2>Where I've worked</h2>
                <ol className="timeline">
                    {roles.map((role)=>(
                        <li key={role.title}>
                            <time>{role.period}</time>
                            <div>
                                <h3>{role.title}</h3>
                                <p className="role-org">{role.org && <strong>{role.org}</strong>}{role.org && role.detail && ", "}{role.detail}</p>
                                {role.points && <ul>{role.points.map((point)=><li key={point}>{point}</li>)}</ul>}
                                {role.stack && <p className="tags">{role.stack.map((t)=><span key={t}>{t}</span>)}</p>}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
