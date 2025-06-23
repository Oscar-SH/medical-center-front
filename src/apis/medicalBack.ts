import axios from 'axios';

const medicalApi = axios.create({
    baseURL: `${process.env.REACT_APP_MEDICAL_CENTER_API}`,
    timeout: 1000,
    headers: { 'x-access-jwt': localStorage.getItem('jwt') }
});


export default medicalApi;