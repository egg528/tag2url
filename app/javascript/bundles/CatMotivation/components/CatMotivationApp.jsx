import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Home from './Home';

const CatMotivationApp = (props) => (
    <BrowserRouter>
        <Home {...props}/>
    </BrowserRouter>
);

export default CatMotivationApp;