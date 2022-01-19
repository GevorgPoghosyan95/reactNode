import React, {useContext, useState} from "react";
import {useSelector} from "react-redux";
import "../../public/css/personal_page/_index.scss"
import About from "./about";
import Gallery from "./gallery";
import Settings from "./settings";
import Navbar from "./navbar";
import LeftBar from "./leftBar";


const HomePage = () => {


    const user = useSelector(state => state.repos.user)

    const [status,setStatus] = useState('gallery')


    return (
        <section className="homePage">
            <Navbar />
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <div className="text-center card-box">
                            <LeftBar user={user} follow={'Follow'} />
                        </div>
                    </div>

                    <div className="col-md-8 col-lg-9">
                        <div className="">
                            <div className="">
                                <ul className="nav nav-tabs navtab-custom">
                                    <li key={'about'} onClick={()=>setStatus('about')} style={{border:`1px solid ${status === 'about' ? 'black': 'white'}`}}>
                                        <a href="#home" data-toggle="tab" aria-expanded="false">
                                            <span className="visible-xs"><i className="fa fa-user"></i></span>
                                            <span className="hidden-xs">ABOUT ME</span>
                                        </a>
                                    </li>
                                    <li key={'gallery'} onClick={()=>setStatus('gallery')} style={{border:`1px solid ${status === 'gallery' ? 'black': 'white'}`}}>
                                        <a href="#profile" data-toggle="tab" aria-expanded="false">
                                            <span className="visible-xs"><i className="fa fa-photo"></i></span>
                                            <span className="hidden-xs">Posts</span>
                                        </a>
                                    </li>
                                    <li key={'settings'} onClick={()=>setStatus('settings')} style={{border:`1px solid ${status === 'settings' ? 'black': 'white'}`}}>
                                        <a href="#settings" data-toggle="tab" aria-expanded="false">
                                            <span className="visible-xs"><i className="fa fa-cog"></i></span>
                                            <span className="hidden-xs">SETTINGS</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <About />
                                    <Gallery />
                                    <Settings user={user} />
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