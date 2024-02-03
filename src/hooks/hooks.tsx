import { useCallback, useEffect, useRef, useState } from "react";

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
  const prevScrollYRef = useRef<number>(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < prevScrollYRef.current) {
      setPositionType('fixed');
    } else {
      setPositionType('absolute');
    }
    prevScrollYRef.current = currentScrollY;
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { positionType };
};
