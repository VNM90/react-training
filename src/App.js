import React, { useState } from "react";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import MyButton from "./UI/button/MyButton";

export default function App() {
    const [value, setValue] = useState("RANDOM TEXT");
    const [posts, setPosts] = useState([
        {id: 1, title: "python", body:"Destription"}, 
        {id: 2, title: "python2", body:"Destription2"}
    ])
    const [posts2, setPosts2] = useState([
        {id: 1, title: "javascript", body:"Destription"}, 
        {id: 2, title: "javascript2", body:"Destription2"}
    ])

    return (
        <div className="App">
            <form>
                <input type="text" placeholder="title"/>
                <input type="text" placeholder="desription"/>
                <MyButton>Submit</MyButton>
            </form>
            <h1>{value}</h1>
            <input 
                type="text" 
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <Counter />
            <PostList posts={posts} title="Spis 1"/>
            <PostList posts={posts2} title="Spis 2"/>
        </div>
    )
}