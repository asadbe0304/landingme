import React from 'react';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank" style={{border:"0px solid #000", borderRadius:"10px", shadow:"2px 2px "}}>
      <img className="hover img" width={250} height={250} style={{backgroundImage:"cover"}} src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
