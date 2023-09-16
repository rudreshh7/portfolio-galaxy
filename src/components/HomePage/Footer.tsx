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
            <span>PROJECTS</span>
            <span>BLOGS</span>
            <span>ABOUT</span>
          </div>
          <div className="footer-icons">
            <span>
              <img src="/images/twitter.svg" alt="" />
              <a href="https://twitter.com/rudreshh7"></a>
            </span>
            <span>
              <img src="/images/github.svg" alt="" />
            </span>
            <span>
              <img src="/images/linkedin.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
