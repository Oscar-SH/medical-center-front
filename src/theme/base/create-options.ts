import { ThemeOptions } from '@mui/material'
import { createComponents } from './create-components';
import { createTypography } from './create-typography';
import { ThemeConfig } from '../../interfaces/ConfigInterface';

export const createOptions = (config: ThemeConfig): ThemeOptions => {
    return {
        breakpoints: { values: { xs: 0, sm: 600, md: 960, lg: 1200, xl: 1440 } },
        components: createComponents(),
        direction: config.direction,
        shape: { borderRadius: 8 },
        typography: createTypography(),
    };
};