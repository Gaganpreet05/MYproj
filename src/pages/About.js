// File: about.js
// Author: Gaganpreet Kaur
// StudentID: 301385415
// Date: 2024-05-29


import React from 'react';
import myImage from '../assets/MyImage.png';
import resume from '../assets/MyResume.pdf'; 

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <img src={myImage} alt="About Myself" />
      <p>Hi, I'm Gaganpreet. I'm learning a Software enigineering Technician.</p>
      <p>I have experience in programming languages such as Java, Python, C++, or JavaScript.</p>
      <p>Knowledge of database systems like SQL, MySQL, and NoSQL.</p>
      <p>Proficiency in using version control systems like Git.</p>
      <a href={resume} download>Download My Resume</a>
    </div>
  );
};

export default About;
