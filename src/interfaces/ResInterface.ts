import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export interface ResponseInterface {
    data?: any;
    error?: FetchBaseQueryError | SerializedError;
}