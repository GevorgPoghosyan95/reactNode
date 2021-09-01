import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import LoginForm from "../components/login-form";
import RegistrationForm from "../components/registration-form";
import HomePage from "../components/homePage/home-page";
import UserHomePage from "../components/userPage/home-page";
import ProtectedRoute from "./protectedRoute";


const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={LoginForm}/>
            <Route exact path="/create_account" component={RegistrationForm}/>
            <ProtectedRoute exact path="/home" component={() => <HomePage/>}/>
            <ProtectedRoute exact path="/user/:id" component={() => <UserHomePage/>}/>
        </BrowserRouter>
    )
}
export default Routes;