import React from "react";
import Menu from "./Menu";

const About = () => {
  return (
    <div className="main">
      <div className="content">
        <div>
          <h1>
            About <span className="highlight">Me</span>
          </h1>
          <section className="personal-info-section">
            <div className="personal-info">
              <h2>PERSONAL INFOS</h2>
              <div className="info-grid">
                <div className="info-item">
                  <strong>First Name:</strong> Rishi
                </div>
                <div className="info-item">
                  <strong>Last Name:</strong> Soyal
                </div>
                <div className="info-item">
                  <strong>Age:</strong> 21 Years
                </div>
                <div className="info-item">
                  <strong>Nationality:</strong> Indian
                </div>
                <div className="info-item">
                  <strong>Freelance:</strong>{" "}
                  <span className="available">Available</span>
                </div>
                <div className="info-item">
                  <strong>Address:</strong> Cool Place
                </div>
                <div className="info-item">
                  <strong>Phone:</strong> +911234567890
                </div>
                <div className="info-item">
                  <strong>Email:</strong> cooldude@mail.com
                </div>
                <div className="info-item">
                  <strong>GitHub:</strong> rishisoyal
                </div>
                <div className="info-item">
                  <strong>Languages:</strong> Hindi, English
                </div>
              </div>
              <a href="#" className="download-cv">
                <span>DOWNLOAD CV</span>
                <div className="download-icon">⬇</div>
              </a>
            </div>

            <div className="stats">
              <div className="stat-box">
                <span className="stat-number">12+</span>
                <span className="stat-text">YEARS OF EXPERIENCE</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">97+</span>
                <span className="stat-text">COMPLETED PROJECTS</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">81+</span>
                <span className="stat-text">HAPPY CUSTOMERS</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">53+</span>
                <span className="stat-text">AWARDS WON</span>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default About;
