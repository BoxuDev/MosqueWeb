import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './utils/styles/bootstrap.min.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

document.title = "Suleymaniye"
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);