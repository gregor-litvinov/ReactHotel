import React, {useState} from "react";
import Header from "./components/Header/Header";
import ClassCounter from './components/ClassCounter'

function App() {
  const [Value, setValue] = useState('text in input')
  
  return (
    <div className="App">
    <ClassCounter/>
    </div>
  );
}

export default App;
