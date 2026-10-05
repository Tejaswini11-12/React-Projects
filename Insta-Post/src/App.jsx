import React from 'react'
import Post from './post.jsx'
import './App.css'
import image1 from './images/image1.jpeg'
import image2 from './images/image2.jpeg'
import image3 from './images/image3.jpeg'
function App(){
    return(
        <div className = "posts">
            <h1>Mini Instagram Feed</h1>
            <Post image={image1} name = "Baby Elephants" />
            <Post image={image2} name = "Friends" />
            <Post image={image3} name = "Hobby" />
        </div>
    )
}

export default App
