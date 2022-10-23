import React, {useState} from "react";
import Header from "./components/Header/Header";
import ClassCounter from './components/ClassCounter'
import '../src/components/style/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript1', body: 'Discription' },
    {id: 2, title: 'Javascript2', body: 'Discription' },
    {id: 3, title: 'Javascript3', body: 'Discription' }
  ])
  
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  
  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  }
  
  
  
  
  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder='Название поста'/>
        <MyInput
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text"
          placeholder='Описание поста'/>
        <MyButton onClick={addNewPost}>Создать Пост</MyButton>
      </form>
      <PostList posts={posts} title={'Список постов 1 '}/>
    </div>
  
  );
}

export default App;
