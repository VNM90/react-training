import React, { useState, useRef } from "react";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

export default function App() {
    const [value, setValue] = useState("RANDOM TEXT");
    const [posts, setPosts] = useState([
        {id: 1, title: "python", description:"Destription"}, 
        {id: 2, title: "python2", description:"Destription2"}
    ])
    const [posts2, setPosts2] = useState([
        {id: 1, title: "javascript", body:"Destription"}, 
        {id: 2, title: "javascript2", body:"Destription2"}
    ])


    const [post, setPost] = useState({title:'', description:''})
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const bodyInputRef = useRef();
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            description
        }
       setPosts([...posts, newPost])
       setPost({title: "", description:""})
    }

    return (
        <div className="App">
            <form>
                <MyInput 
                    value={post.title} 
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text" 
                    placeholder="title"
                />
                <MyInput
                    ref={bodyInputRef} 
                    type="text" 
                    placeholder="desription useRef"
                />
                   <MyInput
                    value={post.description} 
                    onChange={e => setPost({...post, description: e.target.value})}
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