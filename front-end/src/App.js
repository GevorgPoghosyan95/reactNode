import logo from './logo.svg';
import './App.css';
import './public/css/style.css'
import React, {useEffect, useContext} from 'react'
import Routes from './routes/index'
import Context from "./store/context";
import {AxiosResponse} from "axios";

function App() {

    return (
        <div className="App">
            <Routes/>
        </div>
    );
}

export default App;
