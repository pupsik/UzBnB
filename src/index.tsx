import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory';
import reportWebVitals from './reportWebVitals';

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: 'GTM-5MNW5Q4',
    auth: '6tYiJeFOUQkPzguQWtb9rw',
    preview: 'env-2',
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth0ProviderWithHistory>
                <App />
            </Auth0ProviderWithHistory>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
