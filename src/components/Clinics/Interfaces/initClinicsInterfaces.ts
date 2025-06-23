import { initGeneralPropsErrorInterface } from '../../General/Interfaces';
import { CatClinicsInterface, ErrorsClinicInterface, ParamsCatClinicInterface } from '.';

export const initClinicInterface: CatClinicsInterface = {
    name: '',
    fullname: '',
    postal_code: 0,
    rfc: '',
    address: '',
    id_municipality: -1,
    id_state: -1
};

export const initErrorsFormClinicInterface: ErrorsClinicInterface = {
    name: { ...initGeneralPropsErrorInterface, msg: 'Ingresa nombre corto.' },
    fullname: { ...initGeneralPropsErrorInterface, msg: 'Ingresa nombre completo.' },
    postal_code: { ...initGeneralPropsErrorInterface, msg: 'Ingresa codigo postal.' },
    rfc: { ...initGeneralPropsErrorInterface, msg: 'Ingresa RFC.' },
    address: { ...initGeneralPropsErrorInterface, msg: 'Ingresa direccion.' },
    id_municipality: { ...initGeneralPropsErrorInterface, msg: 'Elije un municipio.' },
    id_state: { ...initGeneralPropsErrorInterface, msg: 'Elije un estado.' }
};

export const initParamsClinicsInterface: ParamsCatClinicInterface = {
    page: 1,
    text: '',
    page_size: 10
};