import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory';
import reportWebVitals from './reportWebVitals';

import TagManager from 'react-gtm-module';
import { StoreProvider } from './store';

const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTMID,
    auth: process.env.REACT_APP_GTM_AUTH,
    preview: process.env.REACT_APP_GTM_PREVIEW,
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <StoreProvider>
            <BrowserRouter>
                <Auth0ProviderWithHistory>
                    <App />
                </Auth0ProviderWithHistory>
            </BrowserRouter>
        </StoreProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
