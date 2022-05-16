import React, { useState, useRef } from "react";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

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

    const [title, setTitle] = useState("");
    const bodyInputRef = useRef();
    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
        console.log(bodyInputRef.current.value)
    }

    return (
        <div className="App">
            <form>
                <MyInput 
                    value={title} 
                    onChange={e => setTitle(e.target.value)}
                    type="text" 
                    placeholder="title"
                />
                <MyInput
                    ref={bodyInputRef} 
                    type="text" 
                    placeholder="desription"
                />
                <MyButton onClick={addNewPost}>Submit</MyButton>
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