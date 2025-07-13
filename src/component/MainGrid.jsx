import "./MainGrid.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profileImg from '../assets/IMG_3930.jpg';
import web1 from '../assets/web1.png';
import web2 from '../assets/web2.png';
import web3 from '../assets/web3.png';

const MainGrid = () => {
  const navigate = useNavigate();

  const handleProjectClick = () => {
    navigate("/projects");
  };
  useEffect(() => {
    // Add a small delay to ensure DOM is fully rendered
    const initializeStackAnimation = () => {
      const stackItems = document.querySelectorAll('.stack-item');
      
      // Only proceed if stack items are found
      if (stackItems.length === 0) {
        return;
      }
      
      const eventListeners = [];
      
      stackItems.forEach((item, index) => {
      const handleMouseEnter = () => {
        stackItems.forEach((otherItem, otherIndex) => {
          const rowSize = 4;
          const currentRow = Math.floor(index / rowSize);
          const otherRow = Math.floor(otherIndex / rowSize);
          const sameRow = currentRow === otherRow;

          // Get position within the row
          const currentPosInRow = index % rowSize;
          const otherPosInRow = otherIndex % rowSize;
          const horizontalDistance = Math.abs(currentPosInRow - otherPosInRow);
          const verticalDistance = Math.abs(currentRow - otherRow);

          // Calculate actual row size for incomplete rows
          const totalItems = stackItems.length;
          const itemsInOtherRow = Math.min(
            rowSize,
            totalItems - otherRow * rowSize
          );
          const itemsInCurrentRow = Math.min(
            rowSize,
            totalItems - currentRow * rowSize
          );
          const lastPosInOtherRow = itemsInOtherRow - 1;
          const lastPosInCurrentRow = itemsInCurrentRow - 1;

          if (otherIndex === index) {
            // Hovered item - scale up
            otherItem.style.transform = "scale(1.15)";
            otherItem.style.zIndex = "10";
          } else if (sameRow && horizontalDistance === 1) {
            // Adjacent items in same row
            const direction = otherPosInRow > currentPosInRow ? 1 : -1;
            // Reduce movement for edge items (first or last in actual row)
            const isEdgeItem =
              otherPosInRow === 0 || otherPosInRow === lastPosInOtherRow;
            const movement = isEdgeItem ? direction * 2 : direction * 4;
            otherItem.style.transform = `translateX(${movement}px) scale(0.95)`;
          } else if (sameRow && horizontalDistance === 2) {
            // Items 2 positions away in same row
            const direction = otherPosInRow > currentPosInRow ? 1 : -1;
            // Reduce movement for edge items (first or last in actual row)
            const isEdgeItem =
              otherPosInRow === 0 || otherPosInRow === lastPosInOtherRow;
            const movement = isEdgeItem ? direction * 1 : direction * 2;
            otherItem.style.transform = `translateX(${movement}px) scale(0.97)`;
          } else if (sameRow && horizontalDistance === 3) {
            // Items 3 positions away in same row (opposite corner)
            const direction = otherPosInRow > currentPosInRow ? 1 : -1;
            // Minimal movement for edge items (first or last in actual row)
            const isEdgeItem =
              otherPosInRow === 0 || otherPosInRow === lastPosInOtherRow;
            const movement = isEdgeItem ? 0 : direction * 1;
            otherItem.style.transform = `translateX(${movement}px) scale(0.98)`;
          } else if (verticalDistance === 1) {
            // Items in adjacent rows
            const rowDirection = otherRow > currentRow ? 1 : -1;
            let horizontalOffset = 0;

            // Add horizontal movement based on column alignment
            if (horizontalDistance <= 1) {
              const isEdgeItem =
                otherPosInRow === 0 || otherPosInRow === lastPosInOtherRow;
              horizontalOffset =
                (otherPosInRow - currentPosInRow) * (isEdgeItem ? 1 : 2);
            }

            otherItem.style.transform = `translate(${horizontalOffset}px, ${
              rowDirection * 4
            }px) scale(0.96)`;
          } else {
            // Distant items - slight scale down
            otherItem.style.transform = "scale(0.98)";
            otherItem.style.opacity = "0.9";
          }
        });
      };

      const handleMouseLeave = () => {
        stackItems.forEach((otherItem) => {
          otherItem.style.transform = "";
          otherItem.style.zIndex = "";
          otherItem.style.opacity = "";
        });
      };

      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);

      // Store references for cleanup
      eventListeners.push({
        element: item,
        mouseenter: handleMouseEnter,
        mouseleave: handleMouseLeave,
      });
    });

      // Return cleanup function for the animation
      return () => {
        eventListeners.forEach(({ element, mouseenter, mouseleave }) => {
          element.removeEventListener("mouseenter", mouseenter);
          element.removeEventListener("mouseleave", mouseleave);
        });
      };
    };

    // Initialize with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(initializeStackAnimation, 100);

    // Cleanup timeout and animations on unmount
    return () => {
      clearTimeout(timeoutId);
      const stackItems = document.querySelectorAll('.stack-item');
      stackItems.forEach((item) => {
        item.style.transform = '';
        item.style.zIndex = '';
        item.style.opacity = '';
      });
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="Grid1">
        <div className="Row1">
          <div className="pic">
            <img src={profileImg} alt="Profile" />
          </div>
          <div className="about">
            <div className="img-cont">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#57544A"
                  d="M53.039 164.427c.354-.946 5.111-8.701 5.792-9.434 7.192-7.735 3.36-8.944 7.379-16.727.708-1.372 2.148-3.117.604-4.264-.871-.647-3.151-.168-4.325.566-2.015 1.26-3.863 2.943-5.419 4.762-3.046 3.561-6.625 5.874-11.308 6.648-1.783.295-3.436 1.447-5.116 2.277-.701.346-1.315.868-2.13 1.419-.693-2.42.246-4.152 1.495-5.512 1.252-1.362 2.808-2.611 4.471-3.389 3.991-1.867 6.873-4.759 8.605-8.734 1.264-2.902 3.285-4.873 6.048-6.222.952-.465 2.034-.859 2.731-1.597.643-.68.85-1.777 1.249-2.691-.882-.22-1.864-.931-2.637-.609-9.336 3.881-15.739.513-20.744 1.386-6.199 1.082-5.704.25-12.874 4.426-.607.353-1.419.016-2.129.016l-.268-.641c.764-.606 1.555-1.2 2.304-1.793 10.735-8.495 13.991-5.517 22.143-9.742 1.209-.626 7.41-4.999 8.432-5.989-1.233-.724-5.335-1.602-6.621-1.716-2.824-.251-5.765-.296-8.535.233-3.775.72-7.276.515-10.946-.642-3.562-1.123-7.325-1.6-11.241-2.411.268-.338.579-1.013 1.105-1.352 3.254-2.093 6.77-3.154 10.597-1.973 3.634 1.122 7.028.795 10.274-1.176 3.474-2.109 7.234-2.437 11.198-2.092 1.43.125 3.979-.17 4.19-.848.613-1.971-1.544-2.668-2.947-3.065-9.475-2.675-9.952-7.432-14.683-9.662-4.948-2.332-9.39-1.724-14.333-4.065-.818-.388-1.547-.966-2.318-1.456l.218-.806c1.665.077 13.8.1 15.441.339 8.549 1.241 6.628 2.532 15.186 3.708 1.368.188 2.841-.396 4.265-.623-.568-1.406-.772-3.222-1.782-4.131-1.932-1.739-4.162-3.378-6.556-4.31-4.273-1.663-7.559-4.261-10.308-7.913-1.75-2.324-4.106-4.185-6.185-6.259-.411-.41-.795-.847-1.581-1.689 1.267-.227 2.084-.509 2.896-.496 4.109.07 7.521 1.741 10.094 4.935 2.234 2.775 5.045 4.214 8.539 4.66 4.384.559 8.364 2.095 11.495 5.444.658.704 1.507 1.393 2.395 1.66.753.227 1.869.077 2.475-.378.334-.251.419-1.797-.151-2.237-4.988-3.85-4.945-11.966-7.468-16.576-3.254-5.946-3.224-9.482-9.793-15.13-.626-.538-.552-1.585-.819-2.383l.626-.463c.893.728 1.618 1.737 2.667 2.194 9.303 4.054 8.398 11.695 14.759 18.027.216.215 6.041 6.623 10.416 7.236.26-1.728-.29-6.711-.664-8.287-.654-2.763-2.072-5.335-3.064-8.026-.986-2.676-2.157-5.342-2.678-8.12-.739-3.943-.964-7.985-1.387-11.986-.046-.431.049-.878.105-1.721.842.381 1.56.544 2.069.963 3.076 2.534 4.978 5.801 5.186 9.809.201 3.889 1.517 7.102 4.513 9.607 3.483 2.912 4.782 6.935 5.589 11.214.309 1.642.58 3.884 2.553 3.8 1.953-.083 2.094-2.398 1.935-3.917-1.332-12.696 1.728-18.594 4.443-29.266.132-.517-.412-5.918-.219-6.395.146-.36.661-.896.864-.837.405.118.869.572 1.018.922 2.8 6.56.958 14.572 2.056 21.032.7 4.12 1.241 10.379 2.121 14.461.422 1.956 1.764 2.136 3.087.51 2.036-2.502 4.487-9.219 4.471-12.429-.022-4.48 1.617-8.255 3.965-11.947 1.735-2.729 2.974-5.777 4.432-8.684.284-.567.561-1.138.993-2.016 2.163 2.426 2.537 4.902 1.85 7.494-.603 2.275-1.377 4.536-2.362 6.67-1.633 3.535-2.015 7.207-1.428 10.956.577 3.681.145 7.122-1.453 10.465-.524 1.095-1.087 2.249-1.231 3.425-.113.924.103 2.292.711 2.772.473.373 2.046-.022 2.665-.59 3.192-2.927 8.655-5.77 11.692-8.861 5.438-5.534 8.429-11.342 13.855-16.887.624-.638 1.445-1.081 2.175-1.615l.712.52c-.403 1.144-1.803 7.186-2.357 8.25-4.398 8.444-7.741 12.021-12.121 20.474-.4.771-.315 1.796-.456 2.703 1.011.068 2.289.566 2.986.127 2.491-1.568 5.13-3.143 7.057-5.311 2.958-3.328 6.857-5.633 11.076-7.015 3.038-.995 5.918-2.565 9.236-4.02-.033.657.115 1.574-.153 2.345-1.171 3.369-3.706 5.663-6.744 7.112-4.141 1.975-7.069 4.734-9.313 8.877-1.5 2.769-4.6 4.679-7.055 6.895-.892.805-2.114 1.255-2.948 2.103-.537.546-.641 1.522-.94 2.305.811.263 1.671.85 2.425.736 3.671-.555 10.989-5.446 14.638-6.141 7.745-1.475 11.811 1.177 19.562-.267.956-.178 1.973-.021 2.96-.024l.215.759c-1.227.781-2.49 1.513-3.689 2.326-9.128 6.188-10.81 1.408-18.552 5.44-.996.519-6.649 7.781-7.494 8.524-1.291 1.134-1.006 2.058.553 2.695 3.409 1.393 6.902 1.889 10.443.703 3.478-1.164 6.78-.849 10.235.273 3.787 1.229 7.726 1.983 11.949 3.031-.564.594-1.045 1.307-1.704 1.761-3.163 2.177-6.733 2.417-10.264 1.483-3.496-.925-6.781-.717-9.955.83-3.941 1.921-7.975 2.793-12.348 2.003-1.007-.182-2.123.046-3.153.262-.591.124-1.276.494-1.583.972-.145.225.392 1.1.811 1.442.815.664 6.109 3.75 7.052 4.217 9.383 4.653 8.476 1.58 17.856 6.238.914.454 7.642 6.315 8.497 6.89l-.146.646c-.898 0-7.474-2.908-8.351-3.044-8.842-1.368-12.009.191-20.862-1.096-.967-.141-2.661-.932-4.222-1.515-1.04-.388-2.003.731-1.467 1.709 1.009 1.841 2.301 4.014 3.08 4.751 1.712 1.619 3.839 2.963 6.016 3.874 3.342 1.398 5.951 3.467 8.145 6.337 1.963 2.568 4.269 4.87 6.425 7.288.201.226.444.421.612.668.117.173.14.411.238.724-1.929 1.183-3.945.779-5.621-.118-2.03-1.086-3.998-2.496-5.584-4.16-2.127-2.232-4.46-4.015-7.456-4.517-4.556-.762-8.506-2.517-11.899-5.73-.434-.41-1.004-.674-1.618-.892-1.011-.358-2.051.447-1.969 1.523.05.655.152 1.283.425 1.824 2.656 5.261 7.75 10.046 10.461 15.28 2.159 4.168 1.932 8.785 4.083 12.957.422.818.666 1.73.992 2.598l-.549.444c-.629-.409-1.354-.721-1.873-1.24-1.62-1.62-4.267-8.158-8.109-12.014-4.01-4.024-6.448-.998-10.754-6.87-.899-1.226-2.979-7.36-4.374-8.101-.265 1.556-.686 9.003-.46 10.484.253 1.659 1.092 3.336 2.042 4.757 2.594 3.879 3.866 8.006 3.578 12.729-.126 2.078.481 4.202.755 6.305l.496 3.793c-3.339-1.624-5.209-3.687-6.119-6.511-.627-1.947-1.01-3.992-1.304-6.023-.357-2.473-1.417-4.508-3.299-6.074-3.176-2.643-5.024-6.038-5.933-10.033-.252-1.107-.537-2.274-1.12-3.218-.399-.646-.977-1.18-1.56-1.711a.927.927 0 0 0-1.401.176c-.409.619-.81 1.24-.949 1.915-.845 4.105.8 7.487.145 11.628-1.179 7.457-4.627 15.681-5.806 23.138-.117.74-.639 1.414-.973 2.119l-.7-.005c-.275-.947-.617-1.885-.808-2.842-2.129-10.682.9-16.249-.393-25.154-.114-.788-1.28-7.883-1.918-10.799a.582.582 0 0 0-1.067-.18c-1.419 2.321-3.954 7.801-4.248 8.479-.946 2.187-1.858 4.533-2.047 6.875-.345 4.28-1.611 8.077-4.393 11.289-2.019 2.332-3.911 4.669-4.33 7.875-.043.33-.394.619-.89 1.355-.541-.95-1.102-1.609-1.318-2.367-.925-3.254-.478-6.455 1.253-9.267 2.366-3.842 2.893-7.716 2.24-12.216-.398-2.746.945-4.172 1.589-7.033.332-1.474.962-4.443 1.316-5.915.133-.552-1.446-4.418-1.812-4.565-.557-.224-3.014 1.349-3.472 1.747-1.949 1.693-3.919 4.116-4.96 6.488-4.712 10.73-10.38 12.904-16.639 19.233-.755.764-1.681 1.357-2.528 2.029l-.762-.599Z"
                  data-color="1"
                ></path>
              </svg>
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
          <div className="projects" onClick={handleProjectClick}>
            <div className="project-label">Project</div>
            <div className="project-container">
              <div className="cards card1">
                <img src={web2} alt="roasetto" />
              </div>
              <div className="cards card2">
                <img src={web1} alt="Fylla Project" />
              </div>
              <div className="cards card3">
                <img src={web3} alt="Roasetto Project" />
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
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                    alt="HTML5"
                  />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                    alt="CSS3"
                  />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    alt="Tailwind CSS"
                  />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                  />
                </div>
              </div>
            </div>
            <div className="stack-row">
              <div className="stack-item">
                <div className="stack-icon">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                    alt="Java"
                  />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                    alt="Python"
                  />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    alt="React.js"
                  />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                    alt="Node.js"
                  />
                </div>
              </div>
            </div>
            <div className="stack-row">
              <div className="stack-item">
                <div className="stack-icon">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                    alt="Express.js"
                  />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                    alt="Sass (SCSS)"
                  />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                    alt="Git"
                  />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                    alt="GitHub"
                  />
                </div>
              </div>
            </div>
            <div className="stack-row">
              <div className="stack-item">
                <div className="stack-icon">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                    alt="Postman"
                  />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
                    alt="Redux Toolkit"
                  />
                </div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                    alt="MongoDB"
                  />
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
