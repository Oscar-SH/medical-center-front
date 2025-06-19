import { ThemeConfig } from '../components/Config/Interfaces';
import { createOptions as createBaseOptions } from './base/create-options';
import { createOptions as createDarkOptions } from './dark/create-options';
import { createOptions as createLightOptions } from './light/create-options';
import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material/styles';

export const createTheme = (config: ThemeConfig) => {
    let theme = createMuiTheme(
        createBaseOptions(config),
        config.paletteMode === 'dark' ? createDarkOptions(config) : createLightOptions(config)
    );

    if (config.responsiveFontSizes) theme = responsiveFontSizes(theme);

    return theme;
};