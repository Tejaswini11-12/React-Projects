import React from "react";
import { useParams, Link } from "react-router-dom";
import {posts} from '../data.js';

function Posts(){
    const {id} = useParams();

    const post = posts.find((post)=> post.id == Number(id))
    if(!post){
        return(
            <>
            <h1> Blog not Found</h1>
            <Link to = '/'>Go Back</Link>
            </>
        )
    }
    return(
        <>
        <h1>{post.title}</h1>
        <h3>{post.author}</h3>
        <p>{post.about}</p>
        </>
    )
}
export default Posts