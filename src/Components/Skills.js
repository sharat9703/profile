import React from "react";

// Mirrors the Technical Skills block of public/Sharat_Yaragatti_Resume.pdf; keep the two in sync.
const groups = [
    ["Backend", ["Node.js", "TypeScript", "JavaScript", "Express.js", "REST APIs", "Microservices", "Event-Driven Architecture", "RabbitMQ / AMQP", "Async Processing", "RPC", "Java", "Python"]],
    ["Data", ["Oracle", "PL/SQL", "MongoDB", "MySQL", "Redis", "Query Optimization", "Indexing"]],
    ["Cloud & DevOps", ["AWS", "Docker", "NGINX", "Git", "GitLab CI/CD", "Linux"]],
    ["Practices & domain", ["DSA", "System Design (HLD/LLD)", "Application Security (AES/RSA, XSS)", "SWIFT MT / ISO 20022", "Forex & Treasury", "Payments", "KYC / Regulatory Compliance"]],
    ["AI engineering", ["MCP server development", "Claude Code (skills, plugins, hooks, subagents)", "OpenAI / Gemini APIs"]],
    ["Familiar with", ["React.js", "HTML", "CSS", "Bootstrap 5", "Kafka", "NestJS", "Kubernetes", "PostgreSQL"]],
];

// What the resume calls out as daily, production-depth work.
const core = new Set(["Node.js", "TypeScript", "REST APIs", "Microservices", "RabbitMQ / AMQP", "Oracle", "PL/SQL", "MongoDB", "AWS", "Docker", "NGINX", "GitLab CI/CD", "SWIFT MT / ISO 20022", "MCP server development"]);

export const Skills = ()=>{
    return (
        <section className="section" id="skills">
            <div className="wrap">
                <div className="section-head">
                    <h2>What I work with</h2>
                    <p>Backend first: services, messaging and well-tuned databases, shipped with containers and CI. <span className="core-key">Brass</span> marks what I run in production every day.</p>
                </div>
                <dl className="stack">
                    {groups.map(([name, items])=>(
                        <div key={name} className={name === "Familiar with" ? "familiar" : undefined}>
                            <dt>{name}</dt>
                            <dd>{items.map((item)=><span key={item} className={core.has(item) ? "core" : undefined}>{item}</span>)}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}
