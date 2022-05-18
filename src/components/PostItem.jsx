import React from "react";
import MyButton from "../UI/button/MyButton";

export default function PostItem({post, remove}) {
    return(
        <div>
            <p>{post.id}, {post.title}, {post.description}</p>
            <p>{post.body} </p>
            <MyButton onClick={() => remove(post)}>DELETE</MyButton>
        </div>
    )
}