import { Breakpoint } from "@mui/material";

export interface UiStateInterface {
    sideBar: boolean;
    darkMode: boolean;
    openModal: GeneralModalInterface;
}

export interface GeneralModalInterface {
    args: Object;
    open: boolean;
    title: string;
    width?: Breakpoint;
    component: React.FunctionComponent<any> | null;
}

export interface ThemeConfig {
    paletteMode: 'light' | 'dark';
    colorPreset: string;
    contrast: string;
    direction: 'ltr' | 'rtl';
    responsiveFontSizes: boolean;
}

export interface ColorAlphasTypes {
    lightest: string;
    light: string;
    main: string;
    dark: string;
    darkest: string;
    contrastText: string;
}