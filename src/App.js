import React, {useState} from "react";

import '../src/components/style/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePost} from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([])
  
  console.log('reRender')
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortAndSearchedPost = usePost(posts, filter.sort, filter.query)
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

    return (
      <div className="App">
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
