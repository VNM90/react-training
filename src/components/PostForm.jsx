import React, { useState } from "react";
import MyButton from "../UI/button/MyButton"
import MyInput from "../UI/input/MyInput";

export default function PostForm({create}) {
    const [post, setPost] = useState({title:'', description:''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: "", description:""})
    }

    return (
        
        <form>
                <MyInput 
                    value={post.title} 
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text" 
                    placeholder="title"
                />
                <MyInput
                    value={post.description} 
                    onChange={e => setPost({...post, description: e.target.value})}
                    type="text" 
                    placeholder="desription"
                />
                <MyButton onClick={addNewPost}>Submit</MyButton>
            </form>
    )
}