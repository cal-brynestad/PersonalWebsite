import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import './global.css';

const Projects = () => {
  const projects = [
    { id: 1, title: "Trading Bot", description: "Solana blockchain trading bot used to execute trades provided by a popular, market moving newsletter as soon as it's released", image: "./Solana.jpeg", link: "#" },
    // Add more projects as needed
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.headerTwo}>Projects</h2>
      
      {projects.map(project => (
        <div key={project.id} className={styles.projectCard}>
          <img src={project.image} alt={project.title} className={styles.projectImage} />
          <div className={styles.projectInfo}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className={styles.projectLink}>View Project</a>
          </div>
        </div>
      ))}

      <section className={styles.navigation}>
        <Link to="/" className={styles.btnProjects}>
          Go Back Home
        </Link>
      </section>
    </div>
  );
}

export default Projects;