import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType} from './redux/state';
import {addPost} from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export const renderTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};


