import {TodoItem} from './todoItem'

export const TodoList = ({ getTodos, title, discription, isCompleted, id }) => {
  return (
    <ul className='todo-list'>
     <li >
            <TodoItem
              title={title}
              discription={discription}
              isCompleted={isCompleted}
              id={id}
              getTodo={getTodos}
            /></li>
    </ul>
  )
}


