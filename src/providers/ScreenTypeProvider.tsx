import { ReactNode } from "react";
import { ScreenTypeContext, ScrollAndMenuContext } from "../context/context";
import { ScreenType } from "../utils/custom-types";
import { useScreenType } from "../hooks/ScreenResize";
import { ScrollTrackingComponent, useMenuButton } from "../hooks/hooks";
import { IScrollAndMenuContext } from "../interface/scrollAndMenu";

export const ScreenTypeProvider = ({ children }: { children: ReactNode }) => {
  const screentType: ScreenType = useScreenType();
  return (
    <ScreenTypeContext.Provider value={screentType}>
      {children}
    </ScreenTypeContext.Provider>
  );
};

export const ScrollAndMenuProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { isMenuButtonClicked, handleMenuClick } = useMenuButton();
  const { isScrollingDown, setScrolling } = ScrollTrackingComponent();

  const contextValue: IScrollAndMenuContext = {
    isMenuButtonClicked,
    isScrollingDown,
    handleMenuClick,
    setScrolling,
  };

  return (
    <ScrollAndMenuContext.Provider value={contextValue}>
      {children}
    </ScrollAndMenuContext.Provider>
  );
};
