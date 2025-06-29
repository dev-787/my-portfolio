import "./MainGrid.scss";
const MainGrid = () => {
  return (
    <div className="wrapper">
      <div className="Grid1">
        <div className="Row1">
          <div className="pic">
            <img src="" alt="" />
          </div>
          <div className="about">
            <div className="img-cont">
              <img src="src/assets/about-icon.svg" alt="" />
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
            <div class="project-label">Project</div>
            <div className="project-container">
              <div className="cards card1">
                <img src="src/assets/web2.png" alt="roasetto" />
              </div>
              <div className="cards card2">
                <img src="src/assets/web1.png" alt="Fylla Project" />
              </div>
              <div className="cards card3">
                <img src="src/assets/web3.png" alt="Roasetto Project" />
              </div>
            </div>
          </div>

          <div className="experience">
            <div class="section-label">Education</div>

            <div class="experience-item">
              <div class="job-info">
                <div class="job-title">Parul University</div>
                <div class="company">B.tech</div>
              </div>
              <div class="duration">2023 - Present</div>
            </div>

            <div class="experience-item">
              <div class="job-info">
                <div class="job-title">ST. Joseph</div>
                <div class="company">schooling</div>
              </div>
              <div class="duration">2009 - 2023</div>
            </div>

            <a href="#" class="view-resume">
              View resume ↗
            </a>
          </div>
        </div>
      </div>
      <div className="grid2">
        <div className="column1">
          <div class="Stack-label">Stack</div>
        </div>
      </div>
    </div>
  );
};

export default MainGrid;
