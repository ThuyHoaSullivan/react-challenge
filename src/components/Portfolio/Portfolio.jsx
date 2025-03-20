// src/components/Portfolio/Portfolio.jsx
import React from 'react';
import Project from './Project';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Surf Report',
      image: 'https://www.surfsistas.com/wp-content/uploads/2023/02/swell-lines-1024x683.jpg',
      deployedLink: 'https://surf-report.com',
      githubLink: 'https://github.com/surf-report',
    },
    {
      title: 'LED Wall',
      image: 'https://t4.ftcdn.net/jpg/06/05/13/65/360_F_605136551_Y3sKkwkd7oo5m8XzxPEeJpcGsTJqb523.jpg',
      deployedLink: 'https://led-wall.com',
      githubLink: 'https://github.com/led-wall',
    },
    {
      title: 'Calculator',
      image: 'https://media.licdn.com/dms/image/v2/D5612AQGwgAqFKFDbHQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681530784004?e=2147483647&v=beta&t=T-wg7QQ420QDLuc16Yu9wcc_OtWVZFDbelgT0b-0WC4',
      deployedLink: 'https://calculator.com',
      githubLink: 'https://github.com/calculator',
    },
    {
      title: 'Pastel Puzzles',
      image: 'https://cdn.prod.website-files.com/63fe5b1c322d2f50310b436a/6554dc5afb98ccf56db34ed0_The%20MERN%20Stack%20Explained.webp',
      deployedLink: 'https://pastel-puzzles.com',
      githubLink: 'https://github.com/pastel-puzzles',
    },
    {
      title: 'Run Buddy',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/c4/ed/c6/c4edc63f-c3e0-de6f-d010-a137a3fa03f0/AppIcons-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png',
      deployedLink: 'https://run-buddy.com',
      githubLink: 'https://github.com/run-buddy',
    },
  ];

  return (
    <section className="page-section-work">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            {...project}
            className={index === 0 ? 'full-width' : 'half-width'}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;