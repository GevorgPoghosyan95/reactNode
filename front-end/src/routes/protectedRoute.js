import React, {useContext, useEffect} from 'react'
import {Route, Redirect, useHistory} from 'react-router-dom'
import Context from "../store/context";

const ProtectedRoute = ({component: Component, ...restOfProps}) => {
    const {context} = useContext(Context)
    const history = useHistory()
    const isAuthenticated = localStorage.getItem('token')

    useEffect(async () => {
        if (!isAuthenticated) {
            let status = await context.checkAuth()
            if (status == 401) {
                alert(401)
            }
        }
    })


    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/"/>
            }
        />
    );
}

export default ProtectedRoute