import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList(props){
    const changeStatus = (id,status)=> props.changeStatus(id,status);
    const deleteItem = (id)=> props.deleteItem(id);
    return(
        <div>
            {props.items.length === 0 && <h3 className='todo-list__noItem'>No New Items</h3>}
            {props.items.length !== 0 && <ul className='todo-list'>
                {props.items.map((item) => (
                    <TodoItem
                    key={item.id}
                    id={item.id}
                    status={item.status}
                    date={item.date}
                    title={item.task}
                    changeStatus={changeStatus}
                    deleteItem={deleteItem}
                    />
                ))}
            </ul>}
        </div>
    );
};

export default TodoList;