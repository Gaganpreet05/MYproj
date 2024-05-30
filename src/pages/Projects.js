// File: projects.js
// Author: Gaganpreet Kaur
// StudentID: 301385415
// Date: 2024-05-29


import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Blog Website',
      image: require('../assets/Proj1.png'), 
      description: 'Developed a responsive personal blog website using React and Node.js. The blog features a clean and modern design, allowing users to read and comment on blog posts.',
      role: 'Full-stack Developer',
      outcome: 'Successfully created a platform where I can share my thoughts and experiences with a wider audience. Improved my skills in React and Node.js.'
    },
    {
      title: 'Interactive table creator',
      image: require('../assets/Proj2.png'), 
      description: 'Developed a feature-rich web application to manage and display product inventories.',
      role: 'Developer',
      outcome: 'Successfully delivered a fully functional web application that streamlined inventory management, reduced manual errors, and improved operational efficiency. The application was well-received by stakeholders and contributed to significant time savings and better resource management within the company.'
    },
    {
      title: 'Task Management Mobile App',
      image: require('../assets/Proj3.png'), 
      description: 'Designed and developed a task management mobile app using React Native. The app helps users organize and track their daily tasks efficiently.',
      role: 'Mobile App Developer',
      outcome: 'Delivered a user-friendly mobile application that assists users in managing their tasks. Gained experience in mobile app development with React Native.'
    },
  ];

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Role:</strong> {project.role}</p>
            <p><strong>Outcome:</strong> {project.outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
