import '../public/css/_login.scss'
import React, {Component, useState, useContext} from "react";
import Context from '../store/context'
import {useForm} from "react-hook-form";
import {NavLink, Redirect, useHistory} from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import {setToken, setUser} from "../reducers/reposReducer"

const LoginForm = () => {
    const {context} = useContext(Context)
    const dispatch = useDispatch()

    let history = useHistory()
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onSubmit = async (data) => {
        let result = await context.login(email, password)
        if(result.status !== "ok"){
            alert(result.messages)
        }else{
            dispatch(setToken(result.data.accessToken))
            dispatch(setUser(result.data.user))
            history.push('/home')
        }
    }

    return (
        <section className="login">
            <div className="wrapper fadeInDown">
                <div className="formContent">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" id="email"{...register("email")}
                               className="fadeIn second" value={email} placeholder="login"
                               onChange={e => setEmail(e.target.value)}></input>
                        <div style={{color: "red"}}>{errors.email?.message}</div>
                        <input type="text" id="password" {...register("password")}
                               className="fadeIn third" name="password" placeholder="password"
                               onChange={e => setPassword(e.target.value)} value={password}></input>
                        <div style={{color: "red"}}>{errors.password?.message}</div>
                        <input type="submit" className="fadeIn fourth" value="Log In"></input>
                    </form>
                    <div className="formFooter">
                        <NavLink className="underlineHover" to="/create_account">Create Account</NavLink>
                    </div>
                </div>
            </div>
        </section>
    );


}

export default LoginForm;