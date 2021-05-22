import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList(props){
    console.log(props.items)
    return(
        <div>
            <ul className='todo-list'>
                {props.items.map((item) => (
                    <TodoItem
                    key={item.id}
                    date={item.date}
                    title={item.title}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;