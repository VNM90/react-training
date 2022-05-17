import React from "react";

export default function PostItem({post}) {
    return(
        <div>
            <p>{post.id}, {post.title}, {post.description}</p>
            <p>{post.body} </p>
        </div>
    )
}