import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {Concurrent} from "./Concurrent";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <App/>
        <Concurrent/>
    </>
);
