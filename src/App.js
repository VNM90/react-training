import React, { useState } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";

export default function App() {
    const [value, setValue] = useState("RANDOM TEXT");
    const [posts, setPosts] = useState([
        {id: 1, title: "python", body:"Destription"}, 
        {id: 2, title: "python2", body:"Destription2"}
    ])

    return (
        <div className="App">
            <h1>{value}</h1>
            <input 
                type="text" 
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <Counter />
          {posts.map(post =>
            <PostItem post={post}/>
        )}
        </div>
    )
}