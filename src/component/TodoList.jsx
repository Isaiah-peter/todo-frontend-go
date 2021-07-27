import {TodoItem} from './todoItem'

export const TodoList = ({ todos }) => {
  return (
    <ul className='todo-list'>
      {
        todos.map((todo, i) => {
          return <li key={i}>
            <TodoItem
              title={todo.title}
              discription={todo.discription}
              isCompleted={todo.isCompleted}
            /></li>
        })
      }
    </ul>
  )
}


