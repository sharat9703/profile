import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
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
                    <p> Lorem ipsum for now.....Lorem ipsum for now.....Lorem ipsum for now.....Lorem ipsum for now.....Lorem ipsum for now.....</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                      <div className="item">
                       <img className="img-fluid" src={meter1} alt='project 1'/>
                       <h5>HTML</h5>
                      </div>
                      <div className="item">
                       <img className="img-fluid" src={meter2} alt='project 2'/>
                       <h5>CSS</h5>
                      </div>
                      <div className="item">
                       <img className="img-fluid" src={meter3} alt='project 3'/>
                       <h5>Bootstrap</h5>
                      </div>
                      <div className="item">
                       <img className="img-fluid" src={meter1} alt='project 1'/>
                       <h5>JavaScript</h5>  
                      </div>
                      <div className="item">
                       <img className="img-fluid" src={meter3} alt='project 3'/>
                       <h5>Data Structures and Algorithms</h5>
                      </div>
                      <div className="item">
                       <img className="img-fluid" src={meter3} alt='project 1'/>
                       <h5>ReactJS</h5>  
                      </div>
                      <div className="item">
                       <img className="img-fluid" src={meter2} alt='project 1'/>
                       <h5>NodeJS</h5>  
                      </div>
                      <div className="item">
                       <img className="img-fluid" src={meter3} alt='project 1'/>
                       <h5>MongoDB</h5>  
                      </div>
                      <div className="item">
                       <img className="img-fluid" src={meter3} alt='project 1'/>
                       <h5>ExpressJS</h5>  
                      </div>
                      <div className="item">
                       <img className="img-fluid" src={meter2} alt='project 1'/>
                       <h5>SQL</h5>  
                      </div>
                      <div className="item">
                       <img className="img-fluid" src={meter1} alt='project 1'/>
                       <h5>Python</h5>  
                      </div>
                      <div className="item">
                       <img className="img-fluid" src={meter3} alt='project 1'/>
                       <h5>Java</h5>  
                      </div>
                      <div className="item">
                       <img className="img-fluid" src={meter1} alt='project 1'/>
                       <h5>Git</h5>  
                      </div>
                      <div className="item">
                       <img className="img-fluid" src={meter1} alt='project 1'/>
                       <h5>Communication Skills</h5>  
                      </div>
                    </Carousel>
                    
               </div>
               </Col>
            </Row>
         </Container>
         <img className="background-image-left " src={colorSharp} alt="background"/>
    </section>
 )   
}