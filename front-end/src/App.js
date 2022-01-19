import logo from './logo.svg';
import './App.css';
import './public/css/style.css'
import React, {useEffect, useContext} from 'react'
import Routes from './routes/index'
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <div className="App">
           <BrowserRouter>
               <Routes/>
           </BrowserRouter>,
        </div>
    );
}

export default App;
