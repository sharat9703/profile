import React from "react";
import { Col } from "react-bootstrap";
export const ProjectCard =({title,description,url})=>{
    const card = (
              <div className="proj-imgbx">
                 <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                 </div>

              </div>
    )
    return(
        <Col sm={6} md={4}>
            {url ? <a href={url} target="_blank" rel="noreferrer" className="proj-link">{card}</a> : card}
        </Col>
    )
}
