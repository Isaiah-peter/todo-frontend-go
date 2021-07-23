
import { Todo } from "../entities/Todo"
import { TodoItem } from "./TodoItem"

type Props = {
  todos: Todo[]
}

export const TodoList: React.FC<Props> = ({ todos }) => {
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


