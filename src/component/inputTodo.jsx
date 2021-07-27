import { useState, useEffect} from 'react'



const InputTodo = () => {
    const [titles, setTitles] =  useState('')
    const [discriptions, setDiscriptions] = useState('')


    const handleCreate = (e) =>{
        e.preventDefault()
        if(titles !== '' && discriptions !== '') {
            document.getElementById("input").style.visibility='hidden'
        }
        setDiscriptions('')
        setTitles('')
    }
    return (
        <form className='bottom' id='input'>
        <input type="text" className='input-text' value={titles} placeholder='title of todo' onChange={(e) => { setTitles(e.target.value) }} />
        <input type="text" className='input-text' value={discriptions} placeholder='discription' onChange={(e) => { setDiscriptions(e.target.value) }} />

        <button onClick={handleCreate} className='todo-submit-btn'>create</button>
      </form>
    )
}

export default InputTodo
