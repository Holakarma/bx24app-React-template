import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './style/style.css';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

BX24.init(function () {
    root.render(<App />);
});
