import React from "react";

const focus = [
    ["Payments messaging", "SWIFT MT199 and ISO 20022 pacs.008 credit transfers, moved off legacy code into Node.js REST APIs and RPCs."],
    ["Nothing gets lost", "Queue-backed schedulers with retries and dead-lettering, so a downstream outage delays a transaction instead of dropping it."],
    ["Security as a layer", "Payload encryption enforced by framework, not by remembering to call it on each new endpoint."],
    ["Owning production", "Root-cause analysis on live defects, Oracle tuning, and release tooling that turned an hour of patch prep into five minutes."],
];

export const About = ()=>{
    return (
        <section className="section" id="about">
            <div className="wrap split">
                <div>
                    <h2>Correct first, then fast.</h2>
                    <p>In treasury software a bug is a wrong balance, a stuck remittance or a failed audit. I work on the parts of the system where that matters most: the message formats, the queues, the encryption and the database underneath.</p>
                    <p>I own features from design through deployment and stay with them in production. B.Tech in Computer Science from IIIT Trichy.</p>
                </div>
                <dl className="focus">
                    {focus.map(([title, text])=>(
                        <div key={title}><dt>{title}</dt><dd>{text}</dd></div>
                    ))}
                </dl>
            </div>
        </section>
    )
}
