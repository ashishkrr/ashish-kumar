import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  text-align: center;
  border-top: 1px solid rgb(119, 119, 119);
  margin-bottom: 4rem;
`;

const Copyright = styled.p`
  small {
    &.copyright {
      font-size: 0.8rem; /* Adjust the font size as needed */
    }
  }
`;

const LegalNav = styled.nav`
  small {
    a.footer-nav {
      text-decoration: underline;
      text-underline-offset: 0.35rem;
      text-decoration-thickness: 2px;
      text-decoration-style: solid;
      text-decoration-color: rgb(154, 198, 231);
      color: black;
      font-weight: 700;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        <small className="copyright">
          © 2021 Ashish Kumar. All rights reserved.{" "}
        </small>
      </Copyright>
      <LegalNav>
        <small>
          <a className="footer-nav" href="/LICENSE/">
            LICENSE
          </a>{" "}
          |{" "}
          <a className="footer-nav" href="/cookies-policy/">
            COOKIES POLICY
          </a>{" "}
          |{" "}
          <a className="footer-nav" href="/IMPRESSUM/">
            IMPRESSUM
          </a>{" "}
          |{" "}
          <a className="footer-nav" href="./new.pdf" download={true}>
            RESUME
          </a>{" "}
        </small>
      </LegalNav>
    </FooterContainer>
  );
};

export default Footer;
