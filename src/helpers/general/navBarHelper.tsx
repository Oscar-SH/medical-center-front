import { ManageAccounts, Person, Search } from '@mui/icons-material';
import { NavBarItemProps } from '../../interfaces/general/generalInterfaces';

export const navBarItems: NavBarItemProps[] = [
    {
        icon: <Search />,
        label: 'Buscar expediente',
        route: '/search'
    },
    {
        icon: <Person />,
        label: 'Empleados',
        route: '/employees'
    },
    {
        icon: <ManageAccounts />,
        label: 'Usuarios',
        route: '/users'
    },
];