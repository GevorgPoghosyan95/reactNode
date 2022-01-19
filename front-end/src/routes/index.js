import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
const {publicRoutes,authRoutes} = require("./AppRouter");

const Routes = () => {
    const isAuth = localStorage.getItem('token')
    return (
        <Switch>
            {isAuth && authRoutes.map(({path,Component})=>
                <Route key={path}  path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path,Component})=>
                <Route key={path}  path={path} component={Component} exact/>
            )}
            <Redirect to={'/'} />
        </Switch>
    );

}

export default Routes