import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

const skills = [
  ["Node.js", meter1],
  ["TypeScript", meter1],
  ["Express.js", meter1],
  ["REST APIs & Microservices", meter1],
  ["RabbitMQ / Event-Driven", meter2],
  ["Oracle & PL/SQL", meter1],
  ["MongoDB", meter2],
  ["MySQL", meter2],
  ["Redis", meter3],
  ["Docker & NGINX", meter2],
  ["AWS", meter3],
  ["GitLab CI/CD", meter2],
  ["Application Security", meter2],
  ["SWIFT / ISO 20022", meter2],
  ["MCP & Claude Code", meter2],
  ["React.js", meter3],
  ["Java", meter3],
  ["Python", meter3],
];

export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
    <section className="skill" id = "skills">
         <Container>
            <Row>
               <Col>
               <div className="skill-box">
                <h2>Skills</h2>
                    <p>Backend-first: Node.js and TypeScript services, event-driven messaging and well-tuned databases, shipped with Docker, NGINX and CI/CD.<br/>Domain depth in payments, forex & treasury, KYC and regulatory compliance.</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                      {skills.map(([name, meter])=>(
                        <div className="item" key={name}>
                         <img className="img-fluid" src={meter} alt=""/>
                         <h5>{name}</h5>
                        </div>
                      ))}
                    </Carousel>

               </div>
               </Col>
            </Row>
         </Container>
         <img className="background-image-left " src={colorSharp} alt="background"/>
    </section>
 )
}
