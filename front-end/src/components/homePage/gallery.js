import React, { useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import postService from "../../services/PostService";
import Context from "../../store/context";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import CreatePost from "../post/createPost";
import {setPosts} from "../../reducers/reposReducer";

const Gallery = () => {

    let {id} = useParams()
    const {context} = useContext(Context)
    const dispatch = useDispatch()

    const [postId, setPostId] = useState(0)
    const [postBlockStatus, setPostBlockStatus] = useState('')

    const user = useSelector(state => state.repos.user)
    let posts = useSelector(state => state.repos.posts)
    // posts = []


    useEffect(async () => {
        let userId;
        if(id){
            userId = id
            setPostBlockStatus('none')
        }else{
            userId = user.id
            setPostBlockStatus('block')
        }
        let postsResult = await context.getUserPosts(userId)
        dispatch(setPosts(postsResult.Posts))
    })




    async function deletePost(id) {
        let result = await postService.delete(id);
        if (result.data.status == "ok") {
            let newPost = [];
            newPost = posts.filter(post=>{
                return post.id !== id
            })
             setPosts(newPost)
        }
    }


    function showSelectedPost(id) {
        if(id === postId){
            setPostId(0)
        }else{
            setPostId(id)
        }
    }

    return (
        <div className="tab-pane active" id="profile">
            <CreatePost blockStatus={postBlockStatus} />
            <div className="row">
                {posts.map((post) => {
                    return <div className="col-sm-4" key={post.id}>
                        <a href={'#'} onClick={e=>deletePost(post.id)} style={{display:postBlockStatus}}>delete</a>
                        <div className={post.id === postId ? null : 'gal-detail thumb'} onClick={e=>showSelectedPost(post.id)}>
                            <h4 className="text-center">{post.title}</h4>
                            <div className="ga-border"></div>
                            <p className="text-muted text-center"><small>{post.content}</small></p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Gallery;