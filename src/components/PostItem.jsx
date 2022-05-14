import React from "react";

export default function PostItem(props) {
    return(
        <div>
            <p>{props.post.id}, {props.post.title}, {props.post.body}</p>
        </div>
    )
}