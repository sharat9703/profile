import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Col, Container,Row,Nav,Tab } from "react-bootstrap"; 
import ColorSharp2 from '../assets/img/color-sharp2.png';
import ProjImg1 from '../assets/img/project-img1.png';
import ProjImg2 from '../assets/img/project-img2.png';
import ProjImg3 from '../assets/img/project-img3.png';

export const Projects = ()=>{
    const projects = [{
        title : "React Project",
        description : "React Project",
        imgURL : ProjImg1
    },
    {
        "title" : "Simple Calculator",
        "description" : "HTML, CSS & JavaScript project",
        "imgURL" : ProjImg2
    },{
        "title" : "Zomato-clone",
        "description" : "React project",
        "imgURL" : ProjImg3
    },{
        "title" : "E-Commerce API",
        "description" : "MERN project",
        "imgURL" : ProjImg3
    }]
 return(
    <section className="project" id="projects">
        <Container>
         <Row>
            <Col>
                <h2>Projects</h2>
                <p>Lorem ipsum....Lorem ipsum....Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab one</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                            Tab three
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                                projects.map((project,index)=>{
                                    return (
                                        <ProjectCard key={index} {...project}/>
                                    )
                                })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Col>
         </Row>
        </Container>
        <img className="background-image-right" src={ColorSharp2} alt="background img2" />
    </section>
 )
} 