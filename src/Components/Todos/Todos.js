import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import './Todos.css'

function Todos(props){
    return(
        <div className='todos'>
            <TodoForm/>
            <TodoList items={props.items}/>
        </div>
    )
}

export default Todos;