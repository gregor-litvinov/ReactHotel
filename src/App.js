import React, {useEffect, useState} from "react";

import '../src/components/style/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import PostForm from "./components/UI/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from "./hooks/usePosts";
import axios from 'axios';
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetcher} from "react-router-dom";
import {useFetching} from "./hooks/useFetching";


function App() {
  const [posts, setPosts] = useState([])
  
  console.log('reRender')
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortAndSearchedPost = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async() => {
    const posts = await PostService.getAll()
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
    return (
      <div className="App">
        <button onClick={fetchPosts}>GET Post</button>
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
          Создать пользователя.
        </MyButton>
         <MyModal visible={modal} setVisible={setModal}>
           <PostForm create={createPost}/>
         </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter
          filter={filter}
          setFilter={setFilter}
        />
        {isPostsLoading
         ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
         : <PostList remove={removePost} posts={sortAndSearchedPost} title={'Список постов'}/>
        }
      </div>
    );
  }

    export default App;
