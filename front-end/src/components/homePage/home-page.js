import React from "react";
import {useSelector} from "react-redux";
import "../../public/css/personal_page/_index.scss"
import About from "./about";
import Gallery from "./gallery";
import Settings from "./settings";
import Navbar from "./navbar";


const HomePage = () => {


    const user = useSelector(state => state.repos.user)

    return (
        <section className="homePage">
            <Navbar />
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <div className="text-center card-box">
                            <div className="member-card">
                                <div className="thumb-xl member-thumb m-b-10 center-block">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                         className="img-circle img-thumbnail" alt="profile-image"/>
                                </div>

                                <div className="">
                                    <h4 className="m-b-5">{user.username}</h4>
                                    <p className="text-muted">@johndoe</p>
                                </div>

                                <button type="button"
                                        className="btn btn-success btn-sm w-sm waves-effect m-t-10 waves-light">Follow
                                </button>
                                <button type="button"
                                        className="btn btn-danger btn-sm w-sm waves-effect m-t-10 waves-light">Message
                                </button>

                                <div className="text-left m-t-40">
                                    <p className="text-muted font-13"><strong>Full Name :</strong> <span
                                        className="m-l-15">{user.username}</span></p>
                                    <p className="text-muted font-13"><strong>Mobile :</strong><span className="m-l-15">(123) 123 1234</span>
                                    </p>
                                    <p className="text-muted font-13"><strong>Email :</strong> <span
                                        className="m-l-15">{user.email}</span></p>
                                    <p className="text-muted font-13"><strong>Location :</strong> <span
                                        className="m-l-15">USA</span></p>
                                </div>

                                <ul className="social-links list-inline m-t-30">
                                    <li>
                                        <a title="" data-placement="top" data-toggle="tooltip" className="tooltips"
                                           href="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a title="" data-placement="top" data-toggle="tooltip" className="tooltips"
                                           href="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a title="" data-placement="top" data-toggle="tooltip" className="tooltips"
                                           href="" data-original-title="Skype"><i className="fa fa-skype"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 col-lg-9">
                        <div className="">
                            <div className="">
                                <ul className="nav nav-tabs navtab-custom">
                                    <li >
                                        <a href="#home" data-toggle="tab" aria-expanded="false">
                                            <span className="visible-xs"><i className="fa fa-user"></i></span>
                                            <span className="hidden-xs">ABOUT ME</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#profile" data-toggle="tab" aria-expanded="false">
                                            <span className="visible-xs"><i className="fa fa-photo"></i></span>
                                            <span className="hidden-xs">Posts</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#settings" data-toggle="tab" aria-expanded="false">
                                            <span className="visible-xs"><i className="fa fa-cog"></i></span>
                                            <span className="hidden-xs">SETTINGS</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <About/>
                                    <Gallery/>
                                    <Settings/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage