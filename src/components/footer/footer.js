import React from "react";
import "./footer.css";
import fmail from '../images/Logo/mail.png';
import finstagram from "../images/Logo/instagram.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="SocialGroup">
          <div className="social">
            <a href="/" target="_blank">
              <img className="fmail icon" src={fmail} />
            </a>
          </div>
          <div className="social">
            <a
              href="/"
              target="_blank"
            >
              <img className="finstagram icon" src={finstagram} />
            </a>
          </div>
        </div>
        <div className="copyright">All rights reserved © 2022 - RR</div>
      </footer>
    </>
  );
};

export default Footer;
