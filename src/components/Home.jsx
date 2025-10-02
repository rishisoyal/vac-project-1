import React from "react";
import Menu from "./Menu";

const Home = () => {
  function handleClosebtnClick() {
    document.getElementById("about-me-pop-up").style.display = "none";
    document.querySelector(".main").style.opacity = "1";
  }

  function handleAboutMebtnClick() {
    document.getElementById("about-me-pop-up").style.display = "flex";
    document.querySelector(".main").style.opacity = "0.2";
  }

  return (
    <>
      <div id="about-me-pop-up">
        <div className="content">
          <div>
            <div onClick={handleClosebtnClick} className="close-btn">
              X
            </div>
            <h1>
              About <span className="highlight">Me</span>
            </h1>
            <section class="personal-info-section">
              <div class="personal-info">
                <h2>PERSONAL INFOS</h2>
                <div class="info-grid">
                  <div class="info-item">
                    <strong>First Name:</strong> Rishi
                  </div>
                  <div class="info-item">
                    <strong>Last Name:</strong> Soyal
                  </div>
                  <div class="info-item">
                    <strong>Age:</strong> 21 Years
                  </div>
                  <div class="info-item">
                    <strong>Nationality:</strong> Indian
                  </div>
                  <div class="info-item">
                    <strong>Freelance:</strong>{" "}
                    <span class="available">Available</span>
                  </div>
                  <div class="info-item">
                    <strong>Address:</strong> Cool Place
                  </div>
                  <div class="info-item">
                    <strong>Phone:</strong> +91 1234567890
                  </div>
                  <div class="info-item">
                    <strong>Email:</strong> cooldude@mail.com
                  </div>
                  <div class="info-item">
                    <strong>GitHub:</strong> rishisoyal
                  </div>
                  <div class="info-item">
                    <strong>Languages:</strong> Hindi, English
                  </div>
                </div>
                <a href="#" class="download-cv">
                  <span>DOWNLOAD CV</span>
                  <div class="download-icon">⬇</div>
                </a>
              </div>

              <div class="stats">
                <div class="stat-box">
                  <span class="stat-number">12+</span>
                  <span class="stat-text">YEARS OF EXPERIENCE</span>
                </div>
                <div class="stat-box">
                  <span class="stat-number">97+</span>
                  <span class="stat-text">COMPLETED PROJECTS</span>
                </div>
                <div class="stat-box">
                  <span class="stat-number">81+</span>
                  <span class="stat-text">HAPPY CUSTOMERS</span>
                </div>
                <div class="stat-box">
                  <span class="stat-number">53+</span>
                  <span class="stat-text">AWARDS WON</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="content">
          <div style={{ display: "flex", width: "100%" }}>
            <div className="bg-block"></div>
            <div className="front-photo"></div>
            <div className="text-content">
              <h1>
                <span className="highlight">I'M RISHI SOYAL.</span>
                <br />
                WEB DEVELOPER
              </h1>
              <p>
                <span>I'm an India based full-stack web developer</span>
                <span>
                  focused on crafting clean & user-friendly experiences,
                </span>
                <span>I am passionate about building excellent software</span>
                <span>that improves the lives of those around me. </span>
              </p>
              <button onClick={handleAboutMebtnClick} className="cta">
                MORE ABOUT ME
              </button>
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </>
  );
};

export default Home;
