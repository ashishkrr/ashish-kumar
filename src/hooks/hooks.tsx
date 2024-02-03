import { useEffect, useState } from "react";

export const useMenuButton = (): {
  isMenuButtonClicked: boolean;
  handleMenuClick: (isMenuButtonClicked: boolean) => void;
} => {
  const [isMenuButtonClicked, setMenuClick] = useState<boolean>(false);

  const handleMenuClick = (isMenuButtonClicked: boolean): void => {
    setMenuClick(isMenuButtonClicked);
  };

  return { isMenuButtonClicked, handleMenuClick };
};

export const ScrollTrackingComponent = (): {
  isScrollingDown: boolean;
  setScrolling: (isScrollingDown: boolean) => void;
} => {
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);

  const setScrolling = (isScrollingDown: boolean): void => {
    setIsScrollingDown(isScrollingDown);
  };

  return { isScrollingDown, setScrolling };
};

export const useScrollTracking = (): {
  positionType: string;
} => {
  const [positionType, setPositionType] = useState<string>("absolute");
  let prevScrollY = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < prevScrollY) {
      setPositionType("fixed");
    } else {
      setPositionType("absolute");
    }
    prevScrollY = currentScrollY;
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { positionType };
};
