import React, {useContext, useEffect, useState} from "react";
import "../../public/css/personal_page/_index.scss"
import {useParams} from "react-router";
import Context from "../../store/context";
import Navbar from "../homePage/navbar";
import About from "../homePage/about";
import Gallery from "../homePage/gallery";
import LeftBar from "../homePage/leftBar";
import {observer} from "mobx-react-lite";
import {useSelector} from "react-redux";


const UserHomePage = observer(() => {
    let { id } = useParams();
    const user = useSelector(state => state.repos.user)
    const {context} = useContext(Context)
    const [followButtonStatus,setFollowButtonStatus] = useState('Follow')


    useEffect(async () => {
        let result = await context.getRequests(id,user.id)
        if(result){
            setFollowButtonStatus(result.status)
        }
    },[context.getCurrentUser().id])


    const [status,setStatus] = useState('gallery')

    return (
        <section className="homePage">
            <Navbar />
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <div className="text-center card-box">
                            <LeftBar user={context.getCurrentUser()} follow={followButtonStatus}/>
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
                                </ul>
                                <div className="tab-content">
                                    <About />
                                    <Gallery/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
})

export default UserHomePage