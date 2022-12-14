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


function App() {
  const [posts, setPosts] = useState([])
  
  console.log('reRender')
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortAndSearchedPost = usePosts(posts, filter.sort, filter.query)
  
  useEffect(() => {
    fetchPosts()
  }, [])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  async function  fetchPosts() {
    const posts = await PostService.getAll()
    setPosts(posts)
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
           <PostList remove={removePost} posts={sortAndSearchedPost} title={'Список постов'}/>
      </div>
    );
  }

    export default App;
