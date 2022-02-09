import axios from 'axios'
import {useEffect, useState} from 'react'


function Todos(){

    const[data, setData] = useState([])
    const[todos, setTodo] = useState([])
    const[page, setPage] = useState(1)


    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/todos').then(res=>{
            setData(res.data)
            setTodo(res.data.filter((item, index)=>index>=0 && index<10))
        })
    }, [])

   
    function onPrev(){
        setPage(prev=>prev-1)
        setTodo(data.filter((item, index)=>index>=(page-2)*10 && index<(page-2)*10+10))
    }

    function onNext(){
        setPage(prev=>prev+1)
        setTodo(data.filter((item, index)=>index>=(page)*10 && index<(page)*10+10))
    }

    return(
        <div>
            <h1>Todos</h1>
            <div className='mx-4'>{todos.map((item, index)=>
                <p key={item.id}><input className='mx-4' defaultChecked={item.completed} type={'checkbox'}/>{item.id}) {item.title}</p>)}
            </div>
            <div className='pagination'>
                <button onClick={onPrev} disabled={page==1 ? true : false} className='mx-3 btn btn-dark'>Prev</button>
                <strong>{page}</strong>
                <button onClick={onNext} disabled={page==20 ? true : false} className='mx-3 btn btn-dark'>Next</button>
            </div>
        </div>
    )
}


export default Todos