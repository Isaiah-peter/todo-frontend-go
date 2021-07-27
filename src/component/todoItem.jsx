


export const TodoItem = ({ title, discription, isCompleted }) => {
  return (
    <article className='todo-item'>
      <section  className={isCompleted === true ? 'todo-item-text complete' : 'todo-item-text'}>
        <h3>{title}</h3>
        <p>{discription}</p>
      </section>
      <input className='todo-item-checkbox' type='checkbox' value={isCompleted} />
    </article>
  )
}