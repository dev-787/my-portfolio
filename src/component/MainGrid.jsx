import "./MainGrid.css";
import { useEffect } from 'react';

const MainGrid = () => {
  useEffect(() => {
    const stackItems = document.querySelectorAll('.stack-item');
    
    stackItems.forEach((item, index) => {
      const handleMouseEnter = () => {
        stackItems.forEach((otherItem, otherIndex) => {
          const distance = Math.abs(index - otherIndex);
          const rowSize = 4;
          const currentRow = Math.floor(index / rowSize);
          const otherRow = Math.floor(otherIndex / rowSize);
          const sameRow = currentRow === otherRow;
          
          if (otherIndex === index) {
            // Hovered item - scale up
            otherItem.style.transform = 'scale(1.3)';
            otherItem.style.zIndex = '10';
          } else if (sameRow && distance === 1) {
            // Adjacent items in same row
            const direction = otherIndex > index ? 1 : -1;
            otherItem.style.transform = `translateX(${direction * 20}px) scale(0.9)`;
          } else if (sameRow && distance === 2) {
            // Items 2 positions away in same row
            const direction = otherIndex > index ? 1 : -1;
            otherItem.style.transform = `translateX(${direction * 10}px) scale(0.95)`;
          } else if (Math.abs(currentRow - otherRow) === 1) {
            // Items in adjacent rows
            const rowDirection = otherRow > currentRow ? 1 : -1;
            otherItem.style.transform = `translateY(${rowDirection * 15}px) scale(0.92)`;
          } else {
            // Distant items - slight scale down
            otherItem.style.transform = 'scale(0.95)';
            otherItem.style.opacity = '0.8';
          }
        });
      };
      
      const handleMouseLeave = () => {
        stackItems.forEach((otherItem) => {
          otherItem.style.transform = '';
          otherItem.style.zIndex = '';
          otherItem.style.opacity = '';
        });
      };
      
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);
    });
    
    // Cleanup event listeners
    return () => {
      stackItems.forEach((item, index) => {
        item.removeEventListener('mouseenter', () => {});
        item.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="Grid1">
        <div className="Row1">
          <div className="pic">
            <img src="" alt="" />
          </div>
          <div className="about">
            <div className="img-cont">
              <img src="/src/assets/about-icon.svg" alt="" />
            </div>
            <div className="about-cont">
              <h3>
                I create modern, intuitive websites where design meets
                performance—built to feel like art and function like magic.
              </h3>
            </div>
          </div>
        </div>
        <div className="Row2">
          <div className="projects">
            <div className="project-label">Project</div>
            <div className="project-container">
              <div className="cards card1">
                <img src="/src/assets/web2.png" alt="roasetto" />
              </div>
              <div className="cards card2">
                <img src="/src/assets/web1.png" alt="Fylla Project" />
              </div>
              <div className="cards card3">
                <img src="/src/assets/web3.png" alt="Roasetto Project" />
              </div>
            </div>
          </div>

          <div className="experience">
            <div className="section-label">Education</div>

            <div className="experience-item">
              <div className="job-info">
                <div className="job-title">Parul University</div>
                <div className="company">B.tech</div>
              </div>
              <div className="duration">2023 - Present</div>
            </div>

            <div className="experience-item">
              <div className="job-info">
                <div className="job-title">ST. Joseph</div>
                <div className="company">schooling</div>
              </div>
              <div className="duration">2009 - 2023</div>
            </div>

            <a href="#" className="view-resume">
              View resume ↗
            </a>
          </div>
        </div>
      </div>
      <div className="grid2">
        <div className="column1">
          <div className="Stack-label">Stack</div>
          <div className="stack-container">
            <div className="stack-row">
              <div className="stack-item">
                <div className="stack-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
                </div>
              </div>
            </div>
            <div className="stack-row">
              <div className="stack-item">
                <div className="stack-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React.js" />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                </div>
              </div>
            </div>
            <div className="stack-row">
              <div className="stack-item">
                <div className="stack-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" alt="Redux Toolkit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainGrid;
