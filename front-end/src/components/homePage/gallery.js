import React, {createRef, useContext, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import postService from "../../services/PostService";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import Context from "../../store/context";

const Gallery = () => {


    let titleRef = createRef()
    const {context} = useContext(Context)

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required'),
        content: Yup.string()
            .required('Content is required')
    });

    const formOptions = {resolver: yupResolver(validationSchema)};

    const {register, handleSubmit, reset, formState} = useForm(formOptions);
    const {errors} = formState;


    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [posts, setPosts] = useState([])
    const user = useSelector(state => state.repos.user)

    useEffect(async () => {
        let postsResult = await context.getUserPosts(user.id)
        setPosts(postsResult)
    },[posts.length])



    async function save() {
        let userId = user.id
        let result = await postService.create(userId, title, content);
        if (result.data.status == "ok") {
            posts.push({title: title, content: content,id:result.data.id})
            setPosts(posts)
            // setNewPost({title: title, content: content})
            setTitle('')
            setContent('')

        }

    }

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


    return (
        <div className="tab-pane active" id="profile">
            <div className="form-group">
                <label>Title</label>
                <input {...register("title")} className="form-control" value={title}
                       onChange={e => setTitle(e.target.value)}/>
                <div style={{color: "red"}}>{errors.title?.message}</div>
                <label>Content</label>
                <textarea style={{height: "125px", marginTop: "10px"}} id="content" {...register("content")}
                          className="form-control"
                          value={content} onChange={e => setContent(e.target.value)}></textarea>
                <div style={{color: "red"}}>{errors.content?.message}</div>
                <button className="btn btn-primary waves-effect waves-light w-md" type="submit"
                        onClick={handleSubmit(save)}>Save
                </button>
            </div>
            <div className="row">
                {posts.map((post) => {
                    return <div className="col-sm-4" key={post.id}>
                        <a href={'#'} onClick={e=>deletePost(post.id)}>delete</a>
                        <div className="gal-detail thumb">
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