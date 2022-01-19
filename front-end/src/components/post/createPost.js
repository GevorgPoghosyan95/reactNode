import React, {useEffect, useState} from 'react';
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import postService from "../../services/PostService";
import {useDispatch, useSelector} from "react-redux";
import {addPost, setPosts} from "../../reducers/reposReducer";
import {observer} from "mobx-react-lite";

const CreatePost = ({blockStatus}) => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.repos.user)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required'),
        content: Yup.string()
            .required('Content is required')
    });

    const formOptions = {resolver: yupResolver(validationSchema)};
    let posts = useSelector(state => state.repos.posts)

    const {register, handleSubmit, reset, formState} = useForm(formOptions);
    const {errors} = formState;
    async function save() {
        let userId = user.id
        let result = await postService.create(userId, title, content);
        if (result.data.status == "ok") {
            dispatch(addPost({title: title, content: content,userid:userId}))
            setTitle('')
            setContent('')
        }

    }

    return (
            <div className="form-group" style={{display:blockStatus}}>
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
    );
};

export default CreatePost;