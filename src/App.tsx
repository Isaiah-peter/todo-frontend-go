import React from 'react';
import { TodoList } from './component/TodoList';
import { Header } from './component/TopHeader';




function App() {
  return (
    <div >
     <Header />
     <TodoList todos={[
       {title:"Do Dishes",isCompleted:false},
       {title:"Clean the house", discription:"This include the sitting room" ,isCompleted:false},
       {title:"Read",isCompleted:false}
       ]} />
    </div>
  );
}

export default App;
