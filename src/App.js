import React, {useMemo, useState, useEffect} from "react";
import Header from "./components/Header/Header";
import ClassCounter from './components/ClassCounter'
import '../src/components/style/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'dd', body: 'ff'},
    {id: 2, title: 'zz', body: 'dd'},
    {id: 3, title: 'bb', body: 'oo'}
  ])
  
  console.log('reRender')
  const [filter, setFilter] = useState({sort: '', query: ''})
  const[modal, setModal] = useState(false)
  
  useEffect(() => {
    
    console.log(posts.length)
  }, []
  )
  
  
  
  const sortedPost = useMemo(() => {
    console.log('щтработала функция Сортед Поста')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])
  
  const sortAndSearchedPost = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPost])
  
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
