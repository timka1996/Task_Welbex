import {Route, Switch, Link, Routes} from 'react-router-dom'
import Todos from './Component/Todos'
import Main from './Component/Main'


function App(){
    return(
        <div>
            <h1 className='my-4'>Тестовое задание Welbex</h1>
            <nav class="nav">
                <Link to={'/main'}><button className='btn btn-dark'>Main</button></Link>
                <Link to={'/todos'}><button className='mx-2 btn btn-dark'>Todos</button></Link>
            </nav>

             
           
            
             <br/>
             <hr/>
             <br/>

            <Routes>
                <Route exact path={'/main'} element={<Main/>}/>
                <Route path={'/todos'} element={<Todos/>}/>
            </Routes>
        </div>
    )
}


export default App