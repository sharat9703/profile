import React from "react";
import { ArrowUpRight } from "react-bootstrap-icons";

const featured = [{
    title : "devflow-mcp",
    description : "TypeScript MCP server with 50+ tools over ERPNext, GitLab, Redmine and Taiga. Automates timesheets, task logging, merge request analysis and releases.",
    stack : ["TypeScript", "MCP"],
    url : "https://github.com/sharat9703/mcp-erpnext-taiga-gitlab-redmine"
},{
    title : "oracle-mcp",
    description : "Read-only Oracle introspection server: 24 tools for schema lookup, dependency tracing and DBMS_XPLAN plans, behind a SELECT-only guard.",
    stack : ["TypeScript", "Oracle", "MCP"],
    url : "https://github.com/sharat9703/oracle-mcp"
},{
    title : "smart-notify",
    description : "Event-driven email and SMS notification microservice. RabbitMQ consumers with retries and dead-lettering, deployed with Docker and NGINX.",
    stack : ["Node.js", "RabbitMQ", "Docker"]
}]

const earlier = ["E-commerce app (Node.js, Express, MongoDB, React)", "Zomato clone (React)", "Calculator (HTML, CSS, JavaScript)"];

export const Projects = ()=>{
    return (
        <section className="section" id="projects">
            <div className="wrap">
                <div className="section-head">
                    <h2>Things I've built</h2>
                    <p>Open-source developer tooling. Most of my production work is client code under NDA; the timeline above covers it.</p>
                </div>
                <ul className="projects">
                    {featured.map((p)=>(
                        <li key={p.title}>
                            <h3>{p.url ? <a href={p.url} target="_blank" rel="noreferrer">{p.title} <ArrowUpRight aria-hidden="true"/></a> : p.title}</h3>
                            <p>{p.description}</p>
                            <p className="tags">{p.stack.map((t)=><span key={t}>{t}</span>)}</p>
                        </li>
                    ))}
                </ul>
                <p className="earlier"><strong>Earlier:</strong> {earlier.join("; ")}.</p>
            </div>
        </section>
    )
}
