import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import formOptions from '../../validation/userEditing'
import userService from '../../services/UserService'
import {setUser} from "../../reducers/reposReducer";


const Settings = ({user}) => {
    const dispatch = useDispatch()

    // get functions to build form with useForm() hook
    const {register, handleSubmit, reset, formState} = useForm(formOptions);
    const {errors} = formState;


    const [email, setEmail] = useState(user.email)
    const [username, setUsername] = useState(user.username)
    const [password, setPassword] = useState('')


    function usernameChange(username) {
        setUsername(username)
    }

    function emailChange(email) {
        setEmail(email)
    }

    async function onSubmit() {
        let response = await userService.editUser(user.id, username.toString(), email.toString(),password)
        if(response.status == 200){
            user.email = email;
            user.username = username
            dispatch(setUser(user))
        }
    }

    return (
        <div className="tab-pane" id="settings">
            <form role="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="Username">Username</label>
                    <input type="text" id="Username" {...register("username")} className="form-control" value={username}
                           onChange={e => usernameChange(e.target.value)}/>
                    <div style={{color: "red"}}>{errors.username?.message}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="email" id="Email" {...register("email")} className="form-control" value={email}
                           onChange={e => emailChange(e.target.value)}/>
                    <div style={{color: "red"}}>{errors.email?.message}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="password" placeholder="6 - 15 Characters" {...register("password")} id="Password"
                           className="form-control" value={password}  onChange={e => setPassword(e.target.value)}/>
                    <div style={{color: "red"}}>{errors.password?.message}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="RePassword">Re-Password</label>
                    <input type="password" placeholder="6 - 15 Characters" {...register("confirmPassword")}
                           id="RePassword" className="form-control"/>
                    <div style={{color: "red"}}>{errors.confirmPassword?.message}</div>
                </div>
                <button className="btn btn-primary waves-effect waves-light w-md" type="submit">Save</button>
            </form>
        </div>
    );
}

export default Settings;