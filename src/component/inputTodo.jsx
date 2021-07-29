import { useState, useEffect } from 'react'
import axios from 'axios'



const InputTodo = ({getTodos}) => {
    const [titles, setTitles] = useState('')
    const [discriptions, setDiscriptions] = useState('')



    const handleCreate = async (e) => {
        e.preventDefault()
        if (titles !== '' && discriptions !== '') {
            document.getElementById("input").style.visibility = 'hidden'
        }

        const data = {
            title: titles,
            discription: discriptions,
            iscomplete: false
        }

        const res = await axios.post("http://Localhost:9000/todo/",{
            method: 'POST',
            body: JSON.stringify(data)
        })

        console.log(JSON.stringify(data))

        console.log(res)
        getTodos()

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
