import React from "react";
// import Typical from "react-typical";
import "./Profile.css";

function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a target="_blank" href="https://facebook.com/emmanuel.egote/">
              <i className="fa fa-2x fa-facebook-square" />
            </a>
            <a target="_blank" href="https://www.instagram.com/eman_egote/">
              <i className="fa fa-2x fa-instagram" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/emmanuel-m-egote/"
            >
              <i className="fa fa-2x fa-linkedin-square" />
            </a>
            <a target="_blank" href="https://twitter.com/eman_egote">
              <i className="fa fa-2x fa-twitter-square" />
            </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm <span className="highlighted-text">Emmanuel</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>FrontEnd Developer💻
                {/* {""}
                <Typical 
                loop={Infinity} 
                steps={[
                    "Enthusiastic Dev🔴", 1000,
                    "FrontEnd Developer💻", 1000,
                    "React Dev👨🏾‍💻", 1000,
                    "Enthusiastic Dev", 1000,

                ]} /> */}
              </h1>
              <span className="profile-role-tagline">
                Building applications with front-end operations.
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button className="btn btn-primary">
              {""}
              Hire Me {" "}
            </button>
            <a href='Emmanuel Egote - resume.pdf' download='Emmanuel Egote - resume.pdf'>
              <button className="btn btn-outline-secondary">Get Resume</button>
            </a>
          </div>

        </div>
        
        <div className="profile-picture">
          <div className="profile-picture-bg"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
