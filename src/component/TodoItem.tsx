import { Todo } from "../entities/Todo"


export const TodoItem: React.FC<Todo> = ({ title, discription, isCompleted }) => {
  return (
    <article className='todo-item'>
      <section className='todo-item-text'>
        <h3>{title}</h3>
        <p>{discription}</p>
      </section>
      <input className='todo-item-checkbox' type='checkbox' defaultChecked={isCompleted} />
    </article>
  )
}


