import React from 'react';
import { Card, Tab, Tabs } from '@mui/material';
import { RootStateInterface } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import CmpRoles from '../../Roles/Views/Tables/CmpRoles';
import CmpUsers from '../../Users/Views/Tables/CmpUsers';
import CmpClinics from '../../Clinics/Views/Tables/CmpClinics';
import CmpPersons from '../../Persons/Views/Tables/CmpPersons';
import { changeTabsConfig } from '../../../store/slices/tables';
import CmpPermissions from '../../Permissions/Views/Tables/CmpPermissions';
import { a11yProps, CustomTabPanel } from '../../General/Views/CmpGeneralTabs';
import { LocalHospital, LockPerson, Person, PersonAdd, PersonSearch } from '@mui/icons-material';

const CmpConfig = () => {
    const dispatch = useDispatch();
    const { tabs_config } = useSelector((state: RootStateInterface) => state.tables);

    const handleChangeTabUsers = (event: React.SyntheticEvent, value: number) => {
        dispatch(changeTabsConfig(value));
    };
    return (
        <Card>
            <Tabs value={tabs_config} onChange={handleChangeTabUsers} centered selectionFollowsFocus sx={{ height: 55 }}>
                <Tab iconPosition={'start'} icon={<PersonSearch />} label={'PERSONAS'} {...a11yProps(0)} />
                <Tab iconPosition={'start'} icon={<Person />} label={'USUARIOS'} {...a11yProps(1)} />
                <Tab iconPosition={'start'} icon={<PersonAdd />} label={'ROLES'} {...a11yProps(2)} />
                <Tab iconPosition={'start'} icon={<LockPerson />} label={'PERMISOS'} {...a11yProps(3)} />
                <Tab iconPosition={'start'} icon={<LocalHospital />} label={'CLINICAS'} {...a11yProps(4)} />
            </Tabs>
            <CustomTabPanel value={tabs_config} index={0}><CmpPersons /></CustomTabPanel>
            <CustomTabPanel value={tabs_config} index={1}><CmpUsers /></CustomTabPanel>
            <CustomTabPanel value={tabs_config} index={2}><CmpRoles /></CustomTabPanel>
            <CustomTabPanel value={tabs_config} index={3}><CmpPermissions /></CustomTabPanel>
            <CustomTabPanel value={tabs_config} index={4}><CmpClinics /></CustomTabPanel>
        </Card>
    );
};

export default CmpConfig;