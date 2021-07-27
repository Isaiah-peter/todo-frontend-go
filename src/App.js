
import { TodoList } from './component/TodoList'
import { Header } from './component/TopHeader'
import InputTodo from './component/inputTodo';


import './App.css';

function App() {
  
  return (
    <div className='relative' >
       <button onClick={()=>document.getElementById("input").style.visibility='visible'} className='page__header--add-todo'>+</button>
      <Header />
      <TodoList todos={[
        { title: "Do Dishes", discription: '', isCompleted: false },
        { title: "Clean the house", discription: "This include the sitting room", isCompleted: false },
        { title: "Read", discription: "", isCompleted: false },
        { title: "what", discription: "", isCompleted: false }
      ]} />
      <InputTodo />
    </div>
  );
}

export default App;
