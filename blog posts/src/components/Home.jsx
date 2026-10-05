import React from "react";
import {Link} from 'react-router-dom'
import {posts} from '../data.js'

function Home(){
    return (
        <>
        <h1>📘 Blog Posts</h1>
        <div className="post-grid">
            {
                posts.map((post)=>(
                    <div className='post-card'key = {post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.author}</p>
                    <Link to= {`/content/${post.id}`}>Read more</Link>
                    </div>
                    )
                )
            }
        </div>
        </>
    )
}
export default Home