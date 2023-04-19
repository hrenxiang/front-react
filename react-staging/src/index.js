import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HelloWorld from './components/HelloWorld';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
        <HelloWorld/>
    </React.StrictMode>
);
