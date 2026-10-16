import React from "react";

const groups = [
    ["Languages", ["Node.js", "TypeScript", "JavaScript", "Java", "Python"]],
    ["Services & messaging", ["Express.js", "REST APIs", "Microservices", "RabbitMQ", "Event-driven design"]],
    ["Data", ["Oracle & PL/SQL", "MongoDB", "MySQL", "Redis"]],
    ["Delivery", ["Docker", "NGINX", "AWS", "GitLab CI/CD"]],
    ["Domain", ["SWIFT / ISO 20022", "Payments", "Forex & treasury", "KYC", "Application security"]],
    ["Also", ["MCP servers", "Claude Code", "React.js"]],
];

export const Skills = ()=>{
    return (
        <section className="section" id="skills">
            <div className="wrap">
                <div className="section-head">
                    <h2>What I work with</h2>
                    <p>Backend first. Services, messaging and well-tuned databases, shipped with containers and CI.</p>
                </div>
                <dl className="stack">
                    {groups.map(([name, items])=>(
                        <div key={name}>
                            <dt>{name}</dt>
                            <dd>{items.map((item)=><span key={item}>{item}</span>)}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}
