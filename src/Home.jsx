import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto pb-20">
      <section className="flex flex-col items-center mt-10">
        <img src="/IMG_9447.jpg" alt="Cal Brynestad" className="rounded-full w-64 h-64 object-cover" />
        <h1 className="text-2xl font-bold mt-4">Cal Brynestad</h1>
        <p className="text-center mt-2">Magna Cum Laude Computer Science Graduate</p> 
      </section>

      <section className="mt-10 px-4">
        <h2 className="text-xl font-semibold mb-4">About Me</h2>
        <p className="text-base mb-4">
          I am a dedicated and motivated software engineer with a Bachelor's degree in Computer Science from the
          University of Colorado at Boulder, graduating with a 3.86 GPA. Currently I work as a contract Software Developer
          for DataAnnotation.tech (parent company Surge AI), training LLMs for the world's top AI companies using Reinforcement Learning from
          Human Feedback (RHLF). Essentially, I grade the quality of AI responses to any coding prompt you can think of
          and compare these responses to each other so that this data can be used to train the models. This stlye of work
          has helped me learn many new technologies in a short amount of time.
        </p>
        <p className="text-base mb-4">
          My previous professional experience includes my Senior Capstone project where me and my team mates delivered
          a demo web application for EnergyHub that analyzes carbon emissions data to determine the most carbon friendly 
          time frame to charge an EV. Before that, I took on the role of a Software Engineer Intern at Tyler Technologies, 
          where I helped transform a legacy COBOL application into a C# cloud-based application with a SQL server database.
        </p>
        <p className="text-base mb-4">
          In my free time I am working on a full stack modern web development course offered through the University of 
          Helsinki to continue learning in demand skills and to keep coding (including this personal website!). Additionally,
          as I look for a new job I've decided to expand my search into jobs requiring some experience, expertise, or interest in
          fields like AI and quantitative finance. As such, as I work on projects in these fields, they will be posted here!
        </p>
        <p className="text-base mb-4">
          Feel free to explore my portfolio and reach out if you have any questions or opportunities to collaborate!
        </p>
      </section>

      <section className="mt-10 px-4">
        <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
        <p className="text-base mb-2">
          <strong>Email:</strong> <a href="mailto:cal.brynestad@gmail.com" className="text-blue-500">cal.brynestad@gmail.com</a>
        </p>
        <p className="text-base mb-2">
          <strong>Phone:</strong> (303)-482-5210
        </p>
        <p className="text-base mb-2">
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/https://www.linkedin.com/in/cal-brynestad-49134616a/" className="text-blue-500">https://www.linkedin.com/in/cal-brynestad-49134616a/</a>
        </p>
        <p className="text-base mb-2">
          <strong>GitHub:</strong> <a href="https://github.com/cal-brynestad" className="text-blue-500">https://github.com/cal-brynestad</a>
        </p>
      </section>
    </div>
  );
}

export default Home;