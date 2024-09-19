import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import './global.css';

const Home = () => {
  const contactMethods = [
    { type: 'Email', value: 'cal.brynestad@gmail.com', href: 'mailto:cal.brynestad@gmail.com' },
    { type: 'Phone', value: '(303)-482-5210', href: 'tel:3034825210' },
    { type: 'LinkedIn', value: 'www.linkedin.com/in/cal-brynestad', href: 'https://www.linkedin.com/in/cal-brynestad' },
    { type: 'GitHub', value: 'cal-brynestad', href: 'https://github.com/cal-brynestad' }
  ];

  const [currentContactIndex, setCurrentContactIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentContactIndex((prevIndex) => (prevIndex + 1) % contactMethods.length);
    }, 5000); // Change every 7 seconds

    return () => clearInterval(timer);
  }, []);

  const currentContact = contactMethods[currentContactIndex];

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.profile}>
          <img src="/profile_photo.jpg" alt="Cal Brynestad" className={styles.profileImage} />
          <div className={styles.profileText}>
            <h1>Cal Brynestad</h1>
            <p>Magna Cum Laude Computer Science Graduate</p> 
          </div>
        </div>
      </div>

      <section className={styles.about}>
        <h2 className={styles.headerTwo}>About Me</h2>
        <p>
          I am a programmer with a degree in Computer Science from CU Boulder, graduating Magna Cum Laude (3.86 GPA)
          after making the Dean's List every semester. I currently work for DataAnnotation.tech, training LLMs for companies like OpenAI, Anthropic, and Google,
          using a method called Reinforcement Learning from Human Feedback (RLHF).
        </p>
        <p>
          In the past, I worked with EnergyHub for my senior capstone project, helping deliver a demo web application that analyzed carbon emissions data 
          to determine the most carbon friendly time frame to charge an EV. Before that, I was an intern at Tyler Technologies, 
          where I converted a legacy COBOL desktop application into a C# cloud-based application.
        </p>
        <p>
          I feel lucky that I was born with the disposition and brain to enjoy programming because this means (I hope) that I will enjoy my career in 
          an industry with endless opportunites and potential as we accelerate in the digital age. The only thing left to be done is landing my dream job,
          which is the purpose of this website. So please, try your hardest to be impressed.
        </p>
      </section>

      <section className={styles.contact}>
        <h2 className={styles.headerTwo}>Contact Me</h2>
        <p>
          <strong>{currentContact.type}:</strong>{' '}
          <a href={currentContact.href}>{currentContact.value}</a>
        </p>
      </section>

      <section className={styles.navigation}>
        <Link to="/projects" className={styles.btnProjects}>
          View My Projects
        </Link>
      </section>
    </div>
  );
}

export default Home;