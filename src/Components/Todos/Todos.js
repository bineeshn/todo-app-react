import TodoList from "./TodoList";
import './Todos.css'

function Todos(props){
    // props.items.sort(function(a,b){
    //     return new Date(a.date) - new Date(b.date);
    // });
    const changeStatus = (id,status)=> props.changeStatus(id,status);
    const deleteItem = (id)=> props.deleteItem(id);
    return(
        <div className='todos'>
            <TodoList 
                items={props.items}
                changeStatus={changeStatus}
                deleteItem={deleteItem}
            />
        </div>
    )
}

export default Todos;