import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Col, Container,Row,Nav,Tab } from "react-bootstrap";
import ColorSharp2 from '../assets/img/color-sharp2.png';

const featured = [{
    title : "devflow-mcp",
    description : "TypeScript MCP server with 50+ tools over ERPNext, GitLab, Redmine & Taiga: automates timesheets, task logging, MR analysis and releases",
    url : "https://github.com/sharat9703/mcp-erpnext-taiga-gitlab-redmine"
},{
    title : "oracle-mcp",
    description : "Read-only Oracle introspection server: 24 tools for schema, dependency tracing and DBMS_XPLAN plans, behind a SELECT-only guard",
    url : "https://github.com/sharat9703/oracle-mcp"
},{
    title : "smart-notify",
    description : "Event-driven email/SMS notification microservice: RabbitMQ consumers with retries & dead-lettering, Docker + NGINX"
}]

const highlights = [{
    title : "Event-Driven Sync",
    description : "Queue-backed schedulers across 6 services, ~10K transactions/day with no data loss"
},{
    title : "Enterprise Integrations",
    description : "7+ integrations: Video KYC, APIGEE OTP/SMS, GST E-Invoice, Razorpay refunds"
},{
    title : "Legacy Modernization",
    description : "Forex & SWIFT credit transfer (MT199, ISO 20022 pacs.008) migrated to Node.js across 3 apps"
},{
    title : "Encryption Framework",
    description : "End-to-end AES/RSA layer enforcing payload encryption across 60+ endpoints"
},{
    title : "Production Support & RCA",
    description : "100+ production defects resolved, repeat tickets cut by 20%+"
},{
    title : "Oracle Query Tuning",
    description : "Dashboard and reporting queries cut from ~2s to under 1s"
}]

const earlier = [{
    title : "E-Commerce App",
    description : "Node.js, Express.js & MongoDB REST APIs with a React.js storefront (Edureka internship)"
},{
    title : "Zomato Clone",
    description : "React project"
},{
    title : "Simple Calculator",
    description : "HTML, CSS & JavaScript project"
}]

const cards = (list) => (
    <Row>
        {list.map((project)=><ProjectCard key={project.title} {...project}/>)}
    </Row>
)

export const Projects = ()=>{
 return(
    <section className="project" id="projects">
        <Container>
         <Row>
            <Col>
                <h2>Projects</h2>
                <p>Open-source developer tooling, production work on BFSI treasury and capital-markets platforms, and where it all started.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Featured</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Work Highlights</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Earlier Work</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">{cards(featured)}</Tab.Pane>
                        <Tab.Pane eventKey="second">{cards(highlights)}</Tab.Pane>
                        <Tab.Pane eventKey="third">{cards(earlier)}</Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Col>
         </Row>
        </Container>
        <img className="background-image-right" src={ColorSharp2} alt="background img2" />
    </section>
 )
}
