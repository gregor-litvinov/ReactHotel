import React, {useState} from "react";
import Header from "./components/Header/Header";
import ClassCounter from './components/ClassCounter'
import '../src/components/style/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript1', body: 'Discription' },
    {id: 2, title: 'Javascript2', body: 'Discription' },
    {id: 3, title: 'Javascript3', body: 'Discription' }
  ])
  
  return (
    <div className="App">
      <form>
        <input type="text" placeholder='Название поста'/>
        <input type="text" placeholder='Описание поста'/>
        <MyButton>Создать Пост</MyButton>
      </form>
      <PostList posts={posts} title={'Список постов 1 '}/>
    </div>
  
  );
}

export default App;
