import { ReactElement } from "react";
import styled from "styled-components";
import SideNavigationBar from "../components/navigation/SideNavigationBar";
import { useScreen } from "../context/context";
import { ScreenType } from "../utils/custom-types";
import Header from "../components/header/HeaderIcons";
import Footer from "../components/footer/Footer";
import Introduction from "../components/into/Introduction";
import "../App.css";
import { Skills } from "../components/skills/Skills";
import { Contact } from "../components/contact/Contact";
import { Services } from "../components/service/Services";
import { AboutMe } from "../components/about/AboutMe";

type PageContentCSSProps = {
  left: string;
};
const Content = styled.div`
  width: 100%;
  height: 100vh;
`;

const NavContent = styled.div<PageContentCSSProps & React.Ref<HTMLDivElement>>`
  position: absolute;
  top: 0;
  left: ${(pageContentCSSProps) => `${pageContentCSSProps.left}`};
  right: 0;
  margin-top: 5.5rem;
  margin-inline: 1.2rem;
  overflow-y: hidden;
  width: -webkit-fill-available;
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
  overflow-wrap: anywhere;
`;

const Landing = (): ReactElement => {
  return (
    <Content id="content">
      <PageContent />
      <SideNavigationBar></SideNavigationBar>
    </Content>
  );
};

const PageContent = () => {
  const screenType: ScreenType = useScreen();

  const getPageLeftPosition = (): string => {
    switch (screenType) {
      case "desktop":
        return `300px`;
      case "mobile":
      case "tabs":
        return `0`;
      default:
        return "0";
    }
  };
  return (
    <>
      <Header left={getPageLeftPosition()} position={""} />
      <NavContent left={getPageLeftPosition()}>
        <Introduction />
        <Skills />
        <Services />
        <AboutMe />
        <Contact />
        <Footer />
      </NavContent>
    </>
  );
};

export default Landing;
