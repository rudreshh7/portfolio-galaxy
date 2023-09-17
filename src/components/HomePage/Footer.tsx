import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-img">
        <img src="/images/rudreshfootermain.svg" alt="" />
      </div>
      <div className="footer-main">
        <div className="copyright">&copy; 2023 Rudresh Jha</div>
        <div className="footer-socials">
          <div className="footer-names">
            <span>
              <a href="https://rudresh.vercel.app/projects">PROJECTS</a>
            </span>
            <span>
              <a href="https://rudresh.hashnode.dev/" target="_blank">
                BLOGS
              </a>
            </span>
            <span>ABOUT</span>
          </div>
          <div className="footer-icons">
            <span>
              <a href="https://twitter.com/TheRudresh" target="_blank">
                <img src="/images/twitter.svg" alt="" />
              </a>
            </span>
            <span>
              <a href="https://github.com/rudreshh7" target="_blank">
                <img src="/images/github.svg" alt="" />
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/rudreshh7/" target="_blank">
                <img src="/images/linkedin.svg" alt="" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
