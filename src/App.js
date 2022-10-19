import React, {useState} from "react";
import Header from "./components/Header/Header";
import ClassCounter from './components/ClassCounter'
import '../src/components/style/App.css'
import PostItem from "./components/postItem";

function App() {
  const [Value, setValue] = useState('text in input')
  
  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'Javascript', body: 'Discription' }}/>
      <PostItem post={{id: 2, title: 'Javascript', body: 'Discription' }}/>
      <PostItem post={{id: 3, title: 'Javascript', body: 'Discription' }}/>
 
      
    </div>
  
  );
}

export default App;
