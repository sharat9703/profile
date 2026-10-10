import React,{ useState , useEffect } from "react";
import {Container,Row,Col} from "react-bootstrap";
import {ArrowUpRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { LINKEDIN } from "../links";

export const Banner = ()=>{
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ["Backend Engineer", "Node.js & TypeScript Developer", "FinTech Engineer"];
    const  [text,setText] = useState("");
    const [delta,setdelta] = useState(200- Math.random()*100);
    const period = 1000;
    
    useEffect(()=>{
        let ticker = setInterval(()=>{
         tick();
        },delta)

        return ()=> {clearInterval(ticker)}
    })
       
    function tick() {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) {
            setdelta(prevdelta => prevdelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setdelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setdelta(200);
        }
    }

return(
    <section className="banner" id= "home">
        <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6} xl={7}>
                <span className="tagline">Software Development Engineer (Backend)</span>
                <h1>{`Hi, I am Sharat,`} <br/><span className="wrap">a {text}</span></h1>
                <p>Backend engineer with 2+ years building secure, high-volume Node.js services for mission-critical BFSI / FinTech platforms, including SWIFT / ISO 20022 payment messaging. I own features end to end, from design and microservices to deployment and production support. B.Tech CSE, IIIT Trichy.</p>
                <button onClick={()=>window.open(LINKEDIN,"_blank","noopener")} className="btn btn-dark">Let's Connect <ArrowUpRightCircle size={25}/></button>
              </Col>
              <Col xs={12} md={6} xl={5}>
                 <img className="img-fluid" src={headerImg} alt="header"/>
              </Col>
            </Row>
        </Container>

    </section>
)
}
export default Banner;