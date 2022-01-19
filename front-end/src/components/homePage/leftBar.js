import React, {useContext} from 'react';
import Context from "../../store/context";
import {useSelector} from "react-redux";
import UserService from "../../services/UserService";
import AuthService from "../../services/AuthService";


const LeftBar = ({user,follow}) => {

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    const currentUser = useSelector(state => state.repos.user)
    const blockStatus = useSelector(state => state.repos.blockStatus)


    async function sendRequest(data) {
       let response = await UserService.sendRequest(data.id,data.currentUserId);
        if(response.data.message){
            alert(response.data.message)
        }else{
            alert(response.data.error)
        }
    }

    return (
        <div className="member-card">
            <div className="thumb-xl member-thumb m-b-10 center-block">
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png"
                     className="img-circle img-thumbnail" alt="profile-image"/>
            </div>

            <div className="">
                <h4 className="m-b-5">{user.username}</h4>
                <p className="text-muted">@johndoe</p>
            </div>

            <div style={{display:blockStatus}}>
                <button type="button"
                        className="btn btn-success btn-sm w-sm waves-effect m-t-10 waves-light"
                        onClick={e=>sendRequest({id:user.id,currentUserId:currentUser.id})}>{capitalize(follow)}
                </button>
                <button type="button"
                        className="btn btn-danger btn-sm w-sm waves-effect m-t-10 waves-light">Message
                </button>
            </div>

            <div className="text-left m-t-40">
                <p className="text-muted font-13"><strong>Full Name :</strong> <span
                    className="m-l-15">{user.username}</span></p>
                <p className="text-muted font-13"><strong>Mobile :</strong><span
                    className="m-l-15">(123) 123 1234</span>
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
    );
};

export default LeftBar;