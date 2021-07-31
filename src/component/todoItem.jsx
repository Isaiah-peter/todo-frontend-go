import  {GoTrashcan} from 'react-icons/all'
import axios from 'axios'


export const TodoItem = ({getTodo, title, discription, isCompleted, id }) => {

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://Localhost:9000/todo/${id}`,{
      method: 'DELETE',
      headers : {
        "Content-Type" : "pkglication/json"
      },
    })

    getTodo()
    console.log(res)
  }


  return (
    <article className='todo-item'>
      <section className={isCompleted === true ? 'todo-item-text complete' : 'todo-item-text'}>
        <h3>{title}</h3>
        <p>{discription}</p>
      </section>
      <section>
        <GoTrashcan className='trash' onClick={()=>handleDelete(id)} />
        <input id={id}  className='todo-item-checkbox' type='checkbox' value={isCompleted}  />
        <label htmlFor={id} ></label>
      </section>
    </article>
  )
}