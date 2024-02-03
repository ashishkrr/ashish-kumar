import styled from "styled-components";
import { useScrollTracking } from "../../hooks/hooks";
import { HeaderRightIcons } from "../../common/icons";
import React from "react";
import { useScrollAndMenuContext } from "../../context/context";


type HeaderCSSProps = {
  left: string;
  position: string;
};

const HeaderWrapper = styled.div<HeaderCSSProps>`
  position: ${(headerContentCSSProps) => `${headerContentCSSProps.position}`};
  top: 0;
  left: ${(headerContentCSSProps) => `${headerContentCSSProps.left}`};
  right: 0;
  overflow-y: hidden;
  background-color: white;
  width: -webkit-fill-available;
  height: 5.5rem;
  box-shadow: 10px 0px 50px rgba(136, 136, 136, 0.3);
  z-index: 1;
  // background: linear-gradient(to bottom, blue, black 80%, rgba(255, 255, 255, 0));

  // &::before {
  //   content: '';
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
  //   width: -webkit-fill-available;
  //   height: 5.5rem;
  //   margin-inline: 3.5rem;
  //   right: 0;
  //   box-shadow: 10px 0px 50px rgba(136, 136, 136, 0.3);
  //   background: linear-gradient(to top, rgba(255, 255, 255, 0), white);
  //   pointer-events: none;
  // }
`;

// const HeaderLeftIconWrapper = styled.div`
//   position: absolute;
//   top: 0;
//   right: 1rem;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const HeaderRightIconWrapper = styled.div`
  position: absolute;
  height: 100%;
  left: 3rem;
  width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid grey;

  &:hover {
    cursor: pointer;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(136, 136, 136, 0.1)
    );
  }
`;
const Header = (props: HeaderCSSProps) => {
  const { left } = props;
  const { positionType } = useScrollTracking();
  
  console.log("pos....", positionType)
  return (
    <HeaderWrapper left={left} position={positionType} >
      <RightHeader />
    </HeaderWrapper>
  );
};

// const HeaderLeft = () => {
//   return (
//     <HeaderLeftIconWrapper>
//       {HeaderLeftIcons.map((icon) => {
//         const [key, IconElement] = icon.entries().next().value;
//         return <React.Fragment key={key}>{IconElement}</React.Fragment>;
//       })}
//     </HeaderLeftIconWrapper>
//   );
// };

const RightHeader = () => {
  const { handleMenuClick, setScrolling } = useScrollAndMenuContext();

  const menuClickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log("handler");
    event.preventDefault();
    handleMenuClick(true);
    setScrolling(false);
  };
  return (
    <HeaderRightIconWrapper>
      {HeaderRightIcons.map((icon) => {
        const [key, IconElement] = icon.entries().next().value;
        return (
          <IconWrapper
            onClick={(event) =>
              key === "menu" ? menuClickHandler(event) : undefined
            }
            key={key}
          >
            <React.Fragment>{IconElement}</React.Fragment>
          </IconWrapper>
        );
      })}
    </HeaderRightIconWrapper>
  );
};

export default Header;
