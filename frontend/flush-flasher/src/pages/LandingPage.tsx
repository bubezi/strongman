import React from "react";
import { Container } from "react-bootstrap";
import introPicture from "../assets/images/intro.jpeg";
import { useNavigate } from "react-router-dom";
import "../assets/css/landing.css";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAccessClick = () => {
    navigate("/active");
  };

  return (
    <>
      <div className="landing-page">
        <Container>
          <div className="content">
            <h1 id="main-title">Welcome...</h1>
            <h1 id="main-intro">
              WE VALUE YOUR PRIVACY 100% OF YOUR INFORMATION WILL NOT BE SHARED
            </h1>
            <img src={introPicture} alt="Introduction" />
            <div className="dotted-box">
              <h1>
                WE REPLACE EMBARRASSMENT IN YOUR RELATIONSHIP WITH JOY <br />
                <br />
                BY ENJOYING THE BEST ORGANIC PRODUCT AVAILABLE <br />
                100% NATURAL
              </h1>
            </div>
          </div>
        </Container>
        <div className="black-background-across-the-page">
          <h3 id="disclaimer">DISCLAIMER</h3>
          <p>
            THIS IS NOT FACEBOOK: This site is not part of the Facebook or
            Facebook Inc. website. In addition, this site is NOT endorsed by
            Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
        </div>
      </div>
      <footer className="footer">
        <button className="cta-button" onClick={handleAccessClick}>
          Click Here to Gain Access
        </button>
      </footer>
    </>
  );
};

export default LandingPage;
