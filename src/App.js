import React, {useMemo, useState} from "react";
import Header from "./components/Header/Header";
import ClassCounter from './components/ClassCounter'
import '../src/components/style/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'dd', body: 'ff' },
    {id: 2, title: 'zz', body: 'dd' },
    {id: 3, title: 'bb', body: 'oo' }
  ])
  const[selectSort, setSelectorSort] = useState('')
  const[searchQuery, setSearchQuery] =  useState('')
  
  function getSortedPosts() {
  console.log('щтработала функция Сортед Поста')
    if(selectSort) {
      return [...posts].sort((a, b) => a[selectSort].localeCompare(b[selectSort]))
    }
    return posts;
  }
  
  const sortedPost = useMemo(() => {
  
  })
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  const removePost = (post) => {
   //setPosts(posts.filter(p => p.id !== post.id))
    const newArr = posts.filter((value) => {
      return post.id !== value.id
    } )
      setPosts(newArr)
  }
  
  const sortPost = (sort) => {
    setSelectorSort(sort)
  }
  
  return (
    <div className="App">
      <PostForm len={posts.length} create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput
        placholder={'Поиск...'}
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        />
        <MySelect
            value={selectSort}
            onChange={sortPost}
            defaultValue='Сортировка'
            option={[
              {value: 'title', name: 'По Названию'},
              {value: 'body', name: 'По Описанию'}
            ]}
        />
      </div>
      {posts.length !==0
      ? <PostList remove={removePost} posts={sortedPost} title={'Список постов'}/>
      :
        <h1 style={{textAlign: 'center'}}>
        Посты не найдены!
          </h1>
      }
      
    </div>
  
  );
}

export default App;
