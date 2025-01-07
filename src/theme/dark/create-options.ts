import { createPalette } from './create-palette';
import { createShadows } from './create-shadows';
import { createComponents } from './create-components';
import { ThemeConfig } from '../../interfaces/ui/uiInterfaces';

export const createOptions = (config: ThemeConfig) => {
    const palette = createPalette(config);
    const components = createComponents({ palette });
    const shadows = createShadows();

    return { components, palette, shadows };
};
