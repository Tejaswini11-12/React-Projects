import { useState } from "react";

const Post = (props) => { 
    const [likes, setLikes] = useState(0);
    function handleLikes(){
        setLikes(likes+1)
    }

    return (
       <div>
         <img src = {props.image} ></img>
        <p>{props.name}</p>
        <button onClick={() => handleLikes()}>Like</button>
        <p>{likes} likes</p>
       </div>
    )
 }
export default Post