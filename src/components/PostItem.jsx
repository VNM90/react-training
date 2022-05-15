import React from "react";

export default function PostItem({post}) {
    return(
        <div>
            <p>{post.id}, {post.title}, {post.body}</p>
        </div>
    )
}