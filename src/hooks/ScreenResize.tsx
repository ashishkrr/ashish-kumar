
import useMediaQuery from '@mui/material/useMediaQuery';
import { ScreenType } from "../utils/custom-types";

export function useScreenType(): ScreenType {
    const desktop = useMediaQuery('(min-width:1224px)');
    const tablet = useMediaQuery('(min-width:600px)');
    const mobile = useMediaQuery('(max-width:600px)');

    if (desktop && tablet) {
        return "desktop";
    }

    if (!desktop && tablet && !mobile) {
        return "tabs";
    }
    
    return "mobile"
}

