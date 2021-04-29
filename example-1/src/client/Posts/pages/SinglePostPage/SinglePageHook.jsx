import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import PropTypes from 'prop-types';

import {getOnePost} from "../../service/posts-service";
import {initialState} from "./initialState";

const SinglePostPage = ()=> {
    const [state, setState] = useState(initialState);
    const {id} = useParams()

    useEffect(async ()=>{
        const {loading} = state;
        if(loading){
            try {
                const {data} = await getOnePost(id);
                const newPost = {
                    title: data.title,
                    body: data.body
                }
                setState({...initialState, post: newPost})
            }
            catch(error){

            }
        }

    }, [])
    const {title, body} = state;
        return (
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        )
}

SinglePostPage.propTypes = {

};

export default SinglePostPage;