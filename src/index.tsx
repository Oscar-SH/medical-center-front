import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </React.StrictMode>
);