import { Accessibility, LockPerson, Person, PersonAdd, Search } from '@mui/icons-material';
import { NavBarItemProps } from '../../components/General/Interfaces/GeneralInterfaces';

export const navBarItems: NavBarItemProps[] = [
    {
        icon: <Search />,
        label: 'Buscar expediente',
        route: '/search'
    },
    {
        icon: <PersonAdd />,
        label: 'Medicos',
        route: '/doctors'
    },
    {
        icon: <Accessibility />,
        label: 'Pacientes',
        route: '/patients'
    },
    {
        icon: <Person />,
        label: 'Personas',
        route: '/persons'
    },
    {
        icon: <LockPerson />,
        label: 'Usuarios',
        route: '/users'
    },
];