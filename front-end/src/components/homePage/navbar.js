import React, {useContext, useEffect, useState} from "react";
import {setToken, setUser} from "../../reducers/reposReducer";
import {useDispatch} from "react-redux";
import {NavLink, useHistory} from "react-router-dom";
import Context from "../../store/context";
import UserService from "../../services/UserService";
import {Autocomplete} from '@material-ui/lab';
import {TextField} from "@material-ui/core";


const Navbar = () => {
    const {context} = useContext(Context)
    const history = useHistory()
    const dispatch = useDispatch()
    const logout = async () => {
        let result = await context.logout();
        if (result.status === 'ok') {
            dispatch(setToken(''))
            dispatch(setUser({}))
            history.push('/')
        }
    }


    const [users, setUsers] = useState([{}])

    useEffect(async () => {
        let usersData = await UserService.getAllUsers()
        setUsers(usersData.data)
    }, [])


    function getID(e, users) {
        if (e.target.textContent) {
            let id = users.filter(user => {
                return user.username === e.target.textContent
            })[0].id
            history.push('/user/' + id)
        }
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <NavLink className="navbar-brand" to="/home">Navbar</NavLink>
            <form className="form-inline">
                <Autocomplete
                    style={{width:"300px",marginRight:"10px"}}
                    id="free-solo-demo"
                    freeSolo
                    onChange={e => getID(e, users)}
                    options={users.map((option) => option.username)}
                    renderInput={(params) => (
                        <TextField {...params} label="freeSolo1" margin="normal" variant="outlined"/>
                    )}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={logout} type="submit">Logout</button>
            </form>

        </nav>
    );
}

export default Navbar