import React from "react";
import PostItem from "./PostItem";

export default function PostList({posts, title, remove}) {
    return(
        <div>
            <h1>{title}</h1>
                 {posts.map(post =>
            <PostItem remove={remove} post={post} key={post.id}/>
        )}
        </div>
    )
}