import { useState, useEffect} from 'react'
import { TodoList } from './component/TodoList'
import { Header } from './component/TopHeader'
import InputTodo from './component/inputTodo';
import axios from 'axios'



import './App.css';

function App() {
  const [result, setResult] = useState([])

  useEffect(()=>{
    getTodos()
  },[])

  const getTodos = async () => {
    const { data } = await axios.get("http://Localhost:9000/todo/")
    setResult(data)
    console.log(result)
  }

  const renderTodo = result.map((res)=>{
    return (
      <TodoList key={Math.random()}  title={res.title} discription= {res.discription} isCompleted = {res.iscomplete} />
    )
  })
  
  return (
    <div  >
       <button onClick={()=>document.getElementById("input").style.visibility='visible'} className='page__header--add-todo'>+</button>
      <Header />
      {renderTodo}
      <InputTodo />
    </div>
  );
}

export default App;
