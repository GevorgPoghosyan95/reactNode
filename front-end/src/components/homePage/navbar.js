import React, {useContext, useEffect, useState} from "react";
import {setToken, setUser} from "../../reducers/reposReducer";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Redirect, useHistory, useParams} from "react-router-dom";
import Context from "../../store/context";
import UserService from "../../services/UserService";
import {Autocomplete} from '@material-ui/lab';
import {TextField} from "@material-ui/core";
import {observer} from "mobx-react-lite";


const Navbar = observer(() => {
    const {context} = useContext(Context)
    const history = useHistory()
    const dispatch = useDispatch()
    const logout = async (e) => {
        e.preventDefault()
        let result = await context.logout();
        if(result.status == "ok"){
            dispatch(setToken(''))
            dispatch(setUser({}))
            history.push('/')
        }
    }
    let {urlId} = useParams();

    let [currentUserId, setCurrentUserId] = useState(urlId)
    const currentUser = useSelector(state => state.repos.user)

    const [users, setUsers] = useState([{}])

    useEffect(async () => {
        let usersDataResponse = await UserService.getAllUsers()
        if (!currentUserId) {
            let usersData = usersDataResponse.data.filter(user => {
                return user.id !== currentUser.id
            })
            setUsers(usersData)
        } else {
            let usersData = usersDataResponse.data.filter(user => {
                return user.id == currentUserId
            })
            context.setCurrentUser(usersData)
        }

    }, [currentUserId])


    async function getID(e, users) {
        if (e.target.textContent) {
            let id = users.filter(user => {
                return user.username === e.target.textContent
            })[0].id
            await setCurrentUserId(id)
            history.push(`/user/${id}`)
        }

    }

    return (
        <nav className="navbar navbar-light bg-light">
            <NavLink className="navbar-brand" to="/home">Navbar</NavLink>
            <form className="form-inline">
                <Autocomplete
                    style={{width: "300px", marginRight: "10px"}}
                    id="free-solo-demo"
                    freeSolo
                    onChange={e => getID(e, users)}
                    options={users.map((option) => option.username)}
                    renderInput={(params) => (
                        <TextField {...params} label="Users" margin="normal" variant="outlined"/>
                    )}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={e=>logout(e)} type="submit">Logout</button>
            </form>

        </nav>
    );
})

export default Navbar