import React, { useState, useMemo } from "react";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";
import PostFilter from "./components/PostFilter";

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

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const [filter, setFilter] = useState({sort:'',query:''})

    const sortedPosts = useMemo(() => {
        if(filter.sort) {
            return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    },[filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    },[filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    // const sortPosts = (sort) => {
    //     setSelectedSort(sort);
    // }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr />
            <h1>{value}</h1>
            <input 
                type="text" 
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <Counter />
            <hr />
            <PostFilter filter={filter} setFilter={setFilter}/>
            {sortedAndSearchedPosts.length !== 0
                ?
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Spis 1"/>
                :
                <h1>Nie ma postow</h1>
            }
            <PostList remove={removePost} posts={posts2} title="Spis 2"/>
        </div>
    )
}