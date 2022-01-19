import LoginForm from "../components/login-form";
import HomePage from "../components/homePage/home-page";
import UserHomePage from "../components/userPage/home-page";
import RegistrationForm from "../components/registration-form";

export const authRoutes = [
    {
        path:'/home',
        Component:HomePage
    },
    {
        path:'/user/:id',
        Component:UserHomePage
    },
]

export const publicRoutes = [
    {
        path:'/',
        Component:LoginForm
    },
    {
        path:'/create_account',
        Component:RegistrationForm
    }
]