import { ThemeConfig } from '../interfaces/ui/uiInterfaces';
import { colorSchemes } from './base/color-schemes';
import { createOptions as createBaseOptions } from './base/create-options';
import { createOptions as createDarkOptions } from './dark/create-options';
import { createOptions as createLightOptions } from './light/create-options';
import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material/styles';

export const createTheme = (config: ThemeConfig) => {
    let theme = createMuiTheme(
        createBaseOptions(config),
        // colorSchemes,
        config.paletteMode === 'dark' ? createDarkOptions(config) : createLightOptions(config)
    );

    if (config.responsiveFontSizes) theme = responsiveFontSizes(theme);

    return theme;
};