import React, { useState, forwardRef } from 'react';
import "../../styles/MyProjects.scss";
import { projects } from "../../utilities/projects";
import open from "../../assets/images/export.png";

const MyProjects = forwardRef((props, ref) => {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const handleMouseOver = (id) => {
    setHoveredProjectId(id);
  };

  const handleMouseOut = () => {
    setHoveredProjectId(null);
  };

  return (
    <div ref={ref} className="my-projects">
      <div className="title-3">
        <p>My <label>Projects</label></p>
      </div>
      <div className="project-list">
        {projects.map((list) => (
          <div
            className={list.class}
            style={{ flexDirection: list.id % 2 === 0 ? "row-reverse" : "row" }}
            key={list.id}>
            <div
              className="project-section-1"
              onMouseOver={() => handleMouseOver(list.id)}
              onMouseOut={handleMouseOut}
              style={{
                transform:
                  hoveredProjectId === list.id
                    ? `perspective(800px) rotateY(${list.id % 2 === 0 ? '-30deg' : '30deg'})`
                    : 'none',
                transition: 'transform 0.3s ease-in-out',
              }}>
              <img src={list.img} alt="" />
            </div>
            <div className="project-section-2">
              <p className="project-id">{list.num}</p>
              <p className="project-title">{list.title}</p>
              <p className="project-details">{list.details}</p>
              <a href={list.path} target="_blank" >
                <img src={open} alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default MyProjects;

