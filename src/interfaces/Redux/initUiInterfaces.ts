import { UiStateInterface } from './UIInterfaces';
import { ThemeConfig } from '../../components/Config/Interfaces';

const savedTheme = localStorage.getItem('theme');

export const initUiStateInterface: UiStateInterface = {
    sideBar: false,
    darkMode: savedTheme === 'dark',
    openDrawer: { open: false, title: '', component: null },
    openModal: { open: false, title: '', width: 'md', component: null, args: {} }

};

export const initThemeConfig = (dark_theme: boolean): ThemeConfig => {
    return {
        colorPreset: 'green',
        contrast: 'normal',
        direction: 'ltr',
        paletteMode: dark_theme ? 'dark' : 'light',
        responsiveFontSizes: true
    };
};