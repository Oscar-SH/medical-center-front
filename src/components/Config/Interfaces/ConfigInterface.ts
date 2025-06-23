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