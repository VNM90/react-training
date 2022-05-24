import React, {useEffect, useState} from "react";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import {useFetching} from "./hooks/useFetching";

export default function App() {
    const [value, setValue] = useState("RANDOM TEXT");
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort:'',query:''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostService()
        setPosts(posts)
    })

    useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    // const sortPosts = (sort) => {
    //     setSelectedSort(sort);
    // }

    return (
        <div className="App">
            <h1>{value}</h1>
            <input 
                type="text" 
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <Counter />
            <hr />
            <MyButton onClick={() => setModal(true)}>
                DODAJ POST
            </MyButton>
            <hr />
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <hr />
            {postError &&
                <h1>Error ${postError}</h1>
            }
            {isPostsLoading
                ? <h1>Loading...</h1>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Spis 1"/>
            }
        </div>
    )
}