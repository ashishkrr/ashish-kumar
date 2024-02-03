import styled from "styled-components";
import { useScreen } from "../../context/context";
import { Wrapper } from "../common/Wrapper";
import { serviceImages, services } from "../../common/icons";
const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4rem;
  justify-content: space-evenly;
  gap: 3rem;
`;
interface ServiceItemProps {
  backgroundUrl?: string;
}

const ServiceItem = styled.div<ServiceItemProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 15rem;
  height: 12rem;
  background-color: rgb(242, 243, 247);
  margin-top: 1rem;
  position: relative;
  border-radius: 5%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &::before {
    content: "";
    position: absolute;
    width: 5rem;
    height: 5rem;
    background: #f2f3f7;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(135deg);
  }

  &::after {
    content: "";
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    background: url(${(props) => props.backgroundUrl || ""}) no-repeat center
      center/cover;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;


export const Services = () => {
    const screenType = useScreen();
    const inlineMargin = screenType === "desktop" ? "1.2rem" : "0";
    // const num_of_services = Array.from({ length: 3 });
    return (
      <Wrapper id="services" inlineMargin={inlineMargin}>
        <header>
          <h1 className="page-title">Experience & Services</h1>
          <div className="hr pb0" />
        </header>
        <ServicesWrapper>
          {serviceImages.map((imageURL, index) => {
            return (
              <ServiceItem key={index} backgroundUrl={imageURL}>
                <h4 style={{ marginBottom: "0.5rem" }}>
                  {services[index].keys().next().value}
                </h4>
                <p style={{ marginTop: 0, marginBottom: 0 }}>
                  {services[index].values().next().value}
                </p>
              </ServiceItem>
            );
          })}
        </ServicesWrapper>
      </Wrapper>
    );
  };