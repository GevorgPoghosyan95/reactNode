import React, {Component, useState, useContext} from "react";
import Context from '../store/context'
import {useForm} from "react-hook-form";
import {NavLink, useHistory} from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


const RegistrationForm = () => {
    let history = useHistory()
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('User Name is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {helper} = useContext(Context)

    const onSubmit = async (data) => {
        let result = await helper.registration(username,email, password)
        if(result.status !== "ok"){
            alert(JSON.stringify(result.messages))
        }else{
            alert('User created successfully please login')
            setTimeout(() => {
                history.push('/login');
            }, 2000)
        }
    }

    return (
        <section className="vh-100" style={{backgroundColor:"#eee"}}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{borderRadius:"25px"}}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control"
                                                           {...register("username")} value={username} onChange={e=>setUsername(e.target.value)}/>
                                                    <div style={{color: "red"}}>{errors.username?.message}</div>
                                                    <label className="form-label" htmlFor="form3Example1c">Your
                                                        Name</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c" {...register("email")}
                                                           className="form-control" value={email} onChange={e=>setEmail(e.target.value)}/>
                                                    <div style={{color: "red"}}>{errors.email?.message}</div>
                                                    <label className="form-label" htmlFor="form3Example3c">Your
                                                        Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c"
                                                           className="form-control" {...register("password")}
                                                    value={password} onChange={e=>setPassword(e.target.value)}/>
                                                    <div style={{color: "red"}}>{errors.password?.message}</div>
                                                    <label className="form-label"
                                                           htmlFor="form3Example4c">Password</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd"
                                                           className="form-control" {...register("confirmPassword")}/>
                                                    <div style={{color: "red"}}>{errors.confirmPassword?.message}</div>
                                                    <label className="form-label" htmlFor="form3Example4cd">Repeat your
                                                        password</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6" >
                                                    <input type="submit" className="btn btn-primary" value="Register" />
                                                </div>
                                                <div className="col-6">
                                                    <button type="button" className="btn btn-success"><NavLink style={{color:"white"}} to={"/"}>Login</NavLink></button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                    <div
                                        className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img
                                            src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png"
                                            className="img-fluid" alt="Sample image"/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegistrationForm