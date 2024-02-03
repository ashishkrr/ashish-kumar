export interface IScrollAndMenuContext {
  isMenuButtonClicked: boolean;
  isScrollingDown: boolean;
  handleMenuClick: (isMenuButtonClicked: boolean) => void;
  setScrolling: (setScroll: boolean) => void;
}
