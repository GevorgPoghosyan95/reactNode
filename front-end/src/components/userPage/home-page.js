import React, {useContext, useEffect, useState} from "react";
import "../../public/css/personal_page/_index.scss"
import {useParams} from "react-router";
import Context from "../../store/context";


const UserHomePage = () => {
    let { id } = useParams();
    const [posts, setPosts] = useState([])
    const {context} = useContext(Context)

    useEffect(async () => {
        let postsResult = await context.getUserPosts(id)
        setPosts(postsResult)
    },[posts.length])

    return (
        <div>
            user page {id}
            {JSON.stringify(posts)}
        </div>
    )
}

export default UserHomePage