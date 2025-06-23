import { Accessibility, Settings } from '@mui/icons-material';
import { NavBarItemProps } from '../components/General/Interfaces';

export const navBarItems: NavBarItemProps[] = [
    {
        icon: Accessibility,
        label: 'Pacientes',
        route: '/patients'
    },
    {
        icon: Settings,
        label: 'Configuracion',
        route: '/config'
    }
];