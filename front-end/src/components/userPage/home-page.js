import React from "react";
import {useSelector} from "react-redux";
import "../../public/css/personal_page/_index.scss"
import {useParams} from "react-router";


const UserHomePage = () => {
    let { id } = useParams();


    return (
        <div>
            user page {id}
        </div>
    )
}

export default UserHomePage