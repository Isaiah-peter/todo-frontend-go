import {TodoItem} from './todoItem'

export const TodoList = ({ title, discription, isCompleted }) => {
  return (
    <ul className='todo-list'>
     <li >
            <TodoItem
              title={title}
              discription={discription}
              isCompleted={isCompleted}
            /></li>
    </ul>
  )
}


