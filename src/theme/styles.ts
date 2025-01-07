import { Interpolation, Theme } from "@mui/material";

export const globalStyles = (dark_mode: boolean): Interpolation<Theme> => {
    return {
        a: { color: dark_mode && '#ffffff' }
    };
};