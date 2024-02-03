import { createContext, useContext } from "react";
import { ScreenType } from "../utils/custom-types";
import { MOBILE } from "../utils/constants";
import { IScrollAndMenuContext } from "../interface/scrollAndMenu";

export const ScreenTypeContext: React.Context<ScreenType> =
  createContext<ScreenType>(MOBILE);
export const useScreen = (): ScreenType => useContext(ScreenTypeContext);

export const ScrollAndMenuContext: React.Context<IScrollAndMenuContext> =
  createContext<IScrollAndMenuContext>({} as IScrollAndMenuContext);

export const useScrollAndMenuContext = (): IScrollAndMenuContext =>
  useContext(ScrollAndMenuContext);
//   const context = useContext(ScrollAndMenuContext);
//   if (!context) {
//     throw new Error('useScrollAndMenuContext must be used within a ScrollAndMenuProvider');
//   }
//   return context;
// };
